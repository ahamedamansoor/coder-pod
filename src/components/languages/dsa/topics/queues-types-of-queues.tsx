'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, ArrowRight, ArrowLeft, Zap, Target, Clock, CheckCircle, XCircle, AlertCircle, TrendingUp
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function QueuesTypesOfQueues() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Users} 
        category="DSA · Queues · Introduction" 
        title="Types of Queues" 
        description="Understanding different queue variations and their unique characteristics"
        colorTheme="purple"
        badges={[
          { label: 'Variations', variant: 'default' },
          { label: 'Structures', variant: 'success' },
          { label: 'Applications', variant: 'info' }
        ]}
      />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Types of Queues - Visual Diagrams</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Simple Queue */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Simple Queue</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Basic FIFO queue with insert at rear and delete from front operations.
              </p>
              
              {/* Simple Queue Diagram */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-purple-700 dark:text-purple-300">Structure:</div>
                <div className="flex items-center justify-center gap-1">
                  <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                  <ArrowRight className="w-3 h-3 text-purple-500" />
                  <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold border border-purple-500">A</div>
                  <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold border border-purple-500">B</div>
                  <div className="w-8 h-8 bg-purple-200 dark:bg-purple-800 rounded flex items-center justify-center text-xs font-bold border border-purple-500">C</div>
                  <ArrowRight className="w-3 h-3 text-purple-500" />
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                </div>
                
                <div className="text-xs font-semibold text-purple-700 dark:text-purple-300">Operations:</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-green-500" />
                    <span>Enqueue: Add to Rear</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="w-3 h-3 text-red-500" />
                    <span>Dequeue: Remove from Front</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Queue */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Circular Queue</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Last position connects back to first, forming a circle. Better memory utilization.
              </p>
              
              {/* Circular Queue Diagram */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-blue-700 dark:text-blue-300">Structure:</div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Circle representation */}
                    <div className="w-20 h-20 border-2 border-blue-500 rounded-full flex items-center justify-center">
                      <div className="text-xs font-bold text-blue-700 dark:text-blue-300">Circular</div>
                    </div>
                    {/* Elements around circle */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold border border-blue-500">A</div>
                    <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold border border-blue-500">B</div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center text-xs font-bold border border-blue-500">C</div>
                  </div>
                </div>
                
                <div className="text-xs font-semibold text-blue-700 dark:text-blue-300">Operations:</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>Front & Rear move in circle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Efficient memory usage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Deque */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Deque (Double-ended)</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                Can insert and delete from both front and rear ends.
              </p>
              
              {/* Deque Diagram */}
              <div className="space-y-3">
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Structure:</div>
                <div className="flex items-center justify-center gap-1">
                  <ArrowLeft className="w-3 h-3 text-emerald-500" />
                  <div className="text-xs font-bold text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/80 px-2 py-1 rounded border border-green-500">F</div>
                  <div className="w-8 h-8 bg-emerald-200 dark:bg-emerald-800 rounded flex items-center justify-center text-xs font-bold border border-emerald-500">A</div>
                  <div className="w-8 h-8 bg-emerald-200 dark:bg-emerald-800 rounded flex items-center justify-center text-xs font-bold border border-emerald-500">B</div>
                  <div className="w-8 h-8 bg-emerald-200 dark:bg-emerald-800 rounded flex items-center justify-center text-xs font-bold border border-emerald-500">C</div>
                  <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-2 py-1 rounded border border-blue-500">R</div>
                  <ArrowRight className="w-3 h-3 text-emerald-500" />
                </div>
                
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Operations:</div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-3 h-3 text-green-500" />
                    <span>Push/Pop Front & Rear</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span>Flexible operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Quick Comparison</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Type</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Insert</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Delete</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 px-3 font-medium text-purple-700 dark:text-purple-300">Simple</td>
                    <td className="py-2 px-3">Rear only</td>
                    <td className="py-2 px-3">Front only</td>
                    <td className="py-2 px-3">Basic FIFO</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 px-3 font-medium text-blue-700 dark:text-blue-300">Circular</td>
                    <td className="py-2 px-3">Rear (wraps)</td>
                    <td className="py-2 px-3">Front (wraps)</td>
                    <td className="py-2 px-3">Memory efficient</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-emerald-700 dark:text-emerald-300">Deque</td>
                    <td className="py-2 px-3">Both ends</td>
                    <td className="py-2 px-3">Both ends</td>
                    <td className="py-2 px-3">Flexible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Common Applications by Queue Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-purple-600" />
                <h5 className="font-semibold text-purple-900 dark:text-purple-100">Simple Queue</h5>
              </div>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Print Queue Management</li>
                <li>• Call Center Systems</li>
                <li>• Restaurant Orders</li>
                <li>• Basic Task Scheduling</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-blue-600" />
                <h5 className="font-semibold text-blue-900 dark:text-blue-100">Circular Queue</h5>
              </div>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• CPU Task Scheduling</li>
                <li>• Traffic Light Systems</li>
                <li>• Buffer Management</li>
                <li>• Streaming Data</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-emerald-600" />
                <h5 className="font-semibold text-emerald-900 dark:text-emerald-100">Deque</h5>
              </div>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1">
                <li>• Undo/Redo Operations</li>
                <li>• Browser History</li>
                <li>• Sliding Window Problems</li>
                <li>• Palindrome Checking</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-purple-600" />
            Time & Space Complexity Analysis
          </CardTitle>
          <CardDescription>Comprehensive complexity analysis for each queue type</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Simple Queue Complexity */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Simple Queue</h4>
              
              <div className="space-y-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">Time Complexity</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Enqueue:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dequeue:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peek:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IsEmpty:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">Space Complexity</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Worst Case:</span>
                      <span className="font-mono text-blue-600">O(n)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Case:</span>
                      <span className="font-mono text-blue-600">O(n)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Circular Queue Complexity */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Circular Queue</h4>
              
              <div className="space-y-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Time Complexity</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Enqueue:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dequeue:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peek:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IsEmpty:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Space Complexity</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Worst Case:</span>
                      <span className="font-mono text-blue-600">O(k)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Case:</span>
                      <span className="font-mono text-blue-600">O(k)</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">k = fixed capacity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deque Complexity */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-4">Deque</h4>
              
              <div className="space-y-4">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Time Complexity</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Add Front/Rear:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remove Front/Rear:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peek Front/Rear:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>IsEmpty:</span>
                      <span className="font-mono text-green-600">O(1)</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Space Complexity</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span>Worst Case:</span>
                      <span className="font-mono text-blue-600">O(n)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Average Case:</span>
                      <span className="font-mono text-blue-600">O(n)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Comparison */}
          <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-xl border-2 border-slate-200 dark:border-slate-700">
            <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Performance Comparison</h5>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Queue Type</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Memory Efficiency</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Operation Speed</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Flexibility</th>
                    <th className="text-left py-2 px-3 font-semibold text-slate-700 dark:text-slate-300">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 px-3 font-medium text-purple-700 dark:text-purple-300">Simple</td>
                    <td className="py-2 px-3">⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐</td>
                    <td className="py-2 px-3">Basic FIFO</td>
                  </tr>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <td className="py-2 px-3 font-medium text-blue-700 dark:text-blue-300">Circular</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐</td>
                    <td className="py-2 px-3">Fixed buffers</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium text-emerald-700 dark:text-emerald-300">Deque</td>
                    <td className="py-2 px-3">⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                    <td className="py-2 px-3">Flexible ops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Best Practices & When to Use
          </CardTitle>
          <CardDescription>Expert guidance on choosing and implementing the right queue type</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Simple Queue Best Practices */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-4">Simple Queue</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">When to Use:</div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Basic FIFO requirements</li>
                    <li>• Unknown queue size</li>
                    <li>• Simple task scheduling</li>
                    <li>• Print job management</li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">Best Practices:</div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Use linked list for unlimited size</li>
                    <li>• Implement size tracking</li>
                    <li>• Handle empty queue gracefully</li>
                    <li>• Consider memory limits</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Circular Queue Best Practices */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-4">Circular Queue</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">When to Use:</div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Fixed buffer requirements</li>
                    <li>• CPU task scheduling</li>
                    <li>• Streaming data buffers</li>
                    <li>• Resource pooling</li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">Best Practices:</div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Pre-allocate fixed array</li>
                    <li>• Use modulo arithmetic</li>
                    <li>• Handle full/empty edge cases</li>
                    <li>• Optimize for cache locality</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Deque Best Practices */}
            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-4">Deque</h4>
              
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">When to Use:</div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Sliding window problems</li>
                    <li>• Palindrome checking</li>
                    <li>• Undo/redo systems</li>
                    <li>• Browser history</li>
                  </ul>
                </div>
                
                <div>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Best Practices:</div>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                    <li>• Use doubly linked list</li>
                    <li>• Balance operations</li>
                    <li>• Consider memory overhead</li>
                    <li>• Implement iterator support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-purple-600" />
            Common Pitfalls & Optimization Tips
          </CardTitle>
          <CardDescription>Avoid these mistakes and optimize your queue implementations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Common Pitfalls */}
            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-700">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Common Pitfalls
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Memory Leaks</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Forgetting to deallocate dequeued elements in low-level languages
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Index Overflow</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Not handling circular buffer wrap-around correctly
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Race Conditions</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Concurrent access without proper synchronization
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">Poor Capacity Planning</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Choosing wrong queue type for the use case
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Optimization Tips */}
            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-700">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Optimization Tips
              </h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Cache-Friendly Design</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Use contiguous memory arrays for better cache performance
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Batch Operations</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Process multiple elements together when possible
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Memory Pooling</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Pre-allocate nodes to avoid frequent memory allocation
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div>
                      <div className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Lock-Free Algorithms</div>
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Use atomic operations for high-concurrency scenarios
                      </div>
                    </div>
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
            Advanced Topics & Real-World Applications
          </CardTitle>
          <CardDescription>Deep dive into advanced queue concepts and industry applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Advanced Topics */}
            <div className="p-5 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-xl border-2 border-indigo-200 dark:border-indigo-700">
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-4">Advanced Topics</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Priority Queues</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Elements processed based on priority rather than arrival order
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Blocking Queues</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Thread-safe queues with blocking operations for producer-consumer
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Concurrent Queues</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Lock-free queues for high-performance concurrent systems
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">Distributed Queues</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Message queues spanning multiple machines (RabbitMQ, Kafka)
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Applications */}
            <div className="p-5 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-teal-200 dark:border-teal-700">
              <h4 className="font-semibold text-teal-900 dark:text-teal-100 mb-4">Industry Applications</h4>
              
              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-300 mb-1">Web Servers</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Request queuing for load balancing and rate limiting
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-300 mb-1">Operating Systems</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Process scheduling, I/O buffers, interrupt handling
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-300 mb-1">Financial Systems</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Order processing, trade execution, risk management
                  </div>
                </div>
                
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border">
                  <div className="text-xs font-semibold text-teal-700 dark:text-teal-300 mb-1">Gaming & Multimedia</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Event processing, audio buffering, network packet handling
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Complete Queue Type Implementations"
        language="javascript"
        code={`// Simple Queue Implementation
class SimpleQueue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = -1;
  }

  enqueue(element) {
    this.rear++;
    this.items[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const element = this.items[this.front];
    this.front++;
    return element;
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[this.front];
  }

  isEmpty() {
    return this.front > this.rear;
  }

  size() {
    return this.rear - this.front + 1;
  }
}

// Circular Queue Implementation
class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = -1;
    this.size = size;
  }

  enqueue(element) {
    if (this.isFull()) return "Queue is full";
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.items[this.rear] = element;
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const element = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return element;
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === -1;
  }

  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }
}

// Deque Implementation (using doubly linked list)
class DequeNode {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  addFront(data) {
    const newNode = new DequeNode(data);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  addRear(data) {
    const newNode = new DequeNode(data);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      newNode.prev = this.rear;
      this.rear = newNode;
    }
    this.size++;
  }

  removeFront() {
    if (this.isEmpty()) return "Deque is empty";
    const data = this.front.data;
    this.front = this.front.next;
    if (this.front) {
      this.front.prev = null;
    } else {
      this.rear = null;
    }
    this.size--;
    return data;
  }

  removeRear() {
    if (this.isEmpty()) return "Deque is empty";
    const data = this.rear.data;
    this.rear = this.rear.prev;
    if (this.rear) {
      this.rear.next = null;
    } else {
      this.front = null;
    }
    this.size--;
    return data;
  }

  peekFront() {
    if (this.isEmpty()) return "Deque is empty";
    return this.front.data;
  }

  peekRear() {
    if (this.isEmpty()) return "Deque is empty";
    return this.rear.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}

// Priority Queue Implementation (using heap)
class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(element, priority) {
    const newNode = { element, priority };
    this.heap.push(newNode);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }
    return max.element;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority >= this.heap[index].priority) break;
      [this.heap[parentIndex], this.heap[index]] = 
      [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let swapIndex = index;

      if (leftChild < this.heap.length && 
          this.heap[leftChild].priority > this.heap[swapIndex].priority) {
        swapIndex = leftChild;
      }

      if (rightChild < this.heap.length && 
          this.heap[rightChild].priority > this.heap[swapIndex].priority) {
        swapIndex = rightChild;
      }

      if (swapIndex === index) break;
      [this.heap[index], this.heap[swapIndex]] = 
      [this.heap[swapIndex], this.heap[index]];
      index = swapIndex;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}`}
      />
    </div>
  );
}
