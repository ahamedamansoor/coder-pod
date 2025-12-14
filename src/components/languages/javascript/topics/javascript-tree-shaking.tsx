'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  TreeDeciduous,
  CheckCircle,
  XCircle,
  Scissors,
  Lightbulb,
  TrendingDown,
} from 'lucide-react';

export default function JavaScriptTreeShaking() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={TreeDeciduous}
        category="JavaScript Performance"
        title="Tree Shaking"
        description="Eliminate dead code from your bundles"
        colorTheme="purple"
      />

      {/* What is Tree Shaking */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/20 dark:from-emerald-950/10 dark:via-green-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
              <TreeDeciduous className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Tree Shaking?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Tree shaking is a form of <strong className="text-emerald-700 dark:text-emerald-400">dead code elimination</strong>. Modern bundlers analyze your code and <strong className="text-green-700 dark:text-green-400">remove unused exports</strong>, resulting in smaller bundle sizes. Only the code you actually use makes it to production.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Scissors className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Remove Unused</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Automatically eliminates dead code
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Smaller Bundles</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Reduce bundle size by 20-50%
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Zero Config</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Works automatically in production builds
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Tree Shaking Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <TreeDeciduous className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How Tree Shaking Works</CardTitle>
              <CardDescription>The process behind dead code elimination</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">1. Static Analysis</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Bundler analyzes import/export statements to build a dependency graph
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">2. Mark Unused Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Identifies exports that are never imported anywhere in your codebase
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">3. Eliminate Dead Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Removes marked code during minification step
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">4. Final Bundle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Output contains only the code that's actually used
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Before & After */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Tree Shaking in Action</CardTitle>
          <CardDescription>How unused code is eliminated</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// utils.js - Library with multiple functions
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

// main.js - Only imports what it needs
import { add, multiply } from './utils.js';

console.log(add(5, 3));      // 8
console.log(multiply(4, 2)); // 8

// ✅ RESULT: Tree shaking removes subtract() and divide()
// Final bundle contains ONLY add() and multiply()
// subtract() and divide() are never imported = dead code eliminated!

// Before tree shaking: ~200 bytes
// After tree shaking: ~100 bytes (50% reduction)`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Requirements for Tree Shaking */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Requirements for Effective Tree Shaking</CardTitle>
              <CardDescription>What your code needs to support tree shaking</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Use ES6 Modules</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                ES6 import/export syntax is required
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                import {'{'} func {'}'} from './module'; ✅
              </div>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Avoid CommonJS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                CommonJS prevents tree shaking
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                const func = require('./module'); ❌
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Named Exports</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Allows importing only what you need
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                export const add = ... ✅
              </div>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">⚠️ Default Exports</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Less effective for tree shaking
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                export default obj; ⚠️
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Write Tree-Shakeable Code */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Writing Tree-Shakeable Code</CardTitle>
          <CardDescription>Best practices for maximum optimization</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ❌ BAD: Default export with all functions
// utils.js
const utils = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b
};

export default utils;

// Usage - imports EVERYTHING even if you only need one
import utils from './utils';
utils.add(2, 3); // All other functions also bundled!


// ✅ GOOD: Named exports
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

// Usage - imports ONLY what you use
import { add } from './utils';
add(2, 3); // Only add() is bundled!


// ❌ BAD: Side effects prevent tree shaking
// module.js
console.log('Module loaded!'); // Side effect
export function myFunction() { ... }

// ✅ GOOD: Pure modules without side effects
// module.js
export function myFunction() { ... }
// No side effects = better tree shaking


// ❌ BAD: Using wildcard imports
import * as utils from './utils';
utils.add(2, 3); // Imports everything

// ✅ GOOD: Import only what you need
import { add } from './utils';
add(2, 3); // Imports only add`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Package.json sideEffects */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Configure Tree Shaking</CardTitle>
          <CardDescription>Package.json and bundler settings</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// package.json - Tell bundler your code is pure
{
  "name": "my-library",
  "version": "1.0.0",
  "sideEffects": false  // ✅ No side effects = aggressive tree shaking
}

// If you have some files with side effects (like CSS)
{
  "sideEffects": [
    "*.css",
    "*.scss",
    "./src/polyfills.js"
  ]
}

// Webpack configuration
module.exports = {
  mode: 'production', // Tree shaking in production mode
  optimization: {
    usedExports: true,  // Mark unused exports
    minimize: true,     // Remove them during minification
    sideEffects: true   // Respect sideEffects field
  }
};

// Rollup configuration
export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es'  // ES modules for tree shaking
  },
  treeshake: {
    moduleSideEffects: false,  // Assume no side effects
    propertyReadSideEffects: false,
    unknownGlobalSideEffects: false
  }
};

// Vite (automatic tree shaking)
// Works out of the box, just use ES modules!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Real-World Libraries */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Tree Shaking with Popular Libraries</CardTitle>
          <CardDescription>Importing from tree-shakeable libraries</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Lodash - Tree-shakeable version
// ❌ BAD: Imports entire lodash (70KB+)
import _ from 'lodash';
_.debounce(fn, 300);

// ✅ GOOD: Use lodash-es (ES module version)
import { debounce } from 'lodash-es';
debounce(fn, 300); // Only debounce included (~2KB)

// Or import specific functions
import debounce from 'lodash-es/debounce';


// Material-UI / MUI
// ❌ BAD: Imports entire library
import { Button, TextField } from '@mui/material';

// ✅ BETTER: Direct imports (if not using babel plugin)
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


// React Icons
// ❌ BAD: Imports all icons
import * as Icons from 'react-icons/fa';

// ✅ GOOD: Import specific icons
import { FaUser, FaHome } from 'react-icons/fa';


// Date-fns (tree-shakeable by default)
// ✅ GOOD: Named imports work perfectly
import { format, addDays, isAfter } from 'date-fns';


// Moment.js vs Day.js
// ❌ BAD: Moment.js is NOT tree-shakeable (entire library bundled)
import moment from 'moment';

// ✅ GOOD: Day.js is tree-shakeable
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Tree Shaking Best Practices</CardTitle>
              <CardDescription>Maximize bundle size reduction</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use ES6 import/export syntax</li>
                <li>• Prefer named exports over default</li>
                <li>• Import only what you need</li>
                <li>• Set sideEffects: false in package.json</li>
                <li>• Avoid wildcard imports (*)</li>
                <li>• Use tree-shakeable library versions</li>
                <li>• Analyze bundle with tools</li>
                <li>• Keep modules pure (no side effects)</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use CommonJS (require/module.exports)</li>
                <li>• Import entire libraries</li>
                <li>• Have side effects in modules</li>
                <li>• Use default exports for utilities</li>
                <li>• Import from barrel files excessively</li>
                <li>• Use non-tree-shakeable libraries</li>
                <li>• Forget to enable production mode</li>
                <li>• Ignore bundle analyzer warnings</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 dark:from-emerald-950/20 dark:via-green-950/10 dark:to-teal-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌳</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES6 Modules Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use import/export syntax<br/>
                    CommonJS prevents tree shaking
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Named Exports</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prefer named over default<br/>
                    Better tree shaking support
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✂️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Import Specific</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Import only what you need<br/>
                    Avoid wildcard imports
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Configure sideEffects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Set to false in package.json<br/>
                    Enables aggressive optimization
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-950/30 dark:to-green-950/30 border-emerald-300 dark:border-emerald-700">
            <TreeDeciduous className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Automatic Optimization</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Tree shaking happens <strong>automatically in production builds</strong> with modern bundlers. Just use ES6 modules and let the tooling do the work!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
