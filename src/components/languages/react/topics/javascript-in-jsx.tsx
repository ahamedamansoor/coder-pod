'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  Terminal,
  Code,
  Sparkles,
  Lightbulb,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Gauge,
  Database,
  Zap,
  Calculator,
  Cpu,
  Info
} from 'lucide-react';

interface JavaScriptInJSXProps {
  onOpenReactPlayground?: (code: string, imports: string) => void;
}

export default function JavaScriptInJSX({ onOpenReactPlayground }: JavaScriptInJSXProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    const checkDarkMode = () => {
      if (typeof window !== 'undefined') {
        setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      }
    };
    
    checkDarkMode();
    
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', checkDarkMode);
      return () => mediaQuery.removeEventListener('change', checkDarkMode);
    }
  }, []);

  const basicExpressionsCode = `function BasicExpressions() {
  // Simple variables
  const name = 'World';
  const count = 3;
  const temperature = 25;
  
  // Simple calculations
  const doubled = count * 2;
  const isEven = count % 2 === 0;
  const fahrenheit = (temperature * 9/5) + 32;
  const message = count > 5 ? 'That\\'s a lot!' : 'Keep counting!';
  
  // String operations
  const greeting = \`Hello, \${name}!\`;
  const weather = temperature > 20 ? 'Warm' : 'Cool';
  
  return (
    <div className="js-container">
      <h1 className="js-title">
        📊 Basic JavaScript Expressions
      </h1>
      
      <div className="js-card">
        <h3 className="js-card-title">
          🔤 Variables & Strings
        </h3>
        <p className="js-text">
          👋 Greeting: <strong className="js-count">{greeting}</strong>
        </p>
        <p className="js-text">
          🌡️ Temperature: <strong className="js-doubled">{temperature}°C</strong>
        </p>
        <p className="js-text">
          🌡️ Fahrenheit: <strong className="js-doubled">{fahrenheit}°F</strong>
        </p>
        <p className="js-text">
          ☁️ Weather: <strong className={weather === 'Warm' ? 'js-yes' : 'js-no'}>
            {weather}</strong>
        </p>
      </div>
      
      <div className="js-card">
        <h3 className="js-card-title">
          🧮 Mathematical Operations
        </h3>
        <p className="js-text">
          🔢 Original number: <strong className="js-count">{count}</strong>
        </p>
        <p className="js-text">
          ✨ Doubled: <strong className="js-doubled">{doubled}</strong>
        </p>
        <p className="js-text">
          ⚖️ Is even: <strong className={isEven ? 'js-yes' : 'js-no'}>
            {isEven ? '✅ Yes' : '❌ No'}</strong>
        </p>
        <p className="js-text">
          💬 Message: <strong className={count > 5 ? 'js-message-high' : 'js-message-low'}>
            {message}</strong>
        </p>
      </div>
      
      <div className="js-card">
        <h3 className="js-card-title">
          🎯 Conditional Expressions
        </h3>
        <p className="js-text">
          📊 Count comparison: <strong className={count > 2 ? 'js-yes' : 'js-no'}>
            {count > 2 ? 'Greater than 2' : 'Less than or equal to 2'}</strong>
        </p>
        <p className="js-text">
          🌡️ Temperature check: <strong className={temperature > 20 ? 'js-message-high' : 'js-message-low'}>
            {temperature > 20 ? 'Above room temperature' : 'Below room temperature'}</strong>
        </p>
        <p className="js-text">
          🔍 Even & Warm: <strong className={isEven && temperature > 20 ? 'js-yes' : 'js-no'}>
            {isEven && temperature > 20 ? '✅ Both conditions true' : '❌ One or both false'}</strong>
        </p>
      </div>
      
      <div className="js-footer">
        <p className="js-footer-text">
          💡 This example shows basic JavaScript expressions in JSX
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BasicExpressions />);`;

const interactiveFeaturesCode = `function InteractiveFeatures() {
  // Interactive state
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('World');
  
  // Dark mode detection
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Dynamic calculations based on state
  const doubled = count * 2;
  const isEven = count % 2 === 0;
  const message = count > 5 ? 'That\\'s a lot!' : 'Keep counting!';
  
  return (
    <div className="js-container">
      <h1 className="js-title">
        🎮 Interactive Features & State
      </h1>
      
      <div className="js-card">
        <h3 className="js-card-title">
          📊 Dynamic Variables
        </h3>
        <p className="js-text">
          👋 Hello, <strong>{name}</strong>!
        </p>
        <p className="js-text">
          🔢 Count: <strong className="js-count">{count}</strong>
        </p>
        <p className="js-text">
          ✨ Doubled: <strong className="js-doubled">{doubled}</strong>
        </p>
        <p className="js-text">
          ⚖️ Is even: <strong className={isEven ? 'js-yes' : 'js-no'}>
            {isEven ? '✅ Yes' : '❌ No'}</strong>
        </p>
        <p className="js-text">
          💬 Message: <strong className={count > 5 ? 'js-message-high' : 'js-message-low'}>
            {message}</strong>
        </p>
      </div>
      
      <div className="js-button-group">
        <button 
          onClick={() => setCount(count + 1)}
          className="js-button js-button-primary"
        >
          ➕ Add 1
        </button>
        
        <button 
          onClick={() => setCount(count - 1)}
          className="js-button js-button-danger"
        >
          ➖ Subtract 1
        </button>
        
        <button 
          onClick={() => setCount(0)}
          className="js-button js-button-secondary"
        >
          🔄 Reset
        </button>
      </div>
      
      <div className="js-card">
        <h3 className="js-card-title">
          ✏️ Change Name
        </h3>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="js-input"
        />
        <span className="js-name-display">
          Your name is: <strong className="js-name-text">
            {name || 'Anonymous'}
          </strong>
        </span>
      </div>
      
      <div className={count > 5 ? 'js-conditional-high' : 'js-conditional-low'}>
        <h3 className={count > 5 ? 'js-conditional-title-high' : 'js-conditional-title-low'}>
          🎨 Conditional Styling
        </h3>
        <p className={count > 5 ? 'js-conditional-text-high' : 'js-conditional-text-low'}>
          {count > 5 ? '🎉 High score! Amazing work!' : '📈 Keep going! You\\'re doing great!'}
        </p>
        <p className="js-conditional-subtitle">
          {count > 5 
            ? 'You\\'ve reached 5+ clicks! The background changed to celebrate.' 
            : 'Keep clicking to see the styling change at 5 clicks.'}
        </p>
      </div>
      
      <div className="js-footer">
        <p className="js-footer-text">
          🌙 Dark mode: {isDarkMode ? 'ON' : 'OFF'} | 
          💻 Detected automatically from your system preferences
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InteractiveFeatures />);`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Terminal}
        category="React · Core Concepts"
        title="JavaScript in JSX"
        description="Master the art of embedding JavaScript expressions within JSX. Learn how to create dynamic, interactive React components with proper expression syntax."
        colorTheme="cyan"
      />

      {/* Section 1: Understanding JavaScript Expressions */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Code className="w-7 h-7" />
              Understanding JavaScript Expressions in JSX
            </CardTitle>
            <CardDescription>
              Learn how to embed JavaScript expressions within JSX using curly braces
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Basic Syntax</h4>
                <code className="text-sm bg-blue-100 dark:bg-blue-900 p-3 rounded block">
                  {'{expression}'}
                </code>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-2">
                  Wrap any JavaScript expression in curly braces to embed it in JSX
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Valid Expressions</h4>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                  <li>• Variables: {'{name}'}</li>
                  <li>• Functions: {'{getName()}'}</li>
                  <li>• Calculations: {'{2 + 2}'}</li>
                  <li>• Conditionals: {'{isActive ? "Yes" : "No"}'}</li>
                </ul>
              </div>
            </div>
            
            <Alert className="border-cyan-200 bg-cyan-50 dark:border-cyan-800 dark:bg-cyan-950/20">
              <Info className="h-4 w-4 text-cyan-600" />
              <AlertTitle className="text-cyan-800 dark:text-cyan-200">Key Point</AlertTitle>
              <AlertDescription className="text-cyan-700 dark:text-cyan-300">
                You can only use <strong>expressions</strong> inside curly braces, not statements. 
                Expressions produce values, while statements control program flow.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Interactive Examples */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-7 h-7" />
              See It in Action
            </CardTitle>
            <CardDescription>
              Interactive examples demonstrating JavaScript expressions in JSX
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            
            <div className="space-y-8">
              <FrontendCodePreviewReact
                title="Example 1: Basic JavaScript Expressions"
                description="Learn the fundamentals! See how variables, calculations, and conditional expressions work in JSX. This example focuses on static expressions without user interaction."
                colorTheme="blue"
                react={basicExpressionsCode}
                html={`<div id="root"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
                css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  min-height: 100vh;
}

/* External CSS for Basic Expressions Component */
.js-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  color: #1e293b;
  border-radius: 12px;
  min-height: 100vh;
}

.js-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2563eb;
}

.js-card {
  padding: 15px;
  margin: 10px 0;
  background-color: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.js-card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937;
}

.js-text {
  margin: 6px 0;
  font-size: 14px;
}

.js-count {
  color: #2563eb;
}

.js-doubled {
  color: #7c3aed;
}

.js-yes {
  color: #059669;
}

.js-no {
  color: #dc2626;
}

.js-message-high {
  color: #d97706;
}

.js-message-low {
  color: #2563eb;
}

.js-footer {
  margin-top: 20px;
  padding: 12px;
  background-color: #dbeafe;
  border-radius: 6px;
  border: 1px solid #93c5fd;
}

.js-footer-text {
  margin: 0;
  font-size: 12px;
  color: #1e40af;
  text-align: center;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .js-container {
    background-color: #1e293b;
    color: #f1f5f9;
  }
  
  .js-title {
    color: #60a5fa;
  }
  
  .js-card {
    background-color: #374151;
    border: 1px solid #4b5563;
  }
  
  .js-card-title {
    color: #f3f4f6;
  }
  
  .js-count {
    color: #60a5fa;
  }
  
  .js-doubled {
    color: #a78bfa;
  }
  
  .js-yes {
    color: #34d399;
  }
  
  .js-no {
    color: #f87171;
  }
  
  .js-message-high {
    color: #fbbf24;
  }
  
  .js-message-low {
    color: #60a5fa;
  }
  
  .js-footer {
    background-color: #1e40af;
    border: 1px solid #3730a3;
  }
  
  .js-footer-text {
    color: #93c5fd;
  }
}`}
              />

              <FrontendCodePreviewReact
                title="Example 2: Interactive Features & State"
                description="Take it to the next level! This example shows how JavaScript expressions work with React state, user interactions, and conditional styling. Try clicking the buttons and typing your name!"
                colorTheme="green"
                react={interactiveFeaturesCode}
                html={`<div id="root"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>`}
                css={`body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
}

/* External CSS for Interactive Features Component */
.js-container {
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #ffffff;
  color: #1e293b;
  border-radius: 12px;
  min-height: 100vh;
}

.js-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #059669;
}

.js-card {
  padding: 15px;
  margin: 10px 0;
  background-color: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.js-card-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937;
}

.js-text {
  margin: 6px 0;
  font-size: 14px;
}

.js-count {
  color: #059669;
}

.js-doubled {
  color: #7c3aed;
}

.js-yes {
  color: #059669;
}

.js-no {
  color: #dc2626;
}

.js-message-high {
  color: #d97706;
}

.js-message-low {
  color: #059669;
}

.js-button-group {
  margin: 15px 0;
}

.js-button {
  padding: 10px 15px;
  margin: 5px;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.js-button-primary {
  background-color: #3b82f6;
}

.js-button-primary:hover {
  background-color: #1d4ed8;
}

.js-button-danger {
  background-color: #ef4444;
}

.js-button-danger:hover {
  background-color: #b91c1c;
}

.js-button-secondary {
  background-color: #6b7280;
}

.js-button-secondary:hover {
  background-color: #4b5563;
}

.js-input {
  padding: 10px 12px;
  margin-right: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background-color: #ffffff;
  color: #1e293b;
  font-size: 14px;
}

.js-name-display {
  font-size: 14px;
  color: #6b7280;
}

.js-name-text {
  color: #1e293b;
}

.js-conditional-high {
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #d1fae5;
  border: 1px solid #6ee7b7;
}

.js-conditional-low {
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #fef3c7;
  border: 1px solid #fcd34d;
}

.js-conditional-title-high {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #059669;
}

.js-conditional-title-low {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #d97706;
}

.js-conditional-text-high {
  color: #059669;
  font-weight: bold;
  margin: 0;
}

.js-conditional-text-low {
  color: #d97706;
  font-weight: normal;
  margin: 0;
}

.js-conditional-subtitle {
  font-size: 12px;
  margin: 8px 0 0 0;
  color: #6b7280;
  font-style: italic;
}

.js-footer {
  margin-top: 20px;
  padding: 12px;
  background-color: #dbeafe;
  border-radius: 6px;
  border: 1px solid #93c5fd;
}

.js-footer-text {
  margin: 0;
  font-size: 12px;
  color: #1e40af;
  text-align: center;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .js-container {
    background-color: #1e293b;
    color: #f1f5f9;
  }
  
  .js-title {
    color: #34d399;
  }
  
  .js-card {
    background-color: #374151;
    border: 1px solid #4b5563;
  }
  
  .js-card-title {
    color: #f3f4f6;
  }
  
  .js-count {
    color: #34d399;
  }
  
  .js-doubled {
    color: #a78bfa;
  }
  
  .js-yes {
    color: #34d399;
  }
  
  .js-no {
    color: #f87171;
  }
  
  .js-message-high {
    color: #fbbf24;
  }
  
  .js-message-low {
    color: #34d399;
  }
  
  .js-button-primary:hover {
    background-color: #2563eb;
  }
  
  .js-button-danger:hover {
    background-color: #dc2626;
  }
  
  .js-button-secondary:hover {
    background-color: #4b5563;
  }
  
  .js-input {
    border: 1px solid #4b5563;
    background-color: #374151;
    color: #f1f5f9;
  }
  
  .js-name-display {
    color: #9ca3af;
  }
  
  .js-name-text {
    color: #f1f5f9;
  }
  
  .js-conditional-high {
    background-color: #065f46;
    border: 1px solid #047857;
  }
  
  .js-conditional-low {
    background-color: #78350f;
    border: 1px solid #92400e;
  }
  
  .js-conditional-title-high {
    color: #34d399;
  }
  
  .js-conditional-title-low {
    color: #fbbf24;
  }
  
  .js-conditional-text-high {
    color: #34d399;
  }
  
  .js-conditional-text-low {
    color: #fbbf24;
  }
  
  .js-conditional-subtitle {
    color: #9ca3af;
  }
  
  .js-footer {
    background-color: #1e40af;
    border: 1px solid #3730a3;
  }
  
  .js-footer-text {
    color: #93c5fd;
  }
}`}
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 3: Key Concepts */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Lightbulb className="w-7 h-7" />
              Key Concepts & Features
            </CardTitle>
            <CardDescription>
              Master the essential JavaScript expression patterns in JSX
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <Database className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Data Binding</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300">
                  Connect your component state directly to the UI using expressions
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Conditional Logic</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Use ternary operators and logical operators for dynamic rendering
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Calculations</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  Perform mathematical operations and string manipulations inline
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Best Practices */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <CheckCircle className="w-7 h-7" />
              Best Practices & Tips
            </CardTitle>
            <CardDescription>
              Write clean and maintainable JavaScript expressions in JSX
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Do's
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Keep expressions simple and readable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Extract complex logic to variables or functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Use meaningful variable names</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Leverage conditional operators for simple conditions</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Don'ts
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Don't write complex expressions directly in JSX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Don't use statements (if, for, while) in expressions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Don't nest too many ternary operators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span>Don't forget to handle undefined/null values</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Common Pitfalls */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <AlertTriangle className="w-7 h-7" />
              Common Pitfalls & Solutions
            </CardTitle>
            <CardDescription>
              Avoid these common mistakes when working with JavaScript expressions in JSX
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950/20">
                <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Using Statements Instead of Expressions</h5>
                <code className="text-sm bg-red-100 dark:bg-red-900 p-2 rounded block mb-2">
                  {'{if (condition) { return "Yes"; }}'}
                </code>
                <p className="text-sm text-red-700 dark:text-red-300">
                  This will cause an error because `if` is a statement, not an expression.
                </p>
              </div>
              
              <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/20">
                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Correct Approach</h5>
                <code className="text-sm bg-green-100 dark:bg-green-900 p-2 rounded block mb-2">
                  {'{condition ? "Yes" : "No"}'}
                </code>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Use ternary operators or logical operators for conditional rendering.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 6: Advanced Expression Patterns */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Calculator className="w-7 h-7" />
              Advanced Expression Patterns
            </CardTitle>
            <CardDescription>
              Explore sophisticated JavaScript expression techniques in JSX
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
                <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">Template Literals</h4>
                <code className="text-sm bg-indigo-100 dark:bg-indigo-900 p-3 rounded block mb-2">
                  {`const greeting = \`Hello, \${name}! Today is \${day}\`;`}
                </code>
                <p className="text-sm text-indigo-700 dark:text-indigo-300">
                  Use template literals for dynamic string construction with embedded expressions
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20 rounded-xl border border-pink-200 dark:border-pink-700">
                <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-3">Array Methods</h4>
                <code className="text-sm bg-pink-100 dark:bg-pink-900 p-3 rounded block mb-2">
                  {`{items.map(item => <li key={item.id}>{item.name}</li>)}`}
                </code>
                <p className="text-sm text-pink-700 dark:text-pink-300">
                  Transform arrays directly in JSX using map, filter, and reduce methods
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/20 rounded-xl border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Object Destructuring</h4>
                <code className="text-sm bg-amber-100 dark:bg-amber-900 p-3 rounded block mb-2">
                  {`const {name, age} = user;`}
                </code>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Extract properties from objects for cleaner JSX expressions
                </p>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/20 rounded-xl border border-teal-200 dark:border-teal-700">
                <h4 className="font-semibold text-teal-800 dark:text-teal-200 mb-3">Short-circuit Evaluation</h4>
                <code className="text-sm bg-teal-100 dark:bg-teal-900 p-3 rounded block mb-2">
                  {`{user && <Welcome user={user} />}`}
                </code>
                <p className="text-sm text-teal-700 dark:text-teal-300">
                  Use logical operators for conditional rendering without ternary operators
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 7: Performance Optimization */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Gauge className="w-7 h-7" />
              Performance Optimization
            </CardTitle>
            <CardDescription>
              Keep your JavaScript expressions efficient and performant
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-700">
                <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" />
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Memoization</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                  Use useMemo to cache expensive calculations
                </p>
                <code className="text-xs bg-blue-100 dark:bg-blue-900 p-2 rounded block">
                  {`const expensive = useMemo(() => {
  return complexCalculation(data);
}, [data]);`}
                </code>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-700">
                <Zap className="w-6 h-6 text-green-600 dark:text-green-400 mb-3" />
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Avoid Inline Functions</h4>
                <p className="text-sm text-green-700 dark:text-green-300 mb-3">
                  Define functions outside render when possible
                </p>
                <code className="text-xs bg-green-100 dark:bg-green-900 p-2 rounded block">
                  {`// Good: Define outside
const handleClick = () => {...};

// Avoid: Inline in JSX
<button onClick={() => {...}>`}
                </code>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-5 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/20 rounded-xl border border-purple-200 dark:border-purple-700">
                <Database className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-3" />
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2"> useCallback for Functions</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                  Prevent unnecessary re-renders with memoized callbacks
                </p>
                <code className="text-xs bg-purple-100 dark:bg-purple-900 p-2 rounded block">
                  {`const memoizedCallback = useCallback(
  () => { doSomething(a, b); },
  [a, b]
);`}
                </code>
              </div>
              
              <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 rounded-xl border border-orange-200 dark:border-orange-700">
                <Lightbulb className="w-6 h-6 text-orange-600 dark:text-orange-400 mb-3" />
                <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Lazy Evaluation</h4>
                <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                  Defer expensive operations until needed
                </p>
                <code className="text-xs bg-orange-100 dark:bg-orange-900 p-2 rounded block">
                  {`const heavyComputation = useMemo(() => 
  expensiveOperation(data), [showResults]
);`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 8: Real-World Examples */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <Sparkles className="w-7 h-7" />
              Real-World Examples
            </CardTitle>
            <CardDescription>
              See how JavaScript expressions are used in production applications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 border border-blue-200 dark:border-blue-800 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🛒 E-commerce Price Display</h5>
                <code className="text-sm bg-blue-100 dark:bg-blue-900 p-3 rounded block">
                  {`<span>
  \${product.price.toFixed(2)}
  {product.onSale && (
    <span className="sale-badge">
      {Math.round((1 - product.salePrice / product.price) * 100)}% OFF
    </span>
  )}
</span>`}
                </code>
              </div>
              
              <div className="p-4 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950/20">
                <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">👤 User Avatar Component</h5>
                <code className="text-sm bg-green-100 dark:bg-green-900 p-3 rounded block">
                  {`<div className="avatar">
  {user.avatar ? (
    <img src={user.avatar} alt={user.name} />
  ) : (
    <div className="avatar-placeholder">
      {user.name.split(' ').map(n => n[0]).join('').toUpperCase()}
    </div>
  )}
</div>`}
                </code>
              </div>
              
              <div className="p-4 border border-purple-200 dark:border-purple-800 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">📊 Data Visualization</h5>
                <code className="text-sm bg-purple-100 dark:bg-purple-900 p-3 rounded block">
                  {`// Assuming completed and total are defined
const completed = 75;
const total = 100;

<div className="progress-bar">
  <div 
    className="progress-fill"
    style={{ width: (completed / total) * 100 + "%" }}
  >
    {Math.round((completed / total) * 100)}%
  </div>
</div>`}
                </code>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 9: Debugging Tips */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl text-cyan-600 dark:text-cyan-400">
              <AlertTriangle className="w-7 h-7" />
              Debugging JavaScript Expressions
            </CardTitle>
            <CardDescription>
              Common issues and how to troubleshoot them
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-red-600 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Common Errors
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Undefined variables:</strong> Always check if data exists before using</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Type mismatches:</strong> Ensure numbers are used in calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Async data:</strong> Handle loading states properly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span><strong>Null/undefined props:</strong> Use optional chaining</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Debugging Techniques
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Use <code>console.log()</code> to inspect expression values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Break down complex expressions into variables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Use React DevTools to inspect component state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span>Add TypeScript for better error catching</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Alert className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertTitle className="text-amber-800 dark:text-amber-200">Pro Tip</AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300">
                When debugging complex expressions, extract them into separate variables and log each step. 
                This makes it easier to identify where the issue occurs.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
