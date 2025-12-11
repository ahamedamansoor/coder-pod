'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import {
  Lightbulb,
  CheckCircle2,
  Shield,
  AlertTriangle,
  Bug,
  Search,
  Zap,
  Eye,
} from 'lucide-react';

export default function StrictModeApi() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Shield}
        category="React · Component Details"
        title="StrictMode"
        description="Learn how to use StrictMode to identify potential problems in your application during development with helpful warnings and checks."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is StrictMode */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Shield className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is StrictMode?"
              description="Development-only helper for better code quality"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">StrictMode</code> is a tool for highlighting potential problems in your React application. It activates <strong>additional checks and warnings</strong> for its descendants during development!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Basic Usage</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>import {'{ StrictMode }'} from 'react';</div>
                  <div className="mt-2"></div>
                  <div>&lt;StrictMode&gt;</div>
                  <div className="pl-4">&lt;App /&gt;</div>
                  <div>&lt;/StrictMode&gt;</div>
                  <div className="mt-2"></div>
                  <div className="text-green-600 dark:text-green-400">// Wraps entire app or specific parts</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Development Only</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">No Production Impact</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  StrictMode checks only run in development. Production builds are unaffected!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <Badge className="bg-blue-500 mb-3">🔍 Catch Issues Early</Badge>
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Proactive Debugging</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Identifies problems before they become bugs in production.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Development Guardian!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                StrictMode is like a security guard for your code - it doesn't change behavior, but alerts you to potential issues!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* What StrictMode Checks */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Search className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What StrictMode Checks"
              description="7 important validations"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-red-500 mt-1">1</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">⚠️ Unsafe Lifecycle Methods</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Warns about deprecated lifecycle methods that are unsafe for async rendering:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">componentWillMount</Badge>
                      <Badge variant="outline" className="text-xs">componentWillReceiveProps</Badge>
                      <Badge variant="outline" className="text-xs">componentWillUpdate</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-orange-500 mt-1">2</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">🔄 Legacy String Refs</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Warns about outdated string ref API. Use callback refs or createRef() instead.
                    </p>
                    <div className="mt-2 p-2 bg-orange-50 dark:bg-orange-950/20 rounded text-xs font-mono">
                      <div className="text-red-600 dark:text-red-400">❌ ref="myRef" // Legacy</div>
                      <div className="text-green-600 dark:text-green-400">✅ ref={'{myRef}'} // Modern</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-yellow-300 dark:border-yellow-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-yellow-500 mt-1">3</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-yellow-700 dark:text-yellow-300 mb-2">⚡ findDOMNode Usage</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Warns about deprecated findDOMNode API. Use refs to access DOM nodes instead.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-500 mt-1">4</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">🔁 Unexpected Side Effects</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Intentionally double-invokes these functions to detect side effects:
                    </p>
                    <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                      <li>• Class component constructor, render, shouldComponentUpdate</li>
                      <li>• Function component bodies</li>
                      <li>• State updater functions (setState)</li>
                      <li>• Functions passed to useState, useMemo, useReducer</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-purple-500 mt-1">5</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">📦 Legacy Context API</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Warns about deprecated context API. Use modern Context API with React.createContext().
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-green-500 mt-1">6</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">♻️ Reusable State Detection</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      In React 18+, intentionally mounts components twice in development to ensure state cleanup works correctly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <div className="flex items-start gap-3">
                  <Badge className="bg-indigo-500 mt-1">7</Badge>
                  <div className="flex-1">
                    <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">🔐 Missing Key Props</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Warns about missing 'key' props when rendering lists of elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-300 dark:border-yellow-700">
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              <AlertTitle className="text-yellow-900 dark:text-yellow-100">Double Rendering in Development!</AlertTitle>
              <AlertDescription className="text-yellow-800 dark:text-yellow-200">
                StrictMode intentionally renders components twice to help you find bugs. This is normal and only happens in development!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Shield className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Using StrictMode"
            description="Wrapping your app for better development checks"
            size="lg"
          />

          <CodeSnippetWithOutput
            title="StrictMode in Your App"
            description="Wrap entire app or specific sections"
            language="javascript"
            colorTheme="green"
            code={`import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Option 1: Wrap entire app
const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Option 2: Wrap specific parts
function App() {
  return (
    <div>
      <Header />
      
      {/* Only check this section */}
      <StrictMode>
        <Sidebar />
        <Content />
      </StrictMode>
      
      <Footer />
    </div>
  );
}

// Example component with side effect
function ProblematicComponent() {
  // ⚠️ StrictMode will catch this!
  // This runs twice in development
  console.log('Component rendered');
  
  // Side effect in render - BAD!
  document.title = 'My App'; // ❌ Should be in useEffect
  
  return <div>Content</div>;
}

// Fixed version
function GoodComponent() {
  console.log('Component rendered'); // Runs twice, but harmless
  
  // Side effect in useEffect - GOOD!
  React.useEffect(() => {
    document.title = 'My App'; // ✅ Proper place
  }, []);
  
  return <div>Content</div>;
}`}
            output={[
              '⚠️ Console warnings in development:',
              '',
              'Warning: Component rendered twice in StrictMode',
              '// This is intentional to detect side effects',
              '',
              'Warning: Cannot update document.title during render',
              '// Move side effects to useEffect',
              '',
              '✅ Production: No warnings, normal rendering'
            ]}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="Best Practices"
              description="How to use StrictMode effectively"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">✅ Use in Development</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Always enable StrictMode during development. It catches issues early and helps you write better code.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">✅ Gradual Adoption</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Can't wrap entire app? Start with specific sections and gradually expand StrictMode coverage.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">✅ Fix All Warnings</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't ignore StrictMode warnings. They indicate real issues that could cause bugs in production.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">💡 Double Rendering Is Normal</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If you see components rendering twice, that's expected! It helps detect impure components.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">⚠️ Keep Components Pure</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't put side effects in render. Use useEffect, useLayoutEffect, or event handlers instead.
                </p>
              </div>
            </div>
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
                  <Shield className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Development Tool</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only runs checks in development, zero production impact.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Bug className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Catches Issues Early</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Identifies 7+ types of potential problems before production.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Double Rendering</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Intentionally renders twice to detect side effects.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Code Quality</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Enforces best practices and modern React patterns.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Essential Development Tool!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Always use StrictMode in development! It's your best friend for catching bugs early and writing robust React code!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
