'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  GitCompare,
  ToggleLeft,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';

interface JavaScriptTernaryOperatorProps {}

export default function JavaScriptTernaryOperator({}: JavaScriptTernaryOperatorProps) {
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
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            {/* Pattern 1: Button States */}
            <CodeSnippet
              title="Button States & Labels"
              description="Dynamic button text - perfect for toggling between UI states"
              code={`// Pattern: Dynamic button text
function SubmitButton({ isLoading }) {
  const buttonText = isLoading 
    ? 'Saving...' 
    : 'Save Changes';
  
  return buttonText;
}

console.log(SubmitButton({ isLoading: false }));
// Output: Save Changes

console.log(SubmitButton({ isLoading: true }));
// Output: Saving...`}
              language="javascript"
              colorTheme="blue"
              icon={CheckCircle2}
              features={[
                "Condition ? true-value : false-value",
                "Perfect for dynamic UI text",
                "Common in button states",
                "Cleaner than if-else for simple cases"
              ]}
              tips={[
                "Use for simple conditions only",
                "Keep expressions short and readable",
                "Common in React/Vue components"
              ]}
            />

            {/* Pattern 2: Default Values */}
            <CodeSnippet
              title="Default Values & Fallbacks"
              description="Provide safe defaults - prevents undefined errors in your application"
              code={`// Pattern: Provide safe defaults
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
              language="javascript"
              colorTheme="emerald"
              icon={CheckCircle2}
              features={[
                "Check if value exists first",
                "Provide fallback for missing data",
                "Prevents undefined errors",
                "Chain with && for safety"
              ]}
              tips={[
                "Always provide sensible defaults",
                "Use optional chaining (?.) in modern JS",
                "Test with null/undefined values"
              ]}
            />
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

    </div>
  );
}
