'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Link2, ArrowRight, ArrowLeft, AlertCircle, RefreshCw, Sparkles, 
  ArrowRightLeft, CircleDot, Target, CheckCircle
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function LinkedListsTypes() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Link2} 
        category="DSA · Linked Lists" 
        title="Types of Linked Lists" 
        description="Explore singly, doubly, and circular linked lists with visual diagrams"
        colorTheme="purple"
        badges={[
          { label: 'Singly', variant: 'default' },
          { label: 'Doubly', variant: 'info' },
          { label: 'Circular', variant: 'success' }
        ]}
      />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Overview
          </CardTitle>
          <CardDescription>Three main types of linked lists, each with unique characteristics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Linked lists come in different variations, each optimized for specific use cases. The choice depends on 
              whether you need <strong>bidirectional traversal</strong>, <strong>circular access</strong>, or 
              <strong>minimal memory overhead</strong>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* SINGLY LINKED LIST */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRight className="w-6 h-6 text-blue-600" />
            1. Singly Linked List
          </CardTitle>
          <CardDescription>One-way traversal with next pointer only</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Characteristics
            </h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Each node has <strong>data</strong> and <strong>next</strong> pointer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Traversal only in <strong>forward direction</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Last node's next pointer is <strong>null</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Most <strong>memory efficient</strong> (one pointer per node)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Visual Structure</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
              <div className="flex items-center justify-center gap-2 min-w-max">
                <div className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/80 px-3 py-1.5 rounded border border-blue-500">
                  HEAD
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
                
                {[10, 20, 30].map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex border-2 border-blue-500 dark:border-blue-400 rounded-lg overflow-hidden shadow-md">
                      <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900 border-r-2 border-blue-500 dark:border-blue-400">
                        <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold">data</div>
                        <div className="text-lg font-bold text-blue-900 dark:text-blue-100">{val}</div>
                      </div>
                      <div className="px-3 py-2 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-indigo-900 dark:text-indigo-100" />
                      </div>
                    </div>
                    {idx < 2 && <div className="w-2" />}
                  </div>
                ))}
                
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded border">
                  null
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Advantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Simple implementation</li>
                <li>• Less memory (one pointer)</li>
                <li>• Easy insertion at beginning</li>
                <li>• Cache-friendly forward access</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Disadvantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Cannot traverse backward</li>
                <li>• Deleting requires previous node</li>
                <li>• No direct access to predecessor</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Singly Linked List - Node Structure"
        language="javascript"
        code={`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;  // Only one pointer
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  
  // Insert at beginning - O(1)
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  
  // Traverse forward only
  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;  // Move forward
    }
  }
}

// Usage
const list = new SinglyLinkedList();
list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.display();  // Output: 10, 20, 30`}
      />

      {/* DOUBLY LINKED LIST */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ArrowRightLeft className="w-6 h-6 text-purple-600" />
            2. Doubly Linked List
          </CardTitle>
          <CardDescription>Bidirectional traversal with next and previous pointers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Characteristics
            </h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Each node has <strong>data</strong>, <strong>next</strong>, and <strong>prev</strong> pointers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Can traverse in <strong>both directions</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>First node's prev is <strong>null</strong>, last node's next is <strong>null</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>More memory required (two pointers per node)</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Visual Structure</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
              <div className="flex items-center justify-center gap-2 min-w-max">
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1.5 rounded border">
                  null
                </div>
                <ArrowLeft className="w-4 h-4 text-slate-400" />
                
                {[10, 20, 30].map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="flex border-2 border-purple-500 dark:border-purple-400 rounded-lg overflow-hidden shadow-md">
                      <div className="px-3 py-2 bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                        <ArrowLeft className="w-4 h-4 text-pink-900 dark:text-pink-100" />
                      </div>
                      <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900 border-x-2 border-purple-500 dark:border-purple-400">
                        <div className="text-xs text-purple-700 dark:text-purple-300 font-semibold">data</div>
                        <div className="text-lg font-bold text-purple-900 dark:text-purple-100">{val}</div>
                      </div>
                      <div className="px-3 py-2 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-indigo-900 dark:text-indigo-100" />
                      </div>
                    </div>
                    {idx < 2 && (
                      <>
                        <ArrowLeft className="w-4 h-4 text-slate-400" />
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </>
                    )}
                  </div>
                ))}
                
                <ArrowRight className="w-4 h-4 text-slate-400" />
                <div className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1.5 rounded border">
                  null
                </div>
              </div>
              
              <div className="mt-4 text-center text-xs text-slate-600 dark:text-slate-400">
                <p>← prev | data | next →</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Advantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Traverse in both directions</li>
                <li>• Easy deletion (access to prev)</li>
                <li>• Insert before a node easily</li>
                <li>• Reverse traversal efficient</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Disadvantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• More memory (two pointers)</li>
                <li>• Complex insertion/deletion</li>
                <li>• More pointer updates needed</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Doubly Linked List - Node Structure"
        language="javascript"
        code={`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;  // Forward pointer
    this.prev = null;  // Backward pointer
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  
  // Insert at beginning - O(1)
  insertAtBeginning(data) {
    const newNode = new Node(data);
    
    if (this.head !== null) {
      newNode.next = this.head;
      this.head.prev = newNode;  // Update prev pointer
    }
    
    this.head = newNode;
  }
  
  // Traverse forward
  displayForward() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  
  // Traverse backward (from tail)
  displayBackward() {
    // Find tail first
    let current = this.head;
    while (current && current.next !== null) {
      current = current.next;
    }
    
    // Now traverse backward
    while (current !== null) {
      console.log(current.data);
      current = current.prev;  // Move backward
    }
  }
}

// Usage
const list = new DoublyLinkedList();
list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.displayForward();   // Output: 10, 20, 30
list.displayBackward();  // Output: 30, 20, 10`}
      />

      {/* CIRCULAR LINKED LIST */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-emerald-600" />
            3. Circular Linked List
          </CardTitle>
          <CardDescription>Last node points back to first, forming a circle</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Characteristics
            </h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Last node's next points <strong>back to head</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Can be <strong>singly</strong> or <strong>doubly</strong> circular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>No null pointers (forms a loop)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Can start from any node and reach all others</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Visual Structure</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/80 px-3 py-1.5 rounded border border-emerald-500">
                    HEAD
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  
                  {[10, 20, 30].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="flex border-2 border-emerald-500 dark:border-emerald-400 rounded-lg overflow-hidden shadow-md">
                        <div className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900 border-r-2 border-emerald-500 dark:border-emerald-400">
                          <div className="text-xs text-emerald-700 dark:text-emerald-300 font-semibold">data</div>
                          <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">{val}</div>
                        </div>
                        <div className="px-3 py-2 bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-teal-900 dark:text-teal-100" />
                        </div>
                      </div>
                      {idx < 2 && <div className="w-2" />}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <ArrowLeft className="w-6 h-6 text-emerald-600 dark:text-emerald-400 animate-pulse" />
                  <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 rounded-lg border-2 border-emerald-400 dark:border-emerald-600">
                    <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-100 flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Links back to HEAD
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Advantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Can reach any node from any node</li>
                <li>• No null checks needed</li>
                <li>• Useful for round-robin scheduling</li>
                <li>• Great for circular buffers</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Disadvantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Risk of infinite loops</li>
                <li>• Complex implementation</li>
                <li>• Need careful loop termination</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Circular Singly Linked List - Node Structure"
        language="javascript"
        code={`class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }
  
  // Insert at beginning - O(1) with tail pointer, O(n) without
  insertAtBeginning(data) {
    const newNode = new Node(data);
    
    if (this.head === null) {
      // First node - points to itself
      newNode.next = newNode;
      this.head = newNode;
    } else {
      // Find last node
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      
      // Insert new node
      newNode.next = this.head;
      current.next = newNode;  // Last node points to new node
      this.head = newNode;
    }
  }
  
  // Traverse (must check for head to avoid infinite loop)
  display() {
    if (this.head === null) return;
    
    let current = this.head;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);  // Stop when back at head
  }
}

// Usage
const list = new CircularLinkedList();
list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.display();  // Output: 10, 20, 30 (then stops)`}
      />

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle>Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                  <th className="text-left p-3 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                  <th className="text-center p-3 font-semibold text-blue-900 dark:text-blue-100">Singly</th>
                  <th className="text-center p-3 font-semibold text-purple-900 dark:text-purple-100">Doubly</th>
                  <th className="text-center p-3 font-semibold text-emerald-900 dark:text-emerald-100">Circular</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Pointers per node</td>
                  <td className="p-3 text-center text-blue-700 dark:text-blue-300">1 (next)</td>
                  <td className="p-3 text-center text-purple-700 dark:text-purple-300">2 (next, prev)</td>
                  <td className="p-3 text-center text-emerald-700 dark:text-emerald-300">1-2</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Backward traversal</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-yellow-600">~</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Memory efficient</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-yellow-600">~</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Delete node easily</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Reach all nodes</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700 dark:text-slate-300">Loop detection needed</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleDot className="w-6 h-6 text-slate-600" />
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Singly Linked List</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Stack implementation</li>
                <li>• Simple queues</li>
                <li>• Hash table chaining</li>
                <li>• Polynomial arithmetic</li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Doubly Linked List</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Browser history (back/forward)</li>
                <li>• LRU cache</li>
                <li>• Music player (prev/next)</li>
                <li>• Undo/Redo functionality</li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Circular Linked List</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Round-robin scheduling</li>
                <li>• Multiplayer games (turns)</li>
                <li>• Circular buffers</li>
                <li>• Playlist loop</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <Sparkles className="h-5 w-5 text-purple-600" />
        <AlertTitle>Choosing the Right Type</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• <strong>Singly:</strong> When memory is limited and only forward traversal needed</li>
            <li>• <strong>Doubly:</strong> When you need bidirectional access and easy deletion</li>
            <li>• <strong>Circular:</strong> When you need continuous looping or round-robin behavior</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
