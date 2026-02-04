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
  AlertCircle,
  CheckCircle2,
  XCircle,
  Zap,
  MousePointer2,
  RefreshCw,
  GitBranch,
  Code2,
  ShoppingCart,
} from 'lucide-react';

export default function SeparatingEventsFromEffects() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={GitBranch}
        category="React · Escape Hatches"
        title="Separating Events from Effects"
        description="Learn the crucial difference between reactive logic in Effects and non-reactive logic in Event Handlers, and when to use each."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Event Handlers vs Effects */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<GitBranch className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Event Handlers vs Effects"
              description="Two types of logic in React"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              React components have two types of logic: <strong>Event Handlers</strong> (non-reactive) and <strong>Effects</strong> (reactive). Choosing the right one is crucial!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <MousePointer2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Event Handlers</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Run in response to <strong>specific interactions</strong></li>
                  <li>• Triggered by user actions (click, type, etc.)</li>
                  <li>• <strong>Not reactive</strong> - don't re-run automatically</li>
                  <li>• Can contain non-reactive logic</li>
                </ul>
                <div className="mt-3 bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>function handleClick() {'{'}</div>
                    <div className="pl-2">// Runs only on click</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Effects</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Run whenever values <strong>change</strong></li>
                  <li>• Synchronize with external systems</li>
                  <li>• <strong>Reactive</strong> - re-run when dependencies change</li>
                  <li>• All code must be reactive</li>
                </ul>
                <div className="mt-3 bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">// Runs on every render</div>
                    <div>{'}'}, [deps]);</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Key Question</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Ask yourself: "Should this logic run because the user did something <strong>specific</strong>, or because something in the component <strong>changed</strong>?"
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Problem: Mixing Logic */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertCircle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="The Problem: Mixing Reactive and Non-Reactive Logic"
              description="Why it causes bugs"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Sometimes you need <strong>non-reactive logic</strong> inside an Effect. This is problematic because Effects re-run when <em>any</em> dependency changes.
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-6 h-6 text-red-500" />
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Problematic Code</h4>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs mb-3">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>function ProductPage({'{ product }'}) {'{'}</div>
                  <div className="pl-2">const [purchased, setPurchased] = useState(false);</div>
                  <div className="mt-2"></div>
                  <div className="pl-2 text-red-600 dark:text-red-400">// Problem: Notification fires on EVERY product change!</div>
                  <div className="pl-2">useEffect(() =&gt; {'{'}</div>
                  <div className="pl-4">if (purchased) {'{'}</div>
                  <div className="pl-6">showNotification('Thanks for your purchase!');</div>
                  <div className="pl-4">{'}'}</div>
                  <div className="pl-2">{'}'}, [purchased, product]); <span className="text-red-600 dark:text-red-400">// ❌ Runs when product changes</span></div>
                  <div>{'}'}</div>
                </div>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">
                The notification shouldn't fire just because the user browsed to a different product!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example: Shopping Cart */}
        <div className="space-y-6">
          <TopicTitle
            icon={<ShoppingCart className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Shopping Cart Notification"
            description="Proper separation of event and Effect logic"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Product Purchase with Correct Separation"
            description="Notification only shows on purchase, not on product change"
            colorTheme="green"
            react={`function ShoppingApp() {
  const [selectedProduct, setSelectedProduct] = React.useState('Laptop');
  const [cartItems, setCartItems] = React.useState([]);
  const [notification, setNotification] = React.useState('');

  // ✅ Event Handler - Non-reactive logic
  function handlePurchase() {
    const item = selectedProduct;
    setCartItems([...cartItems, item]);
    
    // Show notification ONLY when user clicks buy
    setNotification('✅ Added ' + item + ' to cart!');
    setTimeout(() => setNotification(''), 3000);
  }

  return (
    <div className="container">
      <h1>🛒 Shopping Cart</h1>

      {notification && (
        <div className="notification">
          {notification}
        </div>
      )}

      <div className="products">
        <button
          onClick={() => setSelectedProduct('Laptop')}
          className={selectedProduct === 'Laptop' ? 'active' : ''}
        >
          💻 Laptop - $999
        </button>
        <button
          onClick={() => setSelectedProduct('Phone')}
          className={selectedProduct === 'Phone' ? 'active' : ''}
        >
          📱 Phone - $699
        </button>
        <button
          onClick={() => setSelectedProduct('Tablet')}
          className={selectedProduct === 'Tablet' ? 'active' : ''}
        >
          📟 Tablet - $499
        </button>
      </div>

      <div className="selected">
        <h3>Selected: {selectedProduct}</h3>
        <button onClick={handlePurchase} className="btn-buy">
          Add to Cart
        </button>
      </div>

      <div className="cart">
        <h3>Cart ({cartItems.length} items)</h3>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty">Cart is empty</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="cart-item">
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="info">
        💡 Notification only shows when you click "Add to Cart"!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ShoppingApp />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function ShoppingApp() {
    const [selectedProduct, setSelectedProduct] = useState('Laptop');
    const [cartItems, setCartItems] = useState([]);
    const [notification, setNotification] = useState('');

    function handlePurchase() {
      const item = selectedProduct;
      setCartItems([...cartItems, item]);
      
      setNotification('✅ Added ' + item + ' to cart!');
      setTimeout(() => setNotification(''), 3000);
    }

    return h('div', { className: 'container' },
      h('h1', null, '🛒 Shopping Cart'),

      notification && h('div', { className: 'notification' }, notification),

      h('div', { className: 'products' },
        h('button', {
          onClick: () => setSelectedProduct('Laptop'),
          className: selectedProduct === 'Laptop' ? 'active' : ''
        }, '💻 Laptop - $999'),
        h('button', {
          onClick: () => setSelectedProduct('Phone'),
          className: selectedProduct === 'Phone' ? 'active' : ''
        }, '📱 Phone - $699'),
        h('button', {
          onClick: () => setSelectedProduct('Tablet'),
          className: selectedProduct === 'Tablet' ? 'active' : ''
        }, '📟 Tablet - $499')
      ),

      h('div', { className: 'selected' },
        h('h3', null, 'Selected: ' + selectedProduct),
        h('button', {
          onClick: handlePurchase,
          className: 'btn-buy'
        }, 'Add to Cart')
      ),

      h('div', { className: 'cart' },
        h('h3', null, 'Cart (' + cartItems.length + ' items)'),
        h('div', { className: 'cart-items' },
          cartItems.length === 0
            ? h('p', { className: 'empty' }, 'Cart is empty')
            : cartItems.map((item, i) =>
                h('div', { key: i, className: 'cart-item' }, item)
              )
        )
      ),

      h('div', { className: 'info' },
        '💡 Notification only shows when you click "Add to Cart"!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ShoppingApp));
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

.notification {
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #10b981;
  text-align: center;
  font-weight: 600;
  color: #065f46;
  margin-bottom: 20px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 25px;
}

.products button {
  padding: 15px 10px;
  background: #f3f4f6;
  color: #6b7280;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.products button:hover {
  background: #e5e7eb;
}

.products button.active {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-color: #10b981;
}

.selected {
  background: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  text-align: center;
}

.selected h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 18px;
}

.btn-buy {
  padding: 14px 28px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-buy:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.cart {
  background: #f9fafb;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.cart h3 {
  color: #374151;
  margin-bottom: 15px;
  font-size: 18px;
}

.cart-items {
  max-height: 200px;
  overflow-y: auto;
}

.cart-item {
  background: white;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 8px;
  font-weight: 500;
  color: #1f2937;
}

.empty {
  color: #9ca3af;
  text-align: center;
  padding: 20px;
  font-style: italic;
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

  .notification {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    border-color: #10b981;
    color: #d1fae5;
  }

  .products button {
    background: #374151;
    color: #9ca3af;
    border-color: #4b5563;
  }

  .products button:hover {
    background: #4b5563;
  }

  .products button.active {
    background: linear-gradient(135deg, #6ee7b7 0%, #10b981 100%);
    color: #064e3b;
    border-color: #6ee7b7;
  }

  .selected {
    background: #111827;
  }

  .selected h3 {
    color: #e5e7eb;
  }

  .cart {
    background: #111827;
  }

  .cart h3 {
    color: #e5e7eb;
  }

  .cart-item {
    background: #1f2937;
    color: #e5e7eb;
  }

  .empty {
    color: #6b7280;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* When to Use Each */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code2 className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="When to Use Event Handlers vs Effects"
              description="Decision guide"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <h4 className="font-bold text-green-700 dark:text-green-300">Use Event Handlers When:</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✅ User clicks a button</li>
                    <li>✅ User submits a form</li>
                    <li>✅ User types in input</li>
                    <li>✅ Logic runs for a <strong>specific action</strong></li>
                    <li>✅ Need non-reactive behavior</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-2">Example:</p>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs text-slate-800 dark:text-slate-200">
                    <div>function handleBuy() {'{'}</div>
                    <div className="pl-2">showNotification();</div>
                    <div className="pl-2">saveToCart();</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center gap-2 mb-3">
                    <RefreshCw className="w-6 h-6 text-purple-500" />
                    <h4 className="font-bold text-purple-700 dark:text-purple-300">Use Effects When:</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>✅ Component appears on screen</li>
                    <li>✅ Prop or state changes</li>
                    <li>✅ Need to sync with external system</li>
                    <li>✅ Logic runs <strong>automatically</strong></li>
                    <li>✅ Need reactive behavior</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-2">Example:</p>
                  <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono text-xs text-slate-800 dark:text-slate-200">
                    <div>useEffect(() =&gt; {'{'}</div>
                    <div className="pl-2">connectToRoom(id);</div>
                    <div className="pl-2">return () =&gt; disconnect();</div>
                    <div>{'}'}, [id]);</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Decision Tree */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-950/10 dark:to-amber-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Quick Decision Guide"
              description="Follow this flowchart"
              size="lg"
            />

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-200 dark:border-orange-800">
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-2">
                    Question: Is this logic triggered by a specific user interaction?
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border-2 border-green-500">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      <p className="font-bold text-green-700 dark:text-green-300">YES → Event Handler</p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      User clicked, typed, submitted? Use <code className="px-1 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">onClick</code>, <code className="px-1 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">onChange</code>, etc.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border-2 border-purple-500">
                    <div className="flex items-center gap-2 mb-2">
                      <RefreshCw className="w-5 h-5 text-purple-600" />
                      <p className="font-bold text-purple-700 dark:text-purple-300">NO → Effect</p>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Needs to run automatically when component appears or values change? Use <code className="px-1 py-0.5 bg-white dark:bg-gray-900 rounded text-xs">useEffect</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-300 dark:border-orange-700">
              <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              <AlertTitle className="text-orange-900 dark:text-orange-100">Remember</AlertTitle>
              <AlertDescription className="text-orange-800 dark:text-orange-200">
                Event Handlers let you choose <strong>when</strong> things happen. Effects let React <strong>automatically</strong> keep things in sync!
              </AlertDescription>
            </Alert>
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
                  <MousePointer2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Event Handlers</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Non-reactive logic. Runs only when user performs a specific action. Perfect for handling interactions.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <RefreshCw className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Effects</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reactive logic. Runs automatically when dependencies change. Perfect for synchronization.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Don't Mix</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Avoid putting non-reactive logic in Effects. It will re-run when it shouldn't!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Lightbulb className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Ask First</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Before using an Effect, ask: "Is this triggered by a user action?" If yes, use an event handler!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <CheckCircle2 className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Keep event-specific logic in event handlers. Only use Effects for logic that needs to stay synchronized with React state or props.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
