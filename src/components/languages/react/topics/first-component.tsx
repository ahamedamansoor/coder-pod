'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import { Code, Sparkles, CheckCircle2, AlertCircle, Play, Eye, Zap, RefreshCw, Brain, Lightbulb, Rocket } from 'lucide-react';

// Simple interactive button component
function InteractiveButton() {
  const [clicks, setClicks] = useState(0);
  
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'center',
      color: 'white'
    }}>
      <button 
        onClick={handleClick}
        style={{
          background: 'white',
          color: '#667eea',
          border: 'none',
          padding: '1rem 2rem',
          borderRadius: '8px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        🎪 Click Me! ({clicks} clicks)
      </button>
      <div style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
        {clicks === 0 && '👆 Start clicking to see React magic!'}
        {clicks > 0 && clicks <= 5 && '✨ Great! Keep going!'}
        {clicks > 5 && clicks <= 10 && '🔥 You\'re on fire!'}
        {clicks > 10 && '🌟 LEGENDARY! You\'re a React master!'}
      </div>
    </div>
  );
}

// Greeting component with props
function Greeting({ name, age }: { name: string; age: number }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '1.5rem',
      borderRadius: '12px',
      margin: '1rem',
      textAlign: 'center'
    }}>
      <h3>Hello, {name}!</h3>
      <p>You are {age} years old</p>
      <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
        {age < 25 && '🌟 Young & Ambitious!'}
        {age >= 25 && age < 35 && '🚀 In Your Prime!'}
        {age >= 35 && '🎯 Wise & Experienced!'}
      </div>
    </div>
  );
}

export default function FirstComponent() {
  const simpleComponentExample = `import React from 'react';
import { createRoot } from 'react-dom/client';

function Welcome() {
  return <h1>Hello, World!</h1>;
}

// React 18 createRoot API pattern
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

// Render the App component inside the root
root.render(<Welcome />);

export default Welcome;`;

  const interactiveComponentExample = `import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function InteractiveButton() {
  const [clicks, setClicks] = useState(0);
  
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <button onClick={handleClick}>
      Clicked {clicks} times
    </button>
  );
}

// React 18 createRoot API pattern
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

// Render the App component inside the root
root.render(<InteractiveButton />);

export default InteractiveButton;`;

  const propsExample = `import React from 'react';
import { createRoot } from 'react-dom/client';

function Greeting({ name, age }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old</p>
    </div>
  );
}

// Using the component
function App() {
  return (
    <div>
      <Greeting name="Alice" age={25} />
      <Greeting name="Bob" age={30} />
    </div>
  );
}

// React 18 createRoot API pattern
const container = document.getElementById('root');
const root = createRoot(container); // Create a root

// Render the App component inside the root
root.render(<App />);

export default App;`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Code}
        category="React · Components"
        title="Your First Component"
        description="Learn to create your first React component and bring your ideas to life with interactive, reusable building blocks."
        colorTheme="blue"
      />

      {/* What is a Component */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-500" />
            What is a React Component?
          </CardTitle>
          <CardDescription>
            A React component is a reusable piece of UI that can have its own state and logic.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  React Components: The Modern UI Revolution
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Think of them as intelligent, self-contained UI atoms that power the web's most interactive experiences
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950 p-5 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-green-700 dark:text-green-300">🧬 Living Building Blocks</h4>
              </div>
              <p className="text-sm text-green-600 dark:text-green-400 mb-3">
                Unlike static HTML, React components are living entities that can think, remember, and react to user interactions.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <code className="text-xs text-green-600 dark:text-green-400">
                  function Button() {`{`} return `<button>Click me</button>`; {`}`}
                </code>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 p-5 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-blue-700 dark:text-blue-300">🔄 Reusable DNA</h4>
              </div>
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">
                Write once, use everywhere. Each component carries its own logic and style, making it a complete, portable UI unit.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <code className="text-xs text-blue-600 dark:text-blue-400">
                  &lt;Button /&gt; &lt;Button /&gt; &lt;Button /&gt;
                </code>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-950 p-5 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-purple-700 dark:text-purple-300">🧠 Smart & Interactive</h4>
              </div>
              <p className="text-sm text-purple-600 dark:text-purple-400 mb-3">
                Components have memory (state) and can respond to events, creating dynamic user experiences that feel alive.
              </p>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                <code className="text-xs text-purple-600 dark:text-purple-400">
                  const [count, setCount] = useState(0);
                </code>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-lg text-amber-700 dark:text-amber-300 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              The Big Picture: Component Architecture
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-amber-600 dark:text-amber-400 mb-2">🏗️ Traditional Web</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Static HTML pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Manual DOM manipulation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Tightly coupled code</span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-green-600 dark:text-green-400 mb-2">🚀 React Components</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Dynamic, living UI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Automatic updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Modular & reusable</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert>
            <Rocket className="h-4 w-4" />
            <AlertTitle>Why This Matters</AlertTitle>
            <AlertDescription>
              React components revolutionized web development by treating UI as a composition of reusable, 
              interactive building blocks. This approach makes complex applications manageable, maintainable, 
              and delightful to build. You're not just writing code—you're creating digital organisms!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Creating Your First Component */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Creating Your First Component
          </CardTitle>
          <CardDescription>
            Let's create a simple component step by step.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreviewReact
            title="Welcome.js"
            description="Your first React component"
            css={`.welcome-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    transition: background 0.3s ease;
}

.dark .welcome-container {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

.welcome-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.dark .welcome-card {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(148, 163, 184, 0.3);
}

.welcome-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.dark .welcome-card:hover {
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.welcome-card h1 {
    margin: 0 0 1rem 0;
    color: #1a202c;
    font-size: 2rem;
    font-weight: 700;
    transition: color 0.3s ease;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.dark .welcome-card h1 {
    color: #f8fafc;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.welcome-card p {
    margin: 0 0 2rem 0;
    color: #4a5568;
    font-size: 1.1rem;
    line-height: 1.5;
    transition: color 0.3s ease;
}

.dark .welcome-card p {
    color: #cbd5e1;
}

.primary-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    position: relative;
    overflow: hidden;
}

.dark .primary-btn {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.dark .primary-btn:hover {
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.5);
}

.primary-btn:active {
    transform: translateY(0);
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.welcome-card {
    animation: slideUp 0.6s ease-out;
}`}
            react={`import React from 'react';

// Welcome Component - Much cleaner than vanilla JavaScript!
function Welcome() {
  const handleGetStarted = () => {
    alert('Welcome to React! 🚀');
  };

  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1>Welcome to React!</h1>
        <p>This is your first React component.</p>
        <button className="primary-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;`}
          />
          
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>Key Points</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Components are JavaScript functions that return JSX</li>
                <li>JSX looks like HTML but is actually JavaScript</li>
                <li>Always export your component so it can be used elsewhere</li>
                <li>Component names must start with a capital letter</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Component Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            Making Components Interactive
          </CardTitle>
          <CardDescription>
            Add state to make your components respond to user actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <FrontendCodePreviewReact
            title="InteractiveButton.js"
            description="A button that counts clicks"
            css={`.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    transition: background 0.3s ease;
}

.dark .button-container {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
}

.button-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.dark .button-card {
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(148, 163, 184, 0.3);
}

.button-card h1 {
    margin: 0 0 1rem 0;
    color: #1a202c;
    font-size: 2rem;
    font-weight: 700;
    transition: color 0.3s ease;
}

.dark .button-card h1 {
    color: #f8fafc;
}

.button-card p {
    margin: 0 0 2rem 0;
    color: #4a5568;
    font-size: 1.1rem;
    line-height: 1.5;
    transition: color 0.3s ease;
}

.dark .button-card p {
    color: #cbd5e1;
}

.primary-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.dark .primary-btn {
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
}

.dark .primary-btn:hover {
    box-shadow: 0 8px 16px rgba(59, 130, 246, 0.5);
}`}
            react={`import React, { useState } from 'react';

function InteractiveButton() {
  const [clicks, setClicks] = useState(0);
  
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="button-container">
      <div className="button-card">
        <h1>Interactive Counter</h1>
        <p>Click the button to count: {clicks}</p>
        <button onClick={handleClick} className="primary-btn">
          Click Me ({clicks})
        </button>
      </div>
    </div>
  );
}

export default InteractiveButton;`}
          />
          
          <Alert>
            <Sparkles className="h-4 w-4" />
            <AlertTitle>State Management</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>useState hook lets components remember data</li>
                <li>State changes trigger automatic re-renders</li>
                <li>Event handlers update state in response to user actions</li>
                <li>React handles all the DOM updates for you</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      
      
      {/* React Best Practices */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-purple-50/60 dark:from-blue-950/10 dark:to-purple-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              React Component Best Practices
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-green-600 dark:text-green-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Do's ✅
              </h4>
              <div className="space-y-3">
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Use Descriptive Names</h5>
                  <p className="text-sm text-green-600 dark:text-green-400">Component names should clearly describe what they do</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Keep Components Small</h5>
                  <p className="text-sm text-green-600 dark:text-green-400">Each component should have a single responsibility</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Use Props for Data Flow</h5>
                  <p className="text-sm text-green-600 dark:text-green-400">Pass data from parent to child components via props</p>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-700 dark:text-green-300 mb-1">Export Components</h5>
                  <p className="text-sm text-green-600 dark:text-green-400">Always export components for reuse in other files</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Don'ts ❌
              </h4>
              <div className="space-y-3">
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Don't Mutate Props</h5>
                  <p className="text-sm text-red-600 dark:text-red-400">Props should be treated as read-only data</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Don't Create Huge Components</h5>
                  <p className="text-sm text-red-600 dark:text-red-400">Break large components into smaller, reusable pieces</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Don't Use Lowercase Names</h5>
                  <p className="text-sm text-red-600 dark:text-red-400">Component names must start with a capital letter</p>
                </div>
                <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-700 dark:text-red-300 mb-1">Don't Forget to Import</h5>
                  <p className="text-sm text-red-600 dark:text-red-400">Always import React and other dependencies</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
            <h5 className="font-semibold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Pro Tip
            </h5>
            <p className="text-sm text-amber-600 dark:text-amber-400">
              Start by thinking about your UI as a collection of reusable components. 
              If you find yourself repeating the same JSX, consider extracting it into a separate component!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
