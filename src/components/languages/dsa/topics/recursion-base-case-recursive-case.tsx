'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  StopCircle, PlayCircle, AlertTriangle, CheckCircle, Sparkles, XCircle, 
  Zap, Target, ArrowRight, Infinity, Shield, RefreshCw
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function RecursionBaseCaseRecursiveCase() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Shield} 
        category="DSA · Recursion" 
        title="Base case and recursive case" 
        description="Understanding the two essential components that make recursion work correctly"
        colorTheme="emerald"
        badges={[
          { label: 'Essential', variant: 'default' },
          { label: 'Control Flow', variant: 'success' },
          { label: 'Prevention', variant: 'destructive' }
        ]}
      />

      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            The Two Pillars of Recursion
          </CardTitle>
          <CardDescription>Every recursive function needs these two critical components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Why Both Cases Matter
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              A recursive function is like a loop that needs to know when to stop. Without proper 
              base cases and recursive cases, you'll either get infinite recursion or no recursion at all!
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-emerald-300 dark:border-emerald-600">
                <div className="text-sm font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                  <StopCircle className="w-4 h-4" />
                  Base Case
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">The condition that stops recursion</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-emerald-300 dark:border-emerald-600">
                <div className="text-sm font-semibold text-emerald-600 mb-2 flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  Recursive Case
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">The condition that continues recursion</p>
              </div>
            </div>
          </div>

          <Alert className="border-emerald-200 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30">
            <AlertTriangle className="h-5 w-5 text-emerald-600" />
            <AlertTitle>Critical Warning</AlertTitle>
            <AlertDescription>
              Forgetting a base case causes <strong>stack overflow</strong> - the function calls itself forever!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <StopCircle className="w-6 h-6 text-emerald-600" />
            Base Case: The Exit Door
          </CardTitle>
          <CardDescription>When and how recursion should stop</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">What is a Base Case?</h4>
            <div className="p-6 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-700">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The <strong>base case</strong> is the condition that tells the recursive function to stop calling itself. 
                It's the simplest version of the problem that can be solved directly.
              </p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-red-300 dark:border-red-600">
                <div className="text-sm font-semibold text-red-600 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Golden Rule
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Every recursive function MUST have at least one base case
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Common Base Case Patterns</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
                <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Numeric Problems</h5>
                <div className="space-y-2">
                  <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    n === 0
                  </div>
                  <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    {'n <= 1'}
                  </div>
                  <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    n === target
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <h5 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Data Structures</h5>
                <div className="space-y-2">
                  <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    node === null
                  </div>
                  <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    array.length === 0
                  </div>
                  <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                    {'start > end'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="w-6 h-6 text-emerald-600" />
            Recursive Case: The Continuation
          </CardTitle>
          <CardDescription>How recursion progresses toward the base case</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">What is a Recursive Case?</h4>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The <strong>recursive case</strong> is where the function calls itself with <strong>modified parameters</strong> 
                that bring it closer to the base case. Each recursive call should solve a smaller version of the problem.
              </p>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                <div className="text-sm font-semibold text-blue-600 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Key Principle
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Each recursive call must make progress toward the base case
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Progress Toward Base Case</h4>
            <div className="flex items-center justify-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="text-center">
                <div className="text-sm text-slate-600 dark:text-slate-400 mb-4">Recursive calls must move toward base case:</div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">factorial(5)</div>
                  <ArrowRight className="w-5 h-5 text-emerald-600" />
                  <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">factorial(4)</div>
                  <ArrowRight className="w-5 h-5 text-emerald-600" />
                  <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">factorial(3)</div>
                  <ArrowRight className="w-5 h-5 text-emerald-600" />
                  <div className="text-lg font-bold text-emerald-900 dark:text-emerald-100">...</div>
                  <ArrowRight className="w-5 h-5 text-emerald-600" />
                  <div className="text-lg font-bold text-red-600 dark:text-red-400">factorial(0)</div>
                </div>
                <div className="text-xs font-mono bg-white dark:bg-slate-900 p-2 rounded border">
                  n decreases by 1 each time → reaches base case (n === 0)
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <RefreshCw className="w-6 h-6 text-emerald-600" />
            Complete Example: Factorial
          </CardTitle>
          <CardDescription>See both cases working together</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">The Function</h4>
              <CodeSnippet
                title="Factorial Function"
                language="javascript"
                code={`function factorial(n) {
  console.log(\`Calling factorial(\${n})\`);
  
  // Base Case: Stop when n is 0 or 1
  if (n <= 1) {
    console.log(\`Base case reached: factorial(\${n}) = 1\`);
    return 1;
  }
  
  // Recursive Case: Call with n-1
  const result = n * factorial(n - 1);
  console.log(\`Returning factorial(\${n}) = \${result}\`);
  return result;
}

// Test the function
console.log("Calculating factorial(4):");
const result = factorial(4);
console.log(\`Final result: \${result}\`);`}
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100">Execution Flow</h4>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                <div className="space-y-2 text-sm">
                  <div className="font-mono">factorial(4)</div>
                  <div className="text-purple-600">└── 4 * factorial(3)</div>
                  <div className="text-purple-600">    └── 3 * factorial(2)</div>
                  <div className="text-purple-600">        └── 2 * factorial(1)</div>
                  <div className="text-red-600">            └── return 1 (base case)</div>
                  <div className="text-emerald-600">        └── return 2 * 1 = 2</div>
                  <div className="text-emerald-600">    └── return 3 * 2 = 6</div>
                  <div className="text-emerald-600">└── return 4 * 6 = 24</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <StopCircle className="w-4 h-4" />
                Base Case Analysis
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Condition: {'n <= 1'}</li>
                <li>• Returns: 1</li>
                <li>• Purpose: Stop recursion</li>
                <li>• Simplest problem: 0! = 1! = 1</li>
              </ul>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
                <PlayCircle className="w-4 h-4" />
                Recursive Case Analysis
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Condition: {'n > 1'}</li>
                <li>• Returns: n * factorial(n-1)</li>
                <li>• Progress: n decreases by 1</li>
                <li>• Moves toward base case</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle>Common Mistakes & Solutions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-700">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">Missing Base Case</h4>
              </div>
              <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border mb-2">
                {`function badRecursion(n) {
  return n + badRecursion(n); // No base case!
}`}
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">
                ❌ Stack Overflow Error
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Fixed Version</h4>
              </div>
              <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border mb-2">
                {`function goodRecursion(n) {
  if (n <= 0) return 0; // Base case
  return n + goodRecursion(n - 1);
}`}
              </div>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                ✅ Works Correctly
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-xl border-2 border-red-200 dark:border-red-700">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-900 dark:text-red-100">No Progress</h4>
              </div>
              <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border mb-2">
                {`function stuckRecursion(n) {
  if (n === 0) return 0;
  return stuckRecursion(n); // Same n!
}`}
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">
                ❌ Infinite Loop
              </p>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <h4 className="font-semibold text-emerald-900 dark:text-emerald-100">Making Progress</h4>
              </div>
              <div className="text-sm font-mono bg-white dark:bg-slate-900 p-2 rounded border mb-2">
                {`function progressRecursion(n) {
  if (n === 0) return 0;
  return progressRecursion(n - 1); // n-1!
}`}
              </div>
              <p className="text-sm text-emerald-700 dark:text-emerald-300">
                ✅ Reaches Base Case
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-emerald-200 dark:border-emerald-700 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
        <Sparkles className="h-5 w-5 text-emerald-600" />
        <AlertTitle>Next Steps</AlertTitle>
        <AlertDescription>
          Now that you understand base cases and recursive cases, let's explore:
          <ul className="mt-2 space-y-1 text-sm">
            <li>• How the call stack manages these recursive calls</li>
            <li>• Memory implications of recursive solutions</li>
            <li>• When to choose recursion over iteration</li>
            <li>• Practice with basic recursive problems</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
