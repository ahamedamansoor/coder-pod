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
  Plus,
  FileText,
  Shield,
  Target,
} from 'lucide-react';

export default function CreatingContext() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Plus}
        category="React · Context (Implementation)"
        title="Creating Context"
        description="Master how to create React Context with practical examples, best practices, and real-world patterns."
        colorTheme="green"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* The Basics of Creating Context */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Plus className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="The Basics of Creating Context"
              description="Understanding createContext() and its options"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              Creating Context is like <strong>setting up a radio station</strong> - you're establishing a broadcast channel that will carry specific type of data throughout your application.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="font-bold mb-4 text-emerald-700 dark:text-emerald-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>// Create a Context with default value</div>
                  <div>const MyContext = React.createContext(defaultValue);</div>
                  <div className="mt-2"></div>
                  <div>// Create a Context without default value</div>
                  <div>const MyContext = React.createContext();</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 dark:text-green-400 min-w-[120px]">defaultValue:</span>
                  <span className="text-gray-700 dark:text-gray-300">Value used when no Provider wraps the component</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-green-600 dark:text-green-400 min-w-[120px]">Returns:</span>
                  <span className="text-gray-700 dark:text-gray-300">Context object with Provider and Consumer</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">With Default Value</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Provides fallback value</li>
                  <li>• Useful for optional Context</li>
                  <li>• Prevents undefined errors</li>
                  <li>• Good for testing</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Without Default Value</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Requires Provider usage</li>
                  <li>• Forces explicit setup</li>
                  <li>• Better error detection</li>
                  <li>• Common in production</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Always create Context with meaningful default values, even if you plan to always use a Provider. This helps with testing and development.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Step by Step Creation */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Creation Guide"
              description="Learn how to create Context properly"
              size="lg"
            />

            <div className="space-y-6">
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
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create Context File</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create a dedicated file for your Context. This keeps your Context logic organized and reusable across your application.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">contexts/UserContext.js</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{'} createContext {'}'} <span className="text-blue-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-cyan-600">// Define the shape of your context data</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> UserContext = <span className="text-blue-600">createContext</span>({'{}'});
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">export default</span> UserContext;
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
                              Create Context files in a dedicated `contexts/` folder for better organization.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Define Context Shape</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Define the structure and default values for your Context. This provides type safety and fallback values.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Define default user state</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> defaultUserState = {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            user: <span className="text-red-600">null</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            isAuthenticated: <span className="text-red-600">false</span>,
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            login: () {'=>'} {'{}'},
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            logout: () {'=>'} {'{}'},
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> UserContext = <span className="text-blue-600">createContext</span>(defaultUserState);
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Type Safety</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Define the complete shape including functions to ensure consistent API across your app.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-pink-200 dark:border-pink-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Create Custom Hook</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create a custom hook to consume your Context safely. This provides better error handling and developer experience.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-pink-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Custom hook for safe Context consumption</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">export</span> <span className="text-purple-600">function</span> <span className="text-blue-600">useUser</span>() {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> context = <span className="text-blue-600">useContext</span>(UserContext);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (!context) {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">throw new</span> <span className="text-blue-600">Error</span>(<span className="text-green-600">'useUser must be used within a UserProvider'</span>);
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
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Safety First</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              Custom hooks provide clear error messages and prevent undefined Context usage.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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
                          <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Create Provider Component</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create a Provider component that manages the state and provides values to the Context consumers.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Provider component with state management</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">export</span> <span className="text-purple-600">function</span> <span className="text-blue-600">UserProvider</span>(<span className="text-orange-600">{'{'} children {'}'}</span>) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [user, setUser] = <span className="text-blue-600">useState</span>(<span className="text-red-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> value = {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            user,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            isAuthenticated: <span className="text-red-600">!!</span>user,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            login: setUser,
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            logout: () {'=>'} setUser(<span className="text-red-600">null</span>),
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;UserContext.Provider value=</span>{'<span className="text-green-600">{value}</span>'}<span className="text-red-600">&gt;</span>
                          </div>
                          <div className="ml-16 text-slate-800 dark:text-slate-200">
                            {'{'}children{'}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            <span className="text-red-600">&lt;/UserContext.Provider&gt;</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'}
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Encapsulation</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              The Provider encapsulates state logic and provides a clean API to consumers.
                            </p>
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

        {/* Practical Examples */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Practical Examples"
            description="Real-world Context creation patterns"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Authentication Context Creation"
            description="Complete user authentication Context with login/logout functionality (no persistence in playground)"
            colorTheme="green"
            react={`// contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define authentication context shape
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  loading: false,
});

// Custom hook for auth consumption
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Authentication provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userData = {
        id: 1,
        name: 'John Doe',
        email: email,
        avatar: '👤'
      };
      
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

// Example App component using the AuthContext
function App() {
  const { user, isAuthenticated, login, logout, loading } = useAuth();
  
  if (loading) {
    return <div className="app"><h1>Loading...</h1></div>;
  }
  
  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }
  
  return <Dashboard user={user} onLogout={logout} />;
}

// Login form component
function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await onLogin(email, password);
    setIsLoading(false);
  };
  
  return (
    <div className="app">
      <div className="login-form">
        <h1>🔐 Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button type="submit" disabled={isLoading} className="login-btn">
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="hint">Hint: Use any email and password</p>
      </div>
    </div>
  );
}

// Dashboard component
function Dashboard({ user, onLogout }) {
  return (
    <div className="app">
      <div className="dashboard">
        <div className="user-info">
          <div className="avatar">{user.avatar}</div>
          <div>
            <h2>Welcome, {user.name}!</h2>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="actions">
          <button className="logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

// ReactDOM integration
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, createContext, useContext, useState, useEffect } = React;
  const { createRoot } = ReactDOM;

  // Create authentication context
  const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
    loading: false,
  });

  // Custom hook
  function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  }

  // Authentication provider
  function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const userData = {
          id: 1,
          name: 'John Doe',
          email: email,
          avatar: '👤'
        };
        
        setUser(userData);
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setLoading(false);
      }
    };

    const logout = () => {
      setUser(null);
    };

    const value = {
      user,
      isAuthenticated: !!user,
      login,
      logout,
      loading,
    };

    return h(AuthContext.Provider, { value }, children);
  }

  // Login form component
  function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      await onLogin(email, password);
      setIsLoading(false);
    };
    
    return h('div', { className: 'app' },
      h('div', { className: 'login-form' },
        h('h1', null, '🔐 Login'),
        h('form', { onSubmit: handleSubmit },
          h('div', { className: 'form-group' },
            h('label', null, 'Email:'),
            h('input', {
              type: 'email',
              value: email,
              onChange: (e) => setEmail(e.target.value),
              placeholder: 'john@example.com',
              required: true
            })
          ),
          h('div', { className: 'form-group' },
            h('label', null, 'Password:'),
            h('input', {
              type: 'password',
              value: password,
              onChange: (e) => setPassword(e.target.value),
              placeholder: '••••••••',
              required: true
            })
          ),
          h('button', {
            type: 'submit',
            disabled: isLoading,
            className: 'login-btn'
          }, isLoading ? 'Logging in...' : 'Login')
        ),
        h('p', { className: 'hint' }, 'Hint: Use any email and password')
      )
    );
  }

  // Dashboard component
  function Dashboard({ user, onLogout }) {
    return h('div', { className: 'app' },
      h('div', { className: 'dashboard' },
        h('div', { className: 'user-info' },
          h('div', { className: 'avatar' }, user.avatar),
          h('div', null,
            h('h2', null, \`Welcome, \\\${user.name}!\`),
            h('p', null, user.email)
          )
        ),
        h('div', { className: 'actions' },
          h('button', { className: 'logout-btn', onClick: onLogout }, 'Logout')
        )
      )
    );
  }

  // App component
  function App() {
    const { user, isAuthenticated, login, logout, loading } = useAuth();
    
    if (loading) {
      return h('div', { className: 'app' }, h('h1', null, 'Loading...'));
    }
    
    if (!isAuthenticated) {
      return h(LoginForm, { onLogin: login });
    }
    
    return h(Dashboard, { user: user, onLogout: logout });
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(AuthProvider, null, h(App)));
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
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.app {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h1 {
  color: #1f2937;
  margin-bottom: 24px;
  font-size: 2rem;
}

h2 {
  color: #1f2937;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

p {
  color: #6b7280;
  margin-bottom: 16px;
}

.login-form {
  max-width: 100%;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 500;
  text-align: left;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  text-align: left;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
}

.login-btn {
  width: 100%;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 16px;
  text-align: center;
}

.login-btn:hover:not(:disabled) {
  background: #2563eb;
}

.login-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.hint {
  font-size: 14px;
  color: #6b7280;
  font-style: italic;
  text-align: center;
}

.dashboard {
  text-align: center;
}

.user-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  text-align: center;
}

.avatar {
  width: 60px;
  height: 60px;
  background: #e5e7eb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 16px;
  flex-shrink: 0;
}

.user-info div {
  text-align: left;
}

.user-info h2 {
  margin-bottom: 4px;
  text-align: left;
}

.user-info p {
  margin-bottom: 0;
  color: #6b7280;
  text-align: left;
}

.actions {
  text-align: center;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.logout-btn:hover {
  background: #dc2626;
}`}
          />
        </div>

        {/* Best Practices */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/10 dark:to-teal-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="Best Practices for Creating Context"
              description="Follow these guidelines for better Context implementation"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300 mb-4">
                  ✅ Do This
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Create Context files in dedicated folders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Provide meaningful default values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Create custom hooks for consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Export Provider and custom hook</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Use TypeScript for type safety</span>
                  </li>
                </ul>
              </div>
              
              {/* Don'ts */}
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300 mb-4">
                  ❌ Avoid This
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't create Context without default values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't useContext directly in components</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't put complex objects in Context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't create Context for component-specific data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Don't forget error handling in custom hooks</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-300 dark:border-emerald-700">
              <h4 className="font-bold text-emerald-700 dark:text-emerald-300 mb-4">File Structure Pattern</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-700 dark:text-slate-300">
                <div>src/</div>
                <div>├── contexts/</div>
                <div>│   ├── ThemeContext.js</div>
                <div>│   ├── AuthContext.js</div>
                <div>│   └── NotificationContext.js</div>
                <div>├── components/</div>
                <div>│   ├── providers/</div>
                <div>│   │   ├── ThemeProvider.js</div>
                <div>│   │   └── AuthProvider.js</div>
                <div>│   └── ui/</div>
                <div>└── hooks/</div>
                <div>    ├── useTheme.js</div>
                <div>    └── useAuth.js</div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Golden Rule</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Always create Context with a clear purpose and well-defined API. Your future self will thank you for the organization.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Common Patterns */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Layers className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Common Context Patterns"
              description="Proven patterns for different use cases"
              size="lg"
            />

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h4 className="font-bold text-lg text-purple-700 dark:text-purple-300">Authentication Context</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-700 dark:text-slate-300">
                  <div>const AuthContext = createContext(&#123;</div>
                  <div>  user: null,</div>
                  <div>  login: async () =&gt; &#123;&#125;,</div>
                  <div>  logout: () =&gt; &#123;&#125;,</div>
                  <div>  isLoading: false,</div>
                  <div>  error: null,</div>
                  <div>&#125;);</div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="font-bold text-lg text-blue-700 dark:text-blue-300">Notification Context</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-700 dark:text-slate-300">
                  <div>const NotificationContext = createContext(&#123;</div>
                  <div>  notifications: [],</div>
                  <div>  addNotification: () =&gt; &#123;&#125;,</div>
                  <div>  removeNotification: () =&gt; &#123;&#125;,</div>
                  <div>  clearAll: () =&gt; &#123;&#125;,</div>
                  <div>&#125;);</div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="font-bold text-lg text-green-700 dark:text-green-300">Settings Context</h4>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl font-mono text-sm text-slate-700 dark:text-slate-300">
                  <div>const SettingsContext = createContext(&#123;</div>
                  <div>  settings: &#123;&#125;,</div>
                  <div>  updateSetting: () =&gt; &#123;&#125;,</div>
                  <div>  resetSettings: () =&gt; &#123;&#125;,</div>
                  <div>  saveSettings: () =&gt; &#123;&#125;,</div>
                  <div>&#125;);</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ReactDOM Integration */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Monitor className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="ReactDOM Integration"
              description="How to integrate Context with ReactDOM"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              After creating your Context and Provider, you need to integrate them with ReactDOM to render your application with the Context available throughout the component tree.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-amber-200 dark:border-amber-800">
              <h4 className="font-bold mb-4 text-amber-700 dark:text-amber-300">ReactDOM Setup</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const root = ReactDOM.createRoot(document.getElementById('root'));</div>
                  <div>root.render(&lt;App /&gt;);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400 min-w-[120px]">createRoot:</span>
                  <span className="text-gray-700 dark:text-gray-300">Creates a React root for rendering</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-amber-600 dark:text-amber-400 min-w-[120px]">render:</span>
                  <span className="text-gray-700 dark:text-gray-300">Renders your app component tree</span>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Important Note</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Make sure your App component is wrapped with the appropriate Context Providers to ensure Context is available throughout your application.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Lightbulb className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Key Takeaways"
              description="What you should remember about creating Context"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <h4 className="font-bold text-indigo-700 dark:text-indigo-300 mb-3">🎯 Creation Essentials</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Use createContext() with meaningful defaults</li>
                  <li>• Create dedicated files for each Context</li>
                  <li>• Define the complete API shape</li>
                  <li>• Export Context and Provider separately</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-700 dark:text-purple-300 mb-3">💡 Best Practices</h4>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Create custom hooks for safe consumption</li>
                  <li>• Add proper error handling</li>
                  <li>• Use TypeScript when possible</li>
                  <li>• Keep Context values stable</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Final Thought</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Creating Context is about setting up clear communication channels. Well-designed Context makes your application more maintainable and your components more reusable.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
