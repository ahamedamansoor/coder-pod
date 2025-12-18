'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Link2, ArrowRight, AlertCircle, CheckCircle, Sparkles, XCircle, 
  Zap, Target, TrendingUp, Box
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsIntroduction() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Link2} 
        category="DSA · Linked Lists" 
        title="What is a Linked List?" 
        description="Understanding the fundamentals of linked lists - a dynamic linear data structure"
        colorTheme="blue"
        badges={[
          { label: 'Fundamental', variant: 'default' },
          { label: 'Dynamic Size', variant: 'success' },
          { label: 'Non-contiguous', variant: 'info' }
        ]}
      />

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            Introduction to Linked Lists
          </CardTitle>
          <CardDescription>A fundamental data structure for dynamic data storage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is a Linked List?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              A <strong>Linked List</strong> is a linear data structure where elements (called <strong>nodes</strong>) 
              are stored in non-contiguous memory locations. Each node contains:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                <div className="text-sm font-semibold text-blue-600 mb-2 flex items-center gap-2">
                  <Box className="w-4 h-4" />
                  Data
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">The actual value stored in the node</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                <div className="text-sm font-semibold text-blue-600 mb-2 flex items-center gap-2">
                  <Link2 className="w-4 h-4" />
                  Pointer/Reference
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Link to the next node in the sequence</p>
              </div>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-950/30">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              Unlike arrays where elements are stored in contiguous memory, linked list nodes can be scattered 
              throughout memory, connected by pointers.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-6 h-6 text-blue-600" />
            Visual Representation
          </CardTitle>
          <CardDescription>How a linked list looks in memory</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Node Structure</h4>
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-4">
                <div className="text-sm text-slate-600 dark:text-slate-400 font-mono">Node</div>
                <div className="flex border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-lg">
                  <div className="px-6 py-4 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500 dark:border-blue-400">
                    <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold mb-1">Data</div>
                    <div className="text-lg font-bold text-blue-900 dark:text-blue-100">10</div>
                  </div>
                  <div className="px-6 py-4 bg-indigo-100 dark:bg-indigo-900 flex items-center gap-2">
                    <div>
                      <div className="text-xs text-indigo-700 dark:text-indigo-300 font-semibold mb-1">Next</div>
                      <div className="text-sm font-mono text-indigo-900 dark:text-indigo-100">→</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Complete Linked List</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
              <div className="flex items-center justify-center gap-3 min-w-max">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border border-blue-500">
                  HEAD
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400" />
                
                <div className="flex border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-md">
                  <div className="px-5 py-3 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500 dark:border-blue-400">
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">10</div>
                  </div>
                  <div className="px-4 py-3 bg-indigo-100 dark:bg-indigo-900 flex items-center">
                    <ArrowRight className="w-5 h-5 text-indigo-900 dark:text-indigo-100" />
                  </div>
                </div>

                <div className="flex border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-md">
                  <div className="px-5 py-3 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500 dark:border-blue-400">
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">20</div>
                  </div>
                  <div className="px-4 py-3 bg-indigo-100 dark:bg-indigo-900 flex items-center">
                    <ArrowRight className="w-5 h-5 text-indigo-900 dark:text-indigo-100" />
                  </div>
                </div>

                <div className="flex border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-md">
                  <div className="px-5 py-3 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500 dark:border-blue-400">
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">30</div>
                  </div>
                  <div className="px-4 py-3 bg-indigo-100 dark:bg-indigo-900 flex items-center">
                    <ArrowRight className="w-5 h-5 text-indigo-900 dark:text-indigo-100" />
                  </div>
                </div>

                <div className="flex border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-md">
                  <div className="px-5 py-3 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500 dark:border-blue-400">
                    <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">40</div>
                  </div>
                  <div className="px-4 py-3 bg-red-100 dark:bg-red-900 flex items-center">
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded border">
                  null
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                <p>The last node's <code className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">next</code> pointer points to <code className="px-1.5 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">null</code></p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Arrays vs Linked Lists
          </CardTitle>
          <CardDescription>Understanding the key differences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                  <Box className="w-5 h-5" />
                  Array
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Random access in O(1)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Cache-friendly (contiguous)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Fixed size (static arrays)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Insertion/deletion O(n)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                  <Link2 className="w-5 h-5" />
                  Linked List
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Dynamic size</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Insert/delete at beginning O(1)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">No random access</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Extra memory for pointers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Types of Linked Lists</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Singly Linked List</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Each node points to the next node. Traversal only in forward direction.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                A → B → C → null
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <ArrowRight className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Doubly Linked List</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Each node has pointers to both next and previous nodes.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                null ← A ↔ B ↔ C → null
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Circular Linked List</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Last node points back to the first node, forming a circle.
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                A → B → C → (back to A)
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Node Structure in JavaScript"
        language="javascript"
        code={`// Define a Node class
class Node {
  constructor(data) {
    this.data = data;      // Store the value
    this.next = null;      // Pointer to next node (initially null)
  }
}

// Create nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Link nodes together
node1.next = node2;  // 10 -> 20
node2.next = node3;  // 20 -> 30
node3.next = null;   // 30 -> null

// head points to the first node
let head = node1;

// Traversing the linked list
let current = head;
while (current !== null) {
  console.log(current.data);  // Output: 10, 20, 30
  current = current.next;
}`}
      />

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle>Time Complexity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-blue-200 dark:border-blue-700">
                  <th className="text-left p-3 font-semibold text-slate-900 dark:text-slate-100">Operation</th>
                  <th className="text-center p-3 font-semibold text-slate-900 dark:text-slate-100">Array</th>
                  <th className="text-center p-3 font-semibold text-slate-900 dark:text-slate-100">Linked List</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Access by index</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Insert at beginning</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Insert at end</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)*</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Delete at beginning</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700 dark:text-slate-300">Search</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">* Dynamic arrays may require O(n) if resizing is needed</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            When to Use Linked Lists?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use Linked Lists When:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You need frequent insertions/deletions at the beginning</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>The size of data is unknown or changes frequently</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You don't need random access to elements</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Memory is fragmented</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-400 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Avoid Linked Lists When:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>You need fast random access by index</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Memory is limited (extra space for pointers)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Cache performance is critical</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Binary search is needed</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-blue-200 dark:border-blue-700 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
        <Sparkles className="h-5 w-5 text-blue-600" />
        <AlertTitle>Next Steps</AlertTitle>
        <AlertDescription>
          Now that you understand what linked lists are, let's learn how to perform operations on them:
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Insert nodes at different positions</li>
            <li>• Delete nodes from the list</li>
            <li>• Traverse and search in linked lists</li>
            <li>• Reverse a linked list</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
