'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  RefreshCw,
  CheckCircle,
  Code2,
  Package,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

export default function JavaScriptBabel() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="JavaScript Tooling"
        title="Babel"
        description="JavaScript compiler for backward compatibility"
        colorTheme="yellow"
      />

      {/* What is Babel */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white shadow-lg">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Babel?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Babel is a <strong className="text-yellow-700 dark:text-yellow-400">JavaScript compiler</strong> that transforms modern JavaScript (ES6+, JSX, TypeScript) into older JavaScript that works in all browsers. It lets you use the latest features without worrying about browser support.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Transform Code</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ES6+ → ES5 for older browsers
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Support JSX</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compile JSX to JavaScript
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Polyfills</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add missing browser features
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How Babel Works */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How Babel Works</CardTitle>
              <CardDescription>The transformation process</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="mb-3 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold">
                  1
                </div>
              </div>
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2 text-center">Parse</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Reads modern JavaScript code
              </p>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <div className="mb-3 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white font-bold">
                  2
                </div>
              </div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2 text-center">Transform</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Converts to compatible syntax
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="mb-3 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 text-white font-bold">
                  3
                </div>
              </div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2 text-center">Generate</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
                Outputs compatible code
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Transformation */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: ES6 to ES5 Transformation</CardTitle>
          <CardDescription>What Babel does</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Modern JavaScript (ES6+)
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Arrow functions
const greet = (name) => \`Hello, \${name}!\`;

// Destructuring
const { firstName, age } = user;

// Classes
class Person {
  constructor(name) {
    this.name = name;
  }
}

// Spread operator
const newArray = [...oldArray, 4, 5];

// Promises
const fetchData = async () => {
  const data = await fetch(url);
  return data.json();
};`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Compatible JavaScript (ES5)
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Regular functions
var greet = function(name) {
  return "Hello, " + name + "!";
};

// Variable assignment
var firstName = user.firstName;
var age = user.age;

// Function constructor
function Person(name) {
  this.name = name;
}

// concat
var newArray = oldArray.concat([4, 5]);

// Promise polyfill
var fetchData = function() {
  return fetch(url).then(function(data) {
    return data.json();
  });
};`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation & Setup */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Installing Babel</CardTitle>
          <CardDescription>Quick setup guide</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# Install Babel core and CLI
npm install --save-dev @babel/core @babel/cli

# Install preset for modern JavaScript
npm install --save-dev @babel/preset-env

# For React (JSX support)
npm install --save-dev @babel/preset-react

# For TypeScript
npm install --save-dev @babel/preset-typescript

# Compile a file
npx babel src/app.js --out-file dist/app.js

# Compile entire directory
npx babel src --out-dir dist

# Watch mode (auto-compile on changes)
npx babel src --out-dir dist --watch`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Babel Configuration</CardTitle>
          <CardDescription>babel.config.js or .babelrc</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 11']
        },
        useBuiltIns: 'usage',  // Auto-import polyfills
        corejs: 3
      }
    ],
    '@babel/preset-react'  // For JSX
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime'
  ]
};

// Or .babelrc (JSON format)
{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead"
    }],
    "@babel/preset-react"
  ],
  "plugins": []
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Presets & Plugins */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Presets vs Plugins</CardTitle>
              <CardDescription>Understanding Babel's building blocks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Presets</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Collections of plugins bundled together
              </p>
              <div className="space-y-2">
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">@babel/preset-env</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Modern JavaScript (ES6+)</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">@babel/preset-react</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">JSX and React features</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">@babel/preset-typescript</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">TypeScript support</p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Plugins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Individual transformations for specific features
              </p>
              <div className="space-y-2">
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">transform-arrow-functions</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Arrow → regular functions</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">proposal-class-properties</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Class property syntax</p>
                </div>
                <div className="p-3 rounded bg-slate-50 dark:bg-slate-900">
                  <code className="text-xs text-gray-800 dark:text-gray-200">transform-runtime</code>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Optimize helper code</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* With Webpack */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Using Babel with Webpack</CardTitle>
          <CardDescription>Integration with build tools</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Install babel-loader
npm install --save-dev babel-loader

// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\\.jsx?$/,  // .js and .jsx files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            cacheDirectory: true  // Speed up compilation
          }
        }
      }
    ]
  }
};

// Now Webpack will use Babel automatically!`}</code>
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
              <CardTitle>Babel Best Practices</CardTitle>
              <CardDescription>Use Babel effectively</CardDescription>
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
                <li>• Use @babel/preset-env for smart targeting</li>
                <li>• Specify target browsers in config</li>
                <li>• Enable caching for faster builds</li>
                <li>• Use useBuiltIns: 'usage' for polyfills</li>
                <li>• Exclude node_modules from compilation</li>
                <li>• Keep Babel updated</li>
                <li>• Test compiled output</li>
                <li>• Use source maps for debugging</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Include unnecessary plugins</li>
                <li>• Compile node_modules unnecessarily</li>
                <li>• Use outdated presets</li>
                <li>• Ignore browser targets</li>
                <li>• Forget to add polyfills</li>
                <li>• Over-transpile (target too old browsers)</li>
                <li>• Skip testing in target browsers</li>
                <li>• Mix Babel versions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">JavaScript Compiler</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Transforms modern code<br/>
                    Works in all browsers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Presets & Plugins</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Presets = plugin bundles<br/>
                    @babel/preset-env most common
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Smart Targeting</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Specify browser targets<br/>
                    Only transpile what's needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Tool Integration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works with Webpack, Vite<br/>
                    babel-loader for bundlers
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-yellow-100 to-amber-100 dark:from-yellow-950/30 dark:to-amber-950/30 border-yellow-300 dark:border-yellow-700">
            <RefreshCw className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-yellow-900 dark:text-yellow-100">Write Modern JavaScript</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              With Babel, you can <strong>use the latest JavaScript features today</strong> without worrying about browser compatibility. It handles the transformation for you!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
