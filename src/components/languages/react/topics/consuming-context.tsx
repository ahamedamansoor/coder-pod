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
  Zap,
  Eye,
  Code,
  Code2,
  Monitor,
  Settings,
  Globe,
  ArrowRight,
  AlertTriangle,
  Radio,
  Wifi,
  Layers,
  TreePine,
  Users,
  MessageSquare,
  Share2,
  FileText,
  Shield,
  Target,
  Database,
  ShoppingBag,
  Plus,
  Minus,
  Trash2,
} from 'lucide-react';

export default function ConsumingContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Eye}
        category="React · Context (Consumption)"
        title="Consuming Context"
        description="Master how to consume React Context values with step-by-step guidance, practical examples, and best practices."
        colorTheme="green"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Understanding Context Consumption */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Understanding Context Consumption"
              description="How components access and use context values"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Consuming context is like <strong>connecting to a data pipeline</strong> - components can tap into the context stream and access the data they need without receiving it through props.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">🎯 useContext Hook</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Modern approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Clean syntax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Works in function components</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-3">📦 Context.Consumer</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">Legacy approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">Render prop pattern</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <span className="text-sm font-medium">Works in class components</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Context Consumption */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Context Consumption Guide"
              description="Learn how to consume context values properly"
              size="lg"
            />

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Import useContext Hook</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, import the useContext hook from React. This is the modern way to consume context in function components.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Import useContext hook</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> <span className="text-blue-600">React, {'{'} useContext {'}'}</span> <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Best Practice</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              Always import useContext at the top of your component file.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-purple-200 dark:border-purple-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Import the Context</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Import the context you want to consume. This could be from a separate file or defined in the same file.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Import the context</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> <span className="text-blue-600">{'MyContext'}</span> <span className="text-purple-600">from</span> <span className="text-green-600">'./MyContext'</span>;
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Why Import Context?</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              You need the context object to tell useContext which context value to access.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 3: Use useContext Hook</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Call useContext with your context object to access the current context value.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Consume the context</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">MyComponent</span>() {'{'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> contextValue = <span className="text-blue-600">useContext</span>(MyContext);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;div&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            Value: {'{'}contextValue{'}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;/div&gt;</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Use the Context Value</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the context value in your component's JSX or logic. The value will update automatically when the context changes.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Use the context value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">UserComponent</span>() {'{'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> {'{'} user, updateUser {'}'} = <span className="text-blue-600">useContext</span>(UserContext);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;div&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;h1&gt;</span>Welcome, {'{'}user.name{'}'}<span className="text-gray-500">&lt;/h1&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">{`&lt;button onClick={() => updateUser({...user, name: 'New Name'})}&gt;`}</span>
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            Update Name
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;/button&gt;</span>
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;/div&gt;</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practical Example 1 */}
        <div className="space-y-6">
          <TopicTitle
            icon={<ShoppingBag className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example 1: Shopping Cart Context"
            description="Complete shopping cart with context consumption"
            size="lg"
          />
          
          <FrontendCodePreview
            learningContext="react"
            title="Shopping Cart Context - Complete Implementation"
            description="A practical example of consuming shopping cart context with add, remove, and update functionality"
            colorTheme="green"
            react={`// Step 1: Create Shopping Cart Context
const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  clearCart: () => {}
});

// Step 2: Cart Provider Component
function CartProvider({ children }) {
  const [items, setItems] = React.useState([]);

  const addItem = (product) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (productId) => {
    setItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    items,
    total,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Step 3: Custom Hook for cart consumption
function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

// Step 4: Product Component
function Product(props) {
  const { addItem } = useCart();
  const id = props.id;
  const name = props.name;
  const priceValue = props.price || 0;

  return (
    <div className="product">
      <h3>{name}</h3>
      <p className="price">\${priceValue ? priceValue.toFixed(2) : '0.00'}</p>
      <button onClick={() => addItem({ id, name, price: priceValue })} className="add-btn">
        Add to Cart
      </button>
    </div>
  );
}

// Step 5: Cart Item Component
function CartItem(props) {
  const item = props.item;
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">\${item.price ? item.price.toFixed(2) : '0.00'}</span>
      </div>
      <div className="item-controls">
        <button 
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="quantity-btn"
        >
          +
        </button>
        <button 
          onClick={() => removeItem(item.id)}
          className="remove-btn"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

// Step 6: Cart Component
function Cart() {
  const { items, total, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="cart-summary">
            <div className="total">Total: \${total.toFixed(2)}</div>
            <button onClick={clearCart} className="clear-btn">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// Step 7: Product List Component
function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Mouse', price: 29.99 },
    { id: 3, name: 'Keyboard', price: 79.99 },
    { id: 4, name: 'Monitor', price: 299.99 }
  ];

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products-grid">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

// Step 8: Root App Component
function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="header">
          <h1>🛒 Shopping Cart Demo</h1>
        </header>
        <main className="main">
          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  );
}

// ReactDOM integration
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://ununpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://--/pkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, createContext, useContext, useState } = React;
  const { createRoot } = ReactDOM;

  // Create Shopping Cart Context
  const CartContext = createContext({
    items: [],
    total: 0,
    addItem: () => {},
    removeItem: () => {},
    updateQuantity: () => {},
    clearCart: () => {}
  });

  // Cart Provider Component
  function CartProvider({ children }) {
    const [items, setItems] = useState([]);

    const addItem = (product) => {
      setItems(prevItems => {
        const existingItem = prevItems.find(item => item.id === product.id);
        if (existingItem) {
          return prevItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevItems, { ...product, quantity: 1 }];
      });
    };

    const removeItem = (productId) => {
      setItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === productId
            ? { ...item, quantity }
            : item
        )
      );
    };

    const clearCart = () => {
      setItems([]);
    };

    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const value = {
      items,
      total,
      addItem,
      removeItem,
      updateQuantity,
      clearCart
    };

    return h(CartContext.Provider, { value }, children);
  }

  // Custom Hook for cart consumption
  function useCart() {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  }

  // Product Component
  function Product(props) {
    const id = props.id;
    const name = props.name;
    const price = props.price || 0;
    const { addItem } = useCart();

    return h('div', { className: 'product' }, 
      h('h3', {}, name),
      h('p', { className: 'price' }, '$' + (price ? price.toFixed(2) : '0.00')),
      h('button', { 
        onClick: () => addItem({ id, name, price }), 
        className: 'add-btn' 
      }, 'Add to Cart')
    );
  }

  // Cart Item Component
  function CartItem(props) {
    const item = props.item;
    const { updateQuantity, removeItem } = useCart();

    return h('div', { className: 'cart-item' }, 
      h('div', { className: 'item-info' }, 
        h('span', { className: 'item-name' }, item.name),
        h('span', { className: 'item-price' }, '$' + (item.price ? item.price.toFixed(2) : '0.00'))
      ),
      h('div', { className: 'item-controls' }, 
        h('button', { 
          onClick: () => updateQuantity(item.id, item.quantity - 1),
          className: 'quantity-btn'
        }, '-'),
        h('span', { className: 'quantity' }, item.quantity),
        h('button', { 
          onClick: () => updateQuantity(item.id, item.quantity + 1),
          className: 'quantity-btn'
        }, '+'),
        h('button', { 
          onClick: () => removeItem(item.id),
          className: 'remove-btn'
        }, '🗑️')
      )
    );
  }

  // Cart Component
  function Cart() {
    const { items, total, clearCart } = useCart();

    if (items.length === 0) {
      return h('div', { className: 'cart' }, 
        h('h2', {}, 'Shopping Cart'),
        h('p', { className: 'empty-cart' }, 'Your cart is empty')
      );
    }

    return h('div', { className: 'cart' }, 
      h('h2', {}, 'Shopping Cart'),
      items.map(item => h(CartItem, { key: item.id, item })),
      h('div', { className: 'cart-summary' }, 
        h('div', { className: 'total' }, 'Total: $' + total.toFixed(2)),
        h('button', { onClick: clearCart, className: 'clear-btn' }, 'Clear Cart')
      )
    );
  }

  // Product List Component
  function ProductList() {
    const products = [
      { id: 1, name: 'Laptop', price: 999.99 },
      { id: 2, name: 'Mouse', price: 29.99 },
      { id: 3, name: 'Keyboard', price: 79.99 },
      { id: 4, name: 'Monitor', price: 299.99 }
    ];

    return h('div', { className: 'product-list' }, 
      h('h2', {}, 'Products'),
      h('div', { className: 'products-grid' }, 
        products.map(product => h(Product, { key: product.id, ...product }))
      )
    );
  }

  // App Component
  function App() {
    return h(CartProvider, {}, 
      h('div', { className: 'app' }, 
        h('header', { className: 'header' }, 
          h('h1', {}, '🛒 Shopping Cart Demo')
        ),
        h('main', { className: 'main' }, 
          h(ProductList),
          h(Cart)
        )
      )
    );
  }

  // Render the app
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  padding: 20px;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 40px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header h1 {
  color: #059669;
  font-size: 2rem;
  font-weight: 700;
}

.main {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

/* Product List Styles */
.product-list {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.product-list h2 {
  color: #059669;
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.product {
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
  transition: transform 0.2s ease;
}

.product:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product h3 {
  color: #1e293b;
  margin-bottom: 10px;
  font-size: 1.1rem;
}

.price {
  color: #059669;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 15px;
}

.add-btn {
  width: 100%;
  padding: 10px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-btn:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-1px);
}

/* Cart Styles */
.cart {
  background: rgba(255, 255, 255, 0.95);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.cart h2 {
  color: #059669;
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.empty-cart {
  text-align: center;
  color: #64748b;
  font-style: italic;
  padding: 40px 0;
}

.cart-item {
  background: #f8fafc;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  margin-bottom: 15px;
}

.item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.item-name {
  font-weight: 600;
  color: #1e293b;
}

.item-price {
  color: #059669;
  font-weight: 600;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #d1d5db;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.quantity-btn:hover {
  background: #f3f4f6;
  border-color: #9ca3af;
}

.quantity {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #374151;
}

.remove-btn {
  width: 30px;
  height: 30px;
  border: 1px solid #ef4444;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  color: #ef4444;
  transition: all 0.2s ease;
}

.remove-btn:hover {
  background: #ef4444;
  color: white;
}

.cart-summary {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #e2e8f0;
}

.total {
  font-size: 1.2rem;
  font-weight: 700;
  color: #059669;
  margin-bottom: 15px;
}

.clear-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.clear-btn:hover {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
  transform: translateY(-1px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main {
    grid-template-columns: 1fr;
  }
  
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .header {
    padding: 15px 20px;
  }
  
  .header h1 {
    font-size: 1.5rem;
  }
}`}
          />
        </div>
      </div>
    </div>
  );
}
