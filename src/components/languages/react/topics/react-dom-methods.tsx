'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  Lightbulb,
  CheckCircle2,
  Droplet,
  Zap,
  Server,
  RefreshCw,
  AlertTriangle,
  Rocket,
} from 'lucide-react';

export default function ReactDomMethods() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Droplet}
        category="React · Client Libraries"
        title="React-DOM Methods"
        description="Learn about essential react-dom methods including createRoot, hydrateRoot, flushSync, and other DOM manipulation APIs in React 18+."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Overview */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Droplet className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is react-dom?"
              description="The bridge between React and the DOM"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">react-dom</code> is the package that provides <strong>DOM-specific methods</strong> for React. It's the glue that connects React components to the actual browser DOM!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">React 18+</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Modern API</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  createRoot, hydrateRoot with concurrent features support.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">Legacy API</Badge>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Older Methods</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  render, hydrate (deprecated but still work for compatibility).
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">React 18 Upgrade!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Always use createRoot() instead of render() in React 18+ to enable concurrent features!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* createRoot */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Rocket className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="createRoot()"
              description="Modern way to render React apps"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded text-sm">createRoot()</code> creates a React root for displaying content inside a browser DOM element. This is the <strong>recommended way</strong> to render React 18+ apps!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Usage</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>import {'{ createRoot }'} from 'react-dom/client';</div>
                  <div className="mt-2"></div>
                  <div>const root = createRoot(domNode, options);</div>
                  <div>root.render(&lt;App /&gt;);</div>
                  <div className="mt-2"></div>
                  <div className="text-green-600 dark:text-green-400">// Later: update the root</div>
                  <div>root.render(&lt;App newProp={'{value}'} /&gt;);</div>
                  <div className="mt-2"></div>
                  <div className="text-green-600 dark:text-green-400">// Clean up</div>
                  <div>root.unmount();</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-green-700 dark:text-green-300">Features:</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ Concurrent Features</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Enables Suspense, transitions, streaming SSR</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ Automatic Batching</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">All updates batched automatically</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ Better Performance</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Optimized rendering with React 18+</p>
                </div>
                <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-1">✅ Future-Proof</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Recommended for all new apps</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* hydrateRoot */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Server className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="hydrateRoot()"
              description="For server-rendered HTML"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded text-sm">hydrateRoot()</code> attaches React to existing HTML that was generated by a server (SSR). It "hydrates" the static HTML with <strong>interactivity</strong>!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Usage</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>import {'{ hydrateRoot }'} from 'react-dom/client';</div>
                  <div className="mt-2"></div>
                  <div>const root = hydrateRoot(domNode, &lt;App /&gt;, options);</div>
                  <div className="mt-2"></div>
                  <div className="text-green-600 dark:text-green-400">// For Next.js, Remix, etc.</div>
                  <div className="text-green-600 dark:text-green-400">// Usually handled automatically</div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-300 dark:border-blue-700">
              <Server className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">SSR Hydration!</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Use hydrateRoot when your HTML was pre-rendered on the server. React will attach event handlers and make it interactive!
              </AlertDescription>
            </Alert>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-orange-500 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">⚠️ Hydration Mismatch</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Server-rendered HTML must match client-side React output exactly, or you'll get warnings!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* flushSync */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="flushSync()"
              description="Force synchronous updates"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">flushSync()</code> forces React to <strong>flush updates synchronously</strong>. Useful when you need the DOM to update immediately, but use sparingly!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
              <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Usage</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>import {'{ flushSync }'} from 'react-dom';</div>
                  <div className="mt-2"></div>
                  <div>flushSync(() =&gt; {'{'}</div>
                  <div className="pl-4">setCount(count + 1);</div>
                  <div>{'}'});</div>
                  <div className="mt-2"></div>
                  <div className="text-green-600 dark:text-green-400">// DOM is updated immediately</div>
                  <div>console.log(ref.current.textContent); // New value</div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-300 dark:border-yellow-700">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Use Sparingly!</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                flushSync can hurt performance by bypassing React's batching. Only use when you absolutely need synchronous DOM updates!
              </AlertDescription>
            </Alert>

            <div className="space-y-3">
              <h4 className="font-bold text-purple-700 dark:text-purple-300">Common Use Cases:</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Measuring DOM elements immediately after state update</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Scrolling to newly rendered content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500">•</span>
                  <span>Integrating with third-party libraries that expect synchronous updates</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Rocket className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Modern React 18 Setup"
            description="Using createRoot in your app"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="React 18+ Application Setup"
            description="Standard way to initialize a React app"
            language="javascript"
            colorTheme="green"
            code={`// index.js (or main.jsx)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// ✅ React 18+ way
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ❌ Old way (React 17)
// import { render } from 'react-dom';
// render(<App />, document.getElementById('root'));


// Example: Update the root later
function updateApp(newData) {
  root.render(
    <StrictMode>
      <App data={newData} />
    </StrictMode>
  );
}

// Example: Clean up on unmount
function cleanup() {
  root.unmount();
  console.log('React app unmounted');
}


// Example: flushSync for immediate DOM update
import { flushSync } from 'react-dom';

function ScrollToBottom() {
  const listRef = useRef();
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    flushSync(() => {
      setItems([...items, newItem]);
    });
    // DOM updated immediately, safe to scroll
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }

  return (
    <div ref={listRef}>
      {items.map(item => <div key={item.id}>{item.text}</div>)}
    </div>
  );
}`}
            output={[
              '✅ React 18 app initialized',
              '// Concurrent features enabled',
              '// Automatic batching active',
              '',
              'Console logs:',
              '> React app rendered',
              '> StrictMode active (development)',
              '> All systems ready! 🚀'
            ]}
          />
        </div>

        {/* Other Methods */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Other Useful Methods"
              description="Additional react-dom utilities"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">findDOMNode()</h4>
                <Badge variant="outline" className="mb-2">Deprecated</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns DOM node for a component. Use refs instead!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">createPortal()</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Renders children into a different part of the DOM tree. Great for modals and tooltips!
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                  createPortal(child, domNode)
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">preconnect(), prefetchDNS()</h4>
                <Badge className="bg-green-500 mb-2">React 19+</Badge>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Performance hints to preconnect to servers or prefetch DNS lookups.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">createRoot()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Modern way to render React 18+ apps with concurrent features.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">hydrateRoot()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Attaches React to server-rendered HTML for SSR apps.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">flushSync()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Forces synchronous updates (use sparingly!).
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Portal API</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Render components outside their parent DOM hierarchy.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Always Use Modern APIs!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                In React 18+, always use createRoot() instead of render() and hydrateRoot() instead of hydrate() to unlock concurrent features!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
