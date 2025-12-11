'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Component as ComponentIcon,
  Blocks,
  Zap,
  ArrowRight,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Layers,
  Code,
  Box,
  Puzzle,
  Sparkles,
  AlertTriangle,
  Target,
  FileCode,
  Package
} from 'lucide-react';

export default function YourFirstComponent() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ComponentIcon}
        category="React · Core Concepts"
        title="Your First Component"
        description="Learn how to create reusable building blocks for your UI. Components are the heart of React - let's build your first one!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Blocks className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is a React Component?"
              description="Think of components like LEGO blocks - reusable pieces you can combine to build amazing things!"
              size="lg"
            />
            <p className="text-base text-gray-700 dark:text-gray-300">
              A <strong>React component</strong> is a JavaScript function that returns HTML-like code (JSX). It's like creating your own custom HTML tag! Instead of writing the same code over and over, you create a component once and reuse it everywhere.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold">Reusable</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Write once, use anywhere! Just like using <code>&lt;button&gt;</code> multiple times.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Puzzle className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold">Composable</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Combine small components to build complex UIs, like building with LEGO!
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold">Organized</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keep your code clean and easy to maintain by splitting into logical pieces.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">The LEGO Analogy</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Imagine building with LEGO: instead of carrying around loose pieces, you create special pre-built sections (like a car wheel or door). Components work the same way - build once, reuse everywhere!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Creating Your First Component"
            description="Let's build a simple button component step by step!"
            size="lg"
          />

          <FrontendCodePreview
            title="Simple Button Component"
            description="This is the simplest React component - a function that returns JSX. Click Run to see it!"
            colorTheme="cyan"
            react={`function MyButton() {
  return (
    <button className="my-button">
      I'm a button! 🚀
    </button>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyButton />);`}
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

  function MyButton() {
    return h('button', { 
      className: 'my-button'
    }, "I'm a button! 🚀");
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(MyButton));
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
}

.my-button {
  padding: 16px 40px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);
  transition: all 0.3s ease;
}

.my-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 30px rgba(6, 182, 212, 0.6);
}

.my-button:active {
  transform: translateY(0);
}`}
          />
        </div>

        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="The 3 Golden Rules"
              description="Follow these rules and your components will always work!"
              size="lg"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Component names MUST start with a capital letter</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">❌ Wrong</p>
                      <code className="text-sm">{'<myButton />'}</code>
                      <p className="text-xs text-muted-foreground mt-1">Treated as HTML tag</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">✅ Correct</p>
                      <code className="text-sm">{'<MyButton />'}</code>
                      <p className="text-xs text-muted-foreground mt-1">React component</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Must return ONE parent element</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">❌ Wrong</p>
                      <pre className="text-xs">{`return (
  <h1>Title</h1>
  <p>Text</p>
)`}</pre>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">✅ Correct</p>
                      <pre className="text-xs">{`return (
  <div>
    <h1>Title</h1>
    <p>Text</p>
  </div>
)`}</pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">All JSX tags must be closed</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">❌ Wrong</p>
                      <code className="text-sm">{'<img src="pic.jpg">'}</code>
                      <p className="text-xs text-muted-foreground mt-1">Missing closing</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">✅ Correct</p>
                      <code className="text-sm">{'<img src="pic.jpg" />'}</code>
                      <p className="text-xs text-muted-foreground mt-1">Self-closing tag</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-emerald-900 dark:text-emerald-100">
                  Component Best Practices
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Follow these guidelines to write clean, maintainable React components!
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
                    <span>Use <strong>PascalCase</strong> for component names</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Keep components <strong>small and focused</strong> (one job)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Use <strong>descriptive names</strong>: <code>UserProfile</code> not <code>UP</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Return JSX wrapped in a <strong>single parent</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span><strong>Compose</strong> complex UIs from simple components</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span><strong>Export</strong> components for reusability</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-600 dark:text-emerald-400">•</span>
                    <span>Close all <strong>self-closing tags</strong> with <code>/&gt;</code></span>
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
                    <span>Use <strong>lowercase</strong> for component names</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Create <strong>giant components</strong> that do everything</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Use <strong>vague names</strong>: <code>Component1</code>, <code>Thing</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Forget to return</strong> JSX from component</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Return <strong>multiple root elements</strong> without wrapper</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Call components as functions:</strong> <code>MyButton()</code></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span>Use <strong>numbers or dashes</strong> in names: <code>2Button</code>, <code>my-button</code></span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
