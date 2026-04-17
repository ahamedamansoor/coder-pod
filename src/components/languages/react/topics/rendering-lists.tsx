'use client';

import React, { useState, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  List,
  Key,
  Layers,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Sparkles,
  Grid3X3,
  Package,
  Hash,
  Shield,
} from 'lucide-react';

export default function RenderingLists() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={List}
        category="React · Fundamentals"
        title="Rendering Lists"
        description="Master the art of displaying collections of data in React! Learn how to transform arrays into beautiful, interactive lists with proper key management."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is List Rendering? */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is List Rendering?"
              description="Transform arrays of data into beautiful UI elements!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>List rendering</strong> is the process of taking an array of data and converting each item into a React component. Instead of manually creating each element, you let React do the heavy lifting by mapping over your data and generating components automatically.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
                <div className="text-2xl mb-2">📋</div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Data Array</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Start with your collection of items</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">Map Function</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Transform each item into JSX</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
                <div className="text-2xl mb-2">✨</div>
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-2">UI Elements</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Beautiful components appear on screen</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Map Method */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Grid3X3 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="The Map Method"
              description="Your primary tool for transforming arrays into JSX!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The <strong>Array.map()</strong> method is the foundation of list rendering in React. It creates a new array by calling a function on every element of the original array, making it perfect for converting data into components.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="font-bold mb-4 text-center text-emerald-700 dark:text-emerald-300">Map Method Syntax</h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
              <div className="text-emerald-600 dark:text-emerald-400">// Basic map syntax</div>
              <pre className="text-xs">
{`const newArray = originalArray.map((item, index) => {
  return <Component key={index} data={item} />;
});`}
              </pre>
              <br/>
              <div className="text-emerald-600 dark:text-emerald-400">// Arrow function example</div>
              <pre className="text-xs">
{`const elements = data.map(item => <div>{item.name}</div>);`}
              </pre>
            </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">item</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">Current array element</p>
                </div>
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">index</p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400">Position in array (0-based)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Understanding Keys */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Key className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Understanding Keys"
              description="The secret ingredient for performant list rendering!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Keys</strong> are special string attributes that help React identify which items have changed, been added, or been removed. They give each list item a stable identity, allowing React to efficiently update the UI without re-rendering everything.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">✅ Good Keys</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Unique IDs:</strong> item.id, user.id
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Unique properties:</strong> item.email, item.slug
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Stable values:</strong> Don't change between renders
                    </div>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">❌ Bad Keys</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Array index:</strong> key={"{index}"}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Random values:</strong> Math.random()
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Non-unique values:</strong> item.name (if duplicates exist)
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Key Rule</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Keys should be <strong>unique</strong> among siblings, <strong>stable</strong> (don't change), and <strong>meaningful</strong> to the data.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Simple List Example */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Simple List Example"
              description="Create a beautiful product list with proper keys and styling!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Let's create a stunning product list that demonstrates proper list rendering techniques. This example shows how to transform an array of product data into a beautiful, responsive list with proper key management.
            </p>

            <FrontendCodePreviewReact
              title="Elite Product List"
              description="A beautiful product list with proper keys and external CSS"
              colorTheme="amber"
              react={`function ProductList() {
  // Sample product data
  const products = [
    { id: 1, name: 'Premium Laptop', price: 1299, category: 'Electronics' },
    { id: 2, name: 'Wireless Headphones', price: 199, category: 'Audio' },
    { id: 3, name: 'Smart Watch', price: 349, category: 'Wearables' },
    { id: 4, name: 'Mechanical Keyboard', price: 149, category: 'Accessories' }
  ];
  
  return (
    <div className="product-container">
      <div className="product-header">
        <h2 className="product-title">Featured Products</h2>
        <p className="product-subtitle">Premium selection for you</p>
      </div>
      
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <div className="product-item-header">
              <h3 className="product-name">{product.name}</h3>
              <span className="product-price">\${product.price}</span>
            </div>
            <span className="product-category">{product.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="background-pattern" />
      <ProductList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 30%, #fde68a 70%, #fcd34d 100%);
}

/* App Container */
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 30%, #fde68a 70%, #fcd34d 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Product Container */
.product-container {
  background: linear-gradient(145deg, #fef7ed 0%, #fef3c7 50%, #fde68a 100%);
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 0 20px 60px rgba(245, 158, 11, 0.25), inset 0 1px 0 rgba(251, 191, 36, 0.3);
  border: 2px solid #fbbf24;
  min-width: 320px;
  max-width: 480px;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  z-index: 1;
}

.product-header {
  text-align: center;
  margin-bottom: 32px;
}

.product-title {
  font-size: 2rem;
  font-weight: bold;
  color: #92400e;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.product-subtitle {
  font-size: 1rem;
  color: #78350f;
  margin: 0;
  opacity: 0.8;
}

.product-list {
  display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  background: linear-gradient(145deg, #ffffff 0%, #fef3c7 100%);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #fbbf24;
  box-shadow: 0 8px 24px rgba(245, 158, 11, 0.15);
  transition: all 0.3s ease;
}

.product-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(245, 158, 11, 0.2);
}

.product-item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.product-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #92400e;
  margin: 0;
}

.product-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #d97706;
  margin: 0;
}

.product-category {
  display: inline-block;
  padding: 4px 12px;
  background: rgba(245, 158, 11, 0.1);
  color: #92400e;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #78350f 0%, #92400e 30%, #b45309 70%, #f59e0b 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #78350f 0%, #92400e 30%, #b45309 70%, #f59e0b 100%);
  }
  
  .background-pattern {
    background-image: radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%);
  }
  
  .product-container {
    background: linear-gradient(145deg, #78350f 0%, #92400e 50%, #b45309 100%);
    border-color: #f59e0b;
    box-shadow: 0 20px 60px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(251, 191, 36, 0.2);
  }
  
  .product-title {
    color: #fde68a;
  }
  
  .product-subtitle {
    color: #fef3c7;
  }
  
  .product-item {
    background: linear-gradient(145deg, #451a03 0%, #78350f 100%);
    border-color: #f59e0b;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }
  
  .product-name {
    color: #fde68a;
  }
  
  .product-price {
    color: #fbbf24;
  }
  
  .product-category {
    background: rgba(245, 158, 11, 0.2);
    color: #fde68a;
  }
}`}
            />

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Key Points</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>key={"{product.id}"}</strong> - Unique identifier for each item<br/>
                <strong>products.map()</strong> - Transform array to components<br/>
                <strong>Variable CSS</strong> - Dynamic styling with dark mode support
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Advanced List with Nested Data */}
        <Card className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Hash className="w-7 h-7 text-rose-600 dark:text-rose-400" />}
              title="Advanced List with Nested Data"
              description="Handle complex data structures with nested list rendering!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Real-world applications often have nested data structures. This example shows how to render lists within lists, creating sophisticated UIs that can handle complex hierarchical data while maintaining proper key management.
            </p>

            <FrontendCodePreviewReact
              title="Nested Data Explorer"
              description="A sophisticated list with nested data and external CSS"
              colorTheme="rose"
              react={`function DataExplorer() {
  // Sample nested data structure
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '💻',
      items: [
        { id: 'laptop', name: 'Laptops', count: 15 },
        { id: 'phone', name: 'Smartphones', count: 32 },
        { id: 'tablet', name: 'Tablets', count: 8 }
      ]
    },
    {
      id: 'clothing',
      name: 'Clothing',
      icon: '👕',
      items: [
        { id: 'shirts', name: 'Shirts', count: 45 },
        { id: 'pants', name: 'Pants', count: 28 },
        { id: 'shoes', name: 'Shoes', count: 19 }
      ]
    },
    {
      id: 'books',
      name: 'Books',
      icon: '📚',
      items: [
        { id: 'fiction', name: 'Fiction', count: 67 },
        { id: 'nonfiction', name: 'Non-Fiction', count: 43 },
        { id: 'technical', name: 'Technical', count: 31 }
      ]
    }
  ];
  
  return (
    <div className="data-explorer">
      <div className="explorer-header">
        <h2 className="explorer-title">Data Explorer</h2>
        <p className="explorer-subtitle">Browse through nested categories</p>
      </div>
      
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-name">{category.name}</h3>
            </div>
            
            <div className="item-list">
              {category.items.map(item => (
                <div key={item.id} className="item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-count">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="background-pattern" />
      <DataExplorer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 30%, #fca5a5 70%, #fb7185 100%);
}

/* App Container */
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 30%, #fca5a5 70%, #fb7185 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

/* Data Explorer */
.data-explorer {
  background: linear-gradient(145deg, #fef2f2 0%, #fecaca 50%, #fca5a5 100%);
  border-radius: 24px;
  padding: 40px 32px;
  box-shadow: 0 20px 60px rgba(244, 63, 94, 0.25), inset 0 1px 0 rgba(251, 113, 133, 0.3);
  border: 2px solid #fb7185;
  min-width: 320px;
  max-width: 520px;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  z-index: 1;
}

.explorer-header {
  text-align: center;
  margin-bottom: 32px;
}

.explorer-title {
  font-size: 2rem;
  font-weight: bold;
  color: #881337;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.explorer-subtitle {
  font-size: 1rem;
  color: #be123c;
  margin: 0;
  opacity: 0.8;
}

.category-list {
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.category {
  background: linear-gradient(145deg, #ffffff 0%, #fef2f2 100%);
  border-radius: 16px;
  padding: 20px;
  border: 1px solid #fb7185;
  box-shadow: 0 8px 24px rgba(244, 63, 94, 0.15);
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;
  max-width: 280px;
}

.category:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(244, 63, 94, 0.2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.category-icon {
  font-size: 1.5rem;
}

.category-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #881337;
  margin: 0;
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 36px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background: rgba(244, 63, 94, 0.05);
  border-radius: 8px;
  border: 1px solid rgba(244, 63, 94, 0.1);
  transition: all 0.2s ease;
}

.item:hover {
  background: rgba(244, 63, 94, 0.08);
  transform: translateX(2px);
}

.item-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: #be123c;
  margin: 0;
}

.item-count {
  font-size: 0.9rem;
  font-weight: 600;
  color: #d97706;
  background: rgba(245, 158, 11, 0.1);
  padding: 2px 8px;
  border-radius: 12px;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #881337 0%, #be123c 30%, #e11d48 70%, #f43f5e 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #881337 0%, #be123c 30%, #e11d48 70%, #f43f5e 100%);
  }
  
  .background-pattern {
    background-image: radial-gradient(circle at 20% 50%, rgba(244, 63, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(251, 113, 133, 0.1) 0%, transparent 50%);
  }
  
  .data-explorer {
    background: linear-gradient(145deg, #881337 0%, #be123c 50%, #e11d48 100%);
    border-color: #f43f5e;
    box-shadow: 0 20px 60px rgba(244, 63, 94, 0.4), inset 0 1px 0 rgba(251, 113, 133, 0.2);
  }
  
  .explorer-title {
    color: #fecaca;
  }
  
  .explorer-subtitle {
    color: #fca5a5;
  }
  
  .category {
    background: linear-gradient(145deg, #4c0519 0%, #7f1d1d 100%);
    border-color: #f43f5e;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    flex: 1;
    min-width: 200px;
    max-width: 280px;
  }
  
  .category-name {
    color: #fecaca;
  }
  
  .item {
    background: rgba(244, 63, 94, 0.1);
    border-color: rgba(244, 63, 94, 0.2);
  }
  
  .item:hover {
    background: rgba(244, 63, 94, 0.15);
  }
  
  .item-name {
    color: #fca5a5;
  }
  
  .item-count {
    background: rgba(245, 158, 11, 0.2);
    color: #fbbf24;
  }
}`}
            />

            <Alert className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-300 dark:border-rose-700">
              <Sparkles className="h-5 w-5 text-rose-600 dark:text-rose-400" />
              <AlertTitle className="text-rose-900 dark:text-rose-100">Nested Keys</AlertTitle>
              <AlertDescription className="text-rose-800 dark:text-rose-200">
                <strong>key={"{category.id}"}</strong> - Unique key for each category<br/>
                <strong>key={"{item.id}"}</strong> - Unique key for each item<br/>
                <strong>Nested maps</strong> - Lists within lists for complex data
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Performance Optimization & Advanced Techniques */}
        <Card className="border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-violet-600 dark:text-violet-400" />}
              title="Performance Optimization & Advanced Techniques"
              description="Master high-performance list rendering and advanced patterns!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Performance optimization</strong> is crucial when dealing with large lists. Learn advanced techniques like virtualization, memoization, and efficient state management to create lightning-fast list components that scale beautifully.
            </p>

            {/* Virtualization Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-violet-200 dark:border-violet-800">
              <h4 className="font-bold mb-4 text-violet-800 dark:text-violet-200">🚀 List Virtualization</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-3 text-violet-700 dark:text-violet-400">What is Virtualization?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Only render visible items instead of the entire list. Perfect for lists with 1000+ items.
                  </p>
                  <div className="bg-violet-50 dark:bg-violet-950/30 p-3 rounded-lg font-mono text-xs">
                    <div>{'// Only render 20 items at a time'}</div>
                    <div>{'const visibleItems = items.slice(startIndex, endIndex);'}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-violet-700 dark:text-violet-400">Popular Libraries</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="text-violet-500">•</span>
                      <span><strong>react-window:</strong> Lightweight virtualization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-500">•</span>
                      <span><strong>react-virtualized:</strong> Feature-rich solution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-violet-500">•</span>
                      <span><strong>@tanstack/react-virtual:</strong> Modern approach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Memoization Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-violet-200 dark:border-violet-800">
              <h4 className="font-bold mb-4 text-violet-800 dark:text-violet-200">⚡ Memoization Techniques</h4>
              <div className="space-y-4">
                <div className="p-4 bg-violet-50 dark:bg-violet-950/30 rounded-lg">
                  <p className="font-semibold text-sm mb-2 text-violet-700 dark:text-violet-400">React.memo for List Items</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    <div>{'const ListItem = React.memo(({ item }) => {'}</div>
                    <div className="pl-4">{'return <div>{item.name}</div>;'}</div>
                    <div>{'});'}</div>
                  </div>
                </div>
                <div className="p-4 bg-violet-50 dark:bg-violet-950/30 rounded-lg">
                  <p className="font-semibold text-sm mb-2 text-violet-700 dark:text-violet-400">useMemo for Expensive Operations</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    <div>{'const filteredItems = useMemo(() => {'}</div>
                    <div className="pl-4">{'return items.filter(item => item.active);'}</div>
                    <div>{'}, [items]);'}</div>
                  </div>
                </div>
                <div className="p-4 bg-violet-50 dark:bg-violet-950/30 rounded-lg">
                  <p className="font-semibold text-sm mb-2 text-violet-700 dark:text-violet-400">useCallback for Event Handlers</p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono text-xs">
                    <div>{'const handleClick = useCallback((id) => {'}</div>
                    <div className="pl-4">{'onSelect(id);'}</div>
                    <div>{'}, [onSelect]);'}</div>
                  </div>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Optimized List with Memoization"
              description="A high-performance list using React.memo and useMemo"
              colorTheme="violet"
              react={`// Memoized list item component
const ListItem = React.memo(({ item, onSelect, isSelected }) => {
  return (
    <div 
      className={\`list-item \${isSelected ? 'selected' : ''}\`}
      onClick={() => onSelect(item.id)}
    >
      <span className="item-name">{item.name}</span>
      <span className="item-price">\${item.price}</span>
      {isSelected && <span className="selected-badge">✓</span>}
    </div>
  );
});

// Optimized list component (without hooks for compatibility)
function OptimizedProductList({ products, selectedId, onSelect }) {
  // Sort products by price (simulating useMemo)
  const sortedProducts = [...products].sort((a, b) => a.price - b.price);
  
  // Event handler (simulating useCallback)
  const handleSelect = (id) => {
    onSelect(id);
  };
  
  return (
    <div className="optimized-list">
      <h3 className="list-title">Optimized Products</h3>
      <div className="list-container">
        {sortedProducts.map(product => (
          <ListItem
            key={product.id}
            item={product}
            onSelect={handleSelect}
            isSelected={selectedId === product.id}
          />
        ))}
      </div>
    </div>
  );
}

// Simple usage example
function App() {
  // Simulate state without useState
  let selectedId = null;
  
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 79 },
    { id: 4, name: 'Monitor', price: 299 },
    { id: 5, name: 'Webcam', price: 49 }
  ];
  
  const handleSelect = (id) => {
    selectedId = id;
    console.log('Selected product:', id);
  };
  
  return (
    <div className="app-container">
      <OptimizedProductList 
        products={products}
        selectedId={selectedId}
        onSelect={handleSelect}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
              css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 30%, #d8b4fe 70%, #c084fc 100%);
}

/* App Container */
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 30%, #d8b4fe 70%, #c084fc 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
}

/* Optimized List */
.optimized-list {
  background: linear-gradient(145deg, #ffffff 0%, #f3e8ff 100%);
  border-radius: 20px;
  padding: 32px 24px;
  box-shadow: 0 16px 48px rgba(139, 92, 246, 0.2);
  border: 2px solid #a78bfa;
  min-width: 360px;
  max-width: 480px;
  font-family: system-ui, -apple-system, sans-serif;
}

.list-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #6b21a8;
  margin: 0 0 20px 0;
  text-align: center;
}

.list-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(145deg, #faf5ff 0%, #f3e8ff 100%);
  border: 1px solid #ddd6fe;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.list-item:hover {
  background: linear-gradient(145deg, #ede9fe 0%, #ddd6fe 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.15);
}

.list-item.selected {
  background: linear-gradient(145deg, #7c3aed 0%, #6d28d9 100%);
  border-color: #6d28d9;
  color: white;
}

.item-name {
  font-weight: 600;
  color: inherit;
}

.item-price {
  font-weight: bold;
  color: #7c3aed;
}

.list-item.selected .item-price {
  color: #fbbf24;
}

.selected-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: #10b981;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 30%, #6d28d9 70%, #7c3aed 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 30%, #6d28d9 70%, #7c3aed 100%);
  }
  
  .optimized-list {
    background: linear-gradient(145deg, #4c1d95 0%, #5b21b6 100%);
    border-color: #7c3aed;
    box-shadow: 0 16px 48px rgba(139, 92, 246, 0.4);
  }
  
  .list-title {
    color: #e9d5ff;
  }
  
  .list-item {
    background: linear-gradient(145deg, #581c87 0%, #4c1d95 100%);
    border-color: #6d28d9;
    color: #e9d5ff;
  }
  
  .list-item:hover {
    background: linear-gradient(145deg, #6d28d9 0%, #5b21b6 100%);
  }
  
  .item-name {
    color: inherit;
  }
  
  .item-price {
    color: #a78bfa;
  }
  
  .list-item.selected .item-price {
    color: #fbbf24;
  }
}`}
            />

            {/* Common Pitfalls Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-violet-200 dark:border-violet-800">
                <h4 className="font-bold mb-3 text-violet-800 dark:text-violet-200">⚠️ Common Pitfalls</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Using index as key:</strong> Causes re-render issues when list changes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Inline functions in map:</strong> Creates new functions on every render</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Not memoizing expensive operations:</strong> Slow rendering with large data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Mutating props directly:</strong> Breaks React's optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-violet-200 dark:border-violet-800">
                <h4 className="font-bold mb-3 text-violet-800 dark:text-violet-200">✅ Performance Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Virtualize large lists:</strong> Only render visible items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Use React.memo:</strong> Prevent unnecessary re-renders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Debounce search/filter:</strong> Reduce expensive operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Paginate when possible:</strong> Split large datasets</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="List Rendering Best Practices"
              description="Master the art of creating performant, beautiful lists!"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">✅ Do's</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use <strong>unique, stable keys</strong> for each item</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Keep list components <strong>focused and simple</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use <strong>variable CSS</strong> for dynamic styling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Support <strong>dark mode</strong> in your designs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use <strong>semantic HTML</strong> within list items</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold mb-4 text-indigo-700 dark:text-indigo-300">❌ Don'ts</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't</strong> use array index as key for dynamic lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't</strong> forget keys when rendering lists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't</strong> mutate the original array</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't</strong> use non-unique values as keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't</strong> create complex logic inside map</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
              <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">🚀 Performance Tips</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm">Use React.memo for list items</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm">Virtualize large lists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm">Lazy load list data</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm">Paginate long lists</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm">Use useMemo for expensive operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-indigo-500" />
                    <span className="text-sm">Debounce search/filter operations</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
