'use client';

import React from 'react';
import { Download, Terminal, Zap, FolderOpen } from 'lucide-react';

export default function InstallationAndSetup() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-950/30">
            <Download className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Installation & Setup</h1>
            <p className="text-lg text-muted-foreground">Getting started with Vue.js development</p>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Prerequisites</h2>
        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
          <p className="text-lg mb-4">Before installing Vue.js, make sure you have:</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span><strong>Node.js</strong> version 16.0 or higher</span>
            </li>
            <li className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span><strong>npm</strong> version 7.0 or higher (comes with Node.js)</span>
            </li>
            <li className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-500" />
              <span>Basic knowledge of HTML, CSS, and JavaScript</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Installation Methods */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Installation Methods</h2>
        
        {/* Method 1: create-vue (Recommended) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">1</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">create-vue (Recommended)</h3>
          </div>
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
            <p className="text-lg mb-4">The official project scaffolding tool for Vue.js</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Step 1: Run the command</h4>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
                  <code>npm create vue@latest</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Step 2: Follow the prompts</h4>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
                  <pre>{`✔ Project name: … my-vue-app
✔ Add TypeScript? … No
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit testing? … No
✔ Add an End-to-End Testing Solution? › No
✔ Add ESLint for code quality? … Yes`}</pre>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-slate-700 dark:text-slate-300">Step 3: Install dependencies and run</h4>
                <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
                  <pre>{`cd my-vue-app
npm install
npm run dev`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Method 2: Vite */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Vite Template</h3>
          </div>
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <p className="text-lg mb-4">Use Vite directly with Vue template</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run dev`}</pre>
            </div>
          </div>
        </div>

        {/* Method 3: CDN */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">3</div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">CDN (for prototyping)</h3>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
            <p className="text-lg mb-4">Quick setup without build tools</p>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm">
              <pre>{`<!DOCTYPE html>
<html lang="en">
<head>
  <script src="https://unun.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
</head>
<body>
  <div id="app">{{ message }}</div>
  <script>
    const { createApp } = Vue
    createApp({
      data() {
        return {
          message: 'Hello Vue!'
        }
      }
    }).mount('#app')
  </script>
</body>
</html>`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Project Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Project Structure</h2>
        <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <FolderOpen className="w-5 h-5 text-slate-500" />
            <h3 className="font-semibold text-slate-700 dark:text-slate-300">Typical Vue.js project structure:</h3>
          </div>
          <div className="bg-slate-900 text-slate-100 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <pre>{`my-vue-app/
├── public/              # Static assets
│   ├── favicon.ico
│   └── ...
├── src/                 # Source code
│   ├── assets/          # Assets processed by Vite
│   ├── components/      # Vue components
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.js          # App entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md`}</pre>
          </div>
        </div>
      </section>

      {/* Development Workflow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Development Workflow</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Development Server</h3>
            </div>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-sm">
              <code>npm run dev</code>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Starts a development server with hot reload
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-green-500" />
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Build for Production</h3>
            </div>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-sm">
              <code>npm run build</code>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Creates optimized production build
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Preview Production Build</h3>
            </div>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-sm">
              <code>npm run preview</code>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Preview the production build locally
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold text-slate-700 dark:text-slate-300">Run Tests</h3>
            </div>
            <div className="bg-slate-900 text-slate-100 rounded-lg p-3 font-mono text-sm">
              <code>npm run test</code>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Run unit and integration tests
            </p>
          </div>
        </div>
      </section>

      {/* IDE Setup */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">IDE Setup</h2>
        <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="font-semibold mb-3 text-slate-700 dark:text-slate-300">Recommended VS Code Extensions</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">•</span>
              <span><strong>Volar (Vue Language Features)</strong> - Essential for Vue.js development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">•</span>
              <span><strong>TypeScript Vue Plugin (Volar)</strong> - TypeScript support</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">•</span>
              <span><strong>Vue VSCode Snippets</strong> - Code snippets for Vue</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-yellow-500">•</span>
              <span><strong>Auto Rename Tag</strong> - Auto rename paired HTML/XML tags</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Common Issues */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-200">Common Issues & Solutions</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950/20 p-4 rounded">
            <h4 className="font-semibold text-orange-800 dark:text-orange-200">Node.js version too old</h4>
            <p className="text-sm text-orange-700 dark:text-orange-300">
              Solution: Update Node.js to version 16.0 or higher using nvm or download from nodejs.org
            </p>
          </div>
          <div className="border-l-4 border-red-400 bg-red-50 dark:bg-red-950/20 p-4 rounded">
            <h4 className="font-semibold text-red-800 dark:text-red-200">Port already in use</h4>
            <p className="text-sm text-red-700 dark:text-red-300">
              Solution: Use <code className="bg-red-100 px-1">npm run dev -- --port 3001</code> or close the other application
            </p>
          </div>
          <div className="border-l-4 border-blue-400 bg-blue-50 dark:bg-blue-950/20 p-4 rounded">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200">Dependencies not found</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              Solution: Run <code className="bg-blue-100 px-1">npm install</code> in the project directory
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-4">
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-3">Ready to Start!</h2>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Use <code className="bg-green-100 px-1">npm create vue@latest</code> for the best experience</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Install Volar extension for VS Code</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Start with <code className="bg-green-100 px-1">npm run dev</code> to begin development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Explore the project structure and start building!</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
