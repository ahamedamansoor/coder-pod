'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, Wrench, BookOpen, Target, Database, Award } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function IdentifyingOptimalDataStructures() {
  const [selectedScenario, setSelectedScenario] = useState<'lookup' | 'order' | 'minmax' | 'freq'>('lookup');

  const scenarios = {
    lookup: {
      title: 'Fast Lookup by Key',
      requirement: 'Need to find values by unique keys instantly',
      winner: { name: 'Hash Map', icon: '🗂️', time: 'O(1)' },
      runnerUp: { name: 'BST', icon: '🌳', time: 'O(log n)' },
      reasoning: 'Hash Map gives O(1) average lookup. BST gives O(log n) with sorted order bonus.',
      realWorld: 'User database, cache, phone contacts, dictionary'
    },
    order: {
      title: 'Maintain Sorted Order',
      requirement: 'Keep data sorted and support range queries',
      winner: { name: 'BST', icon: '🌳', time: 'O(log n)' },
      runnerUp: { name: 'Array (sorted)', icon: '📊', time: 'O(n) insert' },
      reasoning: 'BST keeps elements sorted with O(log n) insert/delete. Array requires O(n) to maintain order.',
      realWorld: 'Leaderboards, sorted lists, range searches, auto-complete'
    },
    minmax: {
      title: 'Quick Min/Max Access',
      requirement: 'Always need the smallest or largest element',
      winner: { name: 'Heap', icon: '⛰️', time: 'O(1) peek' },
      runnerUp: { name: 'BST', icon: '🌳', time: 'O(log n)' },
      reasoning: 'Heap gives O(1) peek at min/max, O(log n) insert/delete. Perfect for priority!',
      realWorld: 'Priority queues, task scheduling, median finding, top K elements'
    },
    freq: {
      title: 'Count Frequencies',
      requirement: 'Count how often each element appears',
      winner: { name: 'Hash Map', icon: '🗂️', time: 'O(1)' },
      runnerUp: { name: 'Array', icon: '📊', time: 'O(1) if range small' },
      reasoning: 'Hash Map stores counts with O(1) increment. Array works for small integer ranges.',
      realWorld: 'Word frequency, vote counting, analytics, anagram detection'
    },
  };

  const currentScenario = scenarios[selectedScenario];

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Wrench}
        category="DSA · Algorithm Analysis"
        title="Identifying Optimal Data Structures"
        description="Choose the right tool for the job - master data structure selection"
        colorTheme="rose"
        badges={[
          { label: 'Decision Making', variant: 'default' },
          { label: 'Pattern Recognition', variant: 'secondary' },
          { label: '🎯 Optimization', variant: 'outline' },
        ]}
      />

      {/* Toolbox Analogy */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-6 h-6 text-rose-600" />
            Choosing the Right Data Structure
          </CardTitle>
          <CardDescription>
            Like choosing the right tool from a toolbox - each has its specialty!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-rose-200 dark:border-rose-700">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5" />
              Think of it Like Choosing Tools from a Toolbox! 🧰
            </h4>
            
            <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-2 border-rose-300 mb-4">
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                You need to <strong>hang a picture</strong> on the wall. Your toolbox has many tools. 
                Which one do you choose?
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">❌</div>
                    <div>
                      <h5 className="font-bold text-red-900 dark:text-red-100 mb-1">Wrong Choice: Wrench</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        A wrench works for bolts, not nails! You'll struggle and damage the wall.
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-300 font-semibold">
                        = Using <strong>Linked List</strong> when you need fast random access
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-rose-50 dark:bg-rose-900/30 rounded-lg border-l-4 border-rose-500">
                  <div className="flex items-start gap-3">
                    <div className="text-3xl">✅</div>
                    <div>
                      <h5 className="font-bold text-rose-900 dark:text-rose-100 mb-1">Right Choice: Hammer</h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                        Perfect for driving nails! Fast, efficient, designed for this exact job.
                      </p>
                      <p className="text-xs text-rose-700 dark:text-rose-300 font-semibold">
                        = Using <strong>Hash Map</strong> for fast key-value lookups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300">
                <div className="text-2xl mb-2">🔨</div>
                <h5 className="font-bold text-blue-900 dark:text-blue-100 mb-1">Hammer = Array</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Best for:</strong> Direct access by index, compact storage
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-green-300">
                <div className="text-2xl mb-2">🗂️</div>
                <h5 className="font-bold text-green-900 dark:text-green-100 mb-1">Filing Cabinet = Hash Map</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Best for:</strong> Find anything instantly by name/key
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-purple-300">
                <div className="text-2xl mb-2">📚</div>
                <h5 className="font-bold text-purple-900 dark:text-purple-100 mb-1">Stack of Plates = Stack</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Best for:</strong> Last in, first out (undo, backtracking)
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300">
                <div className="text-2xl mb-2">🎫</div>
                <h5 className="font-bold text-orange-900 dark:text-orange-100 mb-1">Ticket Line = Queue</h5>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  <strong>Best for:</strong> First in, first out (task processing)
                </p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 rounded-lg border-l-4 border-rose-500">
              <p className="text-sm font-bold text-rose-900 dark:text-rose-100 mb-2">
                🎯 The Golden Rule
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <strong>Match the data structure to your operations!</strong> Ask: "What do I need to do most often?" 
                Fast lookup? Use Hash Map. Keep sorted? Use BST. Always need minimum? Use Heap.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Scenario Selector */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-rose-600" />
            Pick Your Scenario: What's the Best Choice?
          </CardTitle>
          <CardDescription>See which data structure wins for different requirements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setSelectedScenario('lookup')}
                variant={selectedScenario === 'lookup' ? 'default' : 'outline'}
                className={selectedScenario === 'lookup' ? 'bg-rose-600 hover:bg-rose-700' : 'border-rose-300'}
              >
                Fast Lookup
              </Button>
              <Button
                onClick={() => setSelectedScenario('order')}
                variant={selectedScenario === 'order' ? 'default' : 'outline'}
                className={selectedScenario === 'order' ? 'bg-pink-600 hover:bg-pink-700' : 'border-pink-300'}
              >
                Sorted Order
              </Button>
              <Button
                onClick={() => setSelectedScenario('minmax')}
                variant={selectedScenario === 'minmax' ? 'default' : 'outline'}
                className={selectedScenario === 'minmax' ? 'bg-purple-600 hover:bg-purple-700' : 'border-purple-300'}
              >
                Min/Max Access
              </Button>
              <Button
                onClick={() => setSelectedScenario('freq')}
                variant={selectedScenario === 'freq' ? 'default' : 'outline'}
                className={selectedScenario === 'freq' ? 'bg-orange-600 hover:bg-orange-700' : 'border-orange-300'}
              >
                Count Frequencies
              </Button>
            </div>

            <div className="p-6 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-xl border-2 border-rose-300">
              <h3 className="text-xl font-bold text-rose-900 dark:text-rose-100 mb-2 text-center">
                {currentScenario.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 text-center mb-6">
                <strong>Requirement:</strong> {currentScenario.requirement}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-5 bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/40 dark:to-amber-900/40 rounded-xl border-2 border-yellow-400 shadow-lg">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                    <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-100">🥇 Winner</h4>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{currentScenario.winner.icon}</div>
                    <div className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                      {currentScenario.winner.name}
                    </div>
                    <div className="px-3 py-1 bg-white dark:bg-slate-900 rounded-full inline-block">
                      <span className="font-mono font-bold text-yellow-700 dark:text-yellow-300">
                        {currentScenario.winner.time}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-slate-100 to-gray-100 dark:from-slate-900/40 dark:to-gray-900/40 rounded-xl border-2 border-slate-300 dark:border-slate-700">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-2xl">🥈</span>
                    <h4 className="text-lg font-bold text-slate-700 dark:text-slate-300">Runner Up</h4>
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{currentScenario.runnerUp.icon}</div>
                    <div className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                      {currentScenario.runnerUp.name}
                    </div>
                    <div className="px-3 py-1 bg-white dark:bg-slate-900 rounded-full inline-block">
                      <span className="font-mono font-bold text-slate-600 dark:text-slate-400">
                        {currentScenario.runnerUp.time}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-rose-500">
                  <h5 className="font-semibold text-rose-900 dark:text-rose-100 mb-2">💡 Why This Choice?</h5>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {currentScenario.reasoning}
                  </p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    <strong>Real-world examples:</strong> {currentScenario.realWorld}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-6 h-6 text-rose-600" />
            Data Structure Complexity Comparison
          </CardTitle>
          <CardDescription>Compare performance of common operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-rose-300 dark:border-rose-700">
                  <th className="p-3 text-left font-bold">Data Structure</th>
                  <th className="p-3 text-center font-bold">Access</th>
                  <th className="p-3 text-center font-bold">Search</th>
                  <th className="p-3 text-center font-bold">Insert</th>
                  <th className="p-3 text-center font-bold">Delete</th>
                  <th className="p-3 text-left font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-200 dark:divide-rose-800">
                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20">
                  <td className="p-3 font-semibold">📊 Array</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-xs">Index access, iteration</td>
                </tr>

                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20 bg-green-50 dark:bg-green-950/10">
                  <td className="p-3 font-semibold">🗂️ Hash Map</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)*</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)*</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)*</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)*</td>
                  <td className="p-3 text-xs"><strong>Key-value lookups!</strong></td>
                </tr>

                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20">
                  <td className="p-3 font-semibold">🔗 Linked List</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-xs">Frequent insert/delete</td>
                </tr>

                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20 bg-blue-50 dark:bg-blue-950/10">
                  <td className="p-3 font-semibold">🌳 BST</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-xs"><strong>Sorted data, ranges</strong></td>
                </tr>

                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20 bg-purple-50 dark:bg-purple-950/10">
                  <td className="p-3 font-semibold">⛰️ Heap</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-center font-mono text-blue-600">O(log n)</td>
                  <td className="p-3 text-xs"><strong>Priority, min/max</strong></td>
                </tr>

                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20">
                  <td className="p-3 font-semibold">📚 Stack</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-xs">LIFO, undo, DFS</td>
                </tr>

                <tr className="hover:bg-rose-50 dark:hover:bg-rose-950/20">
                  <td className="p-3 font-semibold">🎫 Queue</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-orange-600">O(n)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-center font-mono text-green-600">O(1)</td>
                  <td className="p-3 text-xs">FIFO, BFS, tasks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic">
            * Average case. Hash Map worst case can be O(n) with many collisions.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-300">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2">🏆 Speed Champions</h5>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <li>• <strong>Hash Map:</strong> O(1) everything</li>
                <li>• <strong>Array:</strong> O(1) access</li>
                <li>• <strong>Heap:</strong> O(1) min/max</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-300">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">📋 Ordered Data</h5>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <li>• <strong>BST:</strong> Sorted, O(log n)</li>
                <li>• <strong>Heap:</strong> Partial order</li>
                <li>• <strong>Array:</strong> Can be sorted</li>
              </ul>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-300">
              <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">🎯 Special Purpose</h5>
              <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <li>• <strong>Stack:</strong> LIFO operations</li>
                <li>• <strong>Queue:</strong> FIFO operations</li>
                <li>• <strong>Linked List:</strong> Insertions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Decision Framework */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-rose-600" />
            Quick Decision Framework
          </CardTitle>
          <CardDescription>Ask these questions to pick the right structure</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <div className="p-5 rounded-xl border-2 bg-rose-50 dark:bg-rose-950/20 border-rose-300">
              <h4 className="font-semibold text-rose-900 dark:text-rose-100 mb-3">❓ Question 1: Do you need fast lookup by key?</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-green-700 dark:text-green-300">Yes</strong> → Use <strong>Hash Map</strong> 
                    <span className="ml-2 text-xs text-slate-500">(user IDs, caching, counting)</span>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">No</strong> → Continue to next question
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-blue-50 dark:bg-blue-950/20 border-blue-300">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">❓ Question 2: Do you need data in sorted order?</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-green-700 dark:text-green-300">Yes</strong> → Use <strong>BST</strong> or <strong>Sorted Array</strong>
                    <span className="ml-2 text-xs text-slate-500">(leaderboards, ranges)</span>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">No</strong> → Continue to next question
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-purple-50 dark:bg-purple-950/20 border-purple-300">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">❓ Question 3: Do you always need min/max element?</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-green-700 dark:text-green-300">Yes</strong> → Use <strong>Heap</strong>
                    <span className="ml-2 text-xs text-slate-500">(priority queue, scheduling)</span>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">No</strong> → Continue to next question
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-orange-50 dark:bg-orange-950/20 border-orange-300">
              <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-3">❓ Question 4: Do you need LIFO or FIFO behavior?</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">📚</span>
                  <div>
                    <strong className="text-orange-700 dark:text-orange-300">LIFO (Last In, First Out)</strong> → Use <strong>Stack</strong>
                    <span className="ml-2 text-xs text-slate-500">(undo, recursion, DFS)</span>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">🎫</span>
                  <div>
                    <strong className="text-orange-700 dark:text-orange-300">FIFO (First In, First Out)</strong> → Use <strong>Queue</strong>
                    <span className="ml-2 text-xs text-slate-500">(task queue, BFS)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-green-50 dark:bg-green-950/20 border-green-300">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-3">❓ Question 5: Do you need fast access by index?</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong className="text-green-700 dark:text-green-300">Yes</strong> → Use <strong>Array</strong>
                    <span className="ml-2 text-xs text-slate-500">(known size, random access)</span>
                  </div>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <strong className="text-slate-700 dark:text-slate-300">No, frequent insert/delete</strong> → Use <strong>Linked List</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="border-rose-200 dark:border-rose-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-rose-600" />
            Quick Reference Guide
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-5 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-xl border-2 border-rose-300">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-4 text-center">🎯 The Right Tool for Each Job</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <strong className="text-green-600">Fast key-value lookup?</strong> → Hash Map
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <strong className="text-blue-600">Need sorted order?</strong> → BST
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <strong className="text-purple-600">Always need min/max?</strong> → Heap
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <strong className="text-orange-600">Undo/backtrack (LIFO)?</strong> → Stack
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <strong className="text-pink-600">Process in order (FIFO)?</strong> → Queue
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded">
                <strong className="text-indigo-600">Fast index access?</strong> → Array
              </div>
            </div>
            <div className="mt-4 p-3 bg-rose-100 dark:bg-rose-900/30 rounded text-center">
              <p className="text-sm font-bold text-rose-800 dark:text-rose-200">
                💡 Remember: The best data structure makes your most common operation fast!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
