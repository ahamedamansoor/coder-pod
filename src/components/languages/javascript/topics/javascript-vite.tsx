'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Zap,
  CheckCircle,
  Rocket,
  Bolt,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

export default function JavaScriptVite() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Tooling"
        title="Vite"
        description="Next generation frontend tooling - blazingly fast!"
        colorTheme="purple"
      />

      {/* What is Vite */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-violet-50/30 to-fuchsia-50/20 dark:from-purple-950/10 dark:via-violet-950/5 dark:to-fuchsia-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Vite?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Vite (French for "fast") is a <strong className="text-purple-700 dark:text-purple-400">modern build tool</strong> that provides an <strong className="text-violet-700 dark:text-violet-400">incredibly fast</strong> development experience. It uses native ES modules and esbuild for lightning-fast builds, making it much faster than traditional bundlers.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Bolt className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Instant Server</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Dev server starts in milliseconds
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Fast HMR</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Hot reload updates instantly
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/30 dark:to-orange-900/30 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Optimized Build</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Production builds with Rollup
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Vite vs Webpack */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Vite vs Webpack</CardTitle>
              <CardDescription>Why Vite is so fast</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">Webpack (Traditional)</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Bundles ALL files before serving</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Slow initial startup (minutes for large apps)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>HMR slower as app grows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Complex configuration</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Vite (Modern)</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Uses native ES modules (no bundling in dev)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Instant startup (milliseconds)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>HMR stays fast regardless of size</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Zero config for most projects</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800/30">
            <Bolt className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle>Speed Comparison</AlertTitle>
            <AlertDescription>
              Vite can be <strong>10-100x faster</strong> than Webpack in development. Large projects that took 2-3 minutes to start now start in under a second!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Getting Started */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Create a Vite Project</CardTitle>
          <CardDescription>Start a new project in seconds</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`# Create new project
npm create vite@latest my-app

# Choose template:
# - vanilla (JavaScript)
# - vue
# - react
# - preact
# - lit
# - svelte

# Or specify directly:
npm create vite@latest my-react-app -- --template react

# Navigate and install
cd my-react-app
npm install

# Start dev server
npm run dev

# Dev server starts instantly!
# Visit: http://localhost:5173`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Vite Configuration</CardTitle>
          <CardDescription>Simple vite.config.js setup</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Plugins (React, Vue, etc.)
  plugins: [react()],
  
  // Dev server config
  server: {
    port: 3000,
    open: true,  // Auto-open browser
    cors: true
  },
  
  // Build config
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',  // Super fast!
    
    // Rollup options
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  
  // Path aliases
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components'
    }
  }
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Environment Variables */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Environment Variables</CardTitle>
          <CardDescription>Using .env files in Vite</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// .env file
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My App

// ⚠️ Must start with VITE_ to be exposed!

// Usage in code:
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;

console.log(apiUrl);  // https://api.example.com

// Built-in environment variables:
import.meta.env.MODE        // 'development' or 'production'
import.meta.env.BASE_URL    // base URL
import.meta.env.PROD        // boolean
import.meta.env.DEV         // boolean

// Different env files:
.env                  # All modes
.env.local            # All modes (gitignored)
.env.development      # Development only
.env.production       # Production only`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Key Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Rocket className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>What makes Vite special</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">⚡ Native ESM</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Uses browser's native ES modules - no bundling in dev!
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">🔥 Hot Module Replacement</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Lightning-fast HMR that stays fast as app grows
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🚀 Optimized Build</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Production builds optimized with Rollup
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">🔌 Plugin Ecosystem</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compatible with Rollup plugins + Vite plugins
              </p>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">📦 Pre-bundled Dependencies</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                esbuild pre-bundles node_modules for speed
              </p>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-950/20 border-l-4 border-cyan-500">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">🎯 TypeScript Support</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built-in TypeScript support, no config needed
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
              <CardTitle>Vite Best Practices</CardTitle>
              <CardDescription>Get the most out of Vite</CardDescription>
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
                <li>• Use native ES modules in code</li>
                <li>• Prefix env vars with VITE_</li>
                <li>• Use dynamic imports for code splitting</li>
                <li>• Keep dependencies up to date</li>
                <li>• Use path aliases for cleaner imports</li>
                <li>• Enable source maps in dev</li>
                <li>• Test production builds</li>
                <li>• Use Vite plugins for features</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Use CommonJS (require/module.exports)</li>
                <li>• Import Node.js modules in frontend</li>
                <li>• Expose secrets in env vars</li>
                <li>• Ignore browser compatibility</li>
                <li>• Skip production build testing</li>
                <li>• Import from deep node_modules paths</li>
                <li>• Use default ports in production</li>
                <li>• Overcomplicate configuration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50 dark:from-purple-950/20 dark:via-violet-950/10 dark:to-fuchsia-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Incredibly Fast</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Instant dev server startup<br/>
                    10-100x faster than Webpack
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Native ESM</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No bundling in development<br/>
                    Uses browser's import
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Zero Config</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works out of the box<br/>
                    Minimal configuration needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Modern Tool</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Built for modern workflows<br/>
                    React, Vue, Svelte ready
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-violet-100 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-300 dark:border-purple-700">
            <Zap className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Next Generation Tooling</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Vite is the <strong>future of frontend tooling</strong>. Its speed and simplicity make development a joy. Try it once, you'll never want to go back!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
