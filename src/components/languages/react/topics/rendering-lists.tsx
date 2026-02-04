'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Code,
  List,
  Lightbulb,
  Zap,
  CheckCircle2,
  XCircle,
  Key,
  AlertTriangle,
  Sparkles,
  Filter,
  ArrowRight,
  Users
} from 'lucide-react';

export default function RenderingLists() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={List}
        category="React · Describing the UI"
        title="Rendering Lists"
        description="Learn how to transform arrays of data into lists of UI elements using JavaScript's map() function and the key prop!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<List className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is List Rendering?"
              description="Turning arrays of data into UI elements - the React way!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              In real apps, you often need to display lists of data: user profiles, products, comments, etc. Instead of manually writing each item, React lets you <strong>transform arrays into JSX elements</strong> using JavaScript's <code>map()</code> function. You provide the data, React creates the UI!
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-3 text-center">📊</div>
                <h4 className="font-bold mb-2 text-center">Data Array</h4>
                <div className="bg-cyan-50 dark:bg-cyan-950/20 p-3 rounded text-xs font-mono">
                  ['Apple', 'Banana', 'Orange']
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-3 text-center">⚙️</div>
                <h4 className="font-bold mb-2 text-center">map() Function</h4>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded text-xs text-center">
                  Transforms each item
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="text-3xl mb-3 text-center">✨</div>
                <h4 className="font-bold mb-2 text-center">JSX Elements</h4>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded text-xs">
                  {'<li>Apple</li>\n<li>Banana</li>\n<li>Orange</li>'}
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why is this powerful?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                You write the mapping logic once, and it works for any size array - 3 items or 3,000 items!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Your First List with map()"
            description="Transform an array into JSX using the map() function!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Rendering a Simple List"
            description="Use map() to transform an array of names into list items"
            colorTheme="cyan"
            react={`function FruitList() {
  const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grapes', '🍓 Strawberry'];
  
  return (
    <div className="container">
      <h2>Fruit Market</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FruitList />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function FruitList() {
    const fruits = ['🍎 Apple', '🍌 Banana', '🍊 Orange', '🍇 Grapes', '🍓 Strawberry'];
    
    return h('div', { className: 'container' },
      h('h2', null, 'Fruit Market'),
      h('ul', null,
        fruits.map((fruit, index) =>
          h('li', { key: index }, fruit)
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(FruitList));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
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
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  padding: 20px;
}

.container {
  background: white;
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  min-width: 300px;
}

.container h2 {
  color: #06b6d4;
  font-size: 2rem;
  margin: 0 0 20px 0;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 15px 20px;
  margin: 10px 0;
  border-radius: 12px;
  border-left: 4px solid #06b6d4;
  font-size: 1.1rem;
  color: #1e293b;
  transition: transform 0.2s;
}

li:hover {
  transform: translateX(5px);
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Key className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Key Prop - Super Important!"
              description="Keys help React identify which items have changed, been added, or removed"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When rendering lists, each element needs a unique <strong>key</strong> prop. Think of keys as IDs that help React track each item. When your list changes, React uses keys to figure out what changed efficiently, without re-rendering everything!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  ❌ Bad Keys
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded font-mono">
                    {'key={index}'}
                  </div>
                  <p className="text-xs text-muted-foreground">Using array index - problems when list changes!</p>
                  
                  <div className="bg-red-50 dark:bg-red-950/20 p-3 rounded font-mono">
                    {'key={Math.random()}'}
                  </div>
                  <p className="text-xs text-muted-foreground">Random keys - breaks React's tracking!</p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  ✅ Good Keys
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded font-mono">
                    {'key={item.id}'}
                  </div>
                  <p className="text-xs text-muted-foreground">Unique ID from your data - perfect!</p>
                  
                  <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded font-mono">
                    {'key={user.email}'}
                  </div>
                  <p className="text-xs text-muted-foreground">Unique property - works great!</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <AlertTriangle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Key Rules</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Keys must be <strong>unique among siblings</strong> and <strong>stable</strong> (same item = same key every time). Never use random values or changing indices!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Users className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Rendering Objects with Keys"
            description="Use unique IDs from your data as keys!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="User List with Proper Keys"
            description="Each user has a unique ID - perfect for keys!"
            colorTheme="cyan"
            react={`function UserList() {
  const users = [
    { id: 1, name: 'Sarah Johnson', role: 'Developer', avatar: '👩‍💻' },
    { id: 2, name: 'Mike Chen', role: 'Designer', avatar: '👨‍🎨' },
    { id: 3, name: 'Emma Davis', role: 'Manager', avatar: '👩‍💼' },
    { id: 4, name: 'John Smith', role: 'Engineer', avatar: '👨‍🔧' }
  ];
  
  return (
    <div className="container">
      <h2>Team Members</h2>
      <div className="user-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="avatar">{user.avatar}</div>
            <h3>{user.name}</h3>
            <p>{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserList />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function UserList() {
    const users = [
      { id: 1, name: 'Sarah Johnson', role: 'Developer', avatar: '👩‍💻' },
      { id: 2, name: 'Mike Chen', role: 'Designer', avatar: '👨‍🎨' },
      { id: 3, name: 'Emma Davis', role: 'Manager', avatar: '👩‍💼' },
      { id: 4, name: 'John Smith', role: 'Engineer', avatar: '👨‍🔧' }
    ];
    
    return h('div', { className: 'container' },
      h('h2', null, 'Team Members'),
      h('div', { className: 'user-grid' },
        users.map((user) =>
          h('div', { key: user.id, className: 'user-card' },
            h('div', { className: 'avatar' }, user.avatar),
            h('h3', null, user.name),
            h('p', null, user.role)
          )
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(UserList));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 700px;
}

.container h2 {
  color: #667eea;
  font-size: 2rem;
  margin: 0 0 30px 0;
  text-align: center;
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.user-card {
  background: linear-gradient(135deg, #f0f4ff 0%, #e8ecff 100%);
  padding: 25px;
  border-radius: 16px;
  text-align: center;
  border: 2px solid #667eea;
  transition: transform 0.2s, box-shadow 0.2s;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.avatar {
  font-size: 3rem;
  margin-bottom: 10px;
}

.user-card h3 {
  color: #667eea;
  font-size: 1.1rem;
  margin: 0 0 5px 0;
}

.user-card p {
  color: #8b5cf6;
  font-size: 0.9rem;
  margin: 0;
  font-weight: 600;
}`}
          />
        </div>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Filter className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Filtering Lists"
              description="Show only items that match certain criteria!"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              You can combine <code>filter()</code> with <code>map()</code> to display only certain items. First filter the array to get items that match your condition, then map over the filtered array to create JSX!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
              <h4 className="font-bold mb-3">Filter + Map Pattern</h4>
              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-muted-foreground">{'// Step 1: Filter the data'}</div>
                <div>const filtered = items.filter(item ={'>'} item.age {'>'} 18);</div>
                <div className="text-muted-foreground mt-3">{'// Step 2: Map to JSX'}</div>
                <div>filtered.map(item ={'>'} {'<Card key={item.id} />'})</div>
                <div className="text-muted-foreground mt-3">{'// Or chain them:'}</div>
                <div>items.filter(...).map(...)</div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Sparkles className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                You can chain filter() and map() for concise code: <code>items.filter().map()</code>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Filter className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Filtering in Action"
            description="Display products filtered by availability!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Product List with Filtering"
            description="Show only products that are in stock"
            colorTheme="cyan"
            react={`function ProductList() {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Mouse', price: '$29', inStock: true },
    { id: 3, name: 'Keyboard', price: '$79', inStock: false },
    { id: 4, name: 'Monitor', price: '$299', inStock: true },
    { id: 5, name: 'Webcam', price: '$59', inStock: false }
  ];
  
  const inStockProducts = products.filter(product => product.inStock);
  
  return (
    <div className="container">
      <h2>Available Products</h2>
      <p className="subtitle">
        {inStockProducts.length} of {products.length} in stock
      </p>
      <div className="product-list">
        {inStockProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <span className="badge">✅ In Stock</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProductList />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function ProductList() {
    const products = [
      { id: 1, name: 'Laptop', price: '$999', inStock: true },
      { id: 2, name: 'Mouse', price: '$29', inStock: true },
      { id: 3, name: 'Keyboard', price: '$79', inStock: false },
      { id: 4, name: 'Monitor', price: '$299', inStock: true },
      { id: 5, name: 'Webcam', price: '$59', inStock: false }
    ];
    
    const inStockProducts = products.filter(product => product.inStock);
    
    return h('div', { className: 'container' },
      h('h2', null, 'Available Products'),
      h('p', { className: 'subtitle' }, 
        inStockProducts.length, ' of ', products.length, ' in stock'
      ),
      h('div', { className: 'product-list' },
        inStockProducts.map((product) =>
          h('div', { key: product.id, className: 'product-card' },
            h('h3', null, product.name),
            h('p', { className: 'price' }, product.price),
            h('span', { className: 'badge' }, '✅ In Stock')
          )
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ProductList));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
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
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  padding: 20px;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  max-width: 600px;
}

.container h2 {
  color: #06b6d4;
  font-size: 2rem;
  margin: 0 0 10px 0;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin: 0 0 25px 0;
  font-size: 0.95rem;
}

.product-list {
  display: grid;
  gap: 15px;
}

.product-card {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #10b981;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateX(5px);
}

.product-card h3 {
  color: #1e293b;
  font-size: 1.2rem;
  margin: 0;
}

.price {
  color: #06b6d4;
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0;
}

.badge {
  background: #10b981;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}`}
          />
        </div>

        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">
                  Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these guidelines for rendering lists effectively!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>unique, stable IDs</strong> as keys (like <code>item.id</code>)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Extract list items into <strong>separate components</strong> for clarity</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <code>filter()</code> before <code>map()</code> to show <strong>specific items</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Keep keys <strong>consistent</strong> across renders</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <code>array.length</code> to show <strong>empty state messages</strong></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Don't Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>array index</strong> as key if list can reorder</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't use <strong>random values</strong> like <code>Math.random()</code> for keys</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't <strong>forget keys</strong> - React will warn you!</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't <strong>mutate the original array</strong> - use immutable methods</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Don't put <strong>complex logic</strong> inside <code>map()</code> - extract it!</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Common Patterns"
              description="Practical techniques for list rendering!"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <h4 className="font-bold mb-3 text-indigo-600">Empty State Handling</h4>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded text-sm space-y-2">
                  <div className="font-mono">{'{items.length === 0 ? ('}</div>
                  <div className="font-mono pl-4">{'<p>No items found</p>'}</div>
                  <div className="font-mono">{') : ('}</div>
                  <div className="font-mono pl-4">{'items.map(item => <Card key={item.id} />)'}</div>
                  <div className="font-mono">{')}'}</div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <h4 className="font-bold mb-3 text-indigo-600">Extracting to Component</h4>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded text-sm space-y-2">
                  <div className="font-mono">{'function UserCard({ user }) {'}</div>
                  <div className="font-mono pl-4">{'return <div>{user.name}</div>;'}</div>
                  <div className="font-mono">{'}'}</div>
                  <div className="font-mono mt-3">{'//'} Use it:</div>
                  <div className="font-mono">{'users.map(user => <UserCard key={user.id} user={user} />)'}</div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <h4 className="font-bold mb-3 text-indigo-600">Multiple Filters</h4>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded text-sm space-y-2">
                  <div className="font-mono">{'items'}</div>
                  <div className="font-mono pl-4">{'.filter(item => item.active)'}</div>
                  <div className="font-mono pl-4">{'.filter(item => item.price < 100)'}</div>
                  <div className="font-mono pl-4">{'.map(item => <Card key={item.id} />)'}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
