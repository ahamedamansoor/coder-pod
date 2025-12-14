'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Package,
  CheckCircle,
  XCircle,
  ArrowLeftRight,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

export default function JavaScriptCommonJSvsESModules() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ArrowLeftRight}
        category="JavaScript Fundamentals"
        title="CommonJS vs ES Modules"
        description="Two ways to share code between files"
        colorTheme="green"
      />

      {/* What are Modules */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <Package className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Modules?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Modules are <strong className="text-green-700 dark:text-green-400">files that export code</strong> (functions, objects, variables) so other files can <strong className="text-emerald-700 dark:text-emerald-400">import and use them</strong>. Think of them as LEGO pieces - each piece does something specific, and you connect them together!
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Why Modules?</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Instead of writing all code in one huge file, you split it into smaller files (modules). Each module focuses on one thing. Makes code organized and reusable!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Side by Side Comparison */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <ArrowLeftRight className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>CommonJS vs ES Modules</CardTitle>
              <CardDescription>Two systems for organizing code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* CommonJS Column */}
            <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-4 border-b-2 border-orange-600">
                <div className="flex items-center gap-3 text-white">
                  <Package className="w-6 h-6" />
                  <h3 className="text-xl font-bold">CommonJS (CJS)</h3>
                </div>
                <p className="text-orange-100 text-sm mt-1">The old way (Node.js)</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📅 Created</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    2009 - for Node.js before ES6 existed
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🎯 Usage</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Node.js default (legacy code), npm packages
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📝 Syntax</h4>
                  <div className="p-3 rounded bg-orange-50 dark:bg-orange-950/30 font-mono text-xs">
                    <div className="text-orange-800 dark:text-orange-200">require() / module.exports</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">⚡ Loading</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Synchronous (blocking) - loads entire file at once
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">🌐 Browser</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ❌ Doesn't work natively (needs bundler)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">📦 File Extension</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    .js (default in Node.js without "type": "module")
                  </p>
                </div>
              </div>
            </div>

            {/* ES Modules Column */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4 border-b-2 border-green-600">
                <div className="flex items-center gap-3 text-white">
                  <TrendingUp className="w-6 h-6" />
                  <h3 className="text-xl font-bold">ES Modules (ESM)</h3>
                </div>
                <p className="text-green-100 text-sm mt-1">The modern way (standard)</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📅 Created</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    2015 - part of ES6 (ES2015) standard
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🎯 Usage</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Modern projects, browsers, new Node.js code
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📝 Syntax</h4>
                  <div className="p-3 rounded bg-green-50 dark:bg-green-950/30 font-mono text-xs">
                    <div className="text-green-800 dark:text-green-200">import / export</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">⚡ Loading</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Asynchronous - can load modules in parallel
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🌐 Browser</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    ✅ Works natively in modern browsers!
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">📦 File Extension</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    .mjs or .js (with "type": "module" in package.json)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CommonJS Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: CommonJS (require/module.exports)</CardTitle>
          <CardDescription>The Node.js way</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Exporting</h4>
              <pre className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
                <code>{`// math.js - export functions

// Method 1: Export one thing
module.exports = function add(a, b) {
  return a + b;
};

// Method 2: Export multiple things
module.exports = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

// Method 3: Export as you go
exports.add = function(a, b) {
  return a + b;
};
exports.subtract = function(a, b) {
  return a - b;
};`}</code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Importing</h4>
              <pre className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
                <code>{`// app.js - import and use

// Import entire module
const math = require('./math');
console.log(math.add(5, 3)); // 8

// Import with destructuring
const { add, subtract } = require('./math');
console.log(add(10, 2)); // 12
console.log(subtract(10, 2)); // 8

// Import built-in Node modules
const fs = require('fs');
const http = require('http');

// Import npm packages
const express = require('express');
const lodash = require('lodash');`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ES Modules Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: ES Modules (import/export)</CardTitle>
          <CardDescription>The modern standard way</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Exporting</h4>
              <pre className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
                <code>{`// math.js - export functions

// Named exports (can have multiple)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

// Or export all at once
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
export { multiply, divide };

// Default export (only one per file)
export default function calculator() {
  return {
    add, subtract, multiply, divide
  };
}`}</code>
              </pre>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Importing</h4>
              <pre className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
                <code>{`// app.js - import and use

// Import specific named exports
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8

// Import with alias
import { add as addition } from './math.js';
console.log(addition(5, 3)); // 8

// Import everything as namespace
import * as math from './math.js';
console.log(math.add(5, 3)); // 8
console.log(math.PI); // 3.14159

// Import default export
import calculator from './math.js';
const calc = calculator();

// Mix default and named
import calculator, { add, PI } from './math.js';

// Import for side effects only
import './setup.js'; // Runs the file`}</code>
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Using in Browser */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Using ES Modules in Browser</CardTitle>
          <CardDescription>Native browser support!</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>ES Modules Demo</title>
</head>
<body>
  <h1>ES Modules in Browser</h1>
  
  <!-- ✅ Notice type="module" -->
  <script type="module">
    // Can use import directly in browser!
    import { add, subtract } from './math.js';
    
    console.log(add(10, 5)); // 15
    console.log(subtract(10, 5)); // 5
  </script>
  
  <!-- Or import from external file -->
  <script type="module" src="./app.js"></script>
</body>
</html>

/* app.js */
import { add } from './math.js';

document.body.innerHTML = \`
  <h2>Result: \${add(5, 3)}</h2>
\`;

// ⚠️ Important notes:
// 1. Must include .js extension
// 2. Must be served via HTTP (not file://)
// 3. Modules run in strict mode automatically
// 4. Modules are deferred by default`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Node.js ES Modules */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Using ES Modules in Node.js</CardTitle>
          <CardDescription>How to enable ESM in Node</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Option 1: Add "type": "module" to package.json
{
  "name": "my-project",
  "version": "1.0.0",
  "type": "module",  // ← This enables ES modules
  "main": "index.js"
}

// Now all .js files use ES modules by default
// math.js
export function add(a, b) {
  return a + b;
}

// app.js
import { add } from './math.js'; // Note: .js required!
console.log(add(5, 3));


// Option 2: Use .mjs file extension
// math.mjs
export function add(a, b) {
  return a + b;
}

// app.mjs
import { add } from './math.mjs';
console.log(add(5, 3));


// Mix CommonJS and ES Modules
// CommonJS file: utils.cjs
module.exports = {
  helper: function() { }
};

// ES Module file: app.mjs
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const utils = require('./utils.cjs');`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Which to Use */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Which Should You Use?</CardTitle>
              <CardDescription>Quick decision guide</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use ES Modules When:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                  <span>Starting a NEW project</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                  <span>Building for modern browsers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                  <span>Using React, Vue, or modern frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                  <span>Need tree shaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                  <span>Want modern, standard syntax</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border-2 border-orange-200 dark:border-orange-800/30">
              <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use CommonJS When:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">✓</span>
                  <span>Working with LEGACY Node.js code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">✓</span>
                  <span>Using old npm packages that don't support ESM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">✓</span>
                  <span>Need synchronous loading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">✓</span>
                  <span>Can't modify existing codebase</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-0.5">✓</span>
                  <span>Simple Node.js scripts</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Recommendation for Beginners</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Start with ES Modules!</strong> They're the modern standard, work in browsers, and are the future of JavaScript. Only use CommonJS if you're maintaining old code.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Common Gotchas */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Mistakes</CardTitle>
              <CardDescription>Watch out for these!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Mixing Syntaxes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Don't mix require with export, or import with module.exports
              </p>
              <code className="text-xs text-red-700 dark:text-red-300">
                // ❌ BAD - mixed syntax<br/>
                import {'{'} add {'}'} from './math.js';<br/>
                module.exports = {'{}'};  // Wrong!
              </code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Forgetting File Extension</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                ES Modules need .js extension (CommonJS doesn't)
              </p>
              <code className="text-xs text-red-700 dark:text-red-300">
                // ❌ BAD<br/>
                import {'{'} add {'}'} from './math';  // Missing .js!<br/>
                // ✅ GOOD<br/>
                import {'{'} add {'}'} from './math.js';
              </code>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Using require in Browser</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                require doesn't work in browsers (needs bundler)
              </p>
              <code className="text-xs text-red-700 dark:text-red-300">
                // ❌ BAD in browser<br/>
                const lib = require('./library');  // Error!<br/>
                // ✅ GOOD<br/>
                import lib from './library.js';
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Systems</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CommonJS (old, Node.js)<br/>
                    ES Modules (new, standard)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🆕</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use ES Modules</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern standard for new code<br/>
                    import/export syntax
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Browser Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ES Modules work natively<br/>
                    CommonJS needs bundler
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Node.js Support</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Both work in Node.js<br/>
                    Add "type": "module" for ESM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <Package className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">The Future is ES Modules</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              ES Modules are the <strong>official JavaScript standard</strong>. They work everywhere (browsers, Node.js, Deno) and enable better optimization. Start using them today!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
