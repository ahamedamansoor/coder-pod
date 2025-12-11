'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, PackageOpen, Download } from 'lucide-react';

export default function LazyLoadingPerformance() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={PackageOpen}
        category="React · Performance Optimization"
        title="Lazy Loading"
        description="Learn how to optimize your app's load time through code-splitting with React.lazy and dynamic import() for better performance."
        colorTheme="cyan"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<PackageOpen className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is Lazy Loading?"
              description="Load code only when needed"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <strong>Lazy loading</strong> (code-splitting) means loading JavaScript code only when it's needed, not all at once. This dramatically reduces initial bundle size and improves load time!
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <Badge className="bg-red-500 mb-3">❌ Without Lazy Loading</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Load ALL code upfront</li>
                  <li>• Large bundle size</li>
                  <li>• Slow initial load</li>
                  <li>• Wasted bandwidth</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ With Lazy Loading</Badge>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Load code on demand</li>
                  <li>• Smaller initial bundle</li>
                  <li>• Fast initial load</li>
                  <li>• Better performance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Download className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="React.lazy - Live Demo"
            description="Load components on demand"
            size="lg"
          />
          <FrontendCodePreview
            title="Lazy Loading Components"
            description="Click tabs to load components dynamically!"
            colorTheme="green"
            react={`// Simulate heavy components
function Dashboard() {
  return (
    <div className="component dashboard">
      <h3>📊 Dashboard</h3>
      <p>This is a heavy dashboard component</p>
      <div className="charts">
        <div className="chart">Chart 1</div>
        <div className="chart">Chart 2</div>
        <div className="chart">Chart 3</div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="component settings">
      <h3>⚙️ Settings</h3>
      <p>Settings panel loaded on demand</p>
      <div className="settings-list">
        <div className="setting-item">Profile Settings</div>
        <div className="setting-item">Privacy Settings</div>
        <div className="setting-item">Notification Settings</div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="component profile">
      <h3>👤 Profile</h3>
      <p>User profile loaded lazily</p>
      <div className="profile-info">
        <div className="info-item">Name: John Doe</div>
        <div className="info-item">Email: john@example.com</div>
        <div className="info-item">Role: Developer</div>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = React.useState('home');
  const [loadedTabs, setLoadedTabs] = React.useState(['home']);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (!loadedTabs.includes(tab)) {
      setLoadedTabs([...loadedTabs, tab]);
    }
  };

  return (
    <div className="demo-app">
      <div className="header">
        <h2>📦 Lazy Loading Demo</h2>
        <p>Components load only when you click their tab</p>
      </div>

      <div className="tabs">
        <button
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => handleTabClick('home')}
        >
          🏠 Home
        </button>
        <button
          className={activeTab === 'dashboard' ? 'active' : ''}
          onClick={() => handleTabClick('dashboard')}
        >
          📊 Dashboard {!loadedTabs.includes('dashboard') && '(not loaded)'}
        </button>
        <button
          className={activeTab === 'settings' ? 'active' : ''}
          onClick={() => handleTabClick('settings')}
        >
          ⚙️ Settings {!loadedTabs.includes('settings') && '(not loaded)'}
        </button>
        <button
          className={activeTab === 'profile' ? 'active' : ''}
          onClick={() => handleTabClick('profile')}
        >
          👤 Profile {!loadedTabs.includes('profile') && '(not loaded)'}
        </button>
      </div>

      <div className="content">
        {activeTab === 'home' && (
          <div className="component home">
            <h3>🏠 Home</h3>
            <p>Welcome! This component is always loaded.</p>
            <p className="tip">Click other tabs to load components on demand!</p>
          </div>
        )}

        {activeTab === 'dashboard' && (
          <React.Suspense fallback={<div className="loading">Loading Dashboard...</div>}>
            <Dashboard />
          </React.Suspense>
        )}

        {activeTab === 'settings' && (
          <React.Suspense fallback={<div className="loading">Loading Settings...</div>}>
            <Settings />
          </React.Suspense>
        )}

        {activeTab === 'profile' && (
          <React.Suspense fallback={<div className="loading">Loading Profile...</div>}>
            <Profile />
          </React.Suspense>
        )}
      </div>

      <div className="info-panel">
        <h4>Loaded Components:</h4>
        <div className="loaded-list">
          {loadedTabs.map(tab => (
            <span key={tab} className="loaded-tag">{tab}</span>
          ))}
        </div>
        <p className="hint">💡 In real apps, use React.lazy(() => import('./Component'))</p>
      </div>
    </div>
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
  padding: 20px;
}

.demo-app {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
}

.header {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  padding: 30px;
  text-align: center;
}

.header h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.header p {
  opacity: 0.9;
}

.tabs {
  display: flex;
  background: #f9fafb;
  padding: 20px 20px 0;
  gap: 10px;
  overflow-x: auto;
}

.tabs button {
  padding: 12px 24px;
  background: white;
  border: 2px solid #e5e7eb;
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
  white-space: nowrap;
  font-size: 14px;
}

.tabs button:hover {
  border-color: #3b82f6;
}

.tabs button.active {
  background: white;
  border-color: #3b82f6;
  color: #3b82f6;
  transform: translateY(2px);
}

.content {
  padding: 40px;
  min-height: 300px;
}

.component {
  padding: 30px;
  border-radius: 16px;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.component.home {
  background: #eff6ff;
  border: 2px solid #3b82f6;
}

.component.dashboard {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}

.component.settings {
  background: #fce7f3;
  border: 2px solid #ec4899;
}

.component.profile {
  background: #dbeafe;
  border: 2px solid #3b82f6;
}

.component h3 {
  color: #1f2937;
  margin-bottom: 15px;
  font-size: 1.5rem;
}

.component p {
  color: #4b5563;
  margin-bottom: 20px;
}

.tip {
  background: rgba(255, 255, 255, 0.5);
  padding: 15px;
  border-radius: 10px;
  font-weight: 600;
  color: #1f2937;
}

.charts,
.settings-list,
.profile-info {
  display: grid;
  gap: 15px;
  margin-top: 20px;
}

.chart,
.setting-item,
.info-item {
  padding: 15px;
  background: white;
  border-radius: 10px;
  font-weight: 600;
  color: #1f2937;
}

.loading {
  text-align: center;
  padding: 60px 20px;
  color: #3b82f6;
  font-size: 1.2rem;
  font-weight: 600;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.info-panel {
  padding: 30px;
  background: #f9fafb;
  border-top: 2px solid #e5e7eb;
}

.info-panel h4 {
  color: #1f2937;
  margin-bottom: 15px;
}

.loaded-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 15px;
}

.loaded-tag {
  padding: 6px 12px;
  background: #3b82f6;
  color: white;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
}

.hint {
  color: #6b7280;
  font-size: 13px;
  font-style: italic;
}

@media (prefers-color-scheme: dark) {
  .demo-app {
    background: #1f2937;
  }

  .tabs {
    background: #111827;
  }

  .tabs button {
    background: #1f2937;
    border-color: #374151;
    color: #f3f4f6;
  }

  .tabs button.active {
    background: #1f2937;
    border-color: #60a5fa;
    color: #60a5fa;
  }

  .component h3,
  .chart,
  .setting-item,
  .info-item,
  .info-panel h4 {
    color: #f3f4f6;
  }

  .component p {
    color: #d1d5db;
  }

  .tip {
    background: rgba(0, 0, 0, 0.3);
    color: #f3f4f6;
  }

  .info-panel {
    background: #111827;
    border-top-color: #374151;
  }

  .hint {
    color: #9ca3af;
  }
}`}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">React.lazy</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Load components dynamically
                </p>
                <code className="block text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  {`const Component = lazy(() => import('./Component'))`}
                </code>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Suspense</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Show fallback while loading
                </p>
                <code className="block text-xs bg-gray-50 dark:bg-gray-800 p-2 rounded">
                  {`<Suspense fallback={<Loading />}>`}
                </code>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-2">Code Splitting</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Separate bundles for lazy components
                </p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">Route-Based</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for page-level components
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use lazy loading for routes and large components. This is one of the easiest ways to improve performance! Your users will love the faster initial load time.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
