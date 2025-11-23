'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Play, 
  ToyBrick, 
  File, 
  Code, 
  ArrowRight, 
  BookCopy, 
  Share2, 
  AlertTriangle, 
  Lightbulb,
  CheckCircle,
  XCircle,
  Layers,
  Puzzle,
  Wrench,
  Eye,
  Zap,
  Target,
  Sparkles,
  Box,
  Repeat,
  FileCode,
  Download,
  Upload,
  Brackets,
  Settings,
  Users,
  Globe
} from 'lucide-react';
import React from 'react';

const defineCode = `function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`;

const exportCode = `// Button.js
export default function MyButton() {
  return (
    <button>My Button</button>
  );
}`;

const importCode = `// App.js
import MyButton from './Button.js';

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`;

export default function YourFirstComponent({ onOpenEditor }: { onOpenEditor: (code: string) => void }) {
    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <ToyBrick className="w-10 h-10 text-primary" />
                    <h1 className="text-4xl font-bold text-foreground">Your First Component</h1>
                </div>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">Creating reusable building blocks for your user interface.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>The "Custom LEGO® Brick" Analogy</CardTitle>
                    <CardDescription>
                        React components are like creating your own custom LEGO® bricks. You design a brick once (e.g., a special "profile picture" brick with a specific shape and color), and then you can reuse that same brick anywhere you need a profile picture, without having to rebuild it from scratch every time.
                    </CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Code className="w-6 h-6 text-primary"/>Defining a Component</CardTitle>
                    <CardDescription>
                        A React component is a JavaScript function that returns some markup (written in JSX).
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-muted rounded-md p-4 mb-4">
                        <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{defineCode}</pre>
                    </div>
                    <Button onClick={() => onOpenEditor(defineCode)}>
                        <Play className="mr-2 h-4 w-4" /> Try it in the Playground
                    </Button>
                </CardContent>
            </Card>

            <Card className="border-primary/50 bg-primary/5">
                <CardHeader>
                    <CardTitle className="text-primary">The 3 Golden Rules of Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                        <p className="text-lg font-bold text-primary">1.</p>
                        <div>
                            <h3 className="font-semibold">Component names must start with a capital letter.</h3>
                            <p className="text-sm text-muted-foreground">`&lt;MyButton /&gt;` is a component. `&lt;myButton /&gt;` is treated as a regular HTML tag.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <p className="text-lg font-bold text-primary">2.</p>
                        <div>
                            <h3 className="font-semibold">Components must return a single JSX element.</h3>
                            <p className="text-sm text-muted-foreground">If you need to return multiple elements, wrap them in a single parent `&lt;div&gt;` or use a Fragment (`&lt;&gt;...&lt;/&gt;`).</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3">
                        <p className="text-lg font-bold text-primary">3.</p>
                        <div>
                            <h3 className="font-semibold">JSX tags must be closed.</h3>
                            <p className="text-sm text-muted-foreground">Regular HTML tags like `&lt;img&gt;` must be written as self-closing tags: `&lt;img /&gt;`.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Share2 className="w-6 h-6 text-primary"/>Exporting and Importing Components</CardTitle>
                    <CardDescription>
                        The magic of components is their reusability. You define a component in one file and then use it in another.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><File className="w-5 h-5"/>1. Export the component</h3>
                            <p className="text-sm text-muted-foreground mb-2">Use `export default` to mark the main component in a file.</p>
                            <div className="bg-background rounded-md p-2">
                                <pre className="font-mono text-xs whitespace-pre-wrap">{exportCode}</pre>
                            </div>
                        </div>
                         <div className="bg-muted p-4 rounded-lg border">
                            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><BookCopy className="w-5 h-5"/>2. Import and use the component</h3>
                            <p className="text-sm text-muted-foreground mb-2">Use `import` in another file to use your new component like an HTML tag.</p>
                             <div className="bg-background rounded-md p-2">
                                <pre className="font-mono text-xs whitespace-pre-wrap">{importCode}</pre>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-center justify-center text-center text-muted-foreground text-sm gap-4 p-4 rounded-lg border bg-muted/50">
                        <p className="font-bold">Button.js</p>
                        <ArrowRight className="w-6 h-6"/>
                        <p className="font-bold">App.js</p>
                        <ArrowRight className="w-6 h-6"/>
                        <p className="font-bold">Browser Renders</p>
                    </div>
                </CardContent>
            </Card>

            {/* Component Anatomy */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Layers className="h-6 w-6 text-blue-600" />
                        Component Anatomy
                    </CardTitle>
                    <CardDescription>
                        Understanding the structure and parts of a React component
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                            <pre className="text-sm overflow-x-auto">
{`// 1. Function Declaration
function WelcomeMessage() {
  // 2. JavaScript Logic (optional)
  const userName = "Alice";
  const currentTime = new Date().toLocaleTimeString();
  
  // 3. Return JSX
  return (
    <div className="welcome-card">
      <h1>Hello, {userName}!</h1>
      <p>Current time: {currentTime}</p>
      <button onClick={() => alert('Welcome!')}>
        Click me!
      </button>
    </div>
  );
}

// 4. Export (to use in other files)
export default WelcomeMessage;`}
                            </pre>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-blue-600">1</Badge>
                                    <h4 className="font-semibold">Function</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Component name starts with capital letter
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-green-600">2</Badge>
                                    <h4 className="font-semibold">Logic</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    JavaScript code before return
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-purple-600">3</Badge>
                                    <h4 className="font-semibold">JSX</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    What the component renders
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg bg-orange-50 dark:bg-orange-950/20">
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge className="bg-orange-600">4</Badge>
                                    <h4 className="font-semibold">Export</h4>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Makes component reusable
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Component Types */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Box className="h-6 w-6 text-green-600" />
                        Types of Components
                    </CardTitle>
                    <CardDescription>
                        Different ways to create React components
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <CheckCircle className="h-5 w-5 text-green-600" />
                                    <h3 className="font-semibold">Function Components (Recommended)</h3>
                                </div>
                                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                                    <pre className="text-sm overflow-x-auto">
{`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function syntax
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};`}
                                    </pre>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    ✅ Simple, modern, supports Hooks
                                </p>
                            </div>
                            
                            <div className="border rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                                    <h3 className="font-semibold">Class Components (Legacy)</h3>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded">
                                    <pre className="text-sm overflow-x-auto">
{`class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`}
                                    </pre>
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    ⚠️ Older syntax, more verbose
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Component Naming Rules */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <FileCode className="h-6 w-6 text-purple-600" />
                        Component Naming Rules
                    </CardTitle>
                    <CardDescription>
                        Essential naming conventions for React components
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <XCircle className="h-4 w-4 text-red-500" />
                                    ❌ Wrong
                                </h3>
                                <div className="space-y-3">
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-3 rounded">
                                        <pre className="text-sm">
{`// Lowercase - treated as HTML
function button() {
  return <button>Click me</button>;
}

// Usage: <button /> (HTML button)`}
                                        </pre>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-3 rounded">
                                        <pre className="text-sm">
{`// Numbers or special characters
function 2Button() { } // ❌
function my-button() { } // ❌
function my_button() { } // ❌`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold mb-3 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    ✅ Correct
                                </h3>
                                <div className="space-y-3">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded">
                                        <pre className="text-sm">
{`// PascalCase - React component
function Button() {
  return <button>Click me</button>;
}

// Usage: <Button /> (React component)`}
                                        </pre>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded">
                                        <pre className="text-sm">
{`// Good component names
function UserProfile() { } // ✅
function NavigationBar() { } // ✅
function ProductCard() { } // ✅`}
                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                                💡 Naming Best Practices
                            </h4>
                            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                                <li>• Use PascalCase (first letter capitalized)</li>
                                <li>• Be descriptive: <code>UserProfile</code> not <code>Profile</code></li>
                                <li>• Use nouns: <code>Button</code>, <code>Card</code>, <code>Modal</code></li>
                                <li>• Avoid abbreviations: <code>NavigationBar</code> not <code>NavBar</code></li>
                                <li>• Match file names: <code>UserProfile.js</code> exports <code>UserProfile</code></li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Component Composition */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Puzzle className="h-6 w-6 text-indigo-600" />
                        Component Composition
                    </CardTitle>
                    <CardDescription>
                        Building complex UIs by combining simple components
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/50 dark:to-purple-950/50 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
                            <h3 className="font-semibold mb-4">Building a User Card from Smaller Components</h3>
                            <pre className="text-sm overflow-x-auto">
{`// Small, focused components
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar" />;
}

function UserName({ name }) {
  return <h3 className="user-name">{name}</h3>;
}

function UserBio({ bio }) {
  return <p className="user-bio">{bio}</p>;
}

// Composed component using smaller ones
function UserCard({ user }) {
  return (
    <div className="user-card">
      <Avatar src={user.avatar} alt={user.name} />
      <UserName name={user.name} />
      <UserBio bio={user.bio} />
    </div>
  );
}

// Usage
function App() {
  const user = {
    name: "Alice Johnson",
    avatar: "alice.jpg",
    bio: "Frontend Developer"
  };
  
  return <UserCard user={user} />;
}`}
                            </pre>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                                    ✅ Benefits
                                </h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Reusable pieces</li>
                                    <li>• Easy to test</li>
                                    <li>• Clear responsibility</li>
                                    <li>• Maintainable code</li>
                                </ul>
                            </div>
                            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950/20">
                                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                                    🎯 Single Responsibility
                                </h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Avatar: shows image</li>
                                    <li>• UserName: displays name</li>
                                    <li>• UserBio: shows bio</li>
                                    <li>• UserCard: combines all</li>
                                </ul>
                            </div>
                            <div className="p-4 border rounded-lg bg-purple-50 dark:bg-purple-950/20">
                                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                                    🔄 Reusability
                                </h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Use Avatar anywhere</li>
                                    <li>• UserName in headers</li>
                                    <li>• Mix and match</li>
                                    <li>• Build variations</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                        Common Component Mistakes
                    </CardTitle>
                    <CardDescription>
                        Avoid these frequent pitfalls when creating components
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        {[
                            {
                                title: "Forgetting to Return JSX",
                                wrong: `function Greeting() {
  const message = "Hello World";
  // Missing return statement!
}`,
                                right: `function Greeting() {
  const message = "Hello World";
  return <h1>{message}</h1>;
}`,
                                explanation: "Components must return JSX or null"
                            },
                            {
                                title: "Multiple Root Elements",
                                wrong: `function UserInfo() {
  return (
    <h1>John Doe</h1>
    <p>Developer</p>
  );
}`,
                                right: `function UserInfo() {
  return (
    <div>
      <h1>John Doe</h1>
      <p>Developer</p>
    </div>
  );
}`,
                                explanation: "Wrap multiple elements in a parent or use Fragment"
                            },
                            {
                                title: "Incorrect Component Usage",
                                wrong: `function App() {
  return (
    <div>
      {Greeting()} {/* Wrong! */}
      <greeting /> {/* Wrong! */}
    </div>
  );
}`,
                                right: `function App() {
  return (
    <div>
      <Greeting /> {/* Correct! */}
    </div>
  );
}`,
                                explanation: "Use components as JSX elements, not function calls"
                            }
                        ].map((mistake, index) => (
                            <div key={index} className="border rounded-lg p-4">
                                <h3 className="font-semibold mb-3 text-red-700 dark:text-red-400">
                                    {mistake.title}
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">{mistake.explanation}</p>
                                
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <Badge variant="destructive" className="mb-2">❌ Wrong</Badge>
                                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-3 rounded">
                                            <pre className="text-sm overflow-x-auto">{mistake.wrong}</pre>
                                        </div>
                                    </div>
                                    <div>
                                        <Badge variant="default" className="mb-2 bg-green-600">✅ Correct</Badge>
                                        <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-3 rounded">
                                            <pre className="text-sm overflow-x-auto">{mistake.right}</pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Practical Example */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-purple-600" />
                        Complete Practical Example
                    </CardTitle>
                    <CardDescription>
                        A real-world component demonstrating all concepts
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
                            <h3 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                                This example demonstrates:
                            </h3>
                            <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                                <li>• Proper component structure and naming</li>
                                <li>• Component composition and reusability</li>
                                <li>• Props usage and data flow</li>
                                <li>• Conditional rendering and dynamic content</li>
                                <li>• Event handling and interactivity</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                            <pre className="text-sm overflow-x-auto">
{`// ProductCard.js - A complete component example
import React from 'react';

// Small, reusable components
function ProductImage({ src, alt, onSale }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} />
      {onSale && <span className="sale-badge">SALE</span>}
    </div>
  );
}

function ProductInfo({ name, price, originalPrice, rating }) {
  return (
    <div className="product-info">
      <h3 className="product-name">{name}</h3>
      <div className="product-pricing">
        <span className="current-price">\${price}</span>
        {originalPrice && (
          <span className="original-price">\${originalPrice}</span>
        )}
      </div>
      <div className="product-rating">
        {'★'.repeat(rating)} ({rating}/5)
      </div>
    </div>
  );
}

function AddToCartButton({ onAddToCart, inStock }) {
  const handleClick = () => {
    if (inStock) {
      onAddToCart();
    }
  };

  return (
    <button 
      className={\`add-to-cart \${!inStock ? 'disabled' : ''}\`}
      onClick={handleClick}
      disabled={!inStock}
    >
      {inStock ? 'Add to Cart' : 'Out of Stock'}
    </button>
  );
}

// Main composed component
function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(\`Added \${product.name} to cart\`);
  };

  const isOnSale = product.originalPrice > product.price;

  return (
    <div className="product-card">
      <ProductImage 
        src={product.image} 
        alt={product.name}
        onSale={isOnSale}
      />
      <ProductInfo 
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        rating={product.rating}
      />
      <AddToCartButton 
        onAddToCart={handleAddToCart}
        inStock={product.inStock}
      />
    </div>
  );
}

// Usage in App
function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 79.99,
      originalPrice: 99.99,
      rating: 4,
      image: "headphones.jpg",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      originalPrice: null,
      rating: 5,
      image: "watch.jpg",
      inStock: false
    }
  ];

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductCard;`}
                            </pre>
                        </div>

                        <div className="flex gap-2">
                            <Button 
                                onClick={() => onOpenEditor(`// ProductCard.js - A complete component example
import React from 'react';

// Small, reusable components
function ProductImage({ src, alt, onSale }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} />
      {onSale && <span className="sale-badge">SALE</span>}
    </div>
  );
}

function ProductInfo({ name, price, originalPrice, rating }) {
  return (
    <div className="product-info">
      <h3 className="product-name">{name}</h3>
      <div className="product-pricing">
        <span className="current-price">$\${price}</span>
        {originalPrice && (
          <span className="original-price">$\${originalPrice}</span>
        )}
      </div>
      <div className="product-rating">
        {'★'.repeat(rating)} ({rating}/5)
      </div>
    </div>
  );
}

function AddToCartButton({ onAddToCart, inStock }) {
  const handleClick = () => {
    if (inStock) {
      onAddToCart();
    }
  };

  return (
    <button 
      className={\`add-to-cart \${!inStock ? 'disabled' : ''}\`}
      onClick={handleClick}
      disabled={!inStock}
    >
      {inStock ? 'Add to Cart' : 'Out of Stock'}
    </button>
  );
}

// Main composed component
function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log(\`Added \${product.name} to cart\`);
  };

  const isOnSale = product.originalPrice > product.price;

  return (
    <div className="product-card">
      <ProductImage 
        src={product.image} 
        alt={product.name}
        onSale={isOnSale}
      />
      <ProductInfo 
        name={product.name}
        price={product.price}
        originalPrice={product.originalPrice}
        rating={product.rating}
      />
      <AddToCartButton 
        onAddToCart={handleAddToCart}
        inStock={product.inStock}
      />
    </div>
  );
}

export default ProductCard;`)}
                                className="bg-purple-600 hover:bg-purple-700"
                            >
                                <Code className="h-4 w-4 mr-2" />
                                Try This Example
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Best Practices Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="h-6 w-6 text-green-600" />
                        Component Best Practices
                    </CardTitle>
                    <CardDescription>
                        Key principles for writing excellent React components
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <h3 className="font-semibold text-green-700 dark:text-green-400">✅ Do</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Use PascalCase for component names</li>
                                <li>• Keep components small and focused</li>
                                <li>• Use descriptive, meaningful names</li>
                                <li>• Return JSX or null from components</li>
                                <li>• Compose complex UIs from simple components</li>
                                <li>• Export components for reusability</li>
                                <li>• Use props to pass data down</li>
                                <li>• Handle events with functions</li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-red-700 dark:text-red-400">❌ Don't</h3>
                            <ul className="space-y-2 text-sm">
                                <li>• Use lowercase for component names</li>
                                <li>• Create overly complex components</li>
                                <li>• Forget to return JSX</li>
                                <li>• Return multiple root elements without wrapper</li>
                                <li>• Call components as functions</li>
                                <li>• Use numbers or special characters in names</li>
                                <li>• Modify props directly</li>
                                <li>• Ignore component composition patterns</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
