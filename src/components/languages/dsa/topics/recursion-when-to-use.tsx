'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, XCircle, AlertTriangle, Lightbulb, Target, Zap, 
  TreePine, Code, Brain, TrendingUp, Clock, Database, Shield,
  ArrowRight, ArrowDown, ArrowUp, Infinity, GitBranch
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionWhenToUse() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Target} 
        category="DSA · Recursion" 
        title="When to use recursion" 
        description="Identifying problems suitable for recursion and when to prefer iterative solutions"
        colorTheme="indigo"
        badges={[
          { label: 'Decision Making', variant: 'default' },
          { label: 'Problem Analysis', variant: 'success' },
          { label: 'Best Practices', variant: 'destructive' }
        ]}
      />

      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-indigo-600" />
            The Recursion Decision Framework
          </CardTitle>
          <CardDescription>Ask these questions before choosing recursion</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Use Recursion When:
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-3">
                    <TreePine className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-green-900 dark:text-green-100">Tree-like Structures</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Problems naturally structured as trees or hierarchies
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Tree traversal, directory structures, DOM manipulation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-3">
                    <GitBranch className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-green-900 dark:text-green-100">Divide & Conquer</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Problem can be broken into smaller similar subproblems
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Binary search, merge sort, quicksort, binary search trees
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-3">
                    <Brain className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-green-900 dark:text-green-100">Backtracking</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Need to explore all possibilities and backtrack on failure
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Sudoku, maze solving, N-Queens, permutation generation
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-3">
                    <Code className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-green-900 dark:text-green-100">Code Clarity</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Recursive solution is significantly more readable
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Mathematical definitions, nested data processing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                Avoid Recursion When:
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100">Memory Constraints</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Stack depth could cause overflow with large inputs
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Factorial of large numbers, deep tree traversals
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100">Performance Critical</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Function call overhead is unacceptable
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Real-time systems, high-frequency trading, embedded systems
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100">Linear Problems</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Simple iteration is more straightforward
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Array processing, simple loops, counting operations
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-red-900 dark:text-red-100">No Natural Subdivision</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        Problem doesn't naturally break into smaller similar problems
                      </p>
                      <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border mt-2">
                        Simple calculations, linear data processing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-indigo-600" />
            Practical Examples: Recursion vs Iteration
          </CardTitle>
          <CardDescription>Compare approaches for common problems</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl border-2 border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Perfect for Recursion</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Tree Traversal</h5>
                  <CodeSnippet
                    title="Inorder Traversal"
                    language="javascript"
                    code={`function inorderTraversal(node) {
  if (!node) return [];
  
  console.log(\`Visiting node \${node.value}\`);
  
  const result = [
    ...inorderTraversal(node.left),
    node.value,
    ...inorderTraversal(node.right)
  ];
  
  console.log(\`Completed subtree rooted at \${node.value}\`);
  return result;
}

// Usage: Clean, natural, matches tree structure
const tree = {
  value: 4,
  left: { value: 2, left: { value: 1 }, right: { value: 3 } },
  right: { value: 6, left: { value: 5 }, right: { value: 7 } }
};

console.log("Tree traversal:");
console.log(inorderTraversal(tree));`}
                  />
                </div>

                <div>
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Permutation Generation</h5>
                  <CodeSnippet
                    title="Generate All Permutations"
                    language="javascript"
                    code={`function permutations(arr, prefix = []) {
  if (arr.length === 0) {
    console.log(\`Generated permutation: [\${prefix.join(', ')}]\`);
    return [prefix];
  }
  
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
    results.push(...permutations(remaining, [...prefix, current]));
  }
  
  return results;
}

console.log("Generating permutations of [1, 2, 3]:");
console.log(permutations([1, 2, 3]));`}
                  />
                </div>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-700">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Better with Iteration</h4>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Array Sum</h5>
                  <CodeSnippet
                    title="Sum Array Elements"
                    language="javascript"
                    code={`// ❌ Bad: Unnecessary recursion
function sumRecursive(arr, index = 0) {
  console.log(\`Processing element \${index}: \${arr[index]}\`);
  if (index >= arr.length) return 0;
  return arr[index] + sumRecursive(arr, index + 1);
}

// ✅ Good: Simple and efficient
function sumIterative(arr) {
  console.log("Starting array sum");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(\`Added \${arr[i]}, total: \${sum}\`);
  }
  console.log(\`Final sum: \${sum}\`);
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Iterative approach:");
sumIterative(numbers);`}
                  />
                </div>

                <div>
                  <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">Factorial (Large Input)</h5>
                  <CodeSnippet
                    title="Large Factorial Calculation"
                    language="javascript"
                    code={`// ❌ Risky: Stack overflow with large numbers
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// ✅ Safe: Works with any input size
function factorialIterative(n) {
  console.log(\`Calculating factorial(\${n})\`);
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
    if (i % 1000 === 0) {
      console.log(\`Progress: \${i}/\${n}\`);
    }
  }
  console.log(\`Result: \${result}\`);
  return result;
}

// Safe for large inputs
factorialIterative(10000);`}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-indigo-600" />
            Decision Checklist
          </CardTitle>
          <CardDescription>Use this checklist to make the right choice</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Problem Structure
              </h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Has hierarchical structure</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Can be divided into subproblems</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Subproblems are similar to original</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Natural base case exists</span>
                </label>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Performance Needs
              </h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Input size is moderate</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Memory is not constrained</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Readability is prioritized</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Development speed matters</span>
                </label>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-lg border-2 border-amber-200 dark:border-amber-700">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Risk Assessment
              </h4>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Stack depth is predictable</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>No circular dependencies</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Base case is reachable</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span>Memory usage is acceptable</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-lg border-2 border-indigo-200 dark:border-indigo-700">
            <h4 className="font-semibold text-indigo-900 dark:text-indigo-100 mb-3">Quick Decision Guide:</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">🟢 Choose Recursion if:</h5>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• Problem naturally fits recursive thinking</li>
                  <li>• Code clarity is more important than performance</li>
                  <li>• Input size is guaranteed to be small</li>
                  <li>• Tree/hierarchical structure is involved</li>
                  <li>• Need to explore all possibilities (backtracking)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">🔴 Choose Iteration if:</h5>
                <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                  <li>• Performance is critical</li>
                  <li>• Memory usage must be minimal</li>
                  <li>• Input size can be very large</li>
                  <li>• Problem is linear/sequential</li>
                  <li>• Simple loop is more readable</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-indigo-200 dark:border-indigo-800">
        <CardHeader>
          <CardTitle>Real-World Scenarios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600 dark:text-green-400">✅ Recursion Wins</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-medium text-green-900 dark:text-green-100">File System Navigation</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Directory trees are naturally recursive - each directory contains subdirectories
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-medium text-green-900 dark:text-green-100">JSON Parsing</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Nested objects require recursive parsing to handle arbitrary depth
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-700">
                  <h5 className="font-medium text-green-900 dark:text-green-100">Game AI (Minimax)</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Game trees are explored recursively to find optimal moves
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-red-600 dark:text-red-400">❌ Iteration Wins</h4>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h5 className="font-medium text-red-900 dark:text-red-100">Data Processing Pipeline</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Processing millions of records requires minimal overhead
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h5 className="font-medium text-red-900 dark:text-red-100">Real-time Graphics</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    60fps rendering needs maximum performance, no stack overhead
                  </p>
                </div>
                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200 dark:border-red-700">
                  <h5 className="font-medium text-red-900 dark:text-red-100">Database Queries</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Large dataset processing requires predictable memory usage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-indigo-200 dark:border-indigo-700 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30">
        <Lightbulb className="h-5 w-5 text-indigo-600" />
        <AlertTitle>Pro Tip: Hybrid Approach</AlertTitle>
        <AlertDescription>
          Sometimes the best solution combines both approaches! Use recursion for complex logic 
          and iteration for performance-critical sections. Example: QuickSort uses recursion 
          for partitioning logic but can use iteration for small subarrays to avoid recursion overhead.
        </AlertDescription>
      </Alert>
    </div>
  );
}
