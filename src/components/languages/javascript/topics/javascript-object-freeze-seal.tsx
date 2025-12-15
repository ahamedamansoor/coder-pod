'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Lock, ShieldCheck } from 'lucide-react';

export default function JavaScriptObjectImmutability() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Lock}
        category="Advanced Object Patterns"
        title="Object Immutability"
        description="Lock down objects - freeze, seal, and prevent changes!"
        colorTheme="indigo"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50/80 via-blue-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 text-white shadow-xl">
              <Lock className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                What is Object Immutability?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Imagine you have a <strong className="text-indigo-700 dark:text-indigo-400">vault with different security levels</strong>! 
                JavaScript gives you three methods to protect objects from changes: 
                <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded mx-1">freeze()</code> (complete lockdown), 
                <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded mx-1">seal()</code> (can't add/remove, but can modify), and 
                <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded mx-1">preventExtensions()</code> (can't add new properties).
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Why Use Immutability?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Perfect for <strong>configuration objects</strong>, <strong>constants</strong>, or when you want to ensure 
              data doesn't accidentally change. Helps prevent bugs and makes code more predictable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            Three Levels of Protection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/10 border-2 border-red-200 dark:border-red-800">
              <div className="text-4xl mb-3">❄️</div>
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">freeze()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Complete lockdown!</strong>
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <li>❌ Can't add properties</li>
                <li>❌ Can't remove properties</li>
                <li>❌ Can't modify values</li>
                <li>❌ Can't change descriptors</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 border-2 border-amber-200 dark:border-amber-800">
              <div className="text-4xl mb-3">🔐</div>
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">seal()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Partial lock!</strong>
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <li>❌ Can't add properties</li>
                <li>❌ Can't remove properties</li>
                <li>✅ <strong>Can modify values</strong></li>
                <li>❌ Can't change descriptors</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-800">
              <div className="text-4xl mb-3">🚪</div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">preventExtensions()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Block new entries!</strong>
              </p>
              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                <li>❌ Can't add properties</li>
                <li>✅ <strong>Can remove properties</strong></li>
                <li>✅ <strong>Can modify values</strong></li>
                <li>✅ <strong>Can change descriptors</strong></li>
              </ul>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-lg text-purple-900 dark:text-purple-100 mb-4">Check Status Methods</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                <code className="text-sm font-bold text-purple-900 dark:text-purple-100">Object.isFrozen(obj)</code>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">Check if frozen</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                <code className="text-sm font-bold text-purple-900 dark:text-purple-100">Object.isSealed(obj)</code>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">Check if sealed</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-purple-200 dark:border-purple-700">
                <code className="text-sm font-bold text-purple-900 dark:text-purple-100">Object.isExtensible(obj)</code>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-2">Check if extensible</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Understanding freeze(), seal(), preventExtensions()"
        description="See the differences between the three methods"
        language="javascript"
        colorTheme="indigo"
        code={`// 1. FREEZE - Complete lockdown
const frozenUser = Object.freeze({
  name: 'Alice',
  age: 25
});

frozenUser.name = 'Bob';           // ❌ Fails silently
frozenUser.email = 'alice@ex.com'; // ❌ Can't add
delete frozenUser.age;             // ❌ Can't delete

console.log(frozenUser);  // { name: 'Alice', age: 25 } (unchanged!)
console.log(Object.isFrozen(frozenUser));  // true


// 2. SEAL - Can modify, but not add/remove
const sealedUser = Object.seal({
  name: 'Charlie',
  age: 30
});

sealedUser.name = 'David';         // ✅ Works! Can modify
sealedUser.email = 'c@ex.com';     // ❌ Can't add
delete sealedUser.age;             // ❌ Can't delete

console.log(sealedUser);  // { name: 'David', age: 30 }
console.log(Object.isSealed(sealedUser));  // true


// 3. PREVENT EXTENSIONS - Only blocks adding
const limitedUser = Object.preventExtensions({
  name: 'Eve',
  age: 28
});

limitedUser.name = 'Frank';        // ✅ Can modify
limitedUser.email = 'e@ex.com';    // ❌ Can't add
delete limitedUser.age;            // ✅ Can delete!

console.log(limitedUser);  // { name: 'Frank' }
console.log(Object.isExtensible(limitedUser));  // false`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Case - Configuration Object"
        description="Protect app configuration from accidental changes"
        language="javascript"
        colorTheme="blue"
        code={`// Application configuration
const appConfig = {
  API_URL: 'https://api.example.com',
  API_KEY: 'secret-key-123',
  MAX_RETRIES: 3,
  TIMEOUT: 5000,
  features: {
    darkMode: true,
    notifications: true
  }
};

// Freeze to prevent any modifications
Object.freeze(appConfig);

// ⚠️ Note: freeze is shallow!
// Top-level is frozen, but nested objects are not
appConfig.API_URL = 'https://hacker.com';  // ❌ Fails
appConfig.NEW_SETTING = 'test';            // ❌ Fails

console.log(appConfig.API_URL);  // Still: 'https://api.example.com'

// But nested objects can still be modified! 😱
appConfig.features.darkMode = false;  // ✅ This works!

console.log(appConfig.features.darkMode);  // false


// Solution: Deep freeze function
function deepFreeze(obj) {
  // Freeze the object itself
  Object.freeze(obj);
  
  // Freeze all nested objects
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  
  return obj;
}

// Create deeply frozen config
const secureConfig = deepFreeze({
  API_URL: 'https://api.example.com',
  features: {
    darkMode: true,
    notifications: true
  }
});

// Now everything is protected!
secureConfig.features.darkMode = false;  // ❌ Fails
console.log(secureConfig.features.darkMode);  // Still: true`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            Comparison Chart
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30">
                  <th className="p-3 text-left border border-indigo-200 dark:border-indigo-800 text-gray-900 dark:text-gray-100">Action</th>
                  <th className="p-3 text-center border border-indigo-200 dark:border-indigo-800 text-red-700 dark:text-red-300">freeze()</th>
                  <th className="p-3 text-center border border-indigo-200 dark:border-indigo-800 text-amber-700 dark:text-amber-300">seal()</th>
                  <th className="p-3 text-center border border-indigo-200 dark:border-indigo-800 text-blue-700 dark:text-blue-300">preventExtensions()</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Add properties</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Remove properties</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">✅</td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Modify values</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">✅</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">✅</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Change descriptors</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">❌</td>
                  <td className="p-3 text-center border border-gray-200 dark:border-gray-700">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Important Gotchas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">1. Shallow Only!</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              All three methods are <strong>shallow</strong> - they only protect the immediate properties. 
              Nested objects can still be modified unless you deep freeze them!
            </p>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">2. No Undo!</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Once frozen or sealed, <strong>you can't undo it</strong>! The object is permanently locked. 
              Be absolutely sure before applying these methods.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">3. Silent Failures!</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              In non-strict mode, violations fail <strong>silently</strong> (no error). 
              Use <code className="bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">'use strict'</code> to get proper errors!
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 dark:from-indigo-950/20 dark:via-blue-950/10 dark:to-purple-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❄️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">freeze()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Complete immutability - nothing can be changed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">seal()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Can modify values, but can't add/remove properties
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚪</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">preventExtensions()</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Only blocks adding new properties
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Shallow Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nested objects need to be frozen separately
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
