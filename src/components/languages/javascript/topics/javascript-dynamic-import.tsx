'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, Lightbulb, CheckCircle2, Rocket, Zap, Package } from 'lucide-react';

export default function JavaScriptDynamicImport() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="Modern JavaScript"
        title="Dynamic Import"
        description="import() for lazy loading modules and code splitting (ES2020)"
        colorTheme="amber"
      />

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg">
              <Package className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Dynamic Import? 📦
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Imagine you're planning a party. You don't bring all the food and decorations at once - you bring what you need <strong>when you need it</strong>! 
                Dynamic import does the same for your code. Instead of loading <strong className="text-amber-700 dark:text-amber-400">all JavaScript upfront</strong>, 
                you load modules <strong className="text-orange-700 dark:text-orange-400">only when they're needed</strong>. This makes your app start faster!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-700">
            <h4 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-4">The Problem It Solves 🎯</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                <h5 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Static Import (Old Way)</h5>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Loads everything at startup</p>
                  <p>• Slow initial page load</p>
                  <p>• Downloads unused code</p>
                  <p>• Can't load conditionally</p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
                <h5 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Dynamic Import (New Way)</h5>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Loads only when needed</p>
                  <p>• Fast initial page load</p>
                  <p>• Downloads on-demand</p>
                  <p>• Conditional loading!</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Static vs Dynamic Import 📊</CardTitle>
          <CardDescription>Understanding the difference</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Static Import</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Loaded immediately at file start
import { utils } from './utils.js';
import React from 'react';

// Always loaded, even if never used
console.log('Utils loaded');`}</code></pre>
              </div>
              <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>When:</strong> File is parsed<br/>
                  <strong>How:</strong> Synchronous<br/>
                  <strong>Where:</strong> Top of file only
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">Dynamic Import</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Loaded only when needed
button.onclick = async () => {
  const { utils } = await import('./utils.js');
  
  // Loaded on-demand
  utils.doSomething();
};`}</code></pre>
              </div>
              <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>When:</strong> When you call it<br/>
                  <strong>How:</strong> Asynchronous (Promise)<br/>
                  <strong>Where:</strong> Anywhere in code
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Syntax & Usage 📝</CardTitle>
          <CardDescription>How to use dynamic import</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">1. Basic Dynamic Import</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// import() returns a Promise
import('./module.js')
  .then(module => {
    console.log('Module loaded!');
    module.doSomething();
  })
  .catch(err => {
    console.error('Failed to load:', err);
  });`}</code></pre>
          </div>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">2. With Async/Await (Recommended)</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`async function loadModule() {
  try {
    const module = await import('./module.js');
    module.doSomething();
  } catch (err) {
    console.error('Failed to load:', err);
  }
}

loadModule();`}</code></pre>
          </div>

          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3">3. Destructuring Imports</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Import specific exports
const { add, subtract } = await import('./math.js');
console.log(add(2, 3)); // 5

// Import default export
const { default: MyComponent } = await import('./Component.js');

// Both together
const { default: utils, helper } = await import('./utils.js');`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Real-World Examples 🌍</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example 1: Lazy Load Heavy Library</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Only load chart library when user clicks "Show Chart"
document.getElementById('showChart').onclick = async () => {
  // Show loading indicator
  showLoader();
  
  // Load heavy chart library on-demand
  const Chart = await import('chart.js');
  
  // Use the library
  new Chart(ctx, { type: 'bar', data: chartData });
  
  hideLoader();
};

// Result: Users who never click "Show Chart" 
// never download the heavy chart library!`}</code></pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 2: Conditional Loading</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Load different modules based on condition
async function loadEditor() {
  if (user.isPremium) {
    // Load advanced editor for premium users
    const { AdvancedEditor } = await import('./AdvancedEditor.js');
    return new AdvancedEditor();
  } else {
    // Load basic editor for free users
    const { BasicEditor } = await import('./BasicEditor.js');
    return new BasicEditor();
  }
}

const editor = await loadEditor();`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Route-Based Code Splitting</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Load page components only when navigating
async function navigateTo(page) {
  switch(page) {
    case 'dashboard':
      const { Dashboard } = await import('./pages/Dashboard.js');
      return <Dashboard />;
      
    case 'profile':
      const { Profile } = await import('./pages/Profile.js');
      return <Profile />;
      
    case 'settings':
      const { Settings } = await import('./pages/Settings.js');
      return <Settings />;
  }
}

// Each page loads only when visited!`}</code></pre>
          </div>

          <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4 border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Example 4: Load Multiple Modules</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// Load multiple modules in parallel
const [utilsModule, helpersModule, configModule] = await Promise.all([
  import('./utils.js'),
  import('./helpers.js'),
  import('./config.js')
]);

// All loaded simultaneously!
utilsModule.doSomething();
helpersModule.help();
configModule.init();`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Benefits & Use Cases 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-900 dark:text-green-100 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Key Benefits
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-green-600 mt-0.5" />
                  <span><strong>Faster Initial Load:</strong> Only load essential code first</span>
                </li>
                <li className="flex items-start gap-2">
                  <Rocket className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span><strong>Code Splitting:</strong> Break app into smaller chunks</span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="w-4 h-4 text-purple-600 mt-0.5" />
                  <span><strong>On-Demand Loading:</strong> Load features when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5" />
                  <span><strong>Conditional Loading:</strong> Load based on user/device</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                Perfect For
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Large libraries (charts, PDFs, editors)</li>
                <li>• Admin panels (not all users need it)</li>
                <li>• Modal dialogs (load when opened)</li>
                <li>• Route-based pages (React Router, etc.)</li>
                <li>• Feature flags (load if enabled)</li>
                <li>• Language packs (load user's language)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Notes ⚠️</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">import() Returns a Promise</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Always use <code>.then()</code> or <code>await</code>. It's asynchronous!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Works Everywhere</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Can be used anywhere in your code - functions, loops, conditionals!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-3">
                <Package className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Bundler Support</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Webpack, Vite, Rollup automatically create separate chunks for dynamic imports!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Network Requests</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Each dynamic import makes a network request. Consider caching and loading states!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Pro Tip!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Show a loading indicator while dynamic import is happening. Users should know something is loading!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-300 dark:border-amber-700 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-950/20 dark:via-orange-950/10 dark:to-yellow-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📦</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">What is it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Load JavaScript modules on-demand instead of upfront
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Why use it?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Faster startup, smaller bundles, load only what's needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">How to use?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    const module = await import('./file.js')
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🚀</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Heavy libraries, routes, modals, feature flags
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
