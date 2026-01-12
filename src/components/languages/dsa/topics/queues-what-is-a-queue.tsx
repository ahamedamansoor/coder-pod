'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Users, ArrowRight, AlertCircle, CheckCircle, Sparkles, XCircle, 
  Target, TrendingUp, Clock, ArrowDown, ArrowUp
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function QueuesWhatIsAQueue() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Users} 
        category="DSA · Queues" 
        title="What is a Queue?" 
        description="Understanding the fundamentals of queues - a FIFO linear data structure"
        colorTheme="purple"
        badges={[
          { label: 'FIFO', variant: 'default' },
          { label: 'Ordered', variant: 'success' },
          { label: 'Linear', variant: 'info' }
        ]}
      />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Introduction to Queues
          </CardTitle>
          <CardDescription>A fundamental data structure for ordered data processing</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is a Queue?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              A <strong>Queue</strong> is a linear data structure that follows the <strong>FIFO (First In, First Out)</strong> principle. 
              The first element added to the queue will be the first one to be removed, just like people standing in a line.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 dark:border-purple-600">
                <div className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                  <ArrowDown className="w-4 h-4" />
                  Enqueue (Add)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Add elements to the rear of the queue</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300 dark:border-purple-600">
                <div className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                  <ArrowUp className="w-4 h-4" />
                  Dequeue (Remove)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Remove elements from the front of the queue</p>
              </div>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              Unlike stacks (LIFO), queues process elements in the same order they were added - 
              the first person in line gets served first.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-6 h-6 text-purple-600" />
            Visual Representation
          </CardTitle>
          <CardDescription>How a queue looks and works</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Real-World Example: People in Line</h4>
            
            {/* Enhanced People Line Diagram */}
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="space-y-6">
                {/* Service Counter */}
                <div className="flex justify-center">
                  <div className="bg-orange-100 dark:bg-orange-900/40 border-2 border-orange-400 dark:border-orange-600 rounded-lg px-6 py-3">
                    <div className="text-sm font-bold text-orange-700 dark:text-orange-300">🏪 SERVICE COUNTER</div>
                  </div>
                </div>
                
                {/* People in Line */}
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-3 py-2 rounded border border-green-500">
                    FRONT<br/>(Next)
                  </div>
                  <ArrowRight className="w-4 h-4 text-green-500" />
                  
                  {/* Person 1 - Front */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-lg border-2 border-green-500">
                      👤
                    </div>
                    <div className="text-xs font-bold text-green-700 dark:text-green-300 mt-1">Person 1</div>
                    <div className="text-xs text-green-600 dark:text-green-400">Arrived: 9:00</div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  
                  {/* Person 2 */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-lg border-2 border-purple-500">
                      👤
                    </div>
                    <div className="text-xs font-bold text-purple-700 dark:text-purple-300 mt-1">Person 2</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">Arrived: 9:05</div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  
                  {/* Person 3 */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-700 dark:text-purple-300 font-bold text-lg border-2 border-purple-500">
                      👤
                    </div>
                    <div className="text-xs font-bold text-purple-700 dark:text-purple-300 mt-1">Person 3</div>
                    <div className="text-xs text-purple-600 dark:text-purple-400">Arrived: 9:10</div>
                  </div>

                  <ArrowRight className="w-4 w-4 text-slate-400" />
                  
                  {/* Person 4 - Rear */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-300 font-bold text-lg border-2 border-blue-500">
                      👤
                    </div>
                    <div className="text-xs font-bold text-blue-700 dark:text-blue-300 mt-1">Person 4</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400">Arrived: 9:15</div>
                  </div>

                  <ArrowRight className="w-4 h-4 text-blue-500" />
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-2 rounded border border-blue-500">
                    REAR<br/>(Last)
                  </div>
                </div>
                
                {/* Time Flow */}
                <div className="flex justify-center items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="w-3 h-3" />
                  <span>Time flows → (Earlier arrivals get served first)</span>
                </div>
              </div>
            </div>

            {/* Queue Process Flow Diagram */}
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-4 text-center">Queue Process Flow</h5>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex flex-col items-center justify-center border-2 border-blue-400">
                    <ArrowDown className="w-6 h-6 text-blue-600" />
                    <span className="text-xs font-bold text-blue-700 dark:text-blue-300">ENQUEUE</span>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400 mt-2">New person joins</span>
                </div>
                
                <ArrowRight className="w-6 h-6 text-purple-500" />
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/40 rounded-lg flex flex-col items-center justify-center border-2 border-purple-400">
                    <Users className="w-6 h-6 text-purple-600" />
                    <span className="text-xs font-bold text-purple-700 dark:text-purple-300">WAIT</span>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400 mt-2">People wait in line</span>
                </div>
                
                <ArrowRight className="w-6 h-6 text-purple-500" />
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 rounded-lg flex flex-col items-center justify-center border-2 border-green-400">
                    <ArrowUp className="w-6 h-6 text-green-600" />
                    <span className="text-xs font-bold text-green-700 dark:text-green-300">DEQUEUE</span>
                  </div>
                  <span className="text-xs text-slate-600 dark:text-slate-400 mt-2">Front person served</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Queue Operations - Step by Step</h4>
            
            {/* Enqueue Operation Diagram */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-4">
                <ArrowDown className="w-5 h-5 text-green-600" />
                <h5 className="font-semibold text-green-900 dark:text-green-100">Enqueue Operation (Add to Rear)</h5>
              </div>
              
              <div className="space-y-4">
                {/* Step 1: Initial State */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300">Step 1: Initial Queue</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">A</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">B</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">C</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  </div>
                </div>
                
                {/* Step 2: Adding Element */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300">Step 2: Enqueue "D"</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">A</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">B</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">C</div>
                    <ArrowDown className="w-4 h-4 text-green-600" />
                    <div className="w-12 h-12 bg-green-200 dark:bg-green-800 rounded-lg flex items-center justify-center text-sm font-bold text-green-700 dark:text-green-300 border-2 border-green-500 animate-pulse">D</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  </div>
                </div>
                
                {/* Step 3: Final State */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-green-700 dark:text-green-300">Step 3: Final Queue</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">A</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">B</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">C</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">D</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dequeue Operation Diagram */}
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-700">
              <div className="flex items-center gap-2 mb-4">
                <ArrowUp className="w-5 h-5 text-red-600" />
                <h5 className="font-semibold text-red-900 dark:text-red-100">Dequeue Operation (Remove from Front)</h5>
              </div>
              
              <div className="space-y-4">
                {/* Step 1: Initial State */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-red-700 dark:text-red-300">Step 1: Initial Queue</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">A</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">B</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">C</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">D</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  </div>
                </div>
                
                {/* Step 2: Removing Element */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-red-700 dark:text-red-300">Step 2: Dequeue "A"</div>
                  <div className="flex items-center justify-center gap-2">
                    <ArrowUp className="w-4 h-4 text-red-600" />
                    <div className="w-12 h-12 bg-red-200 dark:bg-red-800 rounded-lg flex items-center justify-center text-sm font-bold text-red-700 dark:text-red-300 border-2 border-red-500 line-through">A</div>
                    <div className="text-xs text-red-600 dark:text-red-400">Removed!</div>
                    <ArrowRight className="w-4 h-4 text-red-600" />
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">B</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">C</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">D</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  </div>
                </div>
                
                {/* Step 3: Final State */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-red-700 dark:text-red-300">Step 3: Final Queue</div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">B</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">C</div>
                    <div className="w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-lg flex items-center justify-center text-sm font-bold border-2 border-purple-500">D</div>
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Queues vs Stacks
          </CardTitle>
          <CardDescription>Understanding the key differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                  <ArrowDown className="w-5 h-5" />
                  Queue (FIFO)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">First In, First Out</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Fair ordering</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Real-world analogies</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Limited access to middle</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                  <ArrowUp className="w-5 h-5" />
                  Stack (LIFO)
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Last In, First Out</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Simple operations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Memory efficient</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Reverse ordering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Common Applications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Computer Science</h4>
              </div>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• CPU Task Scheduling</li>
                <li>• Print Queue Management</li>
                <li>• Breadth-First Search</li>
                <li>• Graph Traversal</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Real World</h4>
              </div>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Call Center Systems</li>
                <li>• Restaurant Orders</li>
                <li>• Traffic Management</li>
                <li>• Message Queues</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Queue Implementation in JavaScript"
        language="javascript"
        code={`// Define a Queue class
class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }

  // Add element to rear
  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
  }

  // Remove element from front
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const element = this.items[this.front];
    this.front++;
    return element;
  }

  // View front element
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }

  // Check if queue is empty
  isEmpty() {
    return this.front > this.rear;
  }

  // Get queue size
  size() {
    return this.rear - this.front + 1;
  }
}

// Create and use a queue
const queue = new Queue();
queue.enqueue("A");  // Add A
queue.enqueue("B");  // Add B
queue.enqueue("C");  // Add C

console.log(queue.dequeue()); // Output: "A" (first in, first out)
console.log(queue.peek());    // Output: "B"
console.log(queue.size());    // Output: 2`}
      />
    </div>
  );
}
