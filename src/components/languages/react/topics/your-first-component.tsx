'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
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
  Package,
  Play,
  Download,
  Upload,
  FolderOpen,
  FileText,
  GitBranch,
  Terminal
} from 'lucide-react';

export default function YourFirstComponent() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={ComponentIcon}
        category="React · Core Concepts"
        title="What is React Component?"
        description="Understanding React components - the fundamental building blocks that make React powerful and reusable."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Blocks className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Understanding React Components"
              description="Components are the heart of React - independent, reusable pieces of code that return HTML."
              size="lg"
            />
            
            <div className="space-y-4">
              <p className="text-base text-gray-700 dark:text-gray-300">
                A <strong>React component</strong> is a JavaScript function that returns JSX (HTML-like code). Think of it as a custom HTML tag that you can create and reuse throughout your application.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
                  <h4 className="font-semibold text-lg mb-3 text-cyan-600 dark:text-cyan-400">🎯 Core Concept</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm"><strong>Function → JSX → UI</strong></span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Components take data (props) and return what should be displayed on screen.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
                  <h4 className="font-semibold text-lg mb-3 text-cyan-600 dark:text-cyan-400">🔄 Reusability</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm"><strong>Write Once, Use Everywhere</strong></span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Create a component once and reuse it with different data throughout your app.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">The Building Block Analogy</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Like LEGO bricks, components are individual pieces that you can combine to build anything from simple buttons to complex applications. Each component has a specific purpose and can be used in multiple places.
              </AlertDescription>
            </Alert>

            {/* Interactive Playground Example */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-cyan-200 dark:border-cyan-700">
              <h4 className="font-semibold text-lg mb-3 text-cyan-600 dark:text-cyan-400">🎮 Try It Yourself!</h4>
              <p className="text-sm text-muted-foreground mb-4">
                See a simple React component in action. Click "Run" to execute the code!
                <br />
                <span className="text-xs text-cyan-600 dark:text-cyan-400">
                  💡 <strong>Note:</strong> Modern JSX syntax with live preview! This is how you'll write React in real projects.
                </span>
              </p>
              
              <FrontendCodePreviewReact
                title="Simple Greeting Component"
                description="A basic React component that displays a greeting message"
                colorTheme="cyan"
                react={`function Greeting({ name = 'Friend' }) {
  // Modern JSX syntax - clean and readable with external CSS classes
  return (
    <div className="greeting-container">
      <h2 className="greeting-heading">
        Hello, {name}! 🎉
      </h2>
      <p className="greeting-text">
        Welcome to React Components!
      </p>
    </div>
  );
}

// Using the component with modern JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="React Developer" />);`}
                html={`<div id="root"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`}
                css={`:root {
  --bg-gradient-start: #f0f9ff;
  --bg-gradient-end: #e0f2fe;
  --text-primary: #1f2937;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-gradient-start: #0f172a;
    --bg-gradient-end: #1e293b;
    --text-primary: #f1f5f9;
  }
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
  color: var(--text-primary);
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* External CSS for Greeting Component */
.greeting-container {
  padding: 2rem;
  background-color: #06b6d4;
  color: white;
  border-radius: 16px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  max-width: 400px;
  margin: 2rem auto;
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.3);
  border: none;
}

.greeting-heading {
  font-size: 2rem;
  margin: 0 0 1rem 0;
  font-weight: bold;
  text-shadow: none;
}

.greeting-text {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

/* Dark mode styles for the greeting component */
@media (prefers-color-scheme: dark) {
  .greeting-container {
    background-color: #0891b2;
    box-shadow: 0 8px 20px rgba(8, 145, 178, 0.4);
    border: 1px solid #0e7490;
  }
  
  .greeting-heading {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
}`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Component Types */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Types of React Components"
              description="Learn about the different ways to create components in React."
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">🟢 Functional Components</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern, simple JavaScript functions that return JSX. This is the recommended approach.
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Example</span>
                                  </div>
                
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`function WelcomeMessage({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// Arrow function version
const WelcomeMessage = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};`}
                </pre>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold text-lg mb-3 text-purple-600 dark:text-purple-400">🔵 Class Components</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Older ES6 class-based components. Still supported but functional components are preferred.
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Example</span>
                                  </div>
                
                <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`class WelcomeMessage extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}`}
                </pre>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Target className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Modern React Recommendation</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>Use Functional Components!</strong> They're simpler, easier to test, and work perfectly with React Hooks. Class components are considered legacy.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Component Rules */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Component Rules & Best Practices"
              description="Essential rules every React component must follow."
              size="lg"
            />

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Component Names MUST Start with Capital Letter</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    React uses capitalization to distinguish between components and HTML tags.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-red-50 dark:bg-red-950/20 rounded border border-red-300 dark:border-red-700">
                      <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">❌ Wrong</p>
                      <code className="text-sm">{'<myComponent />'}</code>
                      <p className="text-xs text-muted-foreground mt-1">Treated as HTML tag</p>
                    </div>
                    <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-300 dark:border-green-700">
                      <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">✅ Correct</p>
                      <code className="text-sm">{'<MyComponent />'}</code>
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
                  <h3 className="font-bold text-lg mb-2">Must Return ONE Parent Element</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Components can only return a single root element or Fragment.
                  </p>
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
                  <h3 className="font-bold text-lg mb-2">All JSX Tags Must Be Closed</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Unlike HTML, JSX requires all tags to be properly closed.
                  </p>
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

        {/* Imports & Exports Section */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-indigo-50/50 dark:from-purple-950/10 dark:to-indigo-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Download className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Imports & Exports: Sharing Components"
              description="Learn how to organize your components across files and share them throughout your app!"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Exporting Components
                </h4>
                <p className="text-sm text-muted-foreground">
                  Make your components available to other files by exporting them:
                </p>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">Button.jsx</span>
                                      </div>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`// File: Button.jsx
function MyButton() {
  return <button>Click Me! 🚀</button>;
}

// Export the component
export default MyButton;

// Export additional items
export const ButtonVariants = {
  primary: 'purple',
  secondary: 'gray'
};`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Importing Components
                </h4>
                <p className="text-sm text-muted-foreground">
                  Use exported components in other files by importing them:
                </p>
                
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">App.jsx</span>
                                      </div>
                  <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`// File: App.jsx
// Import default export
import MyButton from './Button';

// Import named exports
import { ButtonVariants } from './Button';

function App() {
  return (
    <div>
      <MyButton />
      <button style={{backgroundColor: ButtonVariants.primary}}>
        Styled Button
      </button>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-300 dark:border-purple-700">
              <FolderOpen className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">File Organization</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                <strong>Best Practice:</strong> Keep one component per file. Use folders for related components: <code>components/Button/Button.jsx</code>, <code>components/Button/index.jsx</code>
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Component Composition Section */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Component Composition: Building Complex UIs"
              description="Combine simple components to create powerful, reusable interfaces!"
              size="lg"
            />

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-emerald-200 dark:border-emerald-700">
                <h4 className="font-semibold text-lg mb-4 text-emerald-600 dark:text-emerald-400">
                  🏗️ Building a User Card Component
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's build a complex UI by combining smaller, focused components:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-700">
                    <h5 className="font-semibold text-xs text-emerald-700 dark:text-emerald-300 mb-2">Avatar</h5>
                    <p className="text-xs text-muted-foreground">Displays user profile picture</p>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-700">
                    <h5 className="font-semibold text-xs text-emerald-700 dark:text-emerald-300 mb-2">UserInfo</h5>
                    <p className="text-xs text-muted-foreground">Shows name and email</p>
                  </div>
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/20 rounded border border-emerald-200 dark:border-emerald-700">
                    <h5 className="font-semibold text-xs text-emerald-700 dark:text-emerald-300 mb-2">UserCard</h5>
                    <p className="text-xs text-muted-foreground">Combines Avatar + UserInfo</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Complete Example</span>
                                  </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-emerald-600 dark:text-emerald-400">Benefits of Composition:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>Reusability:</strong> Use Avatar in multiple places</li>
                      <li>• <strong>Maintainability:</strong> Change Avatar once, updates everywhere</li>
                      <li>• <strong>Testing:</strong> Test small components individually</li>
                      <li>• <strong>Readability:</strong> Clear separation of concerns</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-emerald-600 dark:text-emerald-400">Composition Patterns:</h5>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <strong>Containment:</strong> Components contain other components</li>
                      <li>• <strong>Specialization:</strong> Components configure others</li>
                      <li>• <strong>Extension:</strong> Components enhance others</li>
                      <li>• <strong>Abstraction:</strong> Hide complexity behind simple interfaces</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Naming Conventions Section */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<FileText className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Naming Conventions & Best Practices"
              description="Learn the professional way to name your components and files for maximum clarity!"
              size="lg"
            />

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    ✅ Component Naming
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">PascalCase for Components</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">UserProfile</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">NavigationMenu</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">DataTable</code>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-700">
                      <p className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">❌ Avoid These</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-red-600">✗</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">userProfile</code>
                          <span className="text-xs text-red-600">(lowercase)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-600">✗</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">user_profile</code>
                          <span className="text-xs text-red-600">(snake_case)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-600">✗</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">user-profile</code>
                          <span className="text-xs text-red-600">(kebab-case)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-amber-600 dark:text-amber-400 flex items-center gap-2">
                    <FolderOpen className="w-5 h-5" />
                    📁 File Naming
                  </h4>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">PascalCase for Component Files</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">UserProfile.jsx</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">Button.jsx</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">NavigationMenu.jsx</code>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                      <p className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">camelCase for Other Files</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">utils.js</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">apiService.js</code>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-blue-600">✓</span>
                          <code className="text-sm bg-white dark:bg-gray-800 px-2 py-1 rounded">constants.js</code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-lg mb-4 text-amber-600 dark:text-amber-400">
                  🎯 Descriptive Naming Examples
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-green-600 dark:text-green-400">Good Names (Clear & Specific)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <code className="text-sm">UserAvatar</code>
                        <span className="text-xs text-muted-foreground">- Shows user's profile picture</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <code className="text-sm">SearchInput</code>
                        <span className="text-xs text-muted-foreground">- Input field for searching</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <code className="text-sm">ProductCard</code>
                        <span className="text-xs text-muted-foreground">- Displays product info</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <code className="text-sm">LoadingSpinner</code>
                        <span className="text-xs text-muted-foreground">- Shows loading state</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <code className="text-sm">ErrorMessage</code>
                        <span className="text-xs text-muted-foreground">- Displays error messages</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-red-600 dark:text-red-400">Poor Names (Vague & Unclear)</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        <code className="text-sm">Component1</code>
                        <span className="text-xs text-muted-foreground">- What does it do?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        <code className="text-sm">Thing</code>
                        <span className="text-xs text-muted-foreground">- Too generic</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        <code className="text-sm">Stuff</code>
                        <span className="text-xs text-muted-foreground">- Meaningless</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        <code className="text-sm">Data</code>
                        <span className="text-xs text-muted-foreground">- What kind of data?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">✗</span>
                        <code className="text-sm">Item</code>
                        <span className="text-xs text-muted-foreground">- What kind of item?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-lg mb-4 text-amber-600 dark:text-amber-400">
                  📁 Recommended Folder Structure
                </h4>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">Interactive Example</span>
                                  </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-amber-600 dark:text-amber-400">Component Organization</h5>
                    <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-x-auto">
{`src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.module.css
│   │   └── index.jsx
│   ├── Card/
│   │   ├── Card.jsx
│   │   └── index.jsx
│   ├── UserProfile/
│   │   ├── UserProfile.jsx
│   │   ├── Avatar.jsx
│   │   └── index.jsx
│   └── index.jsx
├── pages/
├── utils/
└── App.jsx`}
                    </pre>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-3 text-amber-600 dark:text-amber-400">Naming Rules Summary</h5>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <div>
                          <strong>Components:</strong> PascalCase (UserProfile, Button)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <div>
                          <strong>Files:</strong> Match component name (UserProfile.jsx)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <div>
                          <strong>Folders:</strong> Same as component (UserProfile/)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <div>
                          <strong>Variables/Functions:</strong> camelCase (handleClick, userData)
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-600 mt-1">•</span>
                        <div>
                          <strong>Constants:</strong> UPPER_SNAKE_CASE (API_URL, MAX_ITEMS)
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Summary Section */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="🎉 You're Ready to Build!"
              description="You've mastered the fundamentals of React components. Let's recap what you've learned!"
              size="lg"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Create</h4>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Functional components</li>
                  <li>• Proper JSX syntax</li>
                  <li>• Single return statement</li>
                  <li>• Capitalized names</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Compose</h4>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Combine small components</li>
                  <li>• Build complex UIs</li>
                  <li>• Reusable patterns</li>
                  <li>• Clear separation</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Organize</h4>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Import/Export properly</li>
                  <li>• Follow naming conventions</li>
                  <li>• Structure files logically</li>
                  <li>• Keep components focused</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Target className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Next Steps</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                🚀 <strong>Ready for more?</strong> Next up: Learn about React Hooks (useState, useEffect), Props & State Management, and Conditional Rendering to build dynamic, interactive applications!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Component Rules in Action */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Component Rules in Action"
              description="See the golden rules of React components demonstrated in a live example!"
              size="lg"
            />

            <FrontendCodePreviewReact
              title="Component Rules Demonstration"
              description="This example shows all the important rules: PascalCase naming, single parent element, and closed tags"
              colorTheme="cyan"
              react={`// ✅ CORRECT: Follows all React component rules

// Rule 1: Component name starts with capital letter (PascalCase)
function UserProfileCard({ name, email, avatar }) {
  // Check for dark mode preference
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Rule 2: Returns single parent element (div)
  const containerStyle = {
    backgroundColor: isDarkMode ? '#1f2937' : 'white',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: isDarkMode 
      ? '0 8px 20px rgba(0, 0, 0, 0.3)' 
      : '0 8px 20px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '2rem auto',
    border: isDarkMode ? '2px solid #0891b2' : '2px solid #06b6d4',
    fontFamily: 'Arial, sans-serif'
  };
  
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem'
  };
  
  const avatarStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: isDarkMode ? '3px solid #0891b2' : '3px solid #06b6d4'
  };
  
  const infoStyle = {
    flex: 1
  };
  
  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: isDarkMode ? '#f1f5f9' : '#1f2937',
    margin: '0 0 0.25rem 0'
  };
  
  const emailStyle = {
    fontSize: '1rem',
    color: isDarkMode ? '#9ca3af' : '#6b7280',
    margin: '0'
  };
  
  const footerStyle = {
    textAlign: 'center',
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: isDarkMode ? '#083344' : '#f0f9ff',
    borderRadius: '8px',
    color: isDarkMode ? '#f1f5f9' : '#1f2937'
  };
  
  // Modern JSX syntax - Rule 3: Proper JSX structure
  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img
          src={avatar || 'https://picsum.photos/seed/react/80/80.jpg'}
          alt={name}
          style={avatarStyle}
        />
        <div style={infoStyle}>
          <h3 style={nameStyle}>{name}</h3>
          <p style={emailStyle}>{email}</p>
        </div>
      </div>
      
      <div style={footerStyle}>
        ✅ This component follows all React rules!
      </div>
    </div>
  );
}

// Using the component with modern JSX
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProfileCard 
    name="React Developer"
    email="developer@react.com"
    avatar="https://picsum.photos/seed/developer/80/80.jpg"
  />
);`}
              html={`<div id="root"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`}
              css={`:root {
  --bg-gradient-start: #f0f9ff;
  --bg-gradient-end: #e0f2fe;
  --text-primary: #1f2937;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-gradient-start: #0f172a;
    --bg-gradient-end: #1e293b;
    --text-primary: #f1f5f9;
  }
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%);
  color: var(--text-primary);
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
            />
          </CardContent>
        </Card>

        
        {/* Summary */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Target className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="You now understand what React components are and how to create them!"
              size="lg"
            />

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Code className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Components are Functions</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  JavaScript functions that return JSX and accept props as arguments.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Reusable Building Blocks</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Write once, use everywhere with different data and configurations.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-cyan-600 dark:text-cyan-400">Composable UI</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Combine small components to build complex, maintainable interfaces.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Ready for More?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                🚀 You've mastered React components! Next, learn about Props & State, React Hooks, and Component Lifecycle to build dynamic, interactive applications.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
