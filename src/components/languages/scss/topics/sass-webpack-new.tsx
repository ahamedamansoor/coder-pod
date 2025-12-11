'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Package, 
  CheckCircle2,
  Lightbulb,
  Info,
  Settings,
  Zap,
  FileCode,
  Terminal
} from 'lucide-react';

interface SassWebpackNewProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function SassWebpackNew({ onOpenWebPlayground }: SassWebpackNewProps) {
  
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Package}
        category="Sass/SCSS · Build Tools"
        title="Webpack Integration"
        description="Configure Webpack to compile SCSS with sass-loader, CSS extraction, and optimization."
        colorTheme="pink"
      />

      <Card className="bg-gradient-to-br from-pink-50/60 to-rose-50/60 dark:from-pink-950/10 dark:to-rose-950/10 border border-pink-200/50 dark:border-pink-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Package className="w-8 h-8 text-pink-600 dark:text-pink-400" />}
            title="Webpack Integration"
            description="sass-loader and webpack configuration"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <strong>Webpack</strong> is a powerful module bundler that can compile SCSS using <strong>sass-loader</strong>. It processes your SCSS files through a chain of loaders to produce optimized CSS output.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">sass-loader</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Compiles SCSS to CSS</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">css-loader</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Resolves @import and url()</p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">style-loader</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Injects CSS into DOM</p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
            <Info className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Loader Chain</AlertTitle>
            <AlertDescription className="text-blue-800 dark:text-blue-200">
              Webpack processes loaders <strong>right-to-left</strong>: sass-loader → css-loader → style-loader
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Terminal className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Installation"
            description="Install required packages"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install Dependencies"
            code={`# Install Webpack and loaders
npm install --save-dev webpack webpack-cli

# Install Sass and loaders
npm install --save-dev sass sass-loader css-loader style-loader

# Or with pnpm
pnpm add -D webpack webpack-cli sass sass-loader css-loader style-loader`}
            output={[
              '✅ Webpack installed',
              '✅ sass-loader installed',
              '✅ css-loader installed',
              '✅ style-loader installed'
            ]}
            language="scss"
            colorTheme="blue"
          />

          <div className="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
            <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Package Versions</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>sass</strong>: Dart Sass compiler</li>
              <li>• <strong>sass-loader</strong>: Webpack loader for Sass</li>
              <li>• <strong>css-loader</strong>: Resolves CSS imports</li>
              <li>• <strong>style-loader</strong>: Injects CSS into page</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Basic Configuration"
            description="webpack.config.js setup"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="webpack.config.js"
            code={`const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          'style-loader',  // 3. Inject CSS into DOM
          'css-loader',    // 2. Resolve CSS imports
          'sass-loader'    // 1. Compile SCSS to CSS
        ]
      }
    ]
  }
};`}
            output={[
              '✅ Basic Webpack config',
              '// SCSS files processed through loader chain',
              '// Output: CSS injected into <style> tags'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Import SCSS in JavaScript"
            code={`// src/index.js
import './styles/main.scss';

// Webpack will:
// 1. Compile SCSS to CSS (sass-loader)
// 2. Resolve imports (css-loader)
// 3. Inject into DOM (style-loader)

console.log('Styles loaded!');`}
            output={[
              '✅ SCSS imported and compiled',
              '✅ CSS injected into page',
              'Styles loaded!'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Advanced Configuration"
            description="Source maps, PostCSS, and optimization"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Production Configuration"
            code={`const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  
  // Enable source maps
  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          // Extract CSS to separate file (production)
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2  // Apply next 2 loaders to @import
            }
          },
          
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  'cssnano'
                ]
              }
            }
          },
          
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed'
              }
            }
          }
        ]
      }
    ]
  },
  
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css'
    })
  ]
};`}
            output={[
              '✅ Source maps enabled',
              '✅ PostCSS integration',
              '✅ CSS extracted to separate file',
              '✅ Production-ready config'
            ]}
            language="scss"
            colorTheme="green"
          />

          <Alert className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">MiniCssExtractPlugin</AlertTitle>
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              Use <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">MiniCssExtractPlugin</code> in production to extract CSS to separate files instead of injecting into JS bundle.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="sass-loader Options"
            description="Customize Sass compilation"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Custom Sass Options"
            code={`{
  loader: 'sass-loader',
  options: {
    // Sass compiler implementation
    implementation: require('sass'),
    
    // Sass options
    sassOptions: {
      outputStyle: 'compressed',
      includePaths: ['node_modules'],
      precision: 10
    },
    
    // Source maps
    sourceMap: true,
    
    // Additional data prepended to every file
    additionalData: \`
      @import "@/styles/variables";
      @import "@/styles/mixins";
    \`,
    
    // Webpack resolver
    webpackImporter: true
  }
}`}
            output={[
              '✅ Custom Sass options configured',
              '✅ Global imports added',
              '✅ Source maps enabled'
            ]}
            language="scss"
            colorTheme="orange"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">implementation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Specify Dart Sass or other compiler
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">sassOptions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pass options to Sass compiler (outputStyle, includePaths, etc.)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">additionalData</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prepend imports to every SCSS file (variables, mixins)
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">webpackImporter</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use Webpack resolver for @import (enables ~ alias)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 border border-indigo-200/50 dark:border-indigo-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
            title="PostCSS Integration"
            description="Autoprefixer and optimization"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install PostCSS"
            code={`# Install PostCSS and plugins
npm install --save-dev postcss postcss-loader autoprefixer cssnano`}
            output={[
              '✅ PostCSS installed',
              '✅ autoprefixer installed',
              '✅ cssnano installed'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="postcss.config.js"
            code={`module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', '> 1%']
    }),
    
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: true
      }]
    })
  ]
};`}
            output={[
              '✅ Autoprefixer adds vendor prefixes',
              '✅ cssnano optimizes CSS',
              '// Runs after sass-loader compiles SCSS'
            ]}
            language="scss"
            colorTheme="indigo"
          />

          <CodeSnippetWithOutput
            title="Loader Chain with PostCSS"
            code={`{
  test: /\\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',  // ← PostCSS runs here
    'sass-loader'
  ]
}

// Flow:
// SCSS → sass-loader → CSS → postcss-loader → 
// prefixed CSS → css-loader → style-loader → DOM`}
            output={[
              '✅ Complete processing pipeline',
              '// SCSS compiled and optimized'
            ]}
            language="scss"
            colorTheme="indigo"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-violet-50/60 to-purple-50/60 dark:from-violet-950/10 dark:to-purple-950/10 border border-violet-200/50 dark:border-violet-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<FileCode className="w-8 h-8 text-violet-600 dark:text-violet-400" />}
            title="Webpack Aliases"
            description="Simplify imports with aliases"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Configure Aliases"
            code={`const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              webpackImporter: true  // Enable ~ and aliases
            }
          }
        ]
      }
    ]
  }
};`}
            output={[
              '✅ Aliases configured',
              '// Can use @styles in SCSS imports'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Using Aliases in SCSS"
            code={`// Before (relative path)
@import '../../../styles/variables';
@import '../../../styles/mixins';

// After (with alias)
@import '@styles/variables';
@import '@styles/mixins';

// Or with ~ (node_modules)
@import '~bootstrap/scss/bootstrap';`}
            output={[
              '✅ Clean imports',
              '✅ No relative path hell',
              '✅ Works with node_modules'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-teal-50/60 to-cyan-50/60 dark:from-teal-950/10 dark:to-cyan-950/10 border border-teal-200/50 dark:border-teal-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-teal-600 dark:text-teal-400" />}
            title="Development Server"
            description="Webpack Dev Server with HMR"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="Install Dev Server"
            code={`# Install webpack-dev-server
npm install --save-dev webpack-dev-server`}
            output={[
              '✅ Dev server installed',
              '// Enables hot module replacement'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="Dev Server Configuration"
            code={`module.exports = {
  mode: 'development',
  
  devServer: {
    static: './dist',
    hot: true,           // Hot Module Replacement
    open: true,          // Auto open browser
    port: 3000,
    compress: true,
    historyApiFallback: true
  },
  
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          'style-loader',  // HMR works with style-loader
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};`}
            output={[
              '✅ Dev server configured',
              '✅ Hot Module Replacement enabled',
              '// CSS updates without page reload!'
            ]}
            language="scss"
            colorTheme="purple"
          />

          <CodeSnippetWithOutput
            title="package.json Scripts"
            code={`{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
}`}
            output={[
              '// npm run dev → Start dev server',
              '// npm run build → Production build'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 dark:from-rose-950/10 dark:to-pink-950/10 border border-rose-200/50 dark:border-rose-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Settings className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
            title="Complete Example"
            description="Full Webpack config for SCSS"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="webpack.config.js (Complete)"
            code={`const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: './src/index.js',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProd ? '[name].[contenthash].js' : '[name].js',
    clean: true
  },
  
  devtool: isProd ? 'source-map' : 'eval-source-map',
  
  devServer: {
    static: './dist',
    hot: true,
    port: 3000
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  
  module: {
    rules: [
      {
        test: /\\.scss$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: isProd ? 'compressed' : 'expanded'
              }
            }
          }
        ]
      }
    ]
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    
    ...(isProd ? [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css'
      })
    ] : [])
  ]
};`}
            output={[
              '✅ Complete production-ready config',
              '✅ Dev server with HMR',
              '✅ Source maps',
              '✅ CSS extraction in production',
              '✅ PostCSS integration',
              '✅ Webpack aliases'
            ]}
            language="scss"
            colorTheme="purple"
          />
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
            title="Best Practices"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use MiniCssExtractPlugin in Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Extract CSS to separate files, not inline in JS bundle
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Enable Source Maps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Debug SCSS files in DevTools, not compiled CSS
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use PostCSS for Autoprefixing</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add vendor prefixes automatically
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Configure Aliases</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Avoid relative path hell with @ aliases
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">✅ Use additionalData for Global Imports</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Auto-import variables and mixins in every file
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Use style-loader in Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Inline CSS hurts performance, use extracted CSS files
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Do Not Forget importLoaders</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Set <code className="bg-red-50 dark:bg-red-900/30 px-2 py-1 rounded">importLoaders</code> in css-loader for @import processing
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 border border-amber-200/50 dark:border-amber-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Info className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Loader Chain</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                sass-loader → css-loader → style-loader
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Production</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use MiniCssExtractPlugin to extract CSS
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">PostCSS</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Add autoprefixer and cssnano
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Development</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Dev server with Hot Module Replacement
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
