'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Box,
  CheckCircle,
  Layers,
  Zap,
  Lightbulb,
  FileCode,
} from 'lucide-react';

export default function JavaScriptWebpack() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Box}
        category="JavaScript Tooling"
        title="Webpack"
        description="Module bundler for JavaScript applications"
        colorTheme="blue"
      />

      {/* What is Webpack */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-indigo-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Box className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Webpack?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Webpack is a <strong className="text-blue-700 dark:text-blue-400">module bundler</strong> that takes all your JavaScript files, CSS, images, and other assets, and bundles them into optimized files for the browser. It transforms, bundles, and packages your code for production.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Bundle Files</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combines multiple files into one
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Transform Code</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Convert modern JS to browser-compatible
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/30 dark:to-orange-900/30 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-center gap-2 mb-2">
                <FileCode className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Optimize Assets</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Minify, compress, and optimize
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Concepts */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Core Concepts</CardTitle>
              <CardDescription>Four key concepts in Webpack</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Entry</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Starting point where Webpack begins bundling
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                entry: './src/index.js'
              </div>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Output</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Where to save the bundled files
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                output: './dist/bundle.js'
              </div>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Loaders</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Transform non-JS files (CSS, images, TS)
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                use: 'babel-loader'
              </div>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Plugins</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Perform advanced tasks (minification, optimization)
              </p>
              <div className="p-3 rounded bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-mono text-xs">
                new HtmlWebpackPlugin()
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Basic Webpack Configuration</CardTitle>
          <CardDescription>Simple webpack.config.js setup</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// webpack.config.js
const path = require('path');

module.exports = {
  // Entry point
  entry: './src/index.js',
  
  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true  // Clean dist folder before each build
  },
  
  // Mode: development or production
  mode: 'development',
  
  // Dev server
  devServer: {
    static: './dist',
    port: 3000,
    hot: true  // Hot module replacement
  }
};

// Run with:
// npx webpack              (build)
// npx webpack serve        (dev server)`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* With Loaders */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Using Loaders</CardTitle>
          <CardDescription>Processing CSS, images, and Babel</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [
      // JavaScript with Babel
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      
      // CSS files
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      },
      
      // Images
      {
        test: /\\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      
      // Fonts
      {
        test: /\\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  }
};

// Install loaders:
// npm install --save-dev babel-loader @babel/core @babel/preset-env
// npm install --save-dev style-loader css-loader`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* With Plugins */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Using Plugins</CardTitle>
          <CardDescription>HTML generation and optimization</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',  // Cache busting
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  
  plugins: [
    // Generate HTML file
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'My App',
      minify: true
    }),
    
    // Extract CSS to separate file
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
  
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          MiniCssExtractPlugin.loader,  // Instead of style-loader
          'css-loader'
        ]
      }
    ]
  }
};

// Install:
// npm install --save-dev html-webpack-plugin
// npm install --save-dev mini-css-extract-plugin`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Production Config */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Production Configuration</CardTitle>
          <CardDescription>Optimized build for deployment</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  
  entry: './src/index.js',
  
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    
    // Code splitting
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\\\/]node_modules[\\\\/]/,
          name: 'vendors',
          priority: 10
        }
      }
    },
    
    // Runtime chunk
    runtimeChunk: 'single'
  },
  
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
};`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Common Use Cases */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Common Use Cases</CardTitle>
              <CardDescription>What Webpack helps you do</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">✅ Bundle Modules</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Combine hundreds of files into one or few bundles
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Transform Code</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                ES6+ to ES5, TypeScript to JavaScript, SCSS to CSS
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">✅ Code Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Split code into chunks loaded on demand
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">✅ Hot Reload</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                See changes instantly without full page reload
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">✅ Asset Management</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Handle images, fonts, CSS with ease
              </p>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">✅ Optimization</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Minify, tree shake, compress for production
              </p>
            </div>
          </div>
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
              <CardTitle>Webpack Best Practices</CardTitle>
              <CardDescription>Tips for effective bundling</CardDescription>
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
                <li>• Use separate dev & prod configs</li>
                <li>• Enable source maps for debugging</li>
                <li>• Use contenthash for cache busting</li>
                <li>• Split vendor and app code</li>
                <li>• Enable tree shaking in production</li>
                <li>• Use compression plugins</li>
                <li>• Monitor bundle sizes</li>
                <li>• Use webpack-bundle-analyzer</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Bundle node_modules unnecessarily</li>
                <li>• Ignore bundle size warnings</li>
                <li>• Use same config for dev & prod</li>
                <li>• Forget to minify in production</li>
                <li>• Skip optimization settings</li>
                <li>• Include dev tools in production</li>
                <li>• Overcomplicate configuration</li>
                <li>• Ignore loader order</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Module Bundler</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Combines files for browser<br/>
                    Optimizes for production
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔧</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Loaders & Plugins</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Loaders transform files<br/>
                    Plugins optimize output
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚙️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Configuration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    webpack.config.js<br/>
                    Entry, output, rules, plugins
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Dev Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Hot module replacement<br/>
                    Fast development server
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <Box className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Industry Standard</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Webpack is the <strong>most popular</strong> JavaScript bundler. It powers React, Vue, Angular, and thousands of production apps!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
