'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Zap,
  User,
  ShoppingBag,
} from 'lucide-react';

export default function JavaScriptTernaryOperator() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Fundamentals"
        title="Ternary Operator"
        description="Write shorter, cleaner if-else statements with the ternary operator"
        colorTheme="yellow"
      />

      {/* What is Ternary Operator? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                The Shortcut for Simple Decisions
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The ternary operator is a <strong className="text-purple-700 dark:text-purple-400">one-line shortcut</strong> for writing simple if-else statements. It's called "ternary" because it has three parts: a condition, a value if true, and a value if false.
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-purple-200 dark:border-purple-800/30">
            <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <AlertTitle className="text-lg">Think of it Like This</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Ask a yes/no question → Get answer A if yes → Get answer B if no
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* The Structure */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>The Structure: Question ? Yes : No</CardTitle>
              <CardDescription>Three simple parts make up the ternary operator</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Basic Format</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-6 border-2 border-purple-200 dark:border-purple-800/30">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg font-mono">
                  <div className="text-center">
                    <div className="px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                      <span className="font-bold text-green-700 dark:text-green-300">condition</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Check this</p>
                  </div>
                  
                  <span className="text-3xl text-purple-600 dark:text-purple-400 font-bold">?</span>
                  
                  <div className="text-center">
                    <div className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                      <span className="font-bold text-blue-700 dark:text-blue-300">valueIfTrue</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">If YES</p>
                  </div>
                  
                  <span className="text-3xl text-purple-600 dark:text-purple-400 font-bold">:</span>
                  
                  <div className="text-center">
                    <div className="px-4 py-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg border-2 border-rose-300 dark:border-rose-700">
                      <span className="font-bold text-rose-700 dark:text-rose-300">valueIfFalse</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">If NO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">❓</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">1. Condition</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The question you're asking (true or false?)
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-3">✅</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">2. If True</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The value returned when condition is true
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20 border-rose-200 dark:border-rose-800/30">
              <div className="text-3xl mb-3">❌</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">3. If False</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                The value returned when condition is false
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Simple Example */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Simple Example: Age Check</CardTitle>
              <CardDescription>See how ternary makes code shorter and cleaner</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Long Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <div className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <h4 className="font-semibold text-red-700 dark:text-red-300">The Long Way (If-Else)</h4>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
{`let age = 20;
let status;

if (age >= 18) {
  status = 'Adult';
} else {
  status = 'Minor';
}

console.log(status);
// Output: Adult`}</pre>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950/20 border-t-2 border-red-200 dark:border-red-800/30">
                <p className="text-sm text-red-700 dark:text-red-300">Takes 9 lines of code</p>
              </div>
            </div>

            {/* Short Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <h4 className="font-semibold text-green-700 dark:text-green-300">The Short Way (Ternary)</h4>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
{`let age = 20;

let status = age >= 18 ? 'Adult' : 'Minor';

console.log(status);
// Output: Adult`}</pre>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 border-t-2 border-green-200 dark:border-green-800/30">
                <p className="text-sm text-green-700 dark:text-green-300">Only 3 lines! Much cleaner ✨</p>
              </div>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Same Result, Less Code</AlertTitle>
            <AlertDescription className="text-base">
              Both do the exact same thing, but ternary is much shorter for simple yes/no decisions!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="More Ternary Examples"
        description="Practice with different scenarios"
        code={`// Check if number is even or odd
let number = 7;
let type = number % 2 === 0 ? 'Even' : 'Odd';
console.log(number + ' is ' + type);  // 7 is Odd

// Discount for members
let isMember = true;
let price = isMember ? 80 : 100;
console.log('Price: $' + price);  // Price: $80

// Greeting based on time
let hour = 14;
let greeting = hour < 12 ? 'Good Morning' : 'Good Afternoon';
console.log(greeting);  // Good Afternoon`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* When to Use */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>When to Use Ternary Operator</CardTitle>
              <CardDescription>Best for simple decisions, not complex logic</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Good Uses */}
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500 text-white">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">Good Uses ✅</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Simple yes/no decisions</strong><br/>
                    <code className="text-xs bg-white dark:bg-slate-900 px-2 py-0.5 rounded">age >= 18 ? 'Adult' : 'Minor'</code>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Assigning one of two values</strong><br/>
                    <code className="text-xs bg-white dark:bg-slate-900 px-2 py-0.5 rounded">let status = isOnline ? 'Active' : 'Offline'</code>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-0.5">•</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Quick inline checks</strong><br/>
                    <code className="text-xs bg-white dark:bg-slate-900 px-2 py-0.5 rounded">price > 100 ? 'Expensive' : 'Affordable'</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Bad Uses */}
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-red-500 text-white">
                  <XCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">Avoid For ❌</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Complex conditions</strong><br/>
                    <span className="text-xs text-red-600 dark:text-red-400">Multiple checks get messy fast</span>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Nested ternaries</strong><br/>
                    <span className="text-xs text-red-600 dark:text-red-400">Hard to read and understand</span>
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-0.5">•</span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Multiple actions needed</strong><br/>
                    <span className="text-xs text-red-600 dark:text-red-400">Use regular if-else for that</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Nested Ternary Warning */}
      <Card className="border-2 border-amber-300 dark:border-amber-700">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <XCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Warning: Avoid Nested Ternaries!</CardTitle>
              <CardDescription>They make code very hard to read</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-800/30">
            <div className="flex items-center gap-2 mb-4">
              <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
              <h4 className="font-bold text-lg text-red-700 dark:text-red-300">Don't Do This - Confusing!</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-red-300 dark:border-red-700">
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-200">
{`// Too confusing! Which value goes where?
let grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'F';`}</pre>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800/30">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h4 className="font-bold text-lg text-green-700 dark:text-green-300">Do This Instead - Clear!</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-300 dark:border-green-700">
              <pre className="font-mono text-sm text-slate-800 dark:text-slate-200">
{`// Much easier to read and understand
let grade;
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else grade = 'F';`}</pre>
            </div>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>Remember</AlertTitle>
            <AlertDescription className="text-base">
              If you need more than 2 options or your condition is getting long, use regular if-else statements instead!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Real-World Examples</CardTitle>
              <CardDescription>How ternary operators are used in actual applications</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <CodeSnippet
              title="User Status Badge"
              description="Show different messages based on user login status"
              code={`// Display user status
function getUserStatus(isLoggedIn, username) {
  const message = isLoggedIn 
    ? 'Welcome back, ' + username + '!' 
    : 'Please log in to continue';
  
  return message;
}

console.log(getUserStatus(true, 'Alice'));
// Output: Welcome back, Alice!

console.log(getUserStatus(false, ''));
// Output: Please log in to continue`}
              language="javascript"
              colorTheme="yellow"
              icon={User}
            />

            <CodeSnippet
              title="Shopping Cart Discount"
              description="Apply discounts for members automatically"
              code={`// Calculate price with membership discount
function calculatePrice(basePrice, isMember) {
  const discount = isMember ? 0.20 : 0;
  const finalPrice = basePrice - (basePrice * discount);
  
  return finalPrice;
}

console.log('Member price: $' + calculatePrice(100, true));
// Output: Member price: $80

console.log('Regular price: $' + calculatePrice(100, false));
// Output: Regular price: $100`}
              language="javascript"
              colorTheme="yellow"
              icon={ShoppingBag}
            />
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
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Shorter Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ternary operator turns 5+ lines into just 1 line
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❓</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Format: condition ? yes : no</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Question mark for true, colon for false
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Best for Simple Choices</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perfect for quick yes/no decisions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Avoid Nesting</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't put ternaries inside ternaries - use if-else
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
