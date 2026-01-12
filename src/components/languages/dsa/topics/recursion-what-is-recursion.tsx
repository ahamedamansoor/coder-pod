'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  RefreshCw, ArrowRight, AlertCircle, CheckCircle, Sparkles, XCircle, 
  Zap, Target, TrendingUp, Box, Infinity
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionWhatIsRecursion() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={RefreshCw} 
        category="DSA · Recursion" 
        title="What is recursion?" 
        description="Understanding the fundamentals of recursion - a powerful problem-solving technique"
        colorTheme="purple"
        badges={[
          { label: 'Fundamental', variant: 'default' },
          { label: 'Problem Solving', variant: 'success' },
          { label: 'Self-Reference', variant: 'info' }
        ]}
      />

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-600" />
            Introduction to Recursion
          </CardTitle>
          <CardDescription>A powerful technique where a function calls itself</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is Recursion?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              <strong>Recursion</strong> is a programming technique where a function <strong>calls itself</strong> 
              to solve a problem by breaking it down into smaller, similar subproblems. Think of it as 
              a function that solves a piece of the problem, then calls itself to solve the rest.
            </p>
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-purple-300 dark:border-purple-600">
              <div className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                <Infinity className="w-4 h-4" />
                Key Idea
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                "To understand recursion, you must first understand recursion"
              </p>
            </div>
          </div>

          <Alert className="border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-950/30">
            <AlertCircle className="h-5 w-5 text-purple-600" />
            <AlertTitle>Real-World Analogy</AlertTitle>
            <AlertDescription>
              Imagine Russian nesting dolls - each doll contains a smaller doll, which contains an even 
              smaller doll, until you reach the smallest one. This is how recursion works!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-6 h-6 text-purple-600" />
            How Recursion Works
          </CardTitle>
          <CardDescription>The step-by-step process of recursive execution</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">The Recursive Process</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h5 className="font-semibold text-blue-900 dark:text-blue-100">Function Call</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">The function is called with initial parameters</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h5 className="font-semibold text-purple-900 dark:text-purple-100">Self-Reference</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Function calls itself with modified parameters</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-lg border-2 border-emerald-200 dark:border-emerald-700">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h5 className="font-semibold text-emerald-900 dark:text-emerald-100">Base Case Reached</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Function stops calling itself when condition is met</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-lg border-2 border-orange-200 dark:border-orange-700">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h5 className="font-semibold text-orange-900 dark:text-orange-100">Unwind & Return</h5>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Results bubble back up through the call stack</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-purple-600" />
            Simple Example: Countdown
          </CardTitle>
          <CardDescription>See recursion in action with a countdown function</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-4">Countdown Function</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Let's create a function that counts down from a number to 0:
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-sm text-slate-600 dark:text-slate-400 font-mono">countdown(3)</div>
              <ArrowRight className="w-5 h-5 text-purple-400" />
              <div className="flex flex-col gap-1">
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">3</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">2</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">1</div>
                <div className="text-lg font-bold text-purple-900 dark:text-purple-100">0</div>
              </div>
            </div>
          </div>

          <CodeSnippet
            title="Countdown Function in JavaScript"
            language="javascript"
            code={`function countdown(n) {
  // Base case: stop when n reaches 0
  if (n <= 0) {
    console.log("Done!");
    return;
  }
  
  // Current action
  console.log(n);
  
  // Recursive call: countdown with n-1
  countdown(n - 1);
}

// Call the function
countdown(3);

// Output:
// 3
// 2
// 1
// Done!`}
          />
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-purple-600" />
            Recursion vs Iteration
          </CardTitle>
          <CardDescription>Understanding when to use recursion</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5" />
                  Recursion
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Elegant for divide-and-conquer</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Natural for tree/graph problems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Cleaner code for complex problems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Uses more memory (call stack)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Iteration
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">More memory efficient</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Faster execution (no overhead)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Better for simple linear problems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Can be complex for nested structures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle>Common Recursive Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-purple-50 to-cyan-50 dark:from-purple-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Mathematical</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Factorial, Fibonacci, Power functions
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                f(n) = n × f(n-1)
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-3">
                <Box className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Data Structures</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Tree traversal, linked lists, graphs
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                process(node) + process(node.next)
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Divide & Conquer</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Binary search, merge sort, quicksort
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                solve(left) + solve(right)
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-900 dark:text-orange-100">Backtracking</h4>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                Permutations, combinations, puzzles
              </p>
              <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                try() → backtrack() → try()
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-purple-200 dark:border-purple-700 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30">
        <Sparkles className="h-5 w-5 text-purple-600" />
        <AlertTitle>Next Steps</AlertTitle>
        <AlertDescription>
          Now that you understand what recursion is, let's explore the essential components:
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Understanding base cases and recursive cases</li>
            <li>• How the call stack manages recursive calls</li>
            <li>• When to choose recursion over iteration</li>
            <li>• Practice with basic recursive problems</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
