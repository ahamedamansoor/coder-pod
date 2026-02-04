'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  TreePine,
  Lightbulb,
  Layers,
  GitBranch,
  Package,
  CheckCircle2,
  Zap,
  Eye,
  ArrowRight,
  Network,
  FileCode,
  Component,
} from 'lucide-react';

export default function UnderstandingYourUIAsATree() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={TreePine}
        category="React · Describing the UI"
        title="Understanding Your UI as a Tree"
        description="Learn how React thinks about your app as a tree structure. Visualize component trees, render trees, and understand how React builds and updates your UI!"
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Introduction - Trees are Everywhere */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<TreePine className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Trees Are Everywhere!"
              description="From folders on your computer to family trees - understanding trees makes React easier"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Before we dive into React, let's understand what a <strong>tree</strong> is. Trees are a way to represent relationships between things. Think of your computer's file system - folders contain files and other folders. That's a tree! Each item has a parent (except the root), and items can have children.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-center text-cyan-700 dark:text-cyan-300">📁 Your Computer Files (A Tree!)</h4>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 rounded border-2 border-cyan-500 text-cyan-700 dark:text-cyan-300 font-semibold">
                    📁 Documents
                  </div>
                  <span className="text-muted-foreground">← Root (parent of everything)</span>
                </div>
                
                <div className="flex items-center gap-3 ml-8">
                  <ArrowRight className="w-5 h-5 text-cyan-400" />
                  <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded border-2 border-blue-500 text-blue-700 dark:text-blue-300">
                    📁 Projects
                  </div>
                  <span className="text-muted-foreground">← Child of Documents</span>
                </div>
                
                <div className="flex items-center gap-3 ml-16">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-500 text-green-700 dark:text-green-300">
                    📄 app.jsx
                  </div>
                  <span className="text-muted-foreground">← Leaf (no children)</span>
                </div>
                
                <div className="flex items-center gap-3 ml-16">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded border border-green-500 text-green-700 dark:text-green-300">
                    📄 index.js
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why Trees Matter in React</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                React represents your entire UI as a tree! Each component is like a folder, and the elements inside are like files. Understanding this helps you build better apps.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Component Tree */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="The Component Tree"
              description="How your React components nest inside each other"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              When you build a React app, you create <strong>components</strong> that contain other components. This creates a <strong>component tree</strong> - a hierarchical structure where each component can have parent and children components.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-center text-purple-700 dark:text-purple-300">🌳 Simple App Component Tree</h4>
              <div className="space-y-4">
                {/* Root */}
                <div className="flex flex-col items-center">
                  <div className="px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white font-semibold shadow-lg">
                    <Component className="w-5 h-5 inline mr-2" />
                    App
                  </div>
                  <div className="w-px h-8 bg-purple-300 dark:bg-purple-700"></div>
                </div>

                {/* Level 1 */}
                <div className="flex justify-center gap-12">
                  <div className="flex flex-col items-center">
                    <div className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white font-semibold shadow-md">
                      Header
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white font-semibold shadow-md">
                      MainContent
                    </div>
                    <div className="w-px h-8 bg-blue-300 dark:bg-blue-700"></div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl text-white font-semibold shadow-md">
                      Footer
                    </div>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="flex justify-center gap-8">
                  <div className="px-5 py-2 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg text-white text-sm font-semibold shadow-sm">
                    Article
                  </div>
                  <div className="px-5 py-2 bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg text-white text-sm font-semibold shadow-sm">
                    Sidebar
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200 dark:border-purple-800">
                <p className="text-sm text-purple-800 dark:text-purple-200">
                  <strong>Root:</strong> App (purple) • <strong>Parents:</strong> Header, MainContent, Footer (blue) • <strong>Children:</strong> Article, Sidebar (green)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Example - Simple Tree */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="See It In Action - Component Tree"
            description="A simple blog layout showing how components nest"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Simple Blog Layout"
            description="Each colored box is a component. Notice how they nest inside each other!"
            colorTheme="cyan"
            react={`function Header() {
  return (
    <header className="header">
      <h1>🌟 My Awesome Blog</h1>
    </header>
  );
}

function Article() {
  return (
    <article className="article">
      <h2>Understanding React Trees 🌳</h2>
      <p>React organizes your UI as a tree structure...</p>
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Recent Posts</h3>
      <ul>
        <li>React Basics</li>
        <li>Component Trees</li>
      </ul>
    </aside>
  );
}

function MainContent() {
  return (
    <main className="main-content">
      <Article />
      <Sidebar />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2024 My Blog</p>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

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
  const { createElement: h } = React;
  const { createRoot } = ReactDOM;

  function Header() {
    return h('header', { className: 'header' },
      h('h1', null, '🌟 My Awesome Blog')
    );
  }

  function Article() {
    return h('article', { className: 'article' },
      h('h2', null, 'Understanding React Trees 🌳'),
      h('p', null, 'React organizes your UI as a tree structure...')
    );
  }

  function Sidebar() {
    return h('aside', { className: 'sidebar' },
      h('h3', null, 'Recent Posts'),
      h('ul', null,
        h('li', null, 'React Basics'),
        h('li', null, 'Component Trees')
      )
    );
  }

  function MainContent() {
    return h('main', { className: 'main-content' },
      h(Article),
      h(Sidebar)
    );
  }

  function Footer() {
    return h('footer', { className: 'footer' },
      h('p', null, '© 2024 My Blog')
    );
  }

  function App() {
    return h('div', { className: 'app' },
      h(Header),
      h(MainContent),
      h(Footer)
    );
  }

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

#root {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  width: 100%;
  max-width: 900px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  text-align: center;
  border: 4px solid rgba(255, 255, 255, 0.3);
}

.header h1 {
  font-size: 2rem;
  margin: 0;
}

.main-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 30px;
  background: #f8f9fa;
  border: 4px solid rgba(102, 126, 234, 0.3);
}

.article {
  background: white;
  padding: 25px;
  border-radius: 12px;
  border: 3px solid #06b6d4;
  box-shadow: 0 4px 12px rgba(6, 182, 212, 0.2);
}

.article h2 {
  color: #06b6d4;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.article p {
  color: #4b5563;
  line-height: 1.6;
}

.sidebar {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 3px solid #10b981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.sidebar h3 {
  color: #10b981;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  padding: 8px;
  margin: 5px 0;
  background: #f0fdf4;
  border-radius: 6px;
  color: #065f46;
  border-left: 3px solid #10b981;
}

.footer {
  background: #1f2937;
  color: white;
  padding: 20px;
  text-align: center;
  border: 4px solid rgba(255, 255, 255, 0.1);
}

.footer p {
  margin: 0;
  opacity: 0.8;
}`}
          />
        </div>

        {/* Render Tree */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-950/10 dark:to-purple-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="The Render Tree"
              description="What React actually creates when your app runs"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              The <strong>component tree</strong> shows your source code structure, but the <strong>render tree</strong> shows what React actually creates. It includes only components, not HTML elements like <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">&lt;div&gt;</code> or <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">&lt;h1&gt;</code>.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
                  <FileCode className="w-5 h-5" />
                  Component Tree (Your Code)
                </h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="pl-0">{'<App>'}</div>
                  <div className="pl-4">{'<Header>'}</div>
                  <div className="pl-8 text-muted-foreground">{'<h1>Title</h1>'}</div>
                  <div className="pl-4">{'</Header>'}</div>
                  <div className="pl-4">{'<MainContent>'}</div>
                  <div className="pl-8">{'<Article />'}</div>
                  <div className="pl-8">{'<Sidebar />'}</div>
                  <div className="pl-4">{'</MainContent>'}</div>
                  <div className="pl-0">{'</App>'}</div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Includes HTML elements</p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-700">
                <h4 className="font-bold mb-3 flex items-center gap-2 text-green-700 dark:text-green-300">
                  <Eye className="w-5 h-5" />
                  Render Tree (React's View)
                </h4>
                <div className="space-y-2 text-sm font-mono">
                  <div className="pl-0">App</div>
                  <div className="pl-4">├─ Header</div>
                  <div className="pl-4">├─ MainContent</div>
                  <div className="pl-8">│  ├─ Article</div>
                  <div className="pl-8">│  └─ Sidebar</div>
                  <div className="pl-4">└─ Footer</div>
                </div>
                <p className="text-xs text-muted-foreground mt-3">Only React components</p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-indigo-300 dark:border-indigo-700">
              <Lightbulb className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              <AlertTitle className="text-indigo-900 dark:text-indigo-100">Why Does This Matter?</AlertTitle>
              <AlertDescription className="text-indigo-800 dark:text-indigo-200">
                React uses the render tree to decide what to update when your state changes. Understanding this helps you optimize performance!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Module Dependency Tree */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Network className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Module Dependency Tree"
              description="How your files import and depend on each other"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Beyond components, React apps have a <strong>module dependency tree</strong> - how your JavaScript files import each other. This matters for bundling, loading, and optimizing your app.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="font-bold mb-4 text-center text-emerald-700 dark:text-emerald-300">📦 Module Import Chain</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="px-5 py-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg text-white font-semibold shadow-md min-w-[140px] text-center">
                    index.js
                  </div>
                  <ArrowRight className="w-6 h-6 text-emerald-400" />
                  <span className="text-sm text-muted-foreground">Entry point (imports App)</span>
                </div>

                <div className="flex items-center gap-3 ml-8">
                  <div className="px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold shadow-md min-w-[140px] text-center">
                    App.jsx
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                  <span className="text-sm text-muted-foreground">Imports Header, MainContent, Footer</span>
                </div>

                <div className="flex items-center gap-3 ml-16">
                  <div className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold shadow-md min-w-[140px] text-center">
                    Header.jsx
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex items-center gap-3 ml-16">
                  <div className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-semibold shadow-md min-w-[140px] text-center">
                    MainContent.jsx
                  </div>
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-muted-foreground">Imports Article, Sidebar</span>
                </div>

                <div className="flex items-center gap-3 ml-24">
                  <div className="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded text-white font-semibold shadow-sm min-w-[120px] text-center">
                    Article.jsx
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>

                <div className="flex items-center gap-3 ml-24">
                  <div className="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded text-white font-semibold shadow-sm min-w-[120px] text-center">
                    Sidebar.jsx
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
                <h4 className="font-bold mb-2 text-emerald-700 dark:text-emerald-300">Why It Matters</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" />
                    <span><strong>Bundle Size:</strong> Build tools trace imports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" />
                    <span><strong>Code Splitting:</strong> Load only what's needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-500 flex-shrink-0" />
                    <span><strong>Tree Shaking:</strong> Remove unused code</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-700">
                <h4 className="font-bold mb-2 text-amber-700 dark:text-amber-300">Build Tools Use This</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Tools like Webpack, Vite, and Parcel analyze your module dependency tree to:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                    Bundle files
                  </Badge>
                  <Badge variant="outline" className="border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                    Optimize loading
                  </Badge>
                  <Badge variant="outline" className="border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                    Detect errors
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Tree Visualization */}
        <div className="space-y-6">
          <TopicTitle
            icon={<GitBranch className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Tree Visualization"
            description="Click buttons to see how the component tree grows!"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Dynamic Component Tree"
            description="Add components and watch the tree grow in real-time"
            colorTheme="cyan"
            react={`function ComponentNode({ name, level = 0, color }) {
  return (
    <div 
      className="node"
      style={{
        marginLeft: level * 30 + 'px',
        animationDelay: level * 0.1 + 's'
      }}
    >
      <div className={\`component \${color}\`}>
        {name}
      </div>
      {level > 0 && <div className="branch"></div>}
    </div>
  );
}

function App() {
  const [showHeader, setShowHeader] = React.useState(true);
  const [showMain, setShowMain] = React.useState(true);
  const [showFooter, setShowFooter] = React.useState(true);
  const [showChildren, setShowChildren] = React.useState(true);

  return (
    <div className="app">
      <div className="controls">
        <button onClick={() => setShowHeader(!showHeader)}>
          {showHeader ? '✅' : '❌'} Header
        </button>
        <button onClick={() => setShowMain(!showMain)}>
          {showMain ? '✅' : '❌'} Main
        </button>
        <button onClick={() => setShowFooter(!showFooter)}>
          {showFooter ? '✅' : '❌'} Footer
        </button>
        <button onClick={() => setShowChildren(!showChildren)}>
          {showChildren ? '✅' : '❌'} Children
        </button>
      </div>

      <div className="tree">
        <h3>🌳 Component Tree</h3>
        <ComponentNode name="App" level={0} color="root" />
        {showHeader && <ComponentNode name="Header" level={1} color="blue" />}
        {showMain && (
          <>
            <ComponentNode name="MainContent" level={1} color="blue" />
            {showChildren && (
              <>
                <ComponentNode name="Article" level={2} color="green" />
                <ComponentNode name="Sidebar" level={2} color="green" />
              </>
            )}
          </>
        )}
        {showFooter && <ComponentNode name="Footer" level={1} color="blue" />}
      </div>

      <div className="info">
        <p>Toggle components to see the tree structure change!</p>
        <p className="subtitle">
          {[showHeader, showMain, showFooter].filter(Boolean).length + 
           (showMain && showChildren ? 2 : 0)} components in tree
        </p>
      </div>
    </div>
  );
}

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
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function ComponentNode({ name, level = 0, color }) {
    return h('div', {
      className: 'node',
      style: {
        marginLeft: level * 30 + 'px',
        animationDelay: level * 0.1 + 's'
      }
    },
      h('div', { className: 'component ' + color }, name),
      level > 0 && h('div', { className: 'branch' })
    );
  }

  function App() {
    const [showHeader, setShowHeader] = useState(true);
    const [showMain, setShowMain] = useState(true);
    const [showFooter, setShowFooter] = useState(true);
    const [showChildren, setShowChildren] = useState(true);

    const count = [showHeader, showMain, showFooter].filter(Boolean).length + 
                  (showMain && showChildren ? 2 : 0);

    return h('div', { className: 'app' },
      h('div', { className: 'controls' },
        h('button', { onClick: () => setShowHeader(!showHeader) }, 
          (showHeader ? '✅' : '❌') + ' Header'),
        h('button', { onClick: () => setShowMain(!showMain) }, 
          (showMain ? '✅' : '❌') + ' Main'),
        h('button', { onClick: () => setShowFooter(!showFooter) }, 
          (showFooter ? '✅' : '❌') + ' Footer'),
        h('button', { onClick: () => setShowChildren(!showChildren) }, 
          (showChildren ? '✅' : '❌') + ' Children')
      ),
      h('div', { className: 'tree' },
        h('h3', null, '🌳 Component Tree'),
        h(ComponentNode, { name: 'App', level: 0, color: 'root' }),
        showHeader && h(ComponentNode, { name: 'Header', level: 1, color: 'blue' }),
        showMain && h(React.Fragment, null,
          h(ComponentNode, { name: 'MainContent', level: 1, color: 'blue' }),
          showChildren && h(React.Fragment, null,
            h(ComponentNode, { name: 'Article', level: 2, color: 'green' }),
            h(ComponentNode, { name: 'Sidebar', level: 2, color: 'green' })
          )
        ),
        showFooter && h(ComponentNode, { name: 'Footer', level: 1, color: 'blue' })
      ),
      h('div', { className: 'info' },
        h('p', null, 'Toggle components to see the tree structure change!'),
        h('p', { className: 'subtitle' }, count + ' components in tree')
      )
    );
  }

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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.app {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  width: 100%;
}

.controls {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  justify-content: center;
}

.controls button {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.controls button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(6, 182, 212, 0.4);
}

.controls button:active {
  transform: translateY(0);
}

.tree {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 25px;
  border: 3px solid #06b6d4;
  min-height: 300px;
}

.tree h3 {
  text-align: center;
  color: #0891b2;
  font-size: 1.5rem;
  margin-bottom: 25px;
  font-weight: 700;
}

.node {
  position: relative;
  margin: 10px 0;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.component {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1;
}

.component.root {
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  font-size: 18px;
}

.component.blue {
  background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
  font-size: 16px;
}

.component.green {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  font-size: 14px;
}

.branch {
  position: absolute;
  left: -15px;
  top: 50%;
  width: 15px;
  height: 2px;
  background: #06b6d4;
}

.branch::before {
  content: '';
  position: absolute;
  left: 0;
  top: -20px;
  width: 2px;
  height: 20px;
  background: #06b6d4;
}

.info {
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
  border-radius: 12px;
  border: 2px solid #8b5cf6;
}

.info p {
  color: #5b21b6;
  font-weight: 600;
  margin: 5px 0;
}

.info .subtitle {
  font-size: 14px;
  color: #7c3aed;
  font-weight: 500;
}`}
          />
        </div>

        {/* Key Takeaways */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-blue-600 dark:text-blue-400" />}
              title="Three Trees You Should Know"
              description="Quick summary of all three tree types"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-700 dark:text-purple-300">1. Component Tree</h4>
                    <p className="text-sm text-muted-foreground">How your components nest in source code</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Shows parent-child relationships in your JSX. Includes both React components and HTML elements.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-700 dark:text-blue-300">2. Render Tree</h4>
                    <p className="text-sm text-muted-foreground">What React sees during rendering</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Only includes React components, not HTML elements. Used by React to determine what to update.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Network className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700 dark:text-green-300">3. Module Dependency Tree</h4>
                    <p className="text-sm text-muted-foreground">How your files import each other</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Shows file imports. Used by build tools for bundling, tree-shaking, and code splitting.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-300 dark:border-blue-700">
              <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <AlertTitle className="text-blue-900 dark:text-blue-100">Remember</AlertTitle>
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                All three trees represent your app differently, but they all help React and its tools work efficiently. Understanding trees helps you debug, optimize, and structure your code better!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
