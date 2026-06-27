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
} from 'lucide-react';

export default function PassingDataWithContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Share2}
        category="React · Context (Data Flow)"
        title="Passing Data with Context"
        description="Master how to pass data through React Context with step-by-step guidance, practical examples, and best practices."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Understanding Data Flow */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Database className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Understanding Context Data Flow"
              description="How data moves through your React application"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Passing data with Context is like creating a <strong>highway system</strong> for your data - instead of stopping at every intersection (component), data flows directly to where it's needed, bypassing unnecessary stops.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚗 Prop Drilling</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium">Data stops at every component</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium">Components receive unused props</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium">Difficult to maintain</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">🚀 Context Highway</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Direct data access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Clean component structure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Easy to maintain</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Data Passing */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Data Passing Guide"
              description="Learn how to pass data through Context properly"
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
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Define Your Data Structure</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, decide what data you want to pass and how it should be structured. Think about the shape of your data and what functions you'll need to update it.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Define your data structure</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> userData = {'{}'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Shape of your context data</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> contextValue = {'{}'};
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
                              Group related data together and include update functions in the same context.
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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Create Context with Default Values</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create your Context with meaningful default values. This ensures your components work even without a Provider and helps with testing.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create context with default values</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> MyContext = <span className="text-blue-600">createContext</span>({'{'});
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            data: <span className="text-orange-600">null</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            updateData: <span className="text-gray-500">() ={">"} {'{}'}</span>,
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Why Default Values?</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Prevents undefined errors and makes your components testable without Providers.
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
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 3: Create Provider Component</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Build a Provider component that manages the state and provides the context value to all child components.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Provider component</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">MyProvider</span>({'{'} children {'})'} {'{'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [data, setData] = <span className="text-blue-600">useState</span>(<span className="text-orange-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> value = {'{'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            data,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            updateData: setData
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">MyContext.Provider value={'{'}{">"} </span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            {'{'}children{'}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-blue-600">MyContext.Provider</span>
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
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Create Custom Hook</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create a custom hook to make consuming the context easier and provide better error handling.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Custom hook for easy consumption</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">useMyContext</span>() {'{'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> context = <span className="text-blue-600">useContext</span>(MyContext);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (!context) {'{'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">throw new</span> <span className="text-blue-600">Error</span>(<span className="text-green-600">'useMyContext must be used within MyProvider'</span>);
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> context;
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

              {/* Step 5 */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-orange-200 dark:border-orange-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">5</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <h4 className="font-bold text-xl text-orange-700 dark:text-orange-300">Step 5: Consume in Components</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use your custom hook in any component to access the data and update functions without prop drilling.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-orange-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Consume context in components</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-600">MyComponent</span>() {'{'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> {'{'} data, updateData {'}'} = <span className="text-blue-600">useMyContext</span>();
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;div&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;h1&gt;</span>Data: {'{'}data{'}'}<span className="text-gray-500">&lt;/h1&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            <span className="text-gray-500">&lt;button onClick={'() => updateData(\'new value\')'}&gt;</span>
                          </div>
                          <div className="ml-20 text-slate-800 dark:text-slate-200">
                            Update Data
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
            icon={<Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
            title="Example 1: Theme Context"
            description="Simple theme switching with Context API"
            size="lg"
          />
          
          <FrontendCodePreview
            learningContext="react"
            title="Theme Context - Complete Implementation"
            description="A practical example of passing theme data and toggle function through context"
            colorTheme="blue"
            react={`// Step 1: Create Theme Context with default values
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {}
});

// Step 2: Theme Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Context value object
  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={'theme-' + theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

// Step 3: Custom Hook for easier context consumption
function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Step 4: Components consuming the theme context
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>My Application</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

function Card({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <Card 
        title="Welcome to Context API"
        content="This card uses the theme from context!"
      />
      <Card 
        title="Reusable Components"
        content="Any component can access the theme without props!"
      />
    </main>
  );
}

// Step 5: Root App Component
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

// ReactDOM integration
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
  const { createElement: h, createContext, useContext, useState } = React;
  const { createRoot } = ReactDOM;

  // Create Theme Context
  const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
  });

  // Theme Provider Component
  function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const value = {
      theme,
      toggleTheme
    };

    return h(ThemeContext.Provider, { value }, 
      h('div', { className: 'theme-' + theme }, children)
    );
  }

  // Custom Hook
  function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  }

  // Components
  function Header() {
    const { theme, toggleTheme } = useTheme();

    return h('header', { className: 'header' }, 
      h('h1', {}, 'My Application'),
      h('button', { 
        onClick: toggleTheme, 
        className: 'theme-toggle' 
      }, theme === 'light' ? '🌙 Dark' : '☀️ Light')
    );
  }

  function Card({ title, content }) {
    return h('div', { className: 'card' }, 
      h('h3', {}, title),
      h('p', {}, content)
    );
  }

  function MainContent() {
    return h('main', { className: 'main-content' }, 
      h(Card, { 
        title: 'Welcome to Context API',
        content: 'This card uses the theme from context!'
      }),
      h(Card, { 
        title: 'Reusable Components',
        content: 'Any component can access the theme without props!'
      })
    );
  }

  // App Component
  function App() {
    return h(ThemeProvider, {}, 
      h('div', { className: 'app' }, 
        h(Header),
        h(MainContent)
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
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

.app {
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* Light Theme Styles */
.theme-light {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.theme-light .header {
  background: rgba(255, 255, 255, 0.95);
  color: #1f2937;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.theme-light .card {
  background: rgba(255, 255, 255, 0.95);
  color: #1f2937;
  padding: 24px;
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.theme-light .card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

/* Dark Theme Styles */
.theme-dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
}

.theme-dark .header {
  background: rgba(31, 41, 55, 0.95);
  color: #f9fafb;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.theme-dark .card {
  background: rgba(31, 41, 55, 0.95);
  color: #f9fafb;
  padding: 24px;
  margin: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(75, 85, 99, 0.3);
  transition: transform 0.2s ease;
}

.theme-dark .card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

/* Common Styles */
.main-content {
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.header h1 {
  font-size: 1.8rem;
  font-weight: 700;
}

.theme-toggle {
  padding: 10px 20px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.card h3 {
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: inherit;
}

.card p {
  line-height: 1.6;
  color: inherit;
  opacity: 0.9;
}

/* Responsive Design */
@media (max-width: 768px) {
  .header {
    padding: 15px 20px;
    flex-direction: column;
    gap: 15px;
  }
  
  .main-content {
    padding: 20px;
  }
  
  .card {
    margin: 12px 0;
  }
}`}
          />
        </div>

        {/* Practical Example 2 */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
            title="Example 2: User Preferences"
            description="Complex data with objects and multiple functions"
            size="lg"
          />
          
          <FrontendCodePreview
            learningContext="react"
            title="User Preferences Context - Advanced Example"
            description="Managing user settings with multiple data types and update functions"
            colorTheme="purple"
            react={`// Step 1: Create User Preferences Context
const UserPreferencesContext = React.createContext({
  preferences: {
    language: 'en',
    fontSize: 'medium',
    notifications: true,
    autoSave: false
  },
  updatePreference: () => {},
  resetPreferences: () => {}
});

// Step 2: User Preferences Provider
function UserPreferencesProvider({ children }) {
  const [preferences, setPreferences] = React.useState({
    language: 'en',
    fontSize: 'medium',
    notifications: true,
    autoSave: false
  });

  // Update a single preference
  const updatePreference = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // Reset all preferences to defaults
  const resetPreferences = () => {
    setPreferences({
      language: 'en',
      fontSize: 'medium',
      notifications: true,
      autoSave: false
    });
  };

  const value = {
    preferences,
    updatePreference,
    resetPreferences
  };

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
}

// Step 3: Custom hook for user preferences
function useUserPreferences() {
  const context = React.useContext(UserPreferencesContext);
  if (!context) {
    throw new Error('useUserPreferences must be used within UserPreferencesProvider');
  }
  return context;
}

// Step 4: Settings Panel Component
function SettingsPanel() {
  const { preferences, updatePreference, resetPreferences } = useUserPreferences();

  return (
    <div className="settings-panel">
      <h2>User Preferences</h2>
      
      <div className="setting-group">
        <label>Language:</label>
        <select 
          value={preferences.language}
          onChange={(e) => updatePreference('language', e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="setting-group">
        <label>Font Size:</label>
        <select 
          value={preferences.fontSize}
          onChange={(e) => updatePreference('fontSize', e.target.value)}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      <div className="setting-group">
        <label>
          <input 
            type="checkbox"
            checked={preferences.notifications}
            onChange={(e) => updatePreference('notifications', e.target.checked)}
          />
          Enable Notifications
        </label>
      </div>

      <div className="setting-group">
        <label>
          <input 
            type="checkbox"
            checked={preferences.autoSave}
            onChange={(e) => updatePreference('autoSave', e.target.checked)}
          />
          Auto-save
        </label>
      </div>

      <button onClick={resetPreferences} className="reset-btn">
        Reset to Defaults
      </button>
    </div>
  );
}

// Step 5: Preferences Display Component
function PreferencesDisplay() {
  const { preferences } = useUserPreferences();

  return (
    <div className="preferences-display">
      <h3>Current Preferences</h3>
      <div className="preference-item">
        <span className="label">Language:</span>
        <span className="value">{preferences.language.toUpperCase()}</span>
      </div>
      <div className="preference-item">
        <span className="label">Font Size:</span>
        <span className="value">{preferences.fontSize}</span>
      </div>
      <div className="preference-item">
        <span className="label">Notifications:</span>
        <span className="value">{preferences.notifications ? '✅ On' : '❌ Off'}</span>
      </div>
      <div className="preference-item">
        <span className="label">Auto-save:</span>
        <span className="value">{preferences.autoSave ? '✅ On' : '❌ Off'}</span>
      </div>
    </div>
  );
}

// Step 6: Main App Component
function App() {
  return (
    <UserPreferencesProvider>
      <div className="app">
        <div className="container">
          <SettingsPanel />
          <PreferencesDisplay />
        </div>
      </div>
    </UserPreferencesProvider>
  );
}

// ReactDOM integration
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
  const { createElement: h, createContext, useContext, useState } = React;
  const { createRoot } = ReactDOM;

  // Create User Preferences Context
  const UserPreferencesContext = createContext({
    preferences: {
      language: 'en',
      fontSize: 'medium',
      notifications: true,
      autoSave: false
    },
    updatePreference: () => {},
    resetPreferences: () => {}
  });

  // User Preferences Provider
  function UserPreferencesProvider({ children }) {
    const [preferences, setPreferences] = useState({
      language: 'en',
      fontSize: 'medium',
      notifications: true,
      autoSave: false
    });

    const updatePreference = (key, value) => {
      setPreferences(prev => ({
        ...prev,
        [key]: value
      }));
    };

    const resetPreferences = () => {
      setPreferences({
        language: 'en',
        fontSize: 'medium',
        notifications: true,
        autoSave: false
      });
    };

    const value = {
      preferences,
      updatePreference,
      resetPreferences
    };

    return h(UserPreferencesContext.Provider, { value }, children);
  }

  // Custom hook for user preferences
  function useUserPreferences() {
    const context = useContext(UserPreferencesContext);
    if (!context) {
      throw new Error('useUserPreferences must be used within UserPreferencesProvider');
    }
    return context;
  }

  // Settings Panel Component
  function SettingsPanel() {
    const { preferences, updatePreference, resetPreferences } = useUserPreferences();

    return h('div', { className: 'settings-panel' }, 
      h('h2', {}, 'User Preferences'),
      
      h('div', { className: 'setting-group' }, 
        h('label', {}, 'Language:'),
        h('select', {
          value: preferences.language,
          onChange: (e) => updatePreference('language', e.target.value)
        }, 
          h('option', { value: 'en' }, 'English'),
          h('option', { value: 'es' }, 'Spanish'),
          h('option', { value: 'fr' }, 'French')
        )
      ),

      h('div', { className: 'setting-group' }, 
        h('label', {}, 'Font Size:'),
        h('select', {
          value: preferences.fontSize,
          onChange: (e) => updatePreference('fontSize', e.target.value)
        }, 
          h('option', { value: 'small' }, 'Small'),
          h('option', { value: 'medium' }, 'Medium'),
          h('option', { value: 'large' }, 'Large')
        )
      ),

      h('div', { className: 'setting-group' }, 
        h('label', {}, 
          h('input', {
            type: 'checkbox',
            checked: preferences.notifications,
            onChange: (e) => updatePreference('notifications', e.target.checked)
          }),
          ' Enable Notifications'
        )
      ),

      h('div', { className: 'setting-group' }, 
        h('label', {}, 
          h('input', {
            type: 'checkbox',
            checked: preferences.autoSave,
            onChange: (e) => updatePreference('autoSave', e.target.checked)
          }),
          ' Auto-save'
        )
      ),

      h('button', { 
        onClick: resetPreferences, 
        className: 'reset-btn' 
      }, 'Reset to Defaults')
    );
  }

  // Preferences Display Component
  function PreferencesDisplay() {
    const { preferences } = useUserPreferences();

    return h('div', { className: 'preferences-display' }, 
      h('h3', {}, 'Current Preferences'),
      h('div', { className: 'preference-item' }, 
        h('span', { className: 'label' }, 'Language:'),
        h('span', { className: 'value' }, preferences.language.toUpperCase())
      ),
      h('div', { className: 'preference-item' }, 
        h('span', { className: 'label' }, 'Font Size:'),
        h('span', { className: 'value' }, preferences.fontSize)
      ),
      h('div', { className: 'preference-item' }, 
        h('span', { className: 'label' }, 'Notifications:'),
        h('span', { className: 'value' }, preferences.notifications ? '✅ On' : '❌ Off')
      ),
      h('div', { className: 'preference-item' }, 
        h('span', { className: 'label' }, 'Auto-save:'),
        h('span', { className: 'value' }, preferences.autoSave ? '✅ On' : '❌ Off')
      )
    );
  }

  // App Component
  function App() {
    return h(UserPreferencesProvider, {}, 
      h('div', { className: 'app' }, 
        h('div', { className: 'container' }, 
          h(SettingsPanel),
          h(PreferencesDisplay)
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
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  min-height: 100vh;
  padding: 20px;
}

.app {
  max-width: 1000px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

/* Settings Panel Styles */
.settings-panel {
  background: #f8fafc;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.settings-panel h2 {
  color: #7c3aed;
  margin-bottom: 25px;
  font-size: 1.5rem;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-group label {
  display: block;
  color: #374151;
  font-weight: 600;
  margin-bottom: 8px;
}

.setting-group select {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  background: white;
  cursor: pointer;
}

.setting-group select:focus {
  outline: none;
  border-color: #7c3aed;
}

.setting-group input[type="checkbox"] {
  margin-right: 8px;
  transform: scale(1.2);
}

.reset-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 10px;
}

.reset-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
}

/* Preferences Display Styles */
.preferences-display {
  background: #f1f5f9;
  padding: 30px;
  border-radius: 12px;
  border: 2px solid #cbd5e1;
}

.preferences-display h3 {
  color: #7c3aed;
  margin-bottom: 25px;
  font-size: 1.3rem;
}

.preference-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.preference-item:last-child {
  border-bottom: none;
}

.preference-item .label {
  color: #475569;
  font-weight: 600;
}

.preference-item .value {
  color: #1e293b;
  font-weight: 700;
  background: white;
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
  }

  .container {
    background: #1e293b;
    color: #f1f5f9;
  }

  .settings-panel {
    background: #334155;
    border-color: #475569;
  }

  .settings-panel h2 {
    color: #a78bfa;
  }

  .setting-group label {
    color: #e2e8f0;
  }

  .setting-group select {
    background: #1e293b;
    border-color: #475569;
    color: #f1f5f9;
  }

  .preferences-display {
    background: #334155;
    border-color: #475569;
  }

  .preferences-display h3 {
    color: #a78bfa;
  }

  .preference-item {
    border-bottom-color: #475569;
  }

  .preference-item .label {
    color: #cbd5e1;
  }

  .preference-item .value {
    color: #f1f5f9;
    background: #1e293b;
    border-color: #475569;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    padding: 20px;
  }
  
  body {
    padding: 10px;
  }
}`}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Best Practices for Context Data"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ Do's</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Pass objects with related data</li>
                  <li>• Include update functions</li>
                  <li>• Create custom hooks</li>
                  <li>• Provide default values</li>
                  <li>• Keep context focused</li>
                  <li>• Use TypeScript for type safety</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">❌ Don'ts</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Pass unrelated data together</li>
                  <li>• Create deeply nested contexts</li>
                  <li>• Ignore context validation</li>
                  <li>• Overuse context for simple data</li>
                  <li>• Mix concerns in one context</li>
                  <li>• Forget performance optimization</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">JSX Component Writing Tip!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                When writing JSX components that consume context, always create custom hooks (like useTheme, useUserPreferences) to encapsulate context logic and provide better error handling.
              </AlertDescription>
            </Alert>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-4">Context Value Structure</h4>
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-800 dark:text-gray-200">
{`// Recommended structure
const contextValue = {
  // State data
  data: { /* your data here */ },
  
  // Update functions
  updateData: (newData) => { /* logic */ },
  resetData: () => { /* logic */ },
  
  // Computed values
  isLoading: false,
  hasError: null,
  
  // Helper functions
  validateData: () => { /* logic */ }
};`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
