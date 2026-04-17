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
  Code2,
  Globe,
  Settings,
  AlertTriangle,
  Users,
  Shield,
  ArrowRight,
  Target,
  Eye,
  MousePointer,
  RefreshCw,
} from 'lucide-react';

export default function UseContextHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Globe}
        category="React · Hooks (Comprehensive)"
        title="useContext Hook"
        description="Master useContext for sharing data across components without prop drilling - the essential solution for global state management in React applications."
        colorTheme="purple"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useContext */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Globe className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="What is useContext?"
              description="The solution to prop drilling hell"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-purple-100 dark:bg-purple-900 rounded text-sm">useContext</code> is a Hook that lets you subscribe to React context without introducing nesting. It's the solution to the "prop drilling" problem where you need to pass data through many levels of components.
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const value = useContext(MyContext);</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[100px]">MyContext:</span>
                  <span className="text-gray-700 dark:text-gray-300">The context object you want to read from</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[100px]">value:</span>
                  <span className="text-gray-700 dark:text-gray-300">The current context value</span>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">When to Use?</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Use useContext when you need to share data between components that are far apart in the component tree, like user authentication, theme settings, or language preferences!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* The Problem useContext Solves */}
        <Card className="border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-red-600 dark:text-red-400" />}
              title="The Problem: Prop Drilling Hell"
              description="Why we need useContext"
              size="lg"
            />

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Prop Drilling Pain</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                Without context, you must pass props through every intermediate component, even if they don't use them. This creates maintenance nightmares!
              </AlertDescription>
            </Alert>

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Before useContext (Prop Drilling)</h4>
                
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs mb-4">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Painful prop drilling</div>
                    <div>function App() {'{}'}</div>
                    <div>  const [user, setUser] = useState({'{}'} name: 'John' {'})'});</div>
                    <div>  return &lt;Header user={'{'}user{'}'} /&gt;;</div>
                    <div>{'}'}</div>
                    <div></div>
                    <div>function Header({'{}'} user {'})'} {'{}'}</div>
                    <div>  return &lt;Navigation user={'{'}user{'}'} /&gt;; // Just passing through!</div>
                    <div>{'}'}</div>
                    <div></div>
                    <div>function Navigation({'{}'} user {'})'} {'{}'}</div>
                    <div>  return &lt;UserMenu user={'{'}user{'}'} /&gt;; // Still just passing!</div>
                    <div>{'}'}</div>
                    <div></div>
                    <div>function UserMenu({'{}'} user {'})'} {'{}'}</div>
                    <div>  return &lt;span&gt;Hello, {'{'}user.name{'}'}&lt;/span&gt;; // Finally using it!</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-red-700 dark:text-red-300">
                  <div className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Header and Navigation don't need user data, but must accept and pass it</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Adding a new level means updating ALL intermediate components</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Hard to track where data comes from and where it goes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-500">•</span>
                    <span>Components become tightly coupled to props they don't use</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-3">✅ After useContext (Clean & Simple)</h4>
                
                <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-xs mb-4">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ✅ Clean with useContext</div>
                    <div>const UserContext = createContext();</div>
                    <div></div>
                    <div>function App() {'{}'}</div>
                    <div>  const [user, setUser] = useState({'{}'} name: 'John' {'})'});</div>
                    <div>  return (</div>
                    <div>    &lt;UserContext.Provider value={'{'}user{'}'}&gt;</div>
                    <div>      &lt;Header /&gt;</div>
                    <div>    &lt;/UserContext.Provider&gt;</div>
                    <div>  );</div>
                    <div>{'}'}</div>
                    <div></div>
                    <div>function Header() {'{}'}</div>
                    <div>  return &lt;Navigation /&gt;; // No props needed!</div>
                    <div>{'}'}</div>
                    <div></div>
                    <div>function UserMenu() {'{}'}</div>
                    <div>  const user = useContext(UserContext); // Direct access!</div>
                    <div>  return &lt;span&gt;Hello, {'{'}user.name{'}'}&lt;/span&gt;;</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Intermediate components don't need to know about user data</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Add/remove components without touching prop chains</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Clear separation between data providers and consumers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>Components only access data they actually need</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="Step-by-Step Guide"
              description="Learn useContext progressively"
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
                          <Target className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 1: Create Context</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, create a context object using createContext(). Think of it as creating a special container for sharing data across components.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Create a context with default value</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> UserContext = <span className="text-blue-600">createContext</span>(<span className="text-red-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Or with a more descriptive default</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> ThemeContext = <span className="text-blue-600">createContext</span>(<span className="text-green-600">'light'</span>);
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Pro Tip</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              The default value is only used when a component tries to consume context without being wrapped in a Provider. Use meaningful defaults!
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
                          <Eye className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 2: Provide Context Value</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Wrap components with Context.Provider and pass the value. This makes the data available to all child components!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">App</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [user, setUser] = <span className="text-blue-600">useState</span>(<span className="text-green-600">{'{}'}</span> <span className="text-orange-400">name</span>: <span className="text-green-600">'John'</span> <span className="text-green-600">{'})'}</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">UserContext.Provider</span> <span className="text-green-400">value</span>={'{}'}user{'}'}&gt;
                          </div>
                          <div className="ml-12 text-slate-500">
                            {'{}'} All child components can now access user
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">Header</span> /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">Main</span> /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">Footer</span> /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">UserContext.Provider</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Key Point</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              The Provider's value prop can be anything - object, string, number, function, or even another component!
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
                          <MousePointer className="w-5 h-5 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h4 className="font-bold text-xl text-pink-700 dark:text-pink-300">Step 3: Consume Context</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use useContext Hook to access the context value. This is how child components can read the shared data!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">UserProfile</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> user = <span className="text-blue-600">useContext</span>(UserContext);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (!user) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">div</span>&gt;Please log in&lt;/<span className="text-red-400">div</span>&gt;;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'}
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">div</span>&gt;Welcome, {'{}'}user.<span className="text-orange-400">name</span>{'}'}!&lt;/<span className="text-red-400">div</span>&gt;;
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30 p-4 rounded-xl border border-pink-200 dark:border-pink-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <AlertTriangle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-pink-800 dark:text-pink-200 mb-1">Important</p>
                            <p className="text-sm text-pink-700 dark:text-pink-300">
                              useContext returns the context value for the context you pass. Make sure you're using the same context object you created!
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
                          <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 4: Update Context Value</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Context updates automatically when the Provider's value changes. All consuming components will re-render with the new value!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">App</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [user, setUser] = <span className="text-blue-600">useState</span>(<span className="text-red-600">null</span>);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> <span className="text-blue-400">login</span> = (<span className="text-orange-400">userData</span>) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            setUser(userData);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'};
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">UserContext.Provider</span> <span className="text-green-400">value</span>={'{}'}{'{}'} user, login {'})'}&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">LoginButton</span> /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">UserProfile</span> /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">UserContext.Provider</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Performance Note</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              When the Provider's value changes, ALL components using that context will re-render. Keep values stable when possible!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-green-200 dark:border-green-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">5</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h4 className="font-bold text-xl text-green-700 dark:text-green-300">Step 5: Create Custom Hooks</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Create custom hooks for cleaner code reuse and better error handling. This encapsulates context logic!
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Custom hook for user context</span>
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">useUser</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> context = <span className="text-blue-600">useContext</span>(UserContext);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">if</span> (!context) {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">throw new</span> <span className="text-yellow-400">Error</span>(<span className="text-green-600">'useUser must be used within UserProvider'</span>);
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'})'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> context;
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                          <div className="h-2"></div>
                          <div className="flex items-center gap-2">
                            <span className="text-green-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Usage in components</span>
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">function</span> <span className="text-blue-400">UserProfile</span>() {'{}'}
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> {'{}'} user, login {'})'} = <span className="text-blue-400">useUser</span>();
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> &lt;<span className="text-red-400">div</span>&gt;Welcome, {'{}'}user.<span className="text-orange-400">name</span>{'}'}&lt;/<span className="text-red-400">div</span>&gt;;
                          </div>
                          <div className="text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">Best Practice</p>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              Custom hooks provide type safety, error handling, and a cleaner API for your context!
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

        {/* Real World Examples */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-orange-600 dark:text-orange-400" />}
            title="Real-World Examples"
            description="Practical useContext patterns"
            size="lg"
          />

          <div className="flex flex-col gap-6">
            {/* Theme Switcher Example */}
            <FrontendCodePreview learningContext="react"
              title="Theme Switcher"
              description="Global theme management with context"
              colorTheme="purple"
              react={`// Theme Context
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// Components using the theme
function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={\`header header-\${theme}\`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

function Content() {
  const { theme } = useTheme();
  
  return (
    <main className={\`content content-\${theme}\`}>
      <h2>Welcome to {theme === 'light' ? 'Light' : 'Dark'} Mode!</h2>
      <p>This content adapts to the current theme.</p>
    </main>
  );
}

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
              js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = function() {
  const { createElement: h, useState, useContext, createContext } = React;
  const { createRoot } = ReactDOM;

  const ThemeContext = createContext();

  function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = function() {
      setTheme(function(prevTheme) { 
        return prevTheme === 'light' ? 'dark' : 'light'; 
      });
    };
    
    return h(ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme } },
      children
    );
  }

  function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
  }

  function Header() {
    const { theme, toggleTheme } = useTheme();
    
    return h('header', { className: 'header header-' + theme },
      h('h1', null, 'My App'),
      h('button', { onClick: toggleTheme },
        'Switch to ' + (theme === 'light' ? 'Dark' : 'Light') + ' Mode'
      )
    );
  }

  function Content() {
    const { theme } = useTheme();
    
    return h('main', { className: 'content content-' + theme },
      h('h2', null, 'Welcome to ' + (theme === 'light' ? 'Light' : 'Dark') + ' Mode!'),
      h('p', null, 'This content adapts to the current theme.')
    );
  }

  function App() {
    return h(ThemeProvider, null,
      h('div', { className: 'app' },
        h(Header),
        h(Content)
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
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app {
  min-height: 100vh;
  transition: all 0.3s ease;
}

/* Light Theme */
.app.light {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #bae6fd 50%, #7dd3fc 75%, #38bdf8 100%);
  color: #0c4a6e;
}

.app.dark {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
}

.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.header-light {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.header-dark {
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.header-light h1 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #0369a1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.header-dark h1 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
}

.header button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 14px;
}

.header-light button {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
}

.header-dark button {
  background: #667eea;
  color: white;
}

.header button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.header-light button:hover {
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.content {
  padding: 40px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.content-light h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #0369a1;
  font-weight: 700;
}

.content-dark h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.content-light p {
  font-size: 1.1rem;
  color: #0c4a6e;
  opacity: 0.9;
  font-weight: 500;
}

.content-dark p {
  font-size: 1.1rem;
  opacity: 0.8;
}

.content-light {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  margin: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 40px;
}

.content-dark {
  background: rgba(255, 255, 255, 0.1);
  margin: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}`}
            />

            {/* User Authentication Example */}
            <FrontendCodePreview learningContext="react"
              title="User Authentication"
              description="Global user state with context"
              colorTheme="blue"
              react={`// Auth Context
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  
  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const userData = { id: 1, name: 'John Doe', email };
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const logout = () => {
    setUser(null);
  };
  
  const value = {
    user,
    isLoading,
    login,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// Components using auth
function LoginForm() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}

function UserProfile() {
  const { user, logout } = useAuth();
  
  return (
    <div className="user-profile">
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function AppContent() {
  const { user } = useAuth();
  
  return (
    <div className="app">
      <header className="header">
        <h1>My App</h1>
      </header>
      <main className="main">
        {user ? <UserProfile /> : <LoginForm />}
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
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

script2.onload = function() {
  const { createElement: h, useState, useContext, createContext } = React;
  const { createRoot } = ReactDOM;

  const AuthContext = createContext();

  function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const login = async function(email, password) {
      setIsLoading(true);
      try {
        await new Promise(function(resolve) { 
          setTimeout(resolve, 1000); 
        });
        const userData = { id: 1, name: 'John Doe', email: email };
        setUser(userData);
      } catch (error) {
        console.error('Login failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    const logout = function() {
      setUser(null);
    };
    
    const value = {
      user: user,
      isLoading: isLoading,
      login: login,
      logout: logout
    };
    
    return h(AuthContext.Provider, { value: value },
      children
    );
  }

  function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
  }

  function LoginForm() {
    const { login, isLoading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    var handleSubmit = function(e) {
      e.preventDefault();
      login(email, password);
    };
    
    return h('form', { onSubmit: handleSubmit, className: 'login-form' },
      h('h2', null, 'Login'),
      h('input', {
        type: 'email',
        placeholder: 'Email',
        value: email,
        onChange: function(e) { setEmail(e.target.value); },
        required: true
      }),
      h('input', {
        type: 'password',
        placeholder: 'Password',
        value: password,
        onChange: function(e) { setPassword(e.target.value); },
        required: true
      }),
      h('button', { 
        type: 'submit', 
        disabled: isLoading 
      }, isLoading ? 'Logging in...' : 'Login')
    );
  }

  function UserProfile() {
    const { user, logout } = useAuth();
    
    return h('div', { className: 'user-profile' },
      h('h2', null, 'Welcome, ' + user.name + '!'),
      h('p', null, 'Email: ' + user.email),
      h('button', { onClick: logout }, 'Logout')
    );
  }

  function AppContent() {
    const { user } = useAuth();
    
    return h('div', { className: 'app' },
      h('header', { className: 'header' },
        h('h1', null, 'My App')
      ),
      h('main', { className: 'main' },
        user ? h(UserProfile) : h(LoginForm)
      )
    );
  }

  function App() {
    return h(AuthProvider, null,
      h(AppContent)
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
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
}

.header h1 {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

.main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.5rem;
}

.login-form input {
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.login-form input:focus {
  outline: none;
  border-color: #667eea;
}

.login-form button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.login-form button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.login-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.user-profile {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
}

.user-profile h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.user-profile p {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.user-profile button {
  padding: 12px 24px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-profile button:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(239, 68, 68, 0.4);
}`}
            />
          </div>
        </div>

        {/* Common Mistakes & Solutions */}
        <Card className="border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50/50 to-yellow-50/50 dark:from-orange-950/10 dark:to-yellow-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<AlertTriangle className="w-7 h-7 text-orange-600 dark:text-orange-400" />}
              title="Common Mistakes & Solutions"
              description="Avoid these useContext pitfalls"
              size="lg"
            />

            <div className="space-y-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 1: Forgetting to Wrap with Provider</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ This will return undefined or default value</div>
                    <div>function MyComponent() {'{}'}</div>
                    <div>  const user = useContext(UserContext); // undefined!</div>
                    <div>  return &lt;div&gt;{'{'}user.name{'}'}&lt;/div&gt;; // Error!</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Always wrap components that use context with the appropriate Provider. Create a wrapper component if needed.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 2: Creating Context Inside Component</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ New context on every render!</div>
                    <div>function BadComponent() {'{}'}</div>
                    <div>  const UserContext = createContext(); // New context!</div>
                    <div>  const user = useContext(UserContext);</div>
                    <div>  return &lt;div&gt;{'{'}user.name{'}'}&lt;/div&gt;;</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Create context objects outside components, at module level. This ensures all components use the same context instance.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 3: Unnecessary Re-renders</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Object created on every render</div>
                    <div>function App() {'{}'}</div>
                    <div>  return (</div>
                    <div>    &lt;UserContext.Provider value={'{}'} user: user, theme: theme {'})'}&gt;</div>
                    <div>      &lt;Child /&gt;</div>
                    <div>    &lt;/UserContext.Provider&gt;</div>
                    <div>  );</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Use useMemo to stabilize context values when they contain objects or functions to prevent unnecessary re-renders.
                  </p>
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <h4 className="font-bold text-red-700 dark:text-red-300 mb-3">🚨 Mistake 4: Using Context for Everything</h4>
                <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs mb-3">
                  <div className="text-slate-800 dark:text-slate-200">
                    <div>// ❌ Overusing context for local state</div>
                    <div>const FormInputContext = createContext();</div>
                    <div>const ButtonColorContext = createContext();</div>
                    <div>const LoadingContext = createContext();</div>
                    <div>// Too many contexts!</div>
                  </div>
                </div>
                <div className="bg-green-50 dark:bg-green-950/20 p-3 rounded">
                  <h5 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Solution:</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Use context for truly global state. For component-specific state, use props or component composition.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Avoid Prop Drilling</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Context eliminates the need to pass props through multiple component levels.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Global State Solution</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for user authentication, themes, and settings needed app-wide.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Code2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Custom Hooks</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Create custom hooks for cleaner, type-safe context access with error handling.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Performance Matters</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use useMemo to stabilize context values and prevent unnecessary re-renders.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-300 dark:border-purple-700">
              <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              <AlertTitle className="text-purple-900 dark:text-purple-100">Best Practice!</AlertTitle>
              <AlertDescription className="text-purple-800 dark:text-purple-200">
                Combine useContext with useReducer for complex global state management, or consider state management libraries for very large applications!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
