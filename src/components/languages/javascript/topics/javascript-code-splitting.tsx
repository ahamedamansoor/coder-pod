'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  PackageOpen,
  CheckCircle,
  Zap,
  FileCode,
  Lightbulb,
  TrendingDown,
} from 'lucide-react';

export default function JavaScriptCodeSplitting() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={PackageOpen}
        category="JavaScript Performance"
        title="Code Splitting"
        description="Load only what you need, when you need it"
        colorTheme="purple"
      />

      {/* What is Code Splitting */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-blue-50/20 dark:from-purple-950/10 dark:via-indigo-950/5 dark:to-blue-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
              <PackageOpen className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Code Splitting?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Code splitting is the practice of <strong className="text-purple-700 dark:text-purple-400">breaking your bundle</strong> into smaller chunks that can be <strong className="text-indigo-700 dark:text-indigo-400">loaded on demand</strong>. Instead of loading all JavaScript upfront, you load only what's needed for the current page.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Faster Load</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Smaller initial bundle = faster page load
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <TrendingDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Reduced Size</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Users download only what they use
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <PackageOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Better UX</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Improved performance = happier users
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Splitting Strategies */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Code Splitting Strategies</CardTitle>
              <CardDescription>Different approaches to split your code</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Route-Based Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Split code by routes/pages
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Load home page code separately from dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Each route gets its own bundle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Most common and effective</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Component-Based Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Lazy load large components
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Modals, charts, heavy UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Load when component becomes visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Reduces initial bundle significantly</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Vendor Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Separate third-party libraries
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Keep vendor code separate from app code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Better caching (vendors change less often)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Automatic in modern bundlers</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Dynamic Import</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Load modules conditionally
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Load code only when needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Feature flags, user roles, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Maximum flexibility</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Dynamic Import */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Dynamic Import (Vanilla JS)</CardTitle>
          <CardDescription>Load modules on demand</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Load module dynamically
button.addEventListener('click', async () => {
  // Module is loaded only when button is clicked
  const module = await import('./heavy-feature.js');
  module.initializeFeature();
});

// Conditional loading
async function loadEditor() {
  if (userRole === 'admin') {
    const { RichTextEditor } = await import('./editor.js');
    const editor = new RichTextEditor();
    editor.render();
  }
}

// Load with error handling
async function loadChart(data) {
  try {
    const { Chart } = await import('./chart-library.js');
    const chart = new Chart(data);
    chart.display();
  } catch (error) {
    console.error('Failed to load chart:', error);
    showFallbackView();
  }
}

// Parallel loading
async function loadDashboard() {
  const [
    { StatsWidget },
    { ChartWidget },
    { TableWidget }
  ] = await Promise.all([
    import('./stats.js'),
    import('./chart.js'),
    import('./table.js')
  ]);
  
  // All widgets loaded in parallel
  new StatsWidget().render();
  new ChartWidget().render();
  new TableWidget().render();
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: React Lazy Loading */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: React Lazy Loading</CardTitle>
          <CardDescription>Component-based code splitting</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`import React, { lazy, Suspense } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));
const Settings = lazy(() => import('./Settings'));

// Heavy component loaded on demand
const ChartComponent = lazy(() => import('./HeavyChart'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}

// Lazy load modal
function DataTable() {
  const [showModal, setShowModal] = useState(false);
  
  // Modal component loaded only when opened
  const Modal = lazy(() => import('./DetailModal'));
  
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        View Details
      </button>
      
      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <Modal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </div>
  );
}

// Named export lazy loading
const AdminPanel = lazy(() =>
  import('./AdminPanel').then(module => ({
    default: module.AdminPanel
  }))
);`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Webpack Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Webpack Code Splitting</CardTitle>
          <CardDescription>Bundler configuration for optimal splitting</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// webpack.config.js
module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  
  optimization: {
    splitChunks: {
      chunks: 'all',
      
      cacheGroups: {
        // Separate vendor code
        vendor: {
          test: /[\\\\\/]node_modules[\\\\\/]/,
          name: 'vendors',
          priority: 10
        },
        
        // Common code shared between routes
        common: {
          minChunks: 2,
          priority: 5,
          reuseExistingChunk: true
        },
        
        // Separate large libraries
        react: {
          test: /[\\\\\/]node_modules[\\\\\/](react|react-dom)[\\\\\/]/,
          name: 'react',
          priority: 20
        },
        
        lodash: {
          test: /[\\\\\/]node_modules[\\\\\/]lodash[\\\\\/]/,
          name: 'lodash',
          priority: 15
        }
      }
    },
    
    // Separate runtime chunk
    runtimeChunk: 'single'
  }
};

// Vite configuration
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-library': ['@mui/material', '@mui/icons-material'],
          'utils': ['lodash', 'moment', 'axios']
        }
      }
    }
  }
};`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Example: Next.js Dynamic Import */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Next.js Dynamic Imports</CardTitle>
          <CardDescription>Framework-specific code splitting</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`import dynamic from 'next/dynamic';

// Basic dynamic import
const DynamicComponent = dynamic(() => import('./HeavyComponent'));

// With custom loading component
const Chart = dynamic(() => import('./Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false // Disable server-side rendering
});

// With named exports
const AdminPanel = dynamic(() =>
  import('./AdminPanel').then(mod => mod.AdminPanel)
);

// Conditional loading
function Dashboard({ user }) {
  const AdminDashboard = dynamic(() => import('./AdminDashboard'));
  const UserDashboard = dynamic(() => import('./UserDashboard'));
  
  return user.isAdmin ? <AdminDashboard /> : <UserDashboard />;
}

// Multiple components
const [
  Header,
  Footer,
  Sidebar
] = [
  dynamic(() => import('./Header')),
  dynamic(() => import('./Footer')),
  dynamic(() => import('./Sidebar'))
];

// Load only on client side
const NoSSRComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
);`}</code>
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
              <CardTitle>Code Splitting Best Practices</CardTitle>
              <CardDescription>Optimize your bundle strategy</CardDescription>
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
                <li>• Split by routes first</li>
                <li>• Lazy load heavy components</li>
                <li>• Use prefetching for likely-needed code</li>
                <li>• Separate vendor bundles</li>
                <li>• Monitor bundle sizes</li>
                <li>• Use loading states (Suspense)</li>
                <li>• Cache split chunks aggressively</li>
                <li>• Analyze bundle with tools</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Split too aggressively (too many requests)</li>
                <li>• Split critical above-the-fold code</li>
                <li>• Forget loading states</li>
                <li>• Ignore bundle analysis</li>
                <li>• Split tiny modules (overhead not worth it)</li>
                <li>• Lazy load everything</li>
                <li>• Ignore user experience during loading</li>
                <li>• Forget to test loading states</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950/20 dark:via-indigo-950/10 dark:to-blue-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Split by Routes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Route-based splitting is easiest<br/>
                    Most effective optimization
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Lazy Load Heavy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Charts, editors, modals<br/>
                    Load on demand
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Suspense</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Show loading states<br/>
                    Better user experience
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Monitor Bundles</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use bundle analyzers<br/>
                    Track size over time
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-950/30 dark:to-indigo-950/30 border-purple-300 dark:border-purple-700">
            <PackageOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-purple-900 dark:text-purple-100">Performance Boost</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Code splitting can <strong>reduce initial load time by 50-70%</strong>. Start with route-based splitting for immediate wins!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
