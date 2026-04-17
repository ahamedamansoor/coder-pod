'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreviewReact } from '@/components/shared/frontend-code-preview-react';
import {
  Brain,
  Lightbulb,
  MemoryStick,
  Database,
  Zap,
  Package,
  RefreshCw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function StateAComponentsMemory() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Brain}
        category="React · Adding Interactivity"
        title="State: A Component's Memory"
        description="Learn how components remember information using state! Understand the difference between props and state, and make your components truly interactive."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is State? */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Brain className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is State?"
              description="State is a component's memory - it remembers values between renders!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Sometimes, a component needs to <strong>remember</strong> things. A counter needs to remember the current count. A form needs to remember what you've typed. A toggle needs to remember if it's on or off. This is where <strong>state</strong> comes in - it's like a component's personal memory!
            </p>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">📚 Why Do Components Need Memory?</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200">User Interactions</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Remember clicks, typing, scrolling, and other user actions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200">Data Changes</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Track updates from API calls, timers, or real-time data</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200">UI Conditions</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Manage loading states, error messages, and form validation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-800 dark:text-blue-200">Dynamic Content</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Show/hide elements, switch between views, and update styles</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-center text-cyan-700 dark:text-cyan-300">🧠 Component Memory in Action</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 rounded-lg border-2 border-cyan-300 dark:border-cyan-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-cyan-500">Before Click</Badge>
                    <span className="font-semibold">count = 0</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Component remembers: "The count is 0"</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-cyan-500" />
                </div>

                <div className="p-4 bg-cyan-100 dark:bg-cyan-900/50 rounded-lg border-2 border-cyan-500 text-center">
                  <span className="font-bold text-cyan-700 dark:text-cyan-300">👆 User Clicks Button</span>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-cyan-500" />
                </div>

                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-green-500">After Click</Badge>
                    <span className="font-semibold">count = 1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Component updates its memory: "The count is now 1"</p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Why Do We Need State?</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Regular variables don't survive between renders - they reset every time! State variables are preserved by React, so your component can remember values.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* State vs Props */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Package className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="State vs Props"
              description="Understanding the difference between state and props is crucial!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Think of it like this: <strong>props</strong> are like parameters you pass to a function - they're read-only and come from a parent component. <strong>state</strong> is like a variable inside a function - the component owns it and can change it.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Props (Properties)
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Passed from parent</strong> to child component</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Read-only</strong> - child cannot modify</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Immutable</strong> - cannot be changed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>External data</strong> - comes from outside</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-pink-200 dark:border-pink-800">
                <h4 className="font-bold mb-4 text-pink-700 dark:text-pink-300 flex items-center gap-2">
                  <MemoryStick className="w-5 h-5" />
                  State
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Owned by component</strong> itself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Mutable</strong> - can be changed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Private</strong> - component controls it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Internal data</strong> - managed inside</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How State Works */}
        <Card className="border-2 border-emerald-200 dark:border-emerald-800 bg-gradient-to-br from-emerald-50/50 to-green-50/50 dark:from-emerald-950/10 dark:to-green-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />}
              title="How State Works"
              description="The magic behind React's state management!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When you change state, React does something amazing: it <strong>re-renders</strong> the component. This means React runs the component function again, but this time with the new state value. The component updates what you see on screen automatically!
            </p>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h4 className="font-bold mb-4 text-purple-700 dark:text-purple-300">🔄 The State Lifecycle</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200">Initialization</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Component starts with initial state values</p>
                    <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">const [count, setCount] = useState(0)</code>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200">State Change</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">User interaction or event triggers state update</p>
                    <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">setCount(count + 1)</code>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200">Re-render</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">React re-runs component with new state</p>
                    <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">Component() → JSX with new count</code>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-purple-800 dark:text-purple-200">UI Update</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Screen reflects the new state visually</p>
                    <code className="text-xs bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">DOM updated → User sees new count</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-emerald-200 dark:border-emerald-800">
              <h4 className="font-bold mb-4 text-center text-emerald-700 dark:text-emerald-300">⚡ The State Update Cycle</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-lg border-2 border-emerald-300 dark:border-emerald-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-emerald-500">1. State Change</Badge>
                  </div>
                  <p className="text-sm">You call the state setter function</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-emerald-500" />
                </div>

                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-blue-500">2. Re-render</Badge>
                  </div>
                  <p className="text-sm">React runs the component again</p>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-emerald-500" />
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-purple-500">3. UI Update</Badge>
                  </div>
                  <p className="text-sm">Screen shows the new state</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simple Counter Example */}
        <Card className="border-2 border-amber-200 dark:border-amber-800 bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/10 dark:to-orange-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Sparkles className="w-7 h-7 text-amber-600 dark:text-amber-400" />}
              title="Simple Counter Example"
              description="See state in action with a basic counter component!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Let's create a simple counter that remembers how many times it's been clicked. This example shows the fundamental pattern of using state in React components.
            </p>

            <FrontendCodePreviewReact
              title="Elite Counter Component"
              description="A sophisticated counter showcasing state with premium design"
              colorTheme="amber"
              react={`function Counter() {
  const [count, setCount] = React.useState(0);
  const [previousCount, setPreviousCount] = React.useState(0);
  
  React.useEffect(() => {
    if (count !== previousCount) {
      setPreviousCount(count);
    }
  }, [count, previousCount]);
  
  return (
    <div className="counter-container">
      <div className="glow-effect" />
      
      <div className="counter-display">
        {count.toString().padStart(3, '0')}
      </div>
      
      <div className="counter-label">
        {count === 1 ? 'Click' : 'Clicks'}
      </div>
      
      <div className="button-container">
        <button 
          className="counter-button"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button 
          className="counter-button"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button 
          className="counter-button"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      
      <div className="stats">
        <div className="stat-item">
          <span className="stat-value">{count}</span>
          <span className="stat-label">Current</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{previousCount}</span>
          <span className="stat-label">Previous</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">
            {count > previousCount ? 'Up' : count < previousCount ? 'Down' : 'Same'}
          </span>
          <span className="stat-label">Trend</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="background-pattern" />
      <Counter />
    </div>
  );
}

// Simple render for playground environment
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
} catch (e) {
  console.log('App component ready:', App);
}`}
              css={`/* Elite Counter Component Styles */
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #fef7ed 0%, #fef3c7 30%, #fde68a 70%, #fcd34d 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(251, 191, 36, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.counter-container {
  background: linear-gradient(145deg, #fef7ed 0%, #fef3c7 50%, #fde68a 100%);
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(245, 158, 11, 0.25), inset 0 1px 0 rgba(251, 191, 36, 0.3);
  border: 2px solid #fbbf24;
  min-width: 320px;
  max-width: 400px;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.counter-display {
  font-size: 3rem;
  font-weight: bold;
  color: #92400e;
  margin-bottom: 16px;
  font-family: 'Courier New', monospace;
  position: relative;
  z-index: 2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.counter-label {
  font-size: 1.1rem;
  color: #b45309;
  margin-bottom: 24px;
  font-weight: 600;
  position: relative;
  z-index: 2;
}

.button-container {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}

.counter-button {
  padding: 12px 20px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(145deg, #f59e0b 0%, #d97706 100%);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  font-size: 1rem;
}

.counter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4);
}

.counter-button:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}

.stats {
  display: flex;
  justify-content: space-around;
  padding-top: 24px;
  border-top: 1px solid rgba(245, 158, 11, 0.3);
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.4rem;
  font-weight: bold;
  color: #d97706;
  display: block;
}

.stat-label {
  font-size: 0.8rem;
  color: #92400e;
  opacity: 0.7;
  margin-top: 4px;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .app-container {
    background: linear-gradient(135deg, #451a03 0%, #78350f 30%, #92400e 70%, #b45309 100%);
  }
  
  .counter-container {
    background: linear-gradient(145deg, #451a03 0%, #78350f 50%, #92400e 100%);
    border-color: #f59e0b;
    box-shadow: 0 20px 60px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(251, 191, 36, 0.2);
  }
  
  .counter-display {
    color: #fef3c7;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .counter-label {
    color: #fde68a;
  }
  
  .counter-button {
    background: linear-gradient(145deg, #f59e0b 0%, #d97706 100%);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
  }
  
  .stats {
    border-top-color: rgba(245, 158, 11, 0.2);
  }
  
  .stat-value {
    color: #fde68a;
  }
  
  .stat-label {
    color: #fef3c7;
  }
}`}
            />

            <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-300 dark:border-amber-700">
              <Database className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <AlertTitle className="text-amber-900 dark:text-amber-100">Key Points</AlertTitle>
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>useState(0)</strong> creates state with initial value 0<br/>
                <strong>[count, setCount]</strong> gives you the current value and a function to update it<br/>
                <strong>React remembers</strong> the count value between renders
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Text Input Example */}
        <Card className="border-2 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-50/50 to-pink-50/50 dark:from-rose-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<RefreshCw className="w-7 h-7 text-rose-600 dark:text-rose-400" />}
              title="Text Input Example"
              description="See how state remembers what you type in a form!"
              size="lg"
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Forms are perfect examples of state in action. When you type in an input field, the component needs to remember what you've typed. This example shows how to create a controlled input using state.
            </p>

            <FrontendCodePreviewReact
              title="Elite Text Input Component"
              description="A sophisticated text input showcasing state with premium design"
              colorTheme="rose"
              react={`function TextInput() {
  const [text, setText] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);
  
  return (
    <div className="text-input-container">
      <div className="glow-effect" />
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Start typing to see state in action..."
        className={'text-input' + (isFocused ? ' focused' : '')}
      />
      
      <div className="text-display">
        {text ? '"' + text + '"' : 'Start typing above...'}
      </div>
      
      <div className="stats">
        <div className="stat-item">
          <span className="stat-value">{text.length}</span>
          <span className="stat-label">Characters</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{text.split(' ').filter(word => word).length}</span>
          <span className="stat-label">Words</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{text.includes(' ') ? 'Yes' : 'No'}</span>
          <span className="stat-label">Has Spaces</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="background-pattern" />
      <TextInput />
    </div>
  );
}

// Simple render for playground environment
try {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);
} catch (e) {
  console.log('App component ready:', App);
}`}
              css={`/* Elite Text Input Component Styles */
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 30%, #fca5a5 70%, #f87171 100%);
  padding: 0;
  margin: 0;
  width: 100vw;
  position: relative;
  overflow: hidden;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 25% 25%, rgba(244, 63, 94, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(251, 113, 133, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.text-input-container {
  background: linear-gradient(145deg, #fef2f2 0%, #fecaca 50%, #fca5a5 100%);
  border-radius: 24px;
  padding: 40px 32px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(244, 63, 94, 0.25), inset 0 1px 0 rgba(251, 113, 133, 0.3);
  border: 2px solid #fb7185;
  min-width: 320px;
  max-width: 400px;
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(244, 63, 94, 0.1) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.text-input {
  width: 100%;
  padding: 18px 24px;
  border-radius: 16px;
  border: 2px solid #fb7185;
  background: linear-gradient(145deg, #ffffff 0%, #fef2f2 100%);
  color: #881337;
  font-size: 1.1rem;
  font-family: system-ui, -apple-system, sans-serif;
  margin-bottom: 24px;
  box-shadow: inset 0 2px 8px rgba(244, 63, 94, 0.1);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.text-input:focus {
  outline: none;
  border-color: #f43f5e;
  box-shadow: inset 0 2px 8px rgba(244, 63, 94, 0.1), 0 0 0 3px rgba(244, 63, 94, 0.2);
}

.text-input::placeholder {
  font-size: 0.9rem;
  color: #be123c;
  opacity: 0.8;
  font-style: italic;
}

.text-display {
  font-size: 1.3rem;
  color: #881337;
  margin: 0 0 16px 0;
  font-weight: 600;
  position: relative;
  z-index: 2;
  min-height: 32px;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid rgba(244, 63, 94, 0.3);
  position: relative;
  z-index: 2;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 1.4rem;
  font-weight: bold;
  color: #be123c;
  display: block;
}

.stat-label {
  font-size: 0.8rem;
  color: #881337;
  opacity: 0.7;
  margin-top: 4px;
}

/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  .app-container {
    background: linear-gradient(135deg, #881337 0%, #be123c 30%, #e11d48 70%, #f43f5e 100%);
  }
  
  .text-input-container {
    background: linear-gradient(145deg, #881337 0%, #be123c 50%, #e11d48 100%);
    border-color: #f43f5e;
    box-shadow: 0 20px 60px rgba(244, 63, 94, 0.4), inset 0 1px 0 rgba(251, 113, 133, 0.2);
  }
  
  .text-input {
    background: linear-gradient(145deg, #4c0519 0%, #7f1d1d 100%);
    color: #fecaca;
    border-color: #f43f5e;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  
  .text-input:focus {
    border-color: #fb7185;
    box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(251, 113, 133, 0.2);
  }
  
  .text-input::placeholder {
    color: #fca5a5;
  }
  
  .text-display {
    color: #fecaca;
  }
  
  .stats {
    border-top-color: rgba(244, 63, 94, 0.2);
  }
  
  .stat-value {
    color: #fca5a5;
  }
  
  .stat-label {
    color: #fecaca;
  }
}`}
            />

            <div className="p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-2 border-rose-300 dark:border-rose-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">!</span>
                </div>
                <span className="font-semibold text-rose-900 dark:text-rose-100">Controlled Component</span>
              </div>
              <p className="text-sm text-rose-800 dark:text-rose-200">
                This is a <strong>controlled component</strong> because React controls the input's value through state. The input's value is always equal to the state variable, making React the "single source of truth".
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 dark:from-indigo-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />}
              title="State Best Practices"
              description="Follow these practices to use state effectively!"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-200 dark:border-green-800">
                <h4 className="font-bold mb-4 text-green-700 dark:text-green-300">✅ Do's</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use state for data that <strong>changes over time</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Keep state <strong>simple and minimal</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Use descriptive names for state variables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Initialize state with sensible defaults</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-200 dark:border-red-800">
                <h4 className="font-bold mb-4 text-red-700 dark:text-red-300">❌ Don'ts</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't mutate state directly</strong> - always use setters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Don't store <strong>derived values</strong> in state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Don't put <strong>props</strong> directly into state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Don't create <strong>too much state</strong> - keep it minimal</span>
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
