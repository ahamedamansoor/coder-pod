'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  GitBranch,
  Sparkles,
  Code2,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  UserCheck,
} from 'lucide-react';

export default function JavaScriptIfElse() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={GitBranch}
        category="JavaScript Fundamentals"
        title="If-Else Statements"
        description="Make decisions in your code - do different things based on conditions"
        colorTheme="yellow"
      />

      {/* What are If-Else Statements? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                If-Else: Making Decisions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                If-else statements let your code <strong className="text-purple-700 dark:text-purple-400">make choices</strong>. Like saying "IF it's raining, bring an umbrella. ELSE, wear sunglasses." Your program decides what to do based on conditions!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-purple-200 dark:border-purple-800/30">
            <GitBranch className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-lg">Like a Fork in the Road</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              You check a condition (question) and take different paths depending on the answer: true or false
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic If Statement */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Basic if Statement</CardTitle>
              <CardDescription>Do something only if a condition is true</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">How if Works</h4>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700 font-mono text-sm">
                    if (condition)
                  </div>
                  <ArrowRight className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700 font-mono text-sm">
                    {'{ code runs }'}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  If the condition is <strong>true</strong>, the code inside the curly braces runs. If <strong>false</strong>, it's skipped.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Simple if Statement Example"
        description="Run code only when a condition is true"
        code={`// Check if user is old enough
const age = 20;

if (age >= 18) {
  console.log('You can vote!');
}
// Output: You can vote!

// Check temperature
const temp = 30;

if (temp > 25) {
  console.log('It\\'s hot outside!');
}
// Output: It's hot outside!

// Check if logged in
const isLoggedIn = true;

if (isLoggedIn) {
  console.log('Welcome back!');
}
// Output: Welcome back!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* If-Else */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <GitBranch className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>if-else: Two Paths</CardTitle>
              <CardDescription>Do one thing if true, another thing if false</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">if-else Structure</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                  <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700 font-mono text-sm text-center">
                    if (condition)
                  </div>
                  <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400 rotate-0 sm:rotate-0" />
                  <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700 font-mono text-sm text-center">
                    {'{ if true }'}
                  </div>
                </div>
                <div className="text-center text-gray-500 text-2xl">↓</div>
                <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
                  <div className="px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-lg border-2 border-red-300 dark:border-red-700 font-mono text-sm text-center">
                    else
                  </div>
                  <ArrowRight className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg border-2 border-rose-300 dark:border-rose-700 font-mono text-sm text-center">
                    {'{ if false }'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="if-else Example"
        description="Take different actions based on a condition"
        code={`// Check access permission
const age = 16;

if (age >= 18) {
  console.log('Access granted');
} else {
  console.log('Access denied - too young');
}
// Output: Access denied - too young

// Check if item in stock
const inStock = false;

if (inStock) {
  console.log('Item available - proceed to checkout');
} else {
  console.log('Item out of stock - check back later');
}
// Output: Item out of stock - check back later

// Password strength
const password = 'abc';

if (password.length >= 8) {
  console.log('Strong password ✓');
} else {
  console.log('Password too short ✗');
}
// Output: Password too short ✗`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Else If */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <GitBranch className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>else if: Multiple Conditions</CardTitle>
              <CardDescription>Check multiple conditions in order</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-emerald-200 dark:border-emerald-800/30 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 overflow-hidden">
            <div className="bg-emerald-600 dark:bg-emerald-700 px-4 py-3">
              <h4 className="text-white font-semibold">else if Chain</h4>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">1</div>
                  <code className="text-sm font-mono">if (first condition)</code>
                  <span className="text-sm text-gray-500">← Check this first</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">2</div>
                  <code className="text-sm font-mono">else if (second condition)</code>
                  <span className="text-sm text-gray-500">← If first is false</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">3</div>
                  <code className="text-sm font-mono">else if (third condition)</code>
                  <span className="text-sm text-gray-500">← If both false</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">4</div>
                  <code className="text-sm font-mono">else</code>
                  <span className="text-sm text-gray-500">← If all false</span>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/30">
            <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle>Stops at First Match</AlertTitle>
            <AlertDescription className="text-base">
              JavaScript checks from top to bottom and stops as soon as one condition is true!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="else if Example: Grade Calculator"
        description="Multiple conditions checked in order"
        code={`// Calculate letter grade
const score = 85;
let grade;

if (score >= 90) {
  grade = 'A';
  console.log('Excellent!');
} else if (score >= 80) {
  grade = 'B';
  console.log('Great job!');
} else if (score >= 70) {
  grade = 'C';
  console.log('Good work!');
} else if (score >= 60) {
  grade = 'D';
  console.log('Needs improvement');
} else {
  grade = 'F';
  console.log('Please study more');
}

console.log('Your grade:', grade);
// Output: Great job!
// Output: Your grade: B`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Real-World Example: User Role Access"
        description="Different access levels based on user role"
        code={`// Check user permissions
const userRole = 'editor';

if (userRole === 'admin') {
  console.log('Full access granted');
  console.log('Can edit, delete, and manage users');
} else if (userRole === 'editor') {
  console.log('Editor access granted');
  console.log('Can create and edit content');
} else if (userRole === 'viewer') {
  console.log('Viewer access granted');
  console.log('Can only view content');
} else {
  console.log('Guest access');
  console.log('Limited features available');
}
// Output: Editor access granted
// Output: Can create and edit content

// Shipping cost calculator
const orderTotal = 75;
let shippingCost;

if (orderTotal >= 100) {
  shippingCost = 0;
  console.log('Free shipping!');
} else if (orderTotal >= 50) {
  shippingCost = 5;
  console.log('Standard shipping: $5');
} else {
  shippingCost = 10;
  console.log('Shipping: $10');
}

const finalTotal = orderTotal + shippingCost;
console.log('Total: $' + finalTotal);
// Output: Standard shipping: $5
// Output: Total: $80`}
        language="javascript"
        colorTheme="yellow"
        icon={UserCheck}
      />

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30">
              <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <CardTitle>Common Mistakes to Avoid</CardTitle>
              <CardDescription>Learn from these frequent errors</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-red-700 dark:text-red-300">Using = instead of ===</h4>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-300 dark:border-red-700 mb-2">
                <code className="text-sm font-mono text-red-600 dark:text-red-400">
                  if (age = 18) // ❌ Wrong! This assigns, not compares
                </code>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-300 dark:border-green-700">
                <code className="text-sm font-mono text-green-600 dark:text-green-400">
                  if (age === 18) // ✅ Correct! Use === to compare
                </code>
              </div>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-bold text-amber-700 dark:text-amber-300">Forgetting Curly Braces</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Always use {'{ }'} even for single lines - it prevents bugs and makes code clearer
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-300 dark:border-green-700">
                <pre className="text-sm font-mono text-green-600 dark:text-green-400">
{`if (condition) {
  doSomething();  // ✅ Safe!
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">if Makes Decisions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Run code only when a condition is true
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">↔️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">else = Otherwise</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Runs when the condition is false
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">else if = More Options</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Check multiple conditions in order
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use === Not =</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    === compares, = assigns values
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
