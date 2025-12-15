'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Globe, Zap } from 'lucide-react';

export default function JavaScriptGlobalThis() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Globe}
        category="Modern JavaScript"
        title="globalThis"
        description="Universal global object across environments (ES2020)"
        colorTheme="cyan"
      />

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white shadow-lg">
              <Globe className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is globalThis? 🌍
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Imagine trying to access the "main office" in different buildings - each building calls it something different! 
                In JavaScript, <strong className="text-cyan-700 dark:text-cyan-400">every environment</strong> (browser, Node.js, workers) 
                had its <strong>own name</strong> for the global object. <code className="bg-cyan-100 dark:bg-cyan-900/30 px-2 py-1 rounded">globalThis</code> 
                is the <strong className="text-blue-700 dark:text-blue-400">universal name</strong> that works everywhere!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-700">
            <h4 className="text-xl font-bold text-cyan-900 dark:text-cyan-100 mb-4">The Problem Before globalThis 😰</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
                <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-2">🌐 Browser</h5>
                <code className="text-sm text-blue-700 dark:text-blue-300">window</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">The global object</p>
              </div>
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">🖥️ Node.js</h5>
                <code className="text-sm text-green-700 dark:text-green-300">global</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Different name!</p>
              </div>
              <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
                <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-2">⚙️ Web Worker</h5>
                <code className="text-sm text-purple-700 dark:text-purple-300">self</code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">Yet another name!</p>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200">
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                <strong className="text-red-900 dark:text-red-100">Problem:</strong> Writing universal code was a nightmare! 
                You needed complex workarounds to work across environments.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">The Old Way vs The New Way 📊</CardTitle>
          <CardDescription>See the difference globalThis makes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100 text-lg">❌ Before (Complex)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Ugly workaround to find global
const getGlobal = function() {
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw new Error('No global found!');
};

const globalObj = getGlobal();
globalObj.myVar = 'Hello';`}</code></pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100 text-lg">✅ After (Simple)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Works everywhere!
globalThis.myVar = 'Hello';

// Access it
console.log(globalThis.myVar);

// Works in:
// ✅ Browser
// ✅ Node.js
// ✅ Workers
// ✅ Any environment!`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">How globalThis Works - Detailed Explanation 🔍</CardTitle>
          <CardDescription>Understanding the concept deeply</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">1. What IS the Global Object? 🤔</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              The global object is the <strong>top-level scope</strong> in JavaScript. Variables and functions declared globally 
              become properties of this object. It's where built-in objects like <code>Array</code>, <code>console</code>, 
              and <code>setTimeout</code> live!
            </p>
            <div className="rounded-lg bg-white dark:bg-slate-900 p-3 border">
              <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// In browser console:
var x = 10;
console.log(window.x); // 10 (x is on global)

// With globalThis:
var y = 20;
console.log(globalThis.y); // 20 (same thing!)

// Built-ins are there too:
console.log(globalThis.Array === Array); // true
console.log(globalThis.console === console); // true`}</code></pre>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">2. Why Different Names? 🌐</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              Each JavaScript environment evolved independently with its own conventions:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">🌐</span>
                <span><strong>Browser:</strong> Used <code>window</code> because it represents the browser window</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">🖥️</span>
                <span><strong>Node.js:</strong> Used <code>global</code> because there's no window in server-side</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600">⚙️</span>
                <span><strong>Workers:</strong> Used <code>self</code> to avoid confusion with window</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">3. How globalThis Solves It ✨</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              <code className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">globalThis</code> is a 
              <strong> standard reference</strong> that:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>In browser: <code>globalThis === window</code></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>In Node.js: <code>globalThis === global</code></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span>In Workers: <code>globalThis === self</code></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                <span><strong>One name</strong> that points to the right global in each environment!</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Examples 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example 1: Creating Global Variables</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Add to global scope
globalThis.appConfig = {
  version: '1.0.0',
  apiUrl: 'https://api.example.com'
};

// Access from anywhere
console.log(globalThis.appConfig.version);

// Also works as:
console.log(appConfig.version); // same thing!`}</code></pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 2: Universal Library</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Create library that works everywhere
(function() {
  // Store in global namespace
  globalThis.MyLib = {
    version: '2.0.0',
    
    init() {
      console.log('MyLib initialized');
    },
    
    getData() {
      return globalThis.appData || [];
    }
  };
})();

// Use in browser, Node.js, workers - anywhere!
MyLib.init();
console.log(MyLib.version);`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Polyfill Pattern</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Add feature if it doesn't exist
if (!globalThis.fetch) {
  globalThis.fetch = function(url) {
    // Custom implementation for old environments
    return Promise.resolve({ data: 'mock' });
  };
}

// Check for features universally
function hasLocalStorage() {
  return typeof globalThis.localStorage !== 'undefined';
}

console.log(hasLocalStorage()); // true in browser`}</code></pre>
          </div>

          <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4 border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Example 4: Environment Detection</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`function detectEnvironment() {
  if (typeof globalThis.window !== 'undefined' && 
      typeof globalThis.document !== 'undefined') {
    return 'browser';
  }
  
  if (typeof globalThis.process !== 'undefined' && 
      globalThis.process.versions?.node) {
    return 'node';
  }
  
  if (typeof globalThis.WorkerGlobalScope !== 'undefined') {
    return 'worker';
  }
  
  return 'unknown';
}

console.log('Running in:', detectEnvironment());`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Key Benefits & Use Cases 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Benefits
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-cyan-600 mt-0.5" />
                  <span><strong>Universal:</strong> One name works everywhere</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span><strong>Simple:</strong> No more environment checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5" />
                  <span><strong>Standard:</strong> Part of ES2020 specification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span><strong>Future-proof:</strong> Works in new environments too</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Perfect For
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Universal JavaScript libraries</li>
                <li>• Cross-platform utilities</li>
                <li>• Polyfills and shims</li>
                <li>• Environment detection</li>
                <li>• Global configuration objects</li>
                <li>• Feature detection</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Notes ⚠️</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-1">Avoid Polluting Global Scope</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Just because you CAN add to globalThis doesn't mean you should! Use it sparingly to avoid conflicts.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Browser Support</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Supported in all modern browsers and Node.js 12+. For older environments, polyfills are available.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Same Object, Different Names</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Remember: <code>globalThis === window</code> (in browser) - they're the same object with different names!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-300 dark:border-cyan-700">
            <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Use <code>globalThis</code> when writing libraries or utilities that need to work across different JavaScript environments. 
              For regular app code, modules and imports are usually better than global variables!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-sky-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🌍</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">What is it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Universal reference to the global object in any environment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Why use it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Write code once that works in browser, Node.js, workers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📦</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Universal libraries, polyfills, environment detection
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">How to use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    globalThis.myVar = 'value' - works everywhere!
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
