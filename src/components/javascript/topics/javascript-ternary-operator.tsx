'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  GitCompare,
  ToggleLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
  Play,
} from 'lucide-react';

interface JavaScriptTernaryOperatorProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ternary Operator Demo</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 48px 32px;
      box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
      max-width: 600px;
    }
    h1 {
      color: #667eea;
      margin-bottom: 16px;
      font-size: 32px;
    }
    p {
      color: #64748b;
      font-size: 18px;
      margin-bottom: 8px;
    }
    .console-hint {
      background: #0f172a;
      color: #22d3ee;
      padding: 16px;
      border-radius: 12px;
      margin-top: 24px;
      font-family: 'Monaco', monospace;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>❓ Ternary Operator</h1>
    <p>Open the browser console to see the results!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
  <script src="./demo.js"></script>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log('=== Ternary Operator Demo ===\\n');

// 1. Basic Ternary
console.log('1️⃣ BASIC TERNARY:');
const age = 20;
const status = age >= 18 ? 'Adult' : 'Minor';

console.log('Age:', age);
console.log('Status:', status);
console.log('');

// 2. Inline Assignment
console.log('2️⃣ INLINE ASSIGNMENT:');
const score = 85;
const grade = score >= 90 ? 'A' : 
              score >= 80 ? 'B' : 
              score >= 70 ? 'C' : 'F';

console.log('Score:', score);
console.log('Grade:', grade);
console.log('');

// 3. Function Return
console.log('3️⃣ FUNCTION RETURN:');
function getDiscount(isMember) {
  return isMember ? '20% off' : 'No discount';
}

console.log('Member:', getDiscount(true));
console.log('Non-member:', getDiscount(false));
console.log('');

// 4. JSX/Template Usage
console.log('4️⃣ CONDITIONAL RENDERING:');
const isLoggedIn = true;
const username = 'Alice';
const message = isLoggedIn 
  ? 'Welcome back, ' + username 
  : 'Please log in';

console.log(message);
console.log('');

// 5. Avoiding Nested Ternaries
console.log('5️⃣ COMPARISON - NESTED VS IF-ELSE:');
const points = 150;

// ❌ Hard to read
const badLevel = points > 200 ? 'Gold' : points > 100 ? 'Silver' : 'Bronze';
console.log('Nested ternary:', badLevel);

// ✅ Better approach
let goodLevel;
if (points > 200) {
  goodLevel = 'Gold';
} else if (points > 100) {
  goodLevel = 'Silver';
} else {
  goodLevel = 'Bronze';
}
console.log('If-else:', goodLevel);

console.log('\\n✅ All ternary demos complete!');`;

export default function JavaScriptTernaryOperator({ onOpenWebPlayground }: JavaScriptTernaryOperatorProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ToggleLeft}
        category="JavaScript Fundamentals"
        title="Ternary Operator"
        description="Write concise conditionals with the ternary (? :) operator instead of verbose if/else."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Why Use Ternary?
          </CardTitle>
          <CardDescription className="text-base">
            Express small conditional assignments inline, keeping logic readable and compact.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <ToggleLeft className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Inline decisions
            </h3>
            <p className="text-sm text-muted-foreground">Assign based on a condition without extra lines.</p>
            <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">? :</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <GitCompare className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
              Clear branches
            </h3>
            <p className="text-sm text-muted-foreground">Great for simple either/or scenarios.</p>
            <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">simple</Badge>
          </div>
          <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Keep it readable
            </h3>
            <p className="text-sm text-muted-foreground">Avoid deep nesting—extract to variables or functions.</p>
            <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">one level</Badge>
          </div>
        </CardContent>
      </Card>

      {/* What is Ternary Operator? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitCompare className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is the Ternary Operator?
          </CardTitle>
          <CardDescription className="text-base">
            A shorthand for if-else statements that evaluates a condition and returns one of two values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border space-y-4">
            <p className="text-sm text-muted-foreground">
              The ternary operator is JavaScript's <strong>only operator that takes three operands</strong>. It's called "ternary" because it has three parts:
              the condition, the result if true, and the result if false. Think of it as a <strong>compact if-else statement</strong>.
            </p>
            
            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">The Structure</h4>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-4 font-mono text-sm border space-y-2">
                <div className="text-center">
                  <span className="text-emerald-600 dark:text-emerald-400">condition</span>
                  {' '}<span className="text-blue-600 dark:text-blue-400">?</span>{' '}
                  <span className="text-purple-600 dark:text-purple-400">valueIfTrue</span>
                  {' '}<span className="text-blue-600 dark:text-blue-400">:</span>{' '}
                  <span className="text-rose-600 dark:text-rose-400">valueIfFalse</span>
                </div>
                <div className="text-xs text-center text-muted-foreground space-y-1 pt-2 border-t">
                  <div>↑ Test this | ↑ If true | ↑ If false</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Simple Example</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Check if user has access
const isLoggedIn = true;
const message = isLoggedIn 
  ? 'Welcome back!' 
  : 'Please log in';

console.log(message);
// Output: Welcome back!`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">Same as If-Else</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Traditional if-else approach
let message;
if (isLoggedIn) {
  message = 'Welcome back!';
} else {
  message = 'Please log in';
}

console.log(message);
// Output: Welcome back!`}
                </pre>
              </div>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Key Benefit</AlertTitle>
              <AlertDescription>
                Ternary operators <strong>return a value</strong>, so you can assign the result directly to a variable or use it in an expression.
                This makes your code more concise when dealing with simple conditions.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Syntax */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Basic Syntax
          </CardTitle>
          <CardDescription className="text-base">
            `condition ? expressionIfTrue : expressionIfFalse`
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold">Example</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const age = 19;</div>
              <div>const label = age {'>='} 18 ? 'Adult' : 'Minor';</div>
            </div>
            <p className="text-sm text-muted-foreground">Readable for a single decision.</p>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">If/Else equivalent</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>let label;</div>
              <div>if (age {'>='} 18) {'{'} label = 'Adult'; {'}'}</div>
              <div>else {'{'} label = 'Minor'; {'}'}</div>
            </div>
            <p className="text-sm text-muted-foreground">Ternary saves lines when logic is short.</p>
          </div>
        </CardContent>
      </Card>

      {/* Nested ternary caution */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Avoid Nested Ternaries
          </CardTitle>
          <CardDescription className="text-base">
            Nesting more than one ternary quickly reduces readability. Extract to variables or functions instead.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Hard to read
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const role = 'editor';</div>
              <div>const access = role === 'admin'</div>
              <div className="pl-4">? 'all'</div>
              <div className="pl-4">: role === 'editor' ? 'partial' : 'view';</div>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Clear alternative
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const role = 'editor';</div>
              <div>let access = 'view';</div>
              <div>if (role === 'admin') access = 'all';</div>
              <div>else if (role === 'editor') access = 'partial';</div>
            </div>
            <p className="text-sm text-muted-foreground">Small functions beat nested ternaries for clarity.</p>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            Real-World Examples
          </CardTitle>
          <CardDescription className="text-base">
            Practical patterns where ternary operators shine
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Pattern 1: Button States */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Button States & Labels
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Dynamic button text
function SubmitButton({ isLoading }) {
  const buttonText = isLoading 
    ? 'Saving...' 
    : 'Save Changes';
  
  return buttonText;
}

console.log(SubmitButton({ isLoading: false }));
// Output: Save Changes

console.log(SubmitButton({ isLoading: true }));
// Output: Saving...

// Works great for UI states!`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Perfect for toggling between two states like loading/ready, enabled/disabled, or open/closed.
              </p>
            </div>

            {/* Pattern 2: Default Values */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Default Values & Fallbacks
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Provide safe defaults
function getUserRole(user) {
  return user && user.role 
    ? user.role 
    : 'guest';
}

const admin = { name: 'Alice', role: 'admin' };
const visitor = { name: 'Bob' };

console.log(getUserRole(admin));
// Output: admin

console.log(getUserRole(visitor));
// Output: guest`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Ensures your code always has a valid value, preventing undefined errors in your application.
              </p>
            </div>

            {/* Pattern 3: CSS Classes */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Conditional CSS Classes
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Toggle CSS classes
function getStatusClass(status) {
  return status === 'active' 
    ? 'badge-success' 
    : 'badge-danger';
}

console.log(getStatusClass('active'));
// Output: badge-success

console.log(getStatusClass('inactive'));
// Output: badge-danger

// Great for dynamic styling!`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Common in React, Vue, and other frameworks for conditional styling based on component state.
              </p>
            </div>

            {/* Pattern 4: Price Display */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                Price & Discount Display
              </h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto border">
{`// Pattern: Show discounted price
function formatPrice(price, hasDiscount) {
  const finalPrice = hasDiscount 
    ? price * 0.8 
    : price;
  
  return '$' + finalPrice.toFixed(2);
}

console.log(formatPrice(100, false));
// Output: $100.00

console.log(formatPrice(100, true));
// Output: $80.00`}
              </pre>
              <p className="text-sm text-muted-foreground mt-3">
                Clean way to handle conditional calculations like discounts, taxes, or shipping costs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Keep ternaries to a single decision.</li>
              <li>✅ Extract results into well-named variables.</li>
              <li>✅ Use parentheses if expressions are long.</li>
              <li>✅ Prefer strict comparisons inside ternaries.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Chaining multiple ternaries on one line.</li>
              <li>❌ Mixing side effects inside ternaries.</li>
              <li>❌ Repeating complex conditions—store them first.</li>
              <li>❌ Using ternaries when if/else is clearer.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Hands-on Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Play className="w-5 h-5" />
            Hands-on playground
          </CardTitle>
          <CardDescription className="text-sm">
            Launch the simulator closure built playground to experiment with ✨ ternary operators, conditional expressions, and nested logic.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {onOpenWebPlayground && (
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
            >
              Run in playground
            </Button>
          )}
          <p className="text-xs text-muted-foreground">
            The console output highlights ternary operator usage (basic syntax, nested ternaries, and when to use alternatives) with practical examples most developers encounter.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
