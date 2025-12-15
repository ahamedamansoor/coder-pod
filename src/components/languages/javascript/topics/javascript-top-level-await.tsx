'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, Zap } from 'lucide-react';

export default function JavaScriptTopLevelAwait() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="Modern JavaScript"
        title="Top-Level Await"
        description="Using await at module top level without async wrapper (ES2022)"
        colorTheme="yellow"
      />

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-lg">
              <Zap className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Top-Level Await? ⚡
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Use <code className="bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded">await</code> directly in modules 
                without wrapping in an <code>async</code> function! No more <strong className="text-yellow-700 dark:text-yellow-400">IIFE wrappers</strong> - 
                just use <code>await</code> at the <strong className="text-amber-700 dark:text-amber-400">top level</strong> of your ES modules!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Before vs After 📊</CardTitle>
          <CardDescription>See the difference</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-bold text-red-900 dark:text-red-100">❌ Old Way (Wrapper)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// module.js
let userData;

(async () => {
  const response = await fetch('/api/user');
  userData = await response.json();
})();

export { userData };
// Problem: userData might be undefined!`}</code></pre>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-900 dark:text-green-100">✅ New Way (Top-Level)</h4>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// module.js
const response = await fetch('/api/user');
const userData = await response.json();

export { userData };
// userData is always ready!`}</code></pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Examples 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example 1: Load Config</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// config.js
const response = await fetch('/config.json');
const config = await response.json();

export const API_URL = config.apiUrl;
export const TIMEOUT = config.timeout;
export default config;

// Other modules can import immediately
// import { API_URL } from './config.js';`}</code></pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 2: Database Connection</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// database.js
const connection = await initDatabase({
  host: 'localhost',
  port: 5432
});

await connection.connect();
console.log('Database connected!');

export default connection;

// Usage in other modules
// import db from './database.js';
// db.query('SELECT * FROM users');`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Dynamic Imports</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// utils.js
const locale = await fetch('/api/locale').then(r => r.json());

const translations = await import(\`./i18n/\${locale.code}.js\`);

export const t = translations.default;

// Now other modules get the right language
// import { t } from './utils.js';
// console.log(t('hello')); // Bonjour (if French)`}</code></pre>
          </div>

          <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4 border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Example 4: Feature Detection</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`// features.js
let hasWebGL = false;
let hasWebGPU = false;

try {
  const adapter = await navigator.gpu?.requestAdapter();
  hasWebGPU = !!adapter;
} catch {
  hasWebGPU = false;
}

hasWebGL = !!document.createElement('canvas').getContext('webgl');

export { hasWebGL, hasWebGPU };

// Other modules can check features immediately
// import { hasWebGPU } from './features.js';`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Important Behavior 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Module Blocks Execution</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Modules using top-level await block their importers until the await completes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Only in ES Modules</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Works only in ES modules (<code>type="module"</code>), not in scripts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Error Handling</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    If top-level await throws, the module fails to load
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">No Wrapper</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use await at top level - no async function needed!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📦</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES Modules</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works only in ES modules, not scripts
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Perfect for</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Config loading, DB setup, dynamic imports
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern async module initialization
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
