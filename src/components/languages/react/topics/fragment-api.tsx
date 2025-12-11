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
  Layers,
  Code,
  Zap,
} from 'lucide-react';

export default function FragmentApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Layers}
        category="React · Component Details"
        title="Fragment (<>...</>)"
        description="Learn how to group multiple elements without adding extra nodes to the DOM using React.Fragment or the <> shorthand syntax."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is Fragment */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Fragment?"
              description="Group elements without extra DOM nodes"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">Fragment</code> lets you <strong>group multiple elements together</strong> without adding an extra wrapper node to the DOM. It's like an invisible container!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Two Syntaxes</h4>
              <div className="space-y-4">
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded">
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Short Syntax (Preferred)</p>
                  <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                    <div>&lt;&gt;</div>
                    <div className="pl-4">&lt;h1&gt;Title&lt;/h1&gt;</div>
                    <div className="pl-4">&lt;p&gt;Paragraph&lt;/p&gt;</div>
                    <div>&lt;/&gt;</div>
                  </div>
                </div>

                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Full Syntax (When you need key prop)</p>
                  <div className="font-mono text-sm text-slate-800 dark:text-slate-200">
                    <div>&lt;React.Fragment key={'{item.id}'}&gt;</div>
                    <div className="pl-4">&lt;h1&gt;Title&lt;/h1&gt;</div>
                    <div className="pl-4">&lt;p&gt;Paragraph&lt;/p&gt;</div>
                    <div>&lt;/React.Fragment&gt;</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">❌ Without Fragment</Badge>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>&lt;div&gt; <span className="text-red-600 dark:text-red-400">← Extra wrapper!</span></div>
                    <div className="pl-2">&lt;h1&gt;Title&lt;/h1&gt;</div>
                    <div className="pl-2">&lt;p&gt;Text&lt;/p&gt;</div>
                    <div>&lt;/div&gt;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Adds unnecessary <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-800 rounded text-xs">&lt;div&gt;</code> to DOM
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ With Fragment</Badge>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-2">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>&lt;&gt; <span className="text-green-600 dark:text-green-400">← No wrapper!</span></div>
                    <div className="pl-2">&lt;h1&gt;Title&lt;/h1&gt;</div>
                    <div className="pl-2">&lt;p&gt;Text&lt;/p&gt;</div>
                    <div>&lt;/&gt;</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Clean DOM structure, no extra elements
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Clean DOM!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Fragments help keep your DOM clean and avoid unnecessary wrapper elements that can affect CSS layouts and semantics!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* When to Use */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="When to Use Fragments"
              description="Common use cases"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">1. Returning Multiple Elements</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Components can only return one element - use Fragment to return multiple!
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                  <span className="text-slate-800 dark:text-slate-200">
                    return &lt;&gt;&lt;h1&gt;Title&lt;/h1&gt;&lt;p&gt;Text&lt;/p&gt;&lt;/&gt;;
                  </span>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">2. Mapping Arrays with Keys</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  When mapping and you need a key prop - use full Fragment syntax!
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded font-mono text-xs">
                  <span className="text-slate-800 dark:text-slate-200">
                    &lt;Fragment key={'{id}'}&gt;...&lt;/Fragment&gt;
                  </span>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">3. Avoiding CSS Issues</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Extra divs can break flexbox, grid, or table layouts - Fragments don't!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Layers className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Product List with Fragments"
            description="Compare DOM structure with/without Fragments"
            size="lg"
          />

          <FrontendCodePreview
            title="Fragment vs Div Comparison"
            description="See how Fragments keep your DOM clean"
            colorTheme="green"
            react={`function ProductItem({ name, price, withFragment }) {
  if (withFragment) {
    return (
      <>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">\${price}</p>
      </>
    );
  }
  
  // Without Fragment - adds extra div
  return (
    <div className="extra-wrapper">
      <h3 className="product-name">{name}</h3>
      <p className="product-price">\${price}</p>
    </div>
  );
}

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 },
    { id: 3, name: 'Tablet', price: 499 }
  ];

  return (
    <div className="container">
      <h1>🛍️ Fragment Example</h1>

      <div className="section">
        <h2>✅ With Fragment (Clean DOM)</h2>
        <div className="products">
          {products.map(product => (
            <React.Fragment key={product.id}>
              <ProductItem 
                name={product.name} 
                price={product.price}
                withFragment={true}
              />
            </React.Fragment>
          ))}
        </div>
        <div className="dom-info">
          ✨ Clean: No extra wrappers!
        </div>
      </div>

      <div className="section">
        <h2>❌ Without Fragment (Extra Divs)</h2>
        <div className="products">
          {products.map(product => (
            <ProductItem 
              key={product.id}
              name={product.name} 
              price={product.price}
              withFragment={false}
            />
          ))}
        </div>
        <div className="dom-info warning">
          ⚠️ Extra divs added to DOM!
        </div>
      </div>

      <div className="tip">
        💡 Open DevTools and inspect the DOM structure difference!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, Fragment } = React;
  const { createRoot } = ReactDOM;

  function ProductItem({ name, price, withFragment }) {
    if (withFragment) {
      return h(Fragment, null,
        h('h3', { className: 'product-name' }, name),
        h('p', { className: 'product-price' }, '$' + price)
      );
    }
    
    return h('div', { className: 'extra-wrapper' },
      h('h3', { className: 'product-name' }, name),
      h('p', { className: 'product-price' }, '$' + price)
    );
  }

  function App() {
    const products = [
      { id: 1, name: 'Laptop', price: 999 },
      { id: 2, name: 'Phone', price: 699 },
      { id: 3, name: 'Tablet', price: 499 }
    ];

    return h('div', { className: 'container' },
      h('h1', null, '🛍️ Fragment Example'),

      h('div', { className: 'section' },
        h('h2', null, '✅ With Fragment (Clean DOM)'),
        h('div', { className: 'products' },
          ...products.map(product =>
            h(Fragment, { key: product.id },
              h(ProductItem, {
                name: product.name,
                price: product.price,
                withFragment: true
              })
            )
          )
        ),
        h('div', { className: 'dom-info' },
          '✨ Clean: No extra wrappers!'
        )
      ),

      h('div', { className: 'section' },
        h('h2', null, '❌ Without Fragment (Extra Divs)'),
        h('div', { className: 'products' },
          ...products.map(product =>
            h(ProductItem, {
              key: product.id,
              name: product.name,
              price: product.price,
              withFragment: false
            })
          )
        ),
        h('div', { className: 'dom-info warning' },
          '⚠️ Extra divs added to DOM!'
        )
      ),

      h('div', { className: 'tip' },
        '💡 Open DevTools and inspect the DOM structure difference!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(App));
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
  max-width: 800px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 16px;
  background: #f9fafb;
  border: 2px solid #e5e7eb;
}

.section h2 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #374151;
}

.products {
  display: grid;
  gap: 10px;
  margin-bottom: 15px;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 5px;
}

.product-price {
  font-size: 1rem;
  color: #10b981;
  font-weight: 600;
}

.extra-wrapper {
  padding: 10px;
  background: #fee2e2;
  border: 2px dashed #ef4444;
  border-radius: 8px;
}

.dom-info {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 10px 15px;
  border-radius: 8px;
  border: 2px solid #10b981;
  font-size: 0.9rem;
  font-weight: 600;
  color: #065f46;
  text-align: center;
}

.dom-info.warning {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-color: #f59e0b;
  color: #92400e;
}

.tip {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #3b82f6;
  text-align: center;
  font-size: 0.95rem;
  color: #1e40af;
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

  .section {
    background: #111827;
    border-color: #374151;
  }

  .section h2 {
    color: #e5e7eb;
  }

  .product-name {
    color: #e5e7eb;
  }

  .product-price {
    color: #6ee7b7;
  }

  .extra-wrapper {
    background: #7f1d1d;
    border-color: #fca5a5;
  }

  .dom-info {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #6ee7b7;
    color: #d1fae5;
  }

  .dom-info.warning {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }

  .tip {
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    border-color: #60a5fa;
    color: #dbeafe;
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
                  <Layers className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">No DOM Nodes</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Fragments don't add any extra elements to the DOM tree.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Two Syntaxes</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Short <code className="px-1 bg-slate-200 dark:bg-slate-800 rounded">&lt;&gt;&lt;/&gt;</code> or full <code className="px-1 bg-slate-200 dark:bg-slate-800 rounded">&lt;Fragment&gt;</code> for keys.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Clean Markup</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keeps HTML semantic and prevents CSS layout issues.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Always Available</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Built into React - no imports needed for <code className="px-1 bg-slate-200 dark:bg-slate-800 rounded">&lt;&gt;</code> syntax!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use Fragments whenever you need to return multiple elements. Keep your DOM clean and semantic!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
