'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Lightbulb,
  CheckCircle2,
  XCircle,
  Zap,
  Cpu,
  TrendingUp,
} from 'lucide-react';

export default function UseMemoHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Cpu}
        category="React · Hooks (Comprehensive)"
        title="useMemo Hook"
        description="Learn useMemo to memoize expensive calculations and avoid re-computing values on every render for better performance."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useMemo */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Cpu className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useMemo?"
              description="Memoizing expensive calculations"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useMemo</code> returns a <strong>memoized value</strong>. It caches the result of an expensive calculation and only recomputes it when dependencies change, improving performance.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const memoizedValue = useMemo(() =&gt; {'{'}</div>
                  <div className="pl-4">return expensiveCalculation();</div>
                  <div>{'}'}, [dependencies]);</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Without useMemo</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const value = expensiveCalc();</div>
                    <div className="text-red-600 dark:text-red-400">// Runs every render!</div>
                  </div>
                </div>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Calculation runs on every render, wasting resources!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">With useMemo</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>const value = useMemo(</div>
                    <div className="pl-2">() =&gt; expensiveCalc(), []</div>
                    <div>);</div>
                    <div className="text-green-600 dark:text-green-400">// Cached result!</div>
                  </div>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Result cached until dependencies change!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">When to Use?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useMemo for expensive calculations (loops, filtering large arrays, complex math). Don't use it for simple operations - the memoization overhead isn't worth it!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* useMemo vs useCallback */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="useMemo vs useCallback"
              description="Understanding the difference"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">useMemo</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Memoizes Values</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Returns a <strong>cached value</strong></li>
                  <li>• Use for expensive calculations</li>
                  <li>• Returns the result directly</li>
                </ul>
                <div className="mt-4 bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    const value = useMemo(<br/>
                    &nbsp;&nbsp;() =&gt; compute(), []<br/>
                    );
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <Badge className="bg-purple-500 mb-3">useCallback</Badge>
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">Memoizes Functions</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Returns a <strong>cached function</strong></li>
                  <li>• Use for callback functions</li>
                  <li>• Returns the function itself</li>
                </ul>
                <div className="mt-4 bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    const fn = useCallback(<br/>
                    &nbsp;&nbsp;() =&gt; doSomething(), []<br/>
                    );
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 dark:bg-blue-950/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">💡 Simple Rule</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>useMemo</strong> = Cache a <em>value</em> (number, string, object, array)<br/>
                <strong>useCallback</strong> = Cache a <em>function</em>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Expensive Calculation"
            description="Filtering and sorting large lists"
            size="lg"
          />

          <FrontendCodePreview
            title="Product Search with useMemo"
            description="Memoized filtering - only recalculates when needed"
            colorTheme="green"
            react={`function ProductSearch() {
  const [search, setSearch] = React.useState('');
  const [count, setCount] = React.useState(0);

  // Mock large product list
  const products = Array.from({ length: 1000 }, (_, i) => ({
    id: i,
    name: \`Product \${i}\`,
    price: Math.floor(Math.random() * 100) + 10
  }));

  // Expensive calculation - memoized!
  const filteredProducts = React.useMemo(() => {
    console.log('🔍 Filtering products...');
    return products
      .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => b.price - a.price)
      .slice(0, 5);
  }, [search]); // Only recalculate when search changes

  return (
    <div className="container">
      <h1>🛍️ Product Search</h1>

      <div className="search-box">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="input"
        />
      </div>

      <div className="products">
        <h3>Top 5 Results ({filteredProducts.length})</h3>
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <span className="name">{product.name}</span>
            <span className="price">\${product.price}</span>
          </div>
        ))}
      </div>

      <div className="counter">
        <button onClick={() => setCount(c => c + 1)} className="btn">
          Force Re-render ({count})
        </button>
        <p className="hint">
          Click to re-render. Check console - filtering only happens when search changes!
        </p>
      </div>

      <div className="info">
        💡 useMemo caches expensive calculations!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductSearch />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useMemo } = React;
  const { createRoot } = ReactDOM;

  function ProductSearch() {
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);

    const products = Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: 'Product ' + i,
      price: Math.floor(Math.random() * 100) + 10
    }));

    const filteredProducts = useMemo(() => {
      console.log('🔍 Filtering products...');
      return products
        .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => b.price - a.price)
        .slice(0, 5);
    }, [search]);

    return h('div', { className: 'container' },
      h('h1', null, '🛍️ Product Search'),

      h('div', { className: 'search-box' },
        h('input', {
          type: 'text',
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: 'Search products...',
          className: 'input'
        })
      ),

      h('div', { className: 'products' },
        h('h3', null, 'Top 5 Results (' + filteredProducts.length + ')'),
        filteredProducts.map(product =>
          h('div', { key: product.id, className: 'product' },
            h('span', { className: 'name' }, product.name),
            h('span', { className: 'price' }, '$' + product.price)
          )
        )
      ),

      h('div', { className: 'counter' },
        h('button', {
          onClick: () => setCount(c => c + 1),
          className: 'btn'
        }, 'Force Re-render (' + count + ')'),
        h('p', { className: 'hint' },
          'Click to re-render. Check console - filtering only happens when search changes!'
        )
      ),

      h('div', { className: 'info' },
        '💡 useMemo caches expensive calculations!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ProductSearch));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 25px;
  font-size: 2rem;
  text-align: center;
}

.search-box {
  margin-bottom: 25px;
}

.input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.products {
  background: #f9fafb;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 20px;
  min-height: 200px;
}

.products h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 16px;
}

.product {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.product:hover {
  background: #d1fae5;
  transform: translateX(5px);
}

.name {
  color: #374151;
  font-weight: 500;
}

.price {
  color: #10b981;
  font-weight: 700;
  font-size: 16px;
}

.counter {
  margin-bottom: 20px;
}

.btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 10px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
}

.hint {
  font-size: 13px;
  color: #6b7280;
  text-align: center;
  line-height: 1.5;
}

.info {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #6ee7b7;
  }

  .input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .products {
    background: #111827;
  }

  .products h3 {
    color: #e5e7eb;
  }

  .product {
    background: #1f2937;
  }

  .product:hover {
    background: #064e3b;
  }

  .name {
    color: #e5e7eb;
  }

  .price {
    color: #6ee7b7;
  }

  .hint {
    color: #9ca3af;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

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
                  <Cpu className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Caches Values</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Returns cached result of expensive calculation until dependencies change.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Performance Boost</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avoids expensive recalculations on every render, improving performance.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Not for Everything</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only use for expensive operations - simple calculations don't need memoization.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Dependency Array</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Recalculates only when dependencies in the array change.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Optimization Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useMemo is for performance optimization. Use it for filtering arrays, complex calculations, or when creating expensive objects/arrays!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
