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
  AlertTriangle,
  Zap,
  Code2,
  Target,
  Settings,
  MousePointer,
  RefreshCw,
  Clock,
  Loader2,
  Timer,
  Gauge,
  Sparkles,
} from 'lucide-react';

export default function UseTransitionHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Zap}
        category="React · Hooks (Comprehensive)"
        title="useTransition Hook"
        description="Master useTransition for non-blocking state updates - the essential hook for keeping your UI responsive during heavy operations and improving user experience with smooth transitions."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useTransition */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Zap className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useTransition?"
              description="Non-blocking state updates for smooth UI"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useTransition</code> is a Hook that lets you mark certain state updates as <strong>non-urgent transitions</strong>. This keeps your UI responsive by allowing React to interrupt less important updates and show loading states!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-200 dark:border-cyan-800">
              <h4 className="font-bold mb-4 text-cyan-700 dark:text-cyan-300">Basic Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm space-y-2">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const [isPending, startTransition] = useTransition();</div>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 min-w-[120px]">isPending:</span>
                  <span className="text-gray-700 dark:text-gray-300">Boolean - true when transition is active</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-cyan-600 dark:text-cyan-400 min-w-[120px]">startTransition:</span>
                  <span className="text-gray-700 dark:text-gray-300">Function - wraps state updates as transitions</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <h4 className="font-bold text-cyan-700 dark:text-cyan-300 mb-3">UI Responsiveness</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Prevents UI blocking during heavy updates</li>
                  <li>• Shows loading states for better UX</li>
                  <li>• Allows user interactions to interrupt</li>
                  <li>• Maintains smooth animations</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-3">Use Cases</h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Filtering large lists</li>
                  <li>• Data fetching with loading states</li>
                  <li>• Complex calculations</li>
                  <li>• Navigation transitions</li>
                </ul>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Key Advantage!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Unlike regular state updates, transitions can be interrupted by more urgent updates, keeping your app feeling fast and responsive!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Why useTransition is Powerful */}
        <Card className="border-2 border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50/50 to-gray-50/50 dark:from-slate-950/10 dark:to-gray-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Timer className="w-7 h-7 text-slate-600 dark:text-slate-400" />}
              title="Why useTransition is Powerful"
              description="Understanding concurrent rendering"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-slate-200 dark:border-slate-800">
                <h4 className="font-bold mb-4 text-slate-700 dark:text-slate-300">Regular vs Transition Updates</h4>
                <div className="space-y-3">
                  <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                    <h5 className="font-semibold text-red-700 dark:text-red-300 mb-2">❌ Regular State Update</h5>
                    <p className="text-sm text-red-600 dark:text-red-400 mb-2">Blocks UI until complete</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div>setFilter(newFilter); // UI freezes here</div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                    <h5 className="font-semibold text-green-700 dark:text-green-300 mb-2">✅ Transition Update</h5>
                    <p className="text-sm text-green-600 dark:text-green-400 mb-2">UI stays responsive</p>
                    <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded font-mono text-xs">
                      <div>startTransition(() {'=>'} {'{'}</div>
                      <div className="pl-4">setFilter(newFilter); // Non-blocking</div>
                      <div>{'}'});</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-amber-50 dark:bg-amber-950/20 rounded-xl border-2 border-amber-300 dark:border-amber-700">
                <h4 className="font-bold text-amber-700 dark:text-amber-300 mb-3">⚡ Concurrent Benefits</h4>
                <p className="text-sm text-amber-800 dark:text-amber-200 mb-3">
                  With useTransition, React can:
                </p>
                <ul className="space-y-2 text-sm text-amber-700 dark:text-amber-300">
                  <li>• <strong>Interrupt</strong> slow transitions with urgent updates</li>
                  <li>• <strong>Show loading states</strong> while transitions are pending</li>
                  <li>• <strong>Defer rendering</strong> of expensive components</li>
                  <li>• <strong>Maintain interactivity</strong> during heavy operations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Step by Step Guide */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Settings className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Step-by-Step Guide"
              description="Learn useTransition progressively"
              size="lg"
            />

            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-cyan-200 dark:border-cyan-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">1</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                          <Zap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h4 className="font-bold text-xl text-cyan-700 dark:text-cyan-300">Step 1: Import and Initialize</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        First, import useTransition and destructure the isPending state and startTransition function.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-cyan-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Import and initialize useTransition</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">import</span> {'{}'} useTransition {'{}'} <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [isPending, startTransition] = useTransition();
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 p-4 rounded-xl border border-cyan-200 dark:border-cyan-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Lightbulb className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-cyan-800 dark:text-cyan-200 mb-1">Two Values Returned</p>
                            <p className="text-sm text-cyan-700 dark:text-cyan-300">
                              isPending tracks loading state, startTransition wraps non-urgent updates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl transform -rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">2</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h4 className="font-bold text-xl text-blue-700 dark:text-blue-300">Step 2: Wrap State Updates</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Wrap expensive state updates in startTransition to mark them as non-urgent.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-blue-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Wrap expensive updates</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> handleFilterChange = (filter) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            startTransition(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            setFilter(filter); <span className="text-slate-500">// Non-blocking</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'});
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-1">Non-Blocking Updates</p>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              State updates inside startTransition won't block user interactions!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-1"></div>
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-700 shadow-xl overflow-hidden">
                  <div className="flex">
                    <div className="w-20 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
                      <div className="text-white text-2xl font-bold">3</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                          <Loader2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h4 className="font-bold text-xl text-indigo-700 dark:text-indigo-300">Step 3: Show Loading States</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Use the isPending state to show loading indicators during transitions.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-indigo-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Show loading state</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">return</span> (
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            {'{}'}isPending && &lt;<span className="text-red-400">div</span>&gt;Loading...&lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            &lt;<span className="text-red-400">ExpensiveList</span> <span className="text-green-400">data</span>={'{}'}filteredData{'{}'} /&gt;
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            &lt;/<span className="text-red-400">div</span>&gt;
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            );
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-xl border border-indigo-200 dark:border-indigo-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Gauge className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-indigo-800 dark:text-indigo-200 mb-1">Visual Feedback</p>
                            <p className="text-sm text-indigo-700 dark:text-indigo-300">
                              isPending is true during transitions, perfect for loading spinners!
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
                      <div className="text-white text-2xl font-bold">4</div>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h4 className="font-bold text-xl text-purple-700 dark:text-purple-300">Step 4: Handle Urgent Updates</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        Keep urgent updates (like input values) outside of transitions for immediate feedback.
                      </p>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 mb-4">
                        <div className="font-mono text-sm space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-purple-500">//</span>
                            <span className="text-slate-700 dark:text-slate-300">Separate urgent from non-urgent</span>
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [inputValue, setInputValue] = useState('');
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> [searchResults, setSearchResults] = useState([]);
                          </div>
                          <div className="h-2"></div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            <span className="text-purple-600">const</span> handleChange = (e) {'=>'} {'{}'}
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            setInputValue(e.target.value); <span className="text-slate-500">// Urgent - immediate</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            startTransition(() {'=>'} {'{}'}
                          </div>
                          <div className="ml-12 text-slate-800 dark:text-slate-200">
                            setSearchResults(filterResults(e.target.value)); <span className="text-slate-500">// Non-urgent</span>
                          </div>
                          <div className="ml-8 text-slate-800 dark:text-slate-200">
                            {'}'});
                          </div>
                          <div className="ml-4 text-slate-800 dark:text-slate-200">
                            {'}'};
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl border border-purple-200 dark:border-purple-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-purple-800 dark:text-purple-200 mb-1">Best Practice</p>
                            <p className="text-sm text-purple-700 dark:text-purple-300">
                              Input values update immediately, search results update as transitions!
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

        {/* Interactive Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />}
            title="Interactive Example"
            description="See useTransition in action"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Responsive Search with Transitions"
            description="Experience smooth UI interactions with useTransition"
            colorTheme="cyan"
            react={`function ResponsiveSearchExample() {
  const [inputValue, setInputValue] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [isPending, startTransition] = React.useTransition();

  // Simulate expensive search operation
  const performSearch = (query) => {
    const allItems = [
      'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
      'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
      'Mango', 'Orange', 'Papaya', 'Quince', 'Raspberry',
      'Strawberry', 'Tangerine', 'Ugli fruit', 'Vanilla', 'Watermelon'
    ];
    
    // Simulate slow search
    const start = Date.now();
    while (Date.now() - start < 500) {} // 500ms delay
    
    return allItems.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleChange = (e) => {
    const value = e.target.value;
    
    // Urgent update - immediate feedback
    setInputValue(value);
    
    // Non-urgent update - wrapped in transition
    startTransition(() => {
      setSearchResults(performSearch(value));
    });
  };

  return (
    <div className="container">
      <h2>Responsive Search with useTransition</h2>
      <p>Try typing quickly - the input stays responsive while search results load!</p>
      
      <div className="search-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search fruits..."
          className="search-input"
        />
        
        {isPending && (
          <div className="loading-indicator">
            <Loader2 className="animate-spin" />
            Searching...
          </div>
        )}
      </div>

      <div className="results-container">
        {isPending ? (
          <div className="loading-placeholder">
            Loading results...
          </div>
        ) : (
          <div className="results-list">
            {searchResults.map((item, index) => (
              <div key={index} className="result-item">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ResponsiveSearchExample />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState, useTransition } = React;
  const { createRoot } = ReactDOM;

  function ResponsiveSearchExample() {
    const [inputValue, setInputValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isPending, startTransition] = useTransition();

    const performSearch = (query) => {
      const allItems = [
        'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
        'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
        'Mango', 'Orange', 'Papaya', 'Quince', 'Raspberry',
        'Strawberry', 'Tangerine', 'Ugli fruit', 'Vanilla', 'Watermelon'
      ];
      
      const start = Date.now();
      while (Date.now() - start < 500) {}
      
      return allItems.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
    };

    const handleChange = (e) => {
      const value = e.target.value;
      
      setInputValue(value);
      
      startTransition(() => {
        setSearchResults(performSearch(value));
      });
    };

    return h('div', { className: 'container' },
      h('h2', null, 'Responsive Search with useTransition'),
      h('p', null, 'Try typing quickly - the input stays responsive while search results load!'),
      
      h('div', { className: 'search-container' },
        h('input', {
          type: 'text',
          value: inputValue,
          onChange: handleChange,
          placeholder: 'Search fruits...',
          className: 'search-input'
        }),
        
        isPending && h('div', { className: 'loading-indicator' },
          h(Loader2, { className: 'animate-spin' }),
          ' Searching...'
        )
      ),

      h('div', { className: 'results-container' },
        isPending ? 
          h('div', { className: 'loading-placeholder' }, 'Loading results...') :
          h('div', { className: 'results-list' },
            searchResults.map((item, index) =>
              h('div', { key: index, className: 'result-item' }, item)
            )
          )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ResponsiveSearchExample));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  padding: 40px;
  background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
  min-height: 100vh;
  margin: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  text-align: center;
}

h2 {
  color: #0891b2;
  margin-bottom: 8px;
  font-size: 1.5rem;
}

p {
  color: #6b7280;
  margin-bottom: 30px;
}

.search-container {
  position: relative;
  margin-bottom: 30px;
}

.search-input {
  width: 100%;
  padding: 16px 20px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}

.loading-indicator {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;
  color: #06b6d4;
  font-size: 14px;
  font-weight: 600;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.results-container {
  min-height: 200px;
  text-align: left;
}

.loading-placeholder {
  padding: 20px;
  text-align: center;
  color: #9ca3af;
  font-style: italic;
}

.results-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.result-item {
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-weight: 500;
  color: #374151;
  transition: all 0.2s ease;
}

.result-item:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateX(4px);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);
  }

  .container {
    background: #1f2937;
  }

  h2 {
    color: #67e8f9;
  }

  p {
    color: #d1d5db;
  }

  .search-input {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }

  .search-input:focus {
    border-color: #06b6d4;
  }

  .loading-indicator {
    color: #67e8f9;
  }

  .loading-placeholder {
    color: #9ca3af;
  }

  .result-item {
    background: #374151;
    border-color: #4b5563;
    color: #f3f4f6;
  }

  .result-item:hover {
    background: #4b5563;
    border-color: #6b7280;
  }
}`}
          />
        </div>

        {/* When to Use */}
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/10 dark:to-emerald-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-green-600 dark:text-green-400" />}
              title="When to Use useTransition"
              description="Practical use cases and best practices"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-bold text-green-700 dark:text-green-300">✅ Perfect For</h4>
                
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🔍 Search & Filtering</h5>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Large datasets where filtering takes time but input should stay responsive
                  </p>
                </div>

                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <h5 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-2">📊 Data Visualization</h5>
                  <p className="text-sm text-cyan-700 dark:text-cyan-300">
                    Charts and graphs that need time to render but shouldn't block UI
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🗂️ Navigation</h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Page transitions and route changes with loading states
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-red-700 dark:text-red-300">❌ Avoid For</h4>
                
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">⚡ Immediate Updates</h5>
                  <p className="text-sm text-red-700 dark:text-red-300">
                    Input values, button states, or anything needing instant feedback
                  </p>
                </div>

                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🎯 Small Updates</h5>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    Simple state changes that don't impact performance
                  </p>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h5 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">🔄 Network Requests</h5>
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Use useEffect with loading states for API calls instead
                  </p>
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-300 dark:border-green-700">
              <AlertTriangle className="h-5 w-5 text-green-600 dark:text-green-400" />
              <AlertTitle className="text-green-900 dark:text-green-100">Performance First!</AlertTitle>
              <AlertDescription className="text-green-800 dark:text-green-200">
                Only use useTransition when you have performance issues. Don't over-optimize!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Essential useTransition concepts to remember"
              size="lg"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-cyan-300 dark:border-cyan-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-cyan-500" />
                  <h4 className="font-bold text-cyan-700 dark:text-cyan-300">Non-Blocking Updates</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  State updates in transitions don't block user interactions or UI rendering.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Loader2 className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Loading States</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  isPending provides built-in loading state for better user experience.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-indigo-300 dark:border-indigo-700">
                <div className="flex items-center gap-3 mb-3">
                  <Timer className="w-6 h-6 text-indigo-500" />
                  <h4 className="font-bold text-indigo-700 dark:text-indigo-300">Interruptible</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Transitions can be interrupted by more urgent updates, keeping UI responsive.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Concurrent Ready</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Works with React's concurrent features for optimal performance.
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Pro Tip</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Separate urgent updates (input values) from non-urgent updates (search results) for the best user experience!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
