'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, Eye, Zap } from 'lucide-react';

export default function ConsumingContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Eye}
        category="React · Context API"
        title="Consuming Context"
        description="Learn different ways to consume context values, with a focus on the modern useContext Hook for clean and readable code."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Ways to Consume Context"
              description="Modern vs legacy approaches"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Modern: useContext Hook</Badge>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded mt-3">
                  {`const value = useContext(MyContext);`}
                </code>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-3">
                  <li>• Clean and simple</li>
                  <li>• Works in any function component</li>
                  <li>• Easy to read</li>
                  <li>• Recommended approach</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Legacy: Context.Consumer</Badge>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded mt-3 whitespace-pre-wrap">
                  {`<MyContext.Consumer>
  {value => <div>{value}</div>}
</MyContext.Consumer>`}
                </code>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mt-3">
                  <li>• Verbose render props</li>
                  <li>• Hard to read when nested</li>
                  <li>• Older approach</li>
                  <li>• Avoid in new code</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="useContext in Action - Live Demo"
            description="Multiple components consuming same context"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Shopping Cart Context"
            description="Add items, see multiple components update from shared context!"
            colorTheme="green"
            react={`// Create Cart Context
const CartContext = React.createContext();

// Cart Provider
function CartProvider({ children }) {
  const [items, setItems] = React.useState([]);

  const addItem = (product) => {
    setItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    total,
    itemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Header with cart badge (consumes context)
function Header() {
  const { itemCount } = React.useContext(CartContext);

  return (
    <header className="header">
      <h2>🛍️ My Store</h2>
      <div className="cart-badge">
        🛒 Cart
        {itemCount > 0 && (
          <span className="badge">{itemCount}</span>
        )}
      </div>
    </header>
  );
}

// Product list (consumes context to add items)
function ProductList() {
  const { addItem } = React.useContext(CartContext);

  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Mouse', price: 29 },
    { id: 3, name: 'Keyboard', price: 79 }
  ];

  return (
    <div className="product-list">
      <h3>Products</h3>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div>
            <strong>{product.name}</strong>
            <p className="price">\${product.price}</p>
          </div>
          <button onClick={() => addItem(product)} className="add-btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

// Cart display (consumes context)
function Cart() {
  const { items, updateQuantity, removeItem, total } = React.useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="cart">
        <h3>Shopping Cart</h3>
        <p className="empty">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <strong>{item.name}</strong>
            <p>\${item.price} × {item.quantity}</p>
          </div>
          <div className="item-controls">
            <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            <button onClick={() => removeItem(item.id)} className="remove">×</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <strong>Total:</strong> \${total.toFixed(2)}
      </div>
    </div>
  );
}

// Root App
function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <div className="content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
            html={`<div id="root"></div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  min-height: 100vh;
  padding: 20px;
}

.app {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.header {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header h2 {
  font-size: 1.5rem;
}

.cart-badge {
  position: relative;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  font-weight: 600;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ef4444;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 40px;
}

.product-list h3,
.cart h3 {
  color: #1f2937;
  margin-bottom: 20px;
  font-size: 1.3rem;
}

.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #f9fafb;
  border-radius: 12px;
  margin-bottom: 15px;
  border: 2px solid #e5e7eb;
}

.product-card strong {
  display: block;
  color: #1f2937;
  font-size: 16px;
}

.price {
  color: #3b82f6;
  font-weight: 600;
  margin-top: 5px;
}

.add-btn {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.add-btn:hover {
  background: #2563eb;
  transform: translateY(-2px);
}

.empty {
  text-align: center;
  color: #9ca3af;
  padding: 40px 20px;
  font-style: italic;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f9fafb;
  border-radius: 12px;
  margin-bottom: 10px;
  border: 2px solid #e5e7eb;
}

.item-info strong {
  display: block;
  color: #1f2937;
}

.item-info p {
  color: #6b7280;
  font-size: 14px;
  margin-top: 3px;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 10px;
}

.item-controls button {
  width: 32px;
  height: 32px;
  border: none;
  background: #3b82f6;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.item-controls button:hover {
  background: #2563eb;
}

.item-controls button.remove {
  background: #ef4444;
  font-size: 20px;
}

.item-controls button.remove:hover {
  background: #dc2626;
}

.item-controls span {
  min-width: 30px;
  text-align: center;
  font-weight: 600;
  color: #1f2937;
}

.cart-total {
  margin-top: 20px;
  padding: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border-radius: 12px;
  font-size: 1.2rem;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  .app {
    background: #1f2937;
  }

  .product-list h3,
  .cart h3 {
    color: #f3f4f6;
  }

  .product-card,
  .cart-item {
    background: #111827;
    border-color: #374151;
  }

  .product-card strong,
  .item-info strong {
    color: #f3f4f6;
  }

  .item-info p {
    color: #9ca3af;
  }

  .item-controls span {
    color: #f3f4f6;
  }
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
  }
}`}
          />
        </div>

        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Multiple Contexts"
              description="Consuming multiple contexts in one component"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Components can consume <strong>multiple contexts</strong> by calling useContext multiple times!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <code className="block text-sm whitespace-pre-wrap">
{`function MyComponent() {
  // Consume multiple contexts
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);

  return (
    <div style={{ background: theme.bg }}>
      <h1>{language.greeting}, {user.name}!</h1>
    </div>
  );
}`}
              </code>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">Use useContext Hook</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Modern, clean, and easy to read
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Works Anywhere</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Call in any function component
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Multiple Contexts</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Call useContext multiple times
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">No Provider = Error</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Must be used inside Provider
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Avoid Context.Consumer in new code. The useContext Hook is cleaner, more readable, and the recommended way to consume context in modern React!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
