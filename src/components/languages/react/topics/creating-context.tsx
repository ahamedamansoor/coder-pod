'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, FileCode, Workflow } from 'lucide-react';

export default function CreatingContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={FileCode}
        category="React · Context API"
        title="Creating Context"
        description="Learn how to create Context objects using React.createContext and set up Provider and Consumer components for sharing data."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<FileCode className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Three Steps to Create Context"
              description="Simple process"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">1</div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Create Context</h4>
                </div>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
                  const ThemeContext = React.createContext();
                </code>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">2</div>
                  <h4 className="font-bold text-green-700 dark:text-green-300">Wrap with Provider</h4>
                </div>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
                  &lt;ThemeContext.Provider value={'{'}theme{'}'}&gt;<br/>
                  &nbsp;&nbsp;&lt;App /&gt;<br/>
                  &lt;/ThemeContext.Provider&gt;
                </code>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">3</div>
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Consume Context</h4>
                </div>
                <code className="block text-sm bg-gray-50 dark:bg-gray-800 p-3 rounded">
                  const theme = React.useContext(ThemeContext);
                </code>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Workflow className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Theme Context - Live Demo"
            description="Complete working example"
            size="lg"
          />
          <FrontendCodePreview learningContext="react"
            title="Theme Switcher with Context"
            description="Toggle between light and dark themes using Context!"
            colorTheme="green"
            react={`// Step 1: Create Context
const ThemeContext = React.createContext();

// Step 2: Create Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const value = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Step 3: Consume Context in Components
function Header() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header className={\`header \${theme}\`}>
      <h1>My App</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

function Content() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <main className={\`content \${theme}\`}>
      <div className="card">
        <h2>Welcome!</h2>
        <p>Current theme: <strong>{theme}</strong></p>
        <p>This component gets theme from Context without props!</p>
      </div>
      <Sidebar />
    </main>
  );
}

function Sidebar() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <aside className={\`sidebar \${theme}\`}>
      <h3>Sidebar</h3>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <p className="note">Also uses theme context!</p>
    </aside>
  );
}

// Root App Component
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app {
  max-width: 900px;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.header {
  padding: 30px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
}

.header.light {
  background: white;
  color: #1f2937;
}

.header.dark {
  background: #1f2937;
  color: #f3f4f6;
}

.header h1 {
  font-size: 1.8rem;
}

.theme-toggle {
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.header.light .theme-toggle {
  background: #1f2937;
  color: white;
}

.header.dark .theme-toggle {
  background: white;
  color: #1f2937;
}

.theme-toggle:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.content {
  padding: 40px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  transition: all 0.3s;
}

.content.light {
  background: #f9fafb;
}

.content.dark {
  background: #111827;
}

.card {
  padding: 30px;
  border-radius: 16px;
  transition: all 0.3s;
}

.content.light .card {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content.dark .card {
  background: #1f2937;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

.card h2 {
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.content.light .card h2 {
  color: #1f2937;
}

.content.dark .card h2 {
  color: #f3f4f6;
}

.card p {
  margin: 10px 0;
  line-height: 1.6;
}

.content.light .card p {
  color: #6b7280;
}

.content.dark .card p {
  color: #9ca3af;
}

.card strong {
  padding: 2px 8px;
  border-radius: 4px;
}

.content.light .card strong {
  background: #dbeafe;
  color: #1e40af;
}

.content.dark .card strong {
  background: #1e3a8a;
  color: #93c5fd;
}

.sidebar {
  padding: 20px;
  border-radius: 16px;
  transition: all 0.3s;
}

.content.light .sidebar {
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.content.dark .sidebar {
  background: #1f2937;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
}

.sidebar h3 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.content.light .sidebar h3 {
  color: #1f2937;
}

.content.dark .sidebar h3 {
  color: #f3f4f6;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  margin: 5px 0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.content.light .sidebar li {
  color: #4b5563;
}

.content.light .sidebar li:hover {
  background: #f3f4f6;
}

.content.dark .sidebar li {
  color: #d1d5db;
}

.content.dark .sidebar li:hover {
  background: #374151;
}

.note {
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  font-size: 12px;
  font-style: italic;
}

.content.light .note {
  background: #dbeafe;
  color: #1e40af;
}

.content.dark .note {
  background: #1e3a8a;
  color: #93c5fd;
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
              icon={<Workflow className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Context with Default Value"
              description="Providing fallback values"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              You can provide a <strong>default value</strong> when creating context. This value is used when a component consumes context without a Provider above it!
            </p>

            <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
              <code className="block text-sm whitespace-pre-wrap">
{`// Create context with default value
const UserContext = React.createContext({
  user: { name: 'Guest', role: 'visitor' },
  login: () => {},
  logout: () => {}
});

// Use without Provider - gets default
function Component() {
  const { user } = React.useContext(UserContext);
  return <div>{user.name}</div>; // "Guest"
}`}
              </code>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Pro Tip!</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Default values are rarely used in practice - most apps always have a Provider. But they're useful for testing and type safety with TypeScript!
              </AlertDescription>
            </Alert>
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
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">1. Create Context</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use React.createContext() to create a context object
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">2. Provider Component</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Wrap tree with Provider to share value
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">3. useContext Hook</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Access context value in any child component
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">4. No Props Needed</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Data flows directly without passing props
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
