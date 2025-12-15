'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { 
  Zap, 
  Lightbulb, 
  CheckCircle2, 
  Code,
  Rocket,
  Target,
  AlertTriangle,
  TrendingUp,
  Database,
  Image as ImageIcon,
  FileCode,
  Layers
} from 'lucide-react';

export default function OptimizationBestPractices() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Zap}
        category="React · Performance Optimization"
        title="Optimization Best Practices"
        description="Master React performance optimization with proven techniques and patterns. Learn when and how to optimize, avoid common pitfalls, and build lightning-fast applications."
        colorTheme="cyan"
      />

      {/* Introduction */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Performance Optimization Philosophy"
            description="Measure first, optimize second"
            size="lg"
          />
          
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Performance optimization is about making smart decisions based on measurements, not assumptions. Always profile before optimizing, and focus on the bottlenecks that actually impact user experience.
          </p>

          <Alert className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-300 dark:border-orange-700">
            <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <AlertTitle className="text-orange-900 dark:text-orange-100">Golden Rule</AlertTitle>
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>Premature optimization is the root of all evil.</strong> Don't optimize until you've measured and identified real performance problems. Most React apps are fast enough without optimization!
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-cyan-700 dark:text-cyan-300">Measure First</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use React DevTools Profiler to identify actual bottlenecks.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-blue-700 dark:text-blue-300">Focus on Impact</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Optimize the 20% that causes 80% of performance issues.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold mb-2 text-lg text-purple-700 dark:text-purple-300">Keep it Simple</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Clean, simple code is often faster than over-optimized code.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Optimization Techniques */}
      <Card className="bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 border border-purple-200/50 dark:border-purple-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Core Optimization Techniques"
            description="Essential patterns for better performance"
            size="lg"
          />

          <div className="space-y-4">
            {/* React.memo */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className="bg-purple-500 mb-3">React.memo</Badge>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2 text-lg">Prevent Unnecessary Re-renders</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Wrap components in <code className="bg-purple-100 dark:bg-purple-900 px-1 rounded">React.memo</code> to skip re-rendering when props haven't changed.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                    <div className="text-purple-600 dark:text-purple-400">const MemoizedComponent = React.memo(MyComponent);</div>
                    <div className="text-gray-500 dark:text-gray-400 mt-2">// Only re-renders when props change</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    💡 <strong>Use when:</strong> Component renders often with same props, or renders are expensive
                  </p>
                </div>
              </div>
            </div>

            {/* useMemo */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className="bg-blue-500 mb-3">useMemo</Badge>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2 text-lg">Memoize Expensive Calculations</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Cache computed values so they're not recalculated on every render.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                    <div className="text-blue-600 dark:text-blue-400">const sortedList = useMemo(() {'=>'} {'{'}</div>
                    <div className="text-blue-600 dark:text-blue-400 ml-4">return items.sort((a, b) {'=>'} a.value - b.value);</div>
                    <div className="text-blue-600 dark:text-blue-400">{'}, [items]);'}</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    💡 <strong>Use when:</strong> Calculation is expensive (filtering/sorting large arrays, complex math)
                  </p>
                </div>
              </div>
            </div>

            {/* useCallback */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <Badge className="bg-green-500 mb-3">useCallback</Badge>
                  <h4 className="font-bold text-green-700 dark:text-green-300 mb-2 text-lg">Memoize Functions</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Prevent creating new function instances on every render.
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                    <div className="text-green-600 dark:text-green-400">const handleClick = useCallback(() {'=>'} {'{'}</div>
                    <div className="text-green-600 dark:text-green-400 ml-4">doSomething(id);</div>
                    <div className="text-green-600 dark:text-green-400">{'}, [id]);'}</div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    💡 <strong>Use when:</strong> Passing callbacks to memoized child components
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Code Splitting */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Layers className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />}
          title="Code Splitting & Lazy Loading"
          description="Reduce initial bundle size"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Lazy Loading Components"
          description="Load components only when needed"
          code={`import React, { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));
const AdminPanel = lazy(() => import('./AdminPanel'));

function Dashboard() {
  const [showChart, setShowChart] = React.useState(false);
  
  return (
    <div>
      <h1>Dashboard</h1>
      
      <button onClick={() => setShowChart(true)}>
        Show Chart
      </button>
      
      {showChart && (
        <Suspense fallback={<div>Loading chart...</div>}>
          <HeavyChart />
        </Suspense>
      )}
    </div>
  );
}

// Route-based code splitting
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}`}
          output={[
            '// Initial bundle: 150KB',
            '// After lazy loading: 50KB initial, 100KB on demand',
            '// ✅ 66% reduction in initial load!',
            '',
            '// Loading sequence:',
            '> User visits site → Loads 50KB',
            '> User clicks "Show Chart" → Loads 30KB',
            '> User navigates to Dashboard → Loads 70KB',
            '',
            '// ✨ Much faster initial page load!'
          ]}
          language="javascript"
          colorTheme="purple"
        />
      </div>

      {/* List Optimization */}
      <div className="space-y-6">
        <TopicTitle
          icon={<FileCode className="w-8 h-8 text-green-600 dark:text-green-400" />}
          title="List Rendering Optimization"
          description="Handle large lists efficiently"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Virtualized Lists"
          description="Render only visible items in large lists"
          code={`import { FixedSizeList } from 'react-window';

// ❌ BAD: Renders all 10,000 items
function SlowList({ items }) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id} style={{ height: 50 }}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

// ✅ GOOD: Only renders visible items
function FastList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={600}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}

// Key prop optimization
// ❌ BAD: Using array index
items.map((item, index) => <Item key={index} {...item} />)

// ✅ GOOD: Using stable ID
items.map(item => <Item key={item.id} {...item} />)

// Pagination for very large datasets
function PaginatedList({ items, pageSize = 20 }) {
  const [page, setPage] = React.useState(0);
  
  const visibleItems = React.useMemo(() => {
    const start = page * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);
  
  return (
    <div>
      {visibleItems.map(item => (
        <Item key={item.id} {...item} />
      ))}
      <button onClick={() => setPage(p => p + 1)}>
        Next Page
      </button>
    </div>
  );
}`}
          output={[
            '// Without virtualization:',
            '> 10,000 items × 50px = 500,000px DOM',
            '> Initial render: 3.2s',
            '> Memory: 180MB',
            '> ❌ Very slow scrolling',
            '',
            '// With virtualization (react-window):',
            '> Only 12 visible items in DOM',
            '> Initial render: 45ms',
            '> Memory: 8MB',
            '> ✅ Buttery smooth scrolling!'
          ]}
          language="javascript"
          colorTheme="green"
        />
      </div>

      {/* State Management */}
      <div className="space-y-6">
        <TopicTitle
          icon={<Database className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
          title="State Management Optimization"
          description="Optimize state updates and re-renders"
          size="lg"
        />
        
        <CodeSnippetWithOutput
          title="Smart State Placement"
          description="Keep state close to where it's used"
          code={`// ❌ BAD: State too high up causes unnecessary re-renders
function App() {
  const [theme, setTheme] = useState('light');
  const [userName, setUserName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div>
      <Header theme={theme} /> {/* Re-renders on ANY state change */}
      <SearchBox query={searchQuery} onChange={setSearchQuery} />
      <UserProfile name={userName} onChange={setUserName} />
      <Footer theme={theme} />
    </div>
  );
}

// ✅ GOOD: State collocated with usage
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <div>
      <Header theme={theme} />
      <SearchBox /> {/* Manages own state */}
      <UserProfile /> {/* Manages own state */}
      <Footer theme={theme} />
    </div>
  );
}

function SearchBox() {
  const [query, setQuery] = useState(''); // Local state
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}

// Context optimization with split providers
// ❌ BAD: Single context causes all consumers to re-render
const AppContext = createContext();

function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');
  const [settings, setSettings] = useState({});
  
  return (
    <AppContext.Provider value={{ user, theme, settings, setUser, setTheme, setSettings }}>
      {children}
    </AppContext.Provider>
  );
}

// ✅ GOOD: Split contexts by concern
const UserContext = createContext();
const ThemeContext = createContext();
const SettingsContext = createContext();

// Only components using theme re-render when theme changes!`}
          output={[
            '// Bad state placement:',
            '> Theme changes → All 4 components re-render',
            '> Search changes → All 4 components re-render',
            '> User changes → All 4 components re-render',
            '> Total re-renders: 12',
            '',
            '// Good state placement:',
            '> Theme changes → Only Header & Footer re-render',
            '> Search changes → Only SearchBox re-renders',
            '> User changes → Only UserProfile re-renders',
            '> Total re-renders: 4',
            '',
            '// ✅ 66% fewer re-renders!'
          ]}
          language="javascript"
          colorTheme="blue"
        />
      </div>

      {/* Asset Optimization */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-red-50/60 dark:from-orange-950/10 dark:to-red-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<ImageIcon className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Asset Optimization"
            description="Optimize images, fonts, and other assets"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <Badge className="bg-orange-500 mb-3">Image Optimization</Badge>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Use modern formats (WebP, AVIF) with fallbacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Lazy load images below the fold with loading="lazy"</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Use responsive images with srcSet</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Compress images (aim for under 100KB per image)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span>Use CDN for faster delivery</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <Badge className="bg-red-500 mb-3">Bundle Size</Badge>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Use tree-shaking (import only what you need)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Replace heavy libraries with lighter alternatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Remove unused dependencies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Analyze bundle with webpack-bundle-analyzer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>Enable gzip/brotli compression</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card className="bg-gradient-to-br from-red-50/60 to-orange-50/60 dark:from-red-950/10 dark:to-orange-950/10 border border-red-200/50 dark:border-red-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />}
            title="Common Performance Mistakes"
            description="Avoid these pitfalls"
            size="lg"
          />

          <div className="space-y-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">❌ Creating Objects/Arrays in Render</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                New object/array references cause unnecessary re-renders.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-red-600 dark:text-red-400">// ❌ BAD: New array every render</div>
                <div className="text-red-600 dark:text-red-400">{'<Component items={[]} />'}</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// ✅ GOOD: Stable reference</div>
                <div className="text-green-600 dark:text-green-400">const emptyArray = [];</div>
                <div className="text-green-600 dark:text-green-400">{'<Component items={emptyArray} />'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">❌ Inline Functions in Props</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                New function instances break memoization.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-red-600 dark:text-red-400">// ❌ BAD: New function every render</div>
                <div className="text-red-600 dark:text-red-400">{'<Button onClick={() => doSomething()} />'}</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// ✅ GOOD: Memoized callback</div>
                <div className="text-green-600 dark:text-green-400">const handleClick = useCallback(() {'=>'} doSomething(), []);</div>
                <div className="text-green-600 dark:text-green-400">{'<Button onClick={handleClick} />'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
              <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">❌ Over-Using Context</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Context updates re-render ALL consumers, even if they don't use changed values.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-red-600 dark:text-red-400">// ❌ BAD: Everything in one context</div>
                <div className="text-red-600 dark:text-red-400">{'<AppContext.Provider value={{ user, theme, settings }} />'}</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// ✅ GOOD: Split by concern</div>
                <div className="text-green-600 dark:text-green-400">{'<UserContext><ThemeContext><SettingsContext>'}</div>
              </div>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">❌ Not Using Keys in Lists</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Missing or unstable keys cause React to recreate DOM nodes unnecessarily.
              </p>
              <div className="bg-gray-100 dark:bg-gray-800 rounded p-3 font-mono text-xs">
                <div className="text-red-600 dark:text-red-400">// ❌ BAD: No key or using index</div>
                <div className="text-red-600 dark:text-red-400">items.map((item, i) {'=>'} {'<div key={i}>{item}</div>'})</div>
                <div className="text-green-600 dark:text-green-400 mt-2">// ✅ GOOD: Stable unique ID</div>
                <div className="text-green-600 dark:text-green-400">items.map(item {'=>'} {'<div key={item.id}>{item}</div>'})</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Checklist */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Performance Optimization Checklist"
            description="Step-by-step optimization guide"
            size="lg"
          />

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Profile with React DevTools</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Identify which components are slow and re-rendering frequently</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Optimize Re-renders</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Use React.memo, useMemo, and useCallback where measurements show benefit</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Implement Code Splitting</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Use React.lazy for routes and heavy components</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                4
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Optimize Large Lists</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Implement virtualization for lists with 100+ items</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                5
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Optimize Assets</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Compress images, use modern formats, lazy load below fold</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                6
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Reduce Bundle Size</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Tree-shake, analyze bundle, replace heavy dependencies</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg border-2 border-green-200 dark:border-green-800">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">
                7
              </div>
              <div>
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Measure Again</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Profile after changes to verify improvements</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="bg-gradient-to-br from-cyan-50/60 to-blue-50/60 dark:from-cyan-950/10 dark:to-blue-950/10 border border-cyan-200/50 dark:border-cyan-800/30">
        <CardContent className="pt-6 space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Key Takeaways"
            size="lg"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center mb-3">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Measure First</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Always profile before optimizing. Don't guess where bottlenecks are!
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">React.memo</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Prevent unnecessary re-renders of expensive components.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center mb-3">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Code Splitting</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Use React.lazy to reduce initial bundle size significantly.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center mb-3">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">State Placement</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Keep state close to where it's used to minimize re-renders.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center mb-3">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Optimize Assets</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Compress images, use modern formats, lazy load below fold.
              </p>
            </div>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-300 dark:border-pink-700 hover:shadow-lg transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-pink-500 flex items-center justify-center mb-3">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-pink-700 dark:text-pink-300 mb-2">Keep it Simple</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't over-optimize. Clean code is often fast enough!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Final Message */}
      <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-2 border-cyan-300 dark:border-cyan-700">
        <Rocket className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
        <AlertTitle className="text-cyan-900 dark:text-cyan-100 text-lg">Build Fast, Stay Fast!</AlertTitle>
        <AlertDescription className="text-cyan-800 dark:text-cyan-200">
          Remember: <strong>Most React apps are fast enough without optimization.</strong> Only optimize when you've measured a real performance problem. Focus on clean, maintainable code first, and optimize later if needed. Your users will thank you for the great experience! 🚀
        </AlertDescription>
      </Alert>

    </div>
  );
}
