'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  GitBranch,
  Lightbulb,
  Code,
  Zap,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Eye,
  EyeOff,
  ArrowRight,
  Lock,
  Unlock
} from 'lucide-react';

export default function ConditionalRendering() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={GitBranch}
        category="React · Describing the UI"
        title="Conditional Rendering"
        description="Master the art of showing and hiding UI elements based on conditions. Learn if statements, ternary operators, and the && operator!"
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section 1: What is Conditional Rendering */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
              title="What is Conditional Rendering?"
              description="The power to show different UI based on conditions - like an if statement for your interface!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Conditional rendering</strong> is React's way of letting your components make decisions. Just like you use <code>if</code> statements in JavaScript to control program flow, you use conditional rendering to control what users see. Show a loading spinner while data loads, display different content for logged-in vs guest users, or hide features based on user permissions!
            </p>

            {/* Visual Flow Diagram */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-cyan-200 dark:border-cyan-700">
              <h4 className="font-bold text-center mb-6 text-cyan-800 dark:text-cyan-200">How Conditional Rendering Works</h4>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    IF
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Check Condition</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Is user logged in?</p>
                </div>
                
                <ArrowRight className="w-8 h-8 text-cyan-500 hidden md:block" />
                <div className="text-cyan-500 md:hidden">↓</div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    ?
                  </div>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">React Decides</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Evaluates condition</p>
                </div>
                
                <ArrowRight className="w-8 h-8 text-cyan-500 hidden md:block" />
                <div className="text-cyan-500 md:hidden">↓</div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                      ✓
                    </div>
                    <p className="text-xs font-semibold text-green-700 dark:text-green-400">True</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Show Dashboard</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg">
                      ✗
                    </div>
                    <p className="text-xs font-semibold text-red-700 dark:text-red-400">False</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Show Login</p>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Real-World Examples</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                🎬 <strong>Netflix:</strong> Shows your profile if logged in, login screen if not<br/>
                🛒 <strong>Amazon:</strong> Shows "Add to Cart" for items, "Out of Stock" for unavailable<br/>
                📱 <strong>Instagram:</strong> Shows "Follow" button for strangers, "Following" for people you follow
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 2: If Statements - The Foundation */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />}
              title="If Statements - The Foundation"
              description="The most powerful and flexible way to handle conditional rendering!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>If statements</strong> are your go-to tool for conditional rendering. They're perfect when you need complex logic, multiple conditions, or when you want to return completely different components. Think of them as the traditional JavaScript <code>if-else</code> but for your UI!
            </p>

            {/* Syntax Explanation */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold mb-4 text-emerald-800 dark:text-emerald-200">If Statement Syntax</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-2 text-emerald-700 dark:text-emerald-400">Basic Structure:</p>
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>function Component({'{ condition }'}) {'{'}</div>
                    <div className="pl-4 text-emerald-600 dark:text-emerald-400">if (condition) {'{'}</div>
                    <div className="pl-8">return {'<TrueComponent />'};</div>
                    <div className="pl-4 text-emerald-600 dark:text-emerald-400">{'}'}</div>
                    <div className="pl-4 text-blue-600 dark:text-blue-400">return {'<FalseComponent />'};</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2 text-emerald-700 dark:text-emerald-400">Real Example:</p>
                  <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>function UserGreeting({'{ user }'}) {'{'}</div>
                    <div className="pl-4 text-emerald-600 dark:text-emerald-400">if (user) {'{'}</div>
                    <div className="pl-8">return {'<Welcome name={user.name} />'};</div>
                    <div className="pl-4 text-emerald-600 dark:text-emerald-400">{'}'}</div>
                    <div className="pl-4 text-blue-600 dark:text-blue-400">return {'<LoginButton />'};</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="User Login Status - Simple If Statements"
              description="Show different messages based on whether user is logged in"
              colorTheme="emerald"
              react={`function UserStatus({ isLoggedIn, userName }) {
  // Simple if statement - check if user is logged in
  if (!isLoggedIn) {
    return (
      <div className="status-card guest">
        <div className="status-icon">👤</div>
        <h3 className="status-title">Welcome, Guest!</h3>
        <p className="status-message">
          Please log in to access all features
        </p>
        <button className="status-button">Login</button>
      </div>
    );
  }
  
  // User is logged in - show personalized content
  return (
    <div className="status-card logged-in">
      <div className="status-icon">✅</div>
      <h3 className="status-title">Welcome back, {userName}!</h3>
      <p className="status-message">
        You have full access to your dashboard
      </p>
      <button className="status-button">View Dashboard</button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="example-section">
        <h4>Not Logged In:</h4>
        <UserStatus isLoggedIn={false} userName="" />
      </div>
      
      <div className="example-section">
        <h4>Logged In User:</h4>
        <UserStatus isLoggedIn={true} userName="Sarah" />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
}

/* User Status Cards */
.app-container {
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 40px 20px;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  min-height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
}

.example-section {
  text-align: center;
  flex: 0 0 auto;
}

.example-section h4 {
  margin: 0 0 16px 0;
  color: #065f46;
  font-size: 1.1rem;
  font-weight: 600;
}

.status-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  min-width: 280px;
  max-width: 320px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.status-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.status-card.guest {
  border-color: #fbbf24;
  background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
}

.status-card.logged-in {
  border-color: #34d399;
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
}

.status-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.status-title {
  font-size: 1.5rem;
  margin: 0 0 12px 0;
  font-weight: bold;
  color: #1f2937;
}

.status-card.guest .status-title {
  color: #92400e;
}

.status-card.logged-in .status-title {
  color: #065f46;
}

.status-message {
  font-size: 1rem;
  margin: 0 0 20px 0;
  color: #6b7280;
  line-height: 1.5;
}

.status-button {
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: system-ui, -apple-system, sans-serif;
}

.status-card.guest .status-button {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.status-card.guest .status-button:hover {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  transform: translateY(-1px);
}

.status-card.logged-in .status-button {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.status-card.logged-in .status-button:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-1px);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
  
  .example-section h4 {
    color: #34d399;
  }
  
  .status-card {
    background: #1f2937;
    border-color: #374151;
    color: #f9fafb;
  }
  
  .status-card.guest {
    border-color: #f59e0b;
    background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
  }
  
  .status-card.logged-in {
    border-color: #10b981;
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }
  
  .status-title {
    color: #f9fafb;
  }
  
  .status-card.guest .status-title {
    color: #fde68a;
  }
  
  .status-card.logged-in .status-title {
    color: #34d399;
  }
  
  .status-message {
    color: #d1d5db;
  }
}`}
            />
          </CardContent>
        </Card>

        {/* Section 3: Ternary Operator - The Quick Choice */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
              title="Ternary Operator - The Quick Choice"
              description="A compact, inline way to choose between two options!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The <strong>ternary operator</strong> is your best friend for simple if-else decisions right inside your JSX. It's like a mini if-else statement that fits on one line: <code>condition ? valueIfTrue : valueIfFalse</code>. Perfect for choosing between two components, styles, or text values!
            </p>

            {/* Visual Comparison */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold mb-3 text-purple-800 dark:text-purple-200">If Statement vs Ternary</h4>
                <div className="space-y-3">
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                    <p className="text-xs font-semibold mb-1 text-purple-700 dark:text-purple-400">If Statement:</p>
                    <div className="font-mono text-xs">
                      if (isLoading) {'{'}
                      <br />return {'<Spinner />'};
                      <br />{'}'}
                      <br />return {'<Content />'};
                    </div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded-lg">
                    <p className="text-xs font-semibold mb-1 text-purple-700 dark:text-purple-400">Ternary Operator:</p>
                    <div className="font-mono text-xs">
                      {'&lcub;isLoading ? <Spinner /> : <Content />&rcub;'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold mb-3 text-purple-800 dark:text-purple-200">Common Use Cases</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    <span>Choosing between two components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    <span>Setting CSS classes conditionally</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    <span>Displaying different text</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-purple-500">▸</span>
                    <span>Toggling boolean values</span>
                  </div>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Weather Status - Ternary Operator"
              description="Show different weather information based on conditions"
              colorTheme="purple"
              react={`function WeatherStatus({ isSunny, isRaining }) {
  return (
    <div className="weather-card">
      {/* Weather icon with ternary */}
      <div className="weather-icon">
        {isRaining ? '🌧️' : isSunny ? '☀️' : '☁️'}
      </div>
      
      {/* Weather title with ternary */}
      <h3 className="weather-title">
        {isRaining ? 'Rainy Day' : isSunny ? 'Sunny Day' : 'Cloudy Day'}
      </h3>
      
      {/* Temperature with ternary */}
      <p className="weather-temp">
        {isRaining ? '18°C' : isSunny ? '28°C' : '22°C'}
      </p>
      
      {/* Activity suggestion with ternary */}
      <p className="weather-activity">
        {isRaining 
          ? 'Perfect for reading indoors 📚' 
          : isSunny 
            ? 'Great for outdoor activities! 🏃‍♂️' 
            : 'Good for a walk in the park 🚶‍♀️'}
      </p>
      
      {/* Action button with ternary */}
      <button className="weather-button">
        {isRaining ? 'Check Indoor Activities' : isSunny ? 'Plan Outdoor Fun' : 'Explore Options'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="example-section">
        <h4>Sunny Weather:</h4>
        <WeatherStatus isSunny={true} isRaining={false} />
      </div>
      
      <div className="example-section">
        <h4>Rainy Weather:</h4>
        <WeatherStatus isSunny={false} isRaining={true} />
      </div>
      
      <div className="example-section">
        <h4>Cloudy Weather:</h4>
        <WeatherStatus isSunny={false} isRaining={false} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
}

/* Weather Cards */
.app-container {
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 40px 20px;
  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
  min-height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
}

.example-section {
  text-align: center;
  flex: 0 0 auto;
}

.example-section h4 {
  margin: 0 0 16px 0;
  color: #4338ca;
  font-size: 1.1rem;
  font-weight: 600;
}

.weather-card {
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  min-width: 280px;
  max-width: 320px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
}

.weather-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.weather-icon {
  font-size: 4rem;
  margin-bottom: 16px;
  line-height: 1;
}

.weather-title {
  font-size: 1.5rem;
  margin: 0 0 8px 0;
  font-weight: bold;
  color: #1f2937;
}

.weather-temp {
  font-size: 2rem;
  margin: 0 0 16px 0;
  font-weight: 600;
  color: #4338ca;
}

.weather-activity {
  font-size: 1rem;
  margin: 0 0 20px 0;
  color: #6b7280;
  line-height: 1.5;
  min-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.weather-button {
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  color: white;
}

.weather-button:hover {
  background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
  transform: translateY(-1px);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
  }
  
  .example-section h4 {
    color: #a5b4fc;
  }
  
  .weather-card {
    background: #1f2937;
    border-color: #374151;
    color: #f9fafb;
  }
  
  .weather-title {
    color: #f9fafb;
  }
  
  .weather-temp {
    color: #a5b4fc;
  }
  
  .weather-activity {
    color: #d1d5db;
  }
  
  .weather-button {
    background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
  }
  
  .weather-button:hover {
    background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%);
  }
}`}
            />
          </CardContent>
        </Card>

        {/* Section 4: Logical AND (&&) - The Show/Hide Expert */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Eye className="w-8 h-8 text-amber-600 dark:text-amber-400" />}
              title="Logical AND (&&) - The Show/Hide Expert"
              description="Show something only when a condition is true - perfect for optional content!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              The <strong>&& operator</strong> is your secret weapon for showing content only when you need it. Unlike the ternary operator, it doesn't need an "else" case - if the condition is false, it shows nothing! Perfect for notification badges, loading states, error messages, and optional UI elements.
            </p>

            {/* && vs Ternary Comparison */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-amber-200 dark:border-amber-700">
              <h4 className="font-bold mb-4 text-amber-800 dark:text-amber-200">Why && is Better for Show/Hide</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-3 text-amber-700 dark:text-amber-400">Using Ternary (Longer):</p>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'{isLoading ? ('}</div>
                    <div className="pl-4">{'<LoadingSpinner />'}</div>
                    <div>{') : null}'}</div>
                    <div className="mt-3 text-gray-500">// Have to specify null</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-amber-700 dark:text-amber-400">Using && (Cleaner):</p>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'{isLoading && ('}</div>
                    <div className="pl-4">{'<LoadingSpinner />'}</div>
                    <div>{')}'}</div>
                    <div className="mt-3 text-gray-500">// Automatically shows nothing</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">⚠️ Important: Numbers with &&</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>Never use</strong> <code>{'{count && <Badge />'}</code> if count can be 0! React will display "0" instead of nothing.<br/>
                <strong>Always use</strong> <code>{'{count > 0 && <Badge />'}</code> for numbers to avoid this issue.
              </AlertDescription>
            </Alert>

            <FrontendCodePreviewReact
              title="User Profile - && Operator"
              description="Show profile features only when users have them"
              colorTheme="amber"
              react={`function UserProfile({ 
    userName, 
    isVerified, 
    isPremium, 
    hasPosts,
    postCount 
  }) {
  return (
    <div className="profile-card">
      <div className="profile-avatar">👤</div>
      <h3 className="profile-name">{userName}</h3>
      
      {/* Verified badge - only shows for verified users */}
      {isVerified && (
        <div className="profile-badge verified">
          ✓ Verified
        </div>
      )}
      
      {/* Premium badge - only shows for premium users */}
      {isPremium && (
        <div className="profile-badge premium">
          ⭐ Premium
        </div>
      )}
      
      {/* Posts section - only shows if user has posts */}
      {hasPosts && (
        <div className="profile-posts">
          <p className="posts-count">{postCount} posts</p>
          <button className="view-posts-btn">View Posts</button>
        </div>
      )}
      
      {/* No posts message - only shows if user has no posts */}
      {!hasPosts && (
        <p className="no-posts">
          No posts yet
        </p>
      )}
      
      {/* Follow button - only shows if not following (simulated) */}
      {userName !== "Current User" && (
        <button className="follow-btn">Follow</button>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="example-section">
        <h4>New User:</h4>
        <UserProfile 
          userName="Alex" 
          isVerified={false} 
          isPremium={false} 
          hasPosts={false}
          postCount={0} 
        />
      </div>
      
      <div className="example-section">
        <h4>Active User:</h4>
        <UserProfile 
          userName="Sarah" 
          isVerified={true} 
          isPremium={false} 
          hasPosts={true}
          postCount={12} 
        />
      </div>
      
      <div className="example-section">
        <h4>Premium Creator:</h4>
        <UserProfile 
          userName="Mike" 
          isVerified={true} 
          isPremium={true} 
          hasPosts={true}
          postCount={156} 
        />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
}

/* User Profile Cards */
.app-container {
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  min-height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
}

.example-section {
  text-align: center;
  flex: 0 0 auto;
}

.example-section h4 {
  margin: 0 0 16px 0;
  color: #92400e;
  font-size: 1.1rem;
  font-weight: 600;
}

.profile-card {
  background: white;
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  min-width: 280px;
  max-width: 320px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid #e5e7eb;
  transition: all 0.3s ease;
  position: relative;
}

.profile-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.profile-avatar {
  font-size: 4rem;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
}

.profile-name {
  font-size: 1.5rem;
  margin: 0 0 16px 0;
  font-weight: bold;
  color: #1f2937;
}

.profile-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 4px;
  animation: slideIn 0.3s ease;
}

.verified {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.premium {
  background: linear-gradient(135deg, #a855f7 0%, #9333ea 100%);
  color: white;
}

.profile-posts {
  margin: 20px 0;
  padding: 16px;
  background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  border-radius: 12px;
  border: 1px solid #fbbf24;
}

.posts-count {
  margin: 0 0 12px 0;
  font-weight: 600;
  color: #92400e;
}

.view-posts-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.view-posts-btn:hover {
  background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
  transform: translateY(-1px);
}

.no-posts {
  color: #6b7280;
  font-style: italic;
  margin: 20px 0;
}

.follow-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 16px;
}

.follow-btn:hover {
  background: linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%);
  transform: translateY(-1px);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
  }
  
  .example-section h4 {
    color: #fde68a;
  }
  
  .profile-card {
    background: #1f2937;
    border-color: #374151;
    color: #f9fafb;
  }
  
  .profile-name {
    color: #f9fafb;
  }
  
  .profile-posts {
    background: linear-gradient(135deg, #451a03 0%, #78350f 100%);
    border-color: #f59e0b;
  }
  
  .posts-count {
    color: #fde68a;
  }
  
  .no-posts {
    color: #d1d5db;
  }
}`}
            />
          </CardContent>
        </Card>

        {/* Section 5: Dynamic CSS & Styling */}
        <Card className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-8 h-8 text-rose-600 dark:text-rose-400" />}
              title="Dynamic CSS & Styling"
              description="Master conditional styling to make your UI responsive and interactive!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Dynamic styling</strong> lets you change how elements look based on state, props, or user interactions. Combine conditional rendering with dynamic classes and inline styles to create responsive, interactive interfaces that adapt to different conditions!
            </p>

            {/* Dynamic Classes Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold mb-4 text-rose-800 dark:text-rose-200">🎨 Dynamic CSS Classes</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-3 text-rose-700 dark:text-rose-400">Template Literals Method:</p>
                  <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'className={`base-class ${isActive ? `active` : `inactive`}`}'}</div>
                    <div className="mt-3 text-gray-500">// Clean and readable</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-rose-700 dark:text-rose-400">Conditional Join Method:</p>
                  <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'className={[`base-class`, isActive && `active`].filter(Boolean).join(` `)}'}</div>
                    <div className="mt-3 text-gray-500">// Handles multiple conditions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Styles Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-rose-200 dark:border-rose-700">
              <h4 className="font-bold mb-4 text-rose-800 dark:text-rose-200">🎯 Dynamic Inline Styles</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold mb-3 text-rose-700 dark:text-rose-400">Ternary Style Object:</p>
                  <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'style={{'}</div>
                    <div className="pl-4">color: isError ? `red` : `green`,</div>
                    <div className="pl-4">fontWeight: isActive ? `bold` : `normal`</div>
                    <div>{'}}'}</div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-3 text-rose-700 dark:text-rose-400">Spread Operator Method:</p>
                  <div className="bg-rose-50 dark:bg-rose-950/30 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>{'style={{'}</div>
                    <div className="pl-4">...baseStyles,</div>
                    <div className="pl-4">...(isActive && activeStyles),</div>
                    <div className="pl-4">...(isError && errorStyles)</div>
                    <div>{'}}'}</div>
                  </div>
                </div>
              </div>
            </div>

            <FrontendCodePreviewReact
              title="Interactive Theme Switcher"
              description="A component that changes colors and styles based on user preferences"
              colorTheme="rose"
              react={`function ThemeCard({ theme, isDark, size, isAnimated }) {
  // Dynamic CSS classes using template literals
  const cardClasses = \`theme-card theme-\${theme} \${isDark ? 'dark' : 'light'} \${size} \${isAnimated ? 'animated' : ''}\`;
  
  // Dynamic inline styles
  const cardStyles = {
    transform: isAnimated ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isDark 
      ? '0 12px 40px rgba(0, 0, 0, 0.4)' 
      : '0 8px 32px rgba(0, 0, 0, 0.1)',
    border: theme === 'gradient' 
      ? '2px solid transparent' 
      : \`2px solid \${theme === 'ocean' ? '#0891b2' : '#dc2626'}\`
  };
  
  // Dynamic text based on props
  const getThemeInfo = () => {
    const themes = {
      ocean: { name: 'Ocean Blue', emoji: '🌊' },
      sunset: { name: 'Sunset Orange', emoji: '🌅' },
      gradient: { name: 'Magic Gradient', emoji: '✨' }
    };
    return themes[theme];
  };
  
  const themeInfo = getThemeInfo();
  
  return (
    <div className={cardClasses} style={cardStyles}>
      <div className="theme-emoji">{themeInfo.emoji}</div>
      <h3 className="theme-title">{themeInfo.name}</h3>
      <p className="theme-description">
        {isDark ? 'Dark mode' : 'Light mode'} • {size}
      </p>
      <div className="theme-controls">
        <button className="theme-btn">
          {isAnimated ? 'Stop Animation' : 'Start Animation'}
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="example-section">
        <h4>Ocean Theme:</h4>
        <ThemeCard theme="ocean" isDark={false} size="medium" isAnimated={false} />
      </div>
      
      <div className="example-section">
        <h4>Sunset Theme:</h4>
        <ThemeCard theme="sunset" isDark={true} size="large" isAnimated={true} />
      </div>
      
      <div className="example-section">
        <h4>Gradient Theme:</h4>
        <ThemeCard theme="gradient" isDark={false} size="small" isAnimated={true} />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`}
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
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
}

/* Theme Cards */
.app-container {
  display: flex;
  flex-direction: row;
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 40px 20px;
  background: linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%);
  min-height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
}

.example-section {
  text-align: center;
  flex: 0 0 auto;
}

.example-section h4 {
  margin: 0 0 16px 0;
  color: #be123c;
  font-size: 1.1rem;
  font-weight: 600;
}

.theme-card {
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  min-width: 280px;
  max-width: 320px;
  transition: all 0.3s ease;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.theme-card.animated {
  animation: pulse 2s infinite;
}

.theme-card.ocean {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  color: #0c4a6e;
}

.theme-card.ocean.dark {
  background: linear-gradient(135deg, #083344 0%, #164e63 100%);
  color: #e0f2fe;
}

.theme-card.sunset {
  background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
  color: #7c2d12;
}

.theme-card.sunset.dark {
  background: linear-gradient(135deg, #7c2d12 0%, #9a3412 100%);
  color: #fed7aa;
}

.theme-card.gradient {
  background: linear-gradient(135deg, #f9a8d4 0%, #c084fc 50%, #60a5fa 100%);
  color: white;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.theme-card.gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  padding: 2px;
  background: linear-gradient(135deg, #f9a8d4, #c084fc, #60a5fa);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  z-index: -1;
}

.theme-card.small {
  min-width: 240px;
  max-width: 280px;
  padding: 24px 20px;
}

.theme-card.large {
  min-width: 320px;
  max-width: 360px;
  padding: 40px 32px;
}

.theme-emoji {
  font-size: 3rem;
  margin-bottom: 16px;
}

.theme-title {
  font-size: 1.5rem;
  margin: 0 0 12px 0;
  font-weight: bold;
}

.theme-description {
  font-size: 1rem;
  margin: 0 0 20px 0;
  opacity: 0.8;
}

.theme-controls {
  margin-top: 20px;
}

.theme-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  color: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(10px);
}

.theme-btn:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-1px);
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  #root {
    background: linear-gradient(135deg, #831843 0%, #9f1239 100%);
  }
  
  .app-container {
    background: linear-gradient(135deg, #831843 0%, #9f1239 100%);
  }
  
  .example-section h4 {
    color: #fbcfe8;
  }
}`}
            />

            {/* Best Practices for Dynamic Styling */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-rose-200 dark:border-rose-700">
                <h4 className="font-bold mb-3 text-rose-800 dark:text-rose-200">✅ Best Practices</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Use <strong>template literals</strong> for simple class combinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Use <strong>filter().join()</strong> for multiple conditional classes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Use <strong>spread operator</strong> for complex style combinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Extract <strong>style objects</strong> outside render when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Prefer <strong>CSS classes</strong> over inline styles for performance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-rose-200 dark:border-rose-700">
                <h4 className="font-bold mb-3 text-rose-800 dark:text-rose-200">⚡ Performance Tips</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Avoid creating new objects on every render when possible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Use <strong>useMemo</strong> for expensive style calculations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>CSS-in-JS libraries handle optimization automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Consider <strong>CSS custom properties</strong> for dynamic values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-500">▸</span>
                    <span>Test performance with React DevTools Profiler</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Best Practices & Common Pitfalls */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-indigo-900 dark:text-indigo-100">
                  Best Practices & Common Pitfalls
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Write clean, readable conditional rendering code like a pro!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Do This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span><strong>Use if statements</strong> for complex logic or multiple conditions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span><strong>Use ternary</strong> for simple if-else choices between two options</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span><strong>Use &&</strong> when you only need to show something (no else needed)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span><strong>Always use condition &gt; 0</strong> with numbers and && operator</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span><strong>Extract complex conditions</strong> to variables for readability</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-indigo-600 dark:text-indigo-400">•</span>
                    <span><strong>Return null</strong> to hide entire components completely</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-red-700 dark:text-red-400 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Avoid This
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't use {'{count && <Badge />'}</strong> - React will show "0"!</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't nest ternaries</strong> deeply - becomes unreadable</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't put complex logic</strong> directly in JSX conditions</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't use if-else in JSX</strong> - it won't compile!</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't render undefined/false</strong> - can cause warnings</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-red-600 dark:text-red-400">•</span>
                    <span><strong>Don't over-optimize</strong> - readability is more important</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Quick Reference Guide */}
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/10 dark:to-cyan-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<EyeOff className="w-8 h-8 text-blue-600 dark:text-blue-400" />}
              title="Quick Reference Guide"
              description="Choose the perfect conditional rendering technique for your needs!"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      IF
                    </div>
                    <h4 className="font-bold text-blue-600">If Statement</h4>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2 font-mono">
                    <div>if (condition) {'{'}</div>
                    <div className="pl-4">return {'<A />'};</div>
                    <div>{'}'}</div>
                    <div>return {'<B />'};</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    ✅ <strong>Best for:</strong> Complex logic, multiple conditions, early returns
                  </p>
                </div>

                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      ?:
                    </div>
                    <h4 className="font-bold text-blue-600">Ternary Operator</h4>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2 font-mono">
                    <div>{'{condition ? <A /> : <B />'}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    ✅ <strong>Best for:</strong> Inline if-else, choosing between two options
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      &&
                    </div>
                    <h4 className="font-bold text-blue-600">Logical AND</h4>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2 font-mono">
                    <div>{'{condition && <A />'}</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    ✅ <strong>Best for:</strong> Show something only if true, nothing otherwise
                  </p>
                </div>

                <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-500 to-slate-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                      ∅
                    </div>
                    <h4 className="font-bold text-blue-600">Return Null</h4>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded text-sm space-y-2 font-mono">
                    <div>if (!condition) return null;</div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    ✅ <strong>Best for:</strong> Hiding entire components completely
                  </p>
                </div>
              </div>
            </div>

            {/* Decision Tree */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-bold mb-4 text-blue-800 dark:text-blue-200">🤔 Which Should I Use?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">Q:</span>
                  <span className="font-medium">Do you need complex logic or multiple conditions?</span>
                </div>
                <div className="flex items-start gap-3 ml-6">
                  <span className="text-green-500 font-bold">A:</span>
                  <span>Use <strong>if statements</strong> - they're the most flexible</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">Q:</span>
                  <span className="font-medium">Are you choosing between exactly two options?</span>
                </div>
                <div className="flex items-start gap-3 ml-6">
                  <span className="text-green-500 font-bold">A:</span>
                  <span>Use <strong>ternary operator</strong> - clean and concise</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">Q:</span>
                  <span className="font-medium">Do you only want to show something when true?</span>
                </div>
                <div className="flex items-start gap-3 ml-6">
                  <span className="text-green-500 font-bold">A:</span>
                  <span>Use <strong>&& operator</strong> - perfect for show/hide</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">Q:</span>
                  <span className="font-medium">Do you want to hide an entire component?</span>
                </div>
                <div className="flex items-start gap-3 ml-6">
                  <span className="text-green-500 font-bold">A:</span>
                  <span>Use <strong>return null</strong> - completely removes it</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
