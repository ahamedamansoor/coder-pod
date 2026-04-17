'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { 
  Brackets,
  Code, 
  Zap, 
  Shield,
  Settings,
  Terminal,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Smile,
  TrendingUp,
  Play,
  Users,
  Rocket,
  Target,
  Globe,
  Monitor,
  Cpu,
  Award,
  Star,
  ThumbsUp,
  Clock
} from 'lucide-react';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';

export default function WritingJSX() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Brackets}
        category="React · Core Concepts"
        title="Writing JSX"
        description="Master JSX syntax and best practices. Learn how to write clean, maintainable, and performant React components with proper JSX patterns."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section 1: Understanding JSX Fundamentals */}
        <section>
          <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                Understanding JSX Fundamentals
              </CardTitle>
              <CardDescription>
                Learn the core concepts and rules of JSX syntax
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">

              {/* Comprehensive Explanation */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-cyan-200 dark:border-cyan-700">
                  <h3 className="text-xl font-bold mb-4 text-cyan-800 dark:text-cyan-200 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    What is JSX?
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. 
                    It's not a separate language - it's a syntactic sugar that makes React components more readable and intuitive.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    When you write JSX, it gets compiled into regular JavaScript function calls using tools like Babel. 
                    React.createElement() calls are generated behind the scenes, making your code both developer-friendly and efficient.
                  </p>
                </div>

                {/* Before/After Comparison */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-xl p-6 border border-red-200 dark:border-red-700">
                    <h4 className="font-bold mb-3 text-red-800 dark:text-red-200 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Without JSX (Complex)
                    </h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                      <pre>{`React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h1',
    null,
    'Hello World'
  ),
  React.createElement(
    'p',
    null,
    'Welcome to React'
  )
)`}</pre>
                    </div>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      <li>• Hard to read and visualize structure</li>
                      <li>• Error-prone nesting</li>
                      <li>• Poor developer experience</li>
                      <li>• Difficult to maintain</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 rounded-xl p-6 border border-green-200 dark:border-green-700">
                    <h4 className="font-bold mb-3 text-green-800 dark:text-green-200 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      With JSX (Clean)
                    </h4>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm mb-3">
                      <pre>{`<div className="container">
  <h1>Hello World</h1>
  <p>Welcome to React</p>
</div>`}</pre>
                    </div>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Intuitive and readable</li>
                      <li>• Easy to visualize structure</li>
                      <li>• Excellent developer experience</li>
                      <li>• Maintainable and scalable</li>
                    </ul>
                  </div>
                </div>

                {/* JSX Rules */}
                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                  <h4 className="font-bold mb-4 text-blue-800 dark:text-blue-200">📋 Essential JSX Rules</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Core Syntax Rules:</h5>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• <strong>Single Root Element:</strong> Every JSX expression must have one parent element</li>
                        <li>• <strong>className, not class:</strong> Use className for CSS classes</li>
                        <li>• <strong>Close All Tags:</strong> All tags must be closed, including self-closing ones</li>
                        <li>• <strong>Curly Braces:</strong> Use {} for JavaScript expressions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Best Practices:</h5>
                      <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                        <li>• <strong>PascalCase:</strong> Component names must start with uppercase</li>
                        <li>• <strong>Semantic HTML:</strong> Use appropriate HTML elements</li>
                        <li>• <strong>Accessibility:</strong> Include proper ARIA attributes</li>
                        <li>• <strong>Consistency:</strong> Maintain consistent formatting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Two Interactive Examples */}
              <div className="space-y-8">
                <FrontendCodePreviewReact
                  title="Example 1: Basic JSX Component"
                  description="Your first JSX component demonstrating fundamental concepts. Notice the clean structure and how similar it looks to HTML!"
                  colorTheme="cyan"
                  react={`function BasicJSX() {
  const greeting = "Hello, React!";
  const isUserLoggedIn = true;
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div className="jsx-container">
      <h1 className="jsx-title">🚀 {greeting}</h1>
      <p className="jsx-message">
        Welcome to the world of JSX!
      </p>
      <div className={isUserLoggedIn ? 'jsx-status-online' : 'jsx-status-offline'}>
        Status: {isUserLoggedIn ? '✅ Online' : '🔴 Offline'}
      </div>
      <p className="jsx-time">
        Current time: {currentTime}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicJSX />);`}
                  html={`<div id="root"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`}
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
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
}

/* External CSS for JSX Component */
.jsx-container {
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  color: white;
  font-family: 'system-ui', '-apple-system', sans-serif;
  max-width: 500px;
  margin: 20px auto;
  box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3);
}

.jsx-title {
  font-size: 2.5rem;
  margin: 0 0 15px 0;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.jsx-message {
  font-size: 1.2rem;
  margin: 0 0 20px 0;
  opacity: 0.9;
}

.jsx-status-online,
.jsx-status-offline {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.jsx-status-online {
  background: #10b981;
}

.jsx-status-offline {
  background: #ef4444;
}

.jsx-time {
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
}`}
                />

              </div>
            </CardContent>
          </Card>
        </section>

        
        {/* Section 3: JSX Attributes & Props */}
        <section>
          <Card className="border-2 border-emerald-200 dark:border-emerald-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                JSX Attributes & Props
              </CardTitle>
              <CardDescription>
                Master component communication and event handling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Comprehensive Explanation */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                  <h3 className="text-xl font-bold mb-4 text-emerald-800 dark:text-emerald-200 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Understanding Attributes in JSX
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    JSX attributes are similar to HTML attributes but with some important differences. 
                    They allow you to pass data to components, configure element behavior, and handle user interactions.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Props (properties) are how components receive data and configuration from their parents. 
                    Understanding how to use attributes and props effectively is crucial for building reusable, 
                    maintainable React components.
                  </p>
                </div>

                {/* Attribute Types */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-emerald-200 dark:border-emerald-700">
                    <h4 className="font-bold mb-3 text-emerald-800 dark:text-emerald-200">📝 Standard Attributes</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                        className="container"
                      </div>
                      <p className="text-emerald-700 dark:text-emerald-300">CSS classes (use className, not class)</p>
                      
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                        htmlFor="input-id"
                      </div>
                      <p className="text-emerald-700 dark:text-emerald-300">Label association (use htmlFor, not for)</p>
                      
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                        tabIndex={0}
                      </div>
                      <p className="text-emerald-700 dark:text-emerald-300">Focus order (use curly braces for numbers)</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                    <h4 className="font-bold mb-3 text-blue-800 dark:text-blue-200">⚡ Event Handlers</h4>
                    <div className="space-y-2 text-sm">
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                        onClick={'{handleClick}'}
                      </div>
                      <p className="text-blue-700 dark:text-blue-300">Click events (camelCase naming)</p>
                      
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                        onChange={'{handleChange}'}
                      </div>
                      <p className="text-blue-700 dark:text-blue-300">Form input changes</p>
                      
                      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded font-mono">
                        onSubmit={'{handleSubmit}'}
                      </div>
                      <p className="text-blue-700 dark:text-blue-300">Form submission</p>
                    </div>
                  </div>
                </div>

                {/* Props Best Practices */}
                <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-bold mb-4 text-yellow-800 dark:text-yellow-200">🎯 Props Best Practices</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Naming:</h5>
                      <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                        <li>• Use camelCase for prop names</li>
                        <li>• Be descriptive and clear</li>
                        <li>• Follow React conventions</li>
                        <li>• Avoid abbreviations</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Types:</h5>
                      <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                        <li>• Use PropTypes or TypeScript</li>
                        <li>• Provide default values</li>
                        <li>• Validate required props</li>
                        <li>• Document complex props</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-700 dark:text-yellow-300 mb-2">Structure:</h5>
                      <ul className="text-sm text-yellow-600 dark:text-yellow-400 space-y-1">
                        <li>• Keep props minimal</li>
                        <li>• Group related props</li>
                        <li>• Avoid prop drilling</li>
                        <li>• Use composition over inheritance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

                          </CardContent>
          </Card>
        </section>

        {/* Best Practices Summary */}
        <section>
          <Card className="border-2 border-rose-200 dark:border-rose-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                JSX Best Practices Summary
              </CardTitle>
              <CardDescription>
                Essential guidelines for writing clean, maintainable JSX
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              
              {/* Introduction to Best Practices */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-200 flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Why JSX Best Practices Matter
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  Writing clean JSX isn't just about making your code work—it's about creating maintainable, 
                  scalable, and performant React applications. Following these best practices will help you 
                  write code that's easier to debug, test, and collaborate on with other developers.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">🚀 Performance</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Optimized rendering and minimal re-renders</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">🛠️ Maintainability</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Easy to understand and modify code</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">🤝 Collaboration</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Consistent patterns for team development</p>
                  </div>
                </div>
              </div>

              {/* Core JSX Rules */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-6 text-gray-800 dark:text-gray-200 text-lg">🎯 Core JSX Rules You Must Follow</h4>
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">1</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Single Root Element</h5>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Every JSX expression must have one parent element. Use fragments or wrapper divs when needed.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                        <div className="text-green-600 dark:text-green-400 mb-2">✅ Good:</div>
                        <pre>{`<div>
  <h1>Title</h1>
  <p>Content</p>
</div>`}</pre>
                        <div className="text-red-600 dark:text-red-400 mt-3 mb-2">❌ Bad:</div>
                        <pre>{`<h1>Title</h1>
<p>Content</p>`}</pre>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Use className Instead of class</h5>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        JSX uses className for CSS classes because 'class' is a reserved JavaScript keyword.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                        <div className="text-green-600 dark:text-green-400 mb-2">✅ Good:</div>
                        <pre>{`<div className="container">Content</div>`}</pre>
                        <div className="text-red-600 dark:text-red-400 mt-3 mb-2">❌ Bad:</div>
                        <pre>{`<div class="container">Content</div>`}</pre>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <span className="text-green-600 dark:text-green-400 font-bold text-sm">3</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Close All Tags</h5>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Every JSX element must be properly closed, including self-closing tags with a slash.
                      </p>
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 font-mono text-sm">
                        <div className="text-green-600 dark:text-green-400 mb-2">✅ Good:</div>
                        <pre>{`<img src="image.jpg" alt="description" />
<br />
<input type="text" />`}</pre>
                        <div className="text-red-600 dark:text-red-400 mt-3 mb-2">❌ Bad:</div>
                        <pre>{`<img src="image.jpg" alt="description">
<br>
<input type="text">`}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component Naming & Structure */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-6 text-gray-800 dark:text-gray-200 text-lg">🏗️ Component Naming & Structure</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Naming Conventions</h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Components:</strong> PascalCase (UserProfile, Button)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Props:</strong> camelCase (userName, isActive)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Functions:</strong> camelCase (handleSubmit, getData)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Constants:</strong> UPPER_SNAKE_CASE (API_URL, MAX_ITEMS)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Component Structure</h5>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Single Responsibility:</strong> One purpose per component</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Small & Focused:</strong> Keep under 200 lines when possible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Reusable:</strong> Design for multiple use cases</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span><strong>Testable:</strong> Easy to unit test in isolation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Performance & Optimization */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-6 text-gray-800 dark:text-gray-200 text-lg">⚡ Performance & Optimization</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ Performance Best Practices</h5>
                    <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                      <li>• Use React.memo for expensive components</li>
                      <li>• Extract expensive calculations to useMemo</li>
                      <li>• Use useCallback for stable function references</li>
                      <li>• Avoid inline object creation in render</li>
                      <li>• Use keys properly for list rendering</li>
                      <li>• Lazy load components with React.lazy</li>
                      <li>• Virtualize long lists with react-window</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4">
                    <h5 className="font-semibold text-red-800 dark:text-red-200 mb-3">❌ Performance Anti-Patterns</h5>
                    <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                      <li>• Creating objects/arrays in JSX directly</li>
                      <li>• Defining functions inside render</li>
                      <li>• Unnecessary re-renders with poor state</li>
                      <li>• Large components without memoization</li>
                      <li>• Missing keys in list rendering</li>
                      <li>• Synchronous heavy computations</li>
                      <li>• Inline styles with complex objects</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Accessibility Guidelines */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-6 text-gray-800 dark:text-gray-200 text-lg">♿ Accessibility Guidelines</h4>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Accessible JSX ensures your application can be used by everyone, including people with disabilities.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                    <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Semantic HTML</h5>
                    <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
                      <li>• Use proper heading hierarchy</li>
                      <li>• Use nav, main, section tags</li>
                      <li>• Use button for actions</li>
                      <li>• Use link for navigation</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">ARIA Attributes</h5>
                    <ul className="space-y-1 text-sm text-purple-700 dark:text-purple-300">
                      <li>• Use aria-label for icons</li>
                      <li>• Use aria-describedby</li>
                      <li>• Use aria-expanded for dropdowns</li>
                      <li>• Use role when needed</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4">
                    <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Keyboard Navigation</h5>
                    <ul className="space-y-1 text-sm text-orange-700 dark:text-orange-300">
                      <li>• All interactive elements focusable</li>
                      <li>• Use tabIndex appropriately</li>
                      <li>• Handle keyboard events</li>
                      <li>• Visible focus indicators</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Pitfalls & Solutions */}
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-6 text-gray-800 dark:text-gray-200 text-lg">🚨 Common Pitfalls & Solutions</h4>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200">Pitfall: Inline Style Objects</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Creating style objects directly in JSX causes re-renders and hurts performance.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm">
                      <span className="text-yellow-600">Instead of:</span> <code>{`<div style={{color: 'red'}}>`}</code><br/>
                      <span className="text-green-600">Use:</span> <code>{`const styles = {color: 'red'}; <div style={styles}>`}</code>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200">Pitfall: Functions in Render</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Defining functions inside render creates new instances on every render.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm">
                      <span className="text-yellow-600">Instead of:</span> <code>{`onClick={() => handleClick(id)}`}</code><br/>
                      <span className="text-green-600">Use:</span> <code>{`const handleClick = useCallback((id) => {...}, [])`}</code>
                    </div>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200">Pitfall: Prop Drilling</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      Passing props through many levels makes components hard to maintain.
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm">
                      <span className="text-green-600">Solutions:</span> Context API, state management libraries, or component composition
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Reference Card */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h4 className="font-bold mb-4 text-gray-800 dark:text-gray-200">📋 Quick Reference Card</h4>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Syntax</h5>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Single parent element</li>
                      <li>• className vs class</li>
                      <li>• Close all tags</li>
                      <li>• {} for expressions</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Components</h5>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• PascalCase naming</li>
                      <li>• Single responsibility</li>
                      <li>• Keep small & focused</li>
                      <li>• Make reusable</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Performance</h5>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• useMemo for expensive calc</li>
                      <li>• useCallback for functions</li>
                      <li>• React.memo for components</li>
                      <li>• Keys for lists</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Accessibility</h5>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                      <li>• Semantic HTML</li>
                      <li>• ARIA attributes</li>
                      <li>• Keyboard navigation</li>
                      <li>• Focus management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                <Zap className="h-4 w-4 text-blue-600" />
                <AlertTitle className="text-blue-800 dark:text-blue-200">💡 Pro Tip</AlertTitle>
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                  <strong>Think in components, not just JSX.</strong> Before writing JSX, ask yourself: 
                  "Can this be a reusable component?" If you find yourself copying JSX patterns, 
                  extract them into components. This makes your code more maintainable, testable, and scalable.
                  Remember: good JSX is just one part of good React architecture!
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
