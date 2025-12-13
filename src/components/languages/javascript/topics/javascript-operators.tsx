'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Calculator,
  Plus,
  Equal,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  GitCompare,
  Zap,
} from 'lucide-react';

export default function JavaScriptOperators() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Calculator}
        category="JavaScript Fundamentals"
        title="Operators"
        description="Perform calculations, compare values, and combine conditions"
        colorTheme="yellow"
      />

      {/* What are Operators */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Operators?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Operators are <strong className="text-yellow-700 dark:text-yellow-400">special symbols</strong> that tell JavaScript to perform actions with your data. Think of them as the verbs in your code - add, compare, combine!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <Calculator className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Simple Example</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              <code className="px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 rounded text-sm">5 + 3</code> - The <strong>+</strong> is an operator that adds two numbers together to get 8!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Types Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Four Main Types of Operators</CardTitle>
              <CardDescription>Different operators for different tasks</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="text-3xl mb-3">➕</div>
              <h4 className="font-bold text-lg">Arithmetic</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Math operations: +, -, *, /
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <div className="text-3xl mb-3">⚖️</div>
              <h4 className="font-bold text-lg">Comparison</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Compare: ===, &gt;, &lt;, &gt;=
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="text-3xl mb-3">🔗</div>
              <h4 className="font-bold text-lg">Logical</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Combine: &amp;&amp;, ||, !
              </p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800/30">
              <div className="text-3xl mb-3">📌</div>
              <h4 className="font-bold text-lg">Assignment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Assign: =, +=, -=
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Arithmetic Operators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Plus className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>1. Arithmetic Operators</CardTitle>
              <CardDescription>Mathematical operations on numbers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Basic Math</h4>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Addition (+)</h5>
                  <code className="text-sm">5 + 3 = 8</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Subtraction (-)</h5>
                  <code className="text-sm">10 - 4 = 6</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Multiplication (*)</h5>
                  <code className="text-sm">6 * 7 = 42</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Division (/)</h5>
                  <code className="text-sm">20 / 4 = 5</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Remainder (%)</h5>
                  <code className="text-sm">10 % 3 = 1</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Exponent (**)</h5>
                  <code className="text-sm">2 ** 3 = 8</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Arithmetic Operators in Action"
        description="Performing calculations with numbers"
        code={`// Basic operations
const sum = 10 + 5;         // 15
const difference = 10 - 5;  // 5
const product = 10 * 5;     // 50
const quotient = 10 / 5;    // 2

console.log(sum);        // 15
console.log(product);    // 50

// Remainder (modulo)
const remainder = 10 % 3;   // 1
console.log(remainder);     // 1

// Exponent (power)
const power = 2 ** 3;       // 2 * 2 * 2 = 8
console.log(power);         // 8

// Real-world: Calculate total price
const price = 19.99;
const quantity = 3;
const total = price * quantity;
console.log(total);         // 59.97`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Comparison Operators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <GitCompare className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>2. Comparison Operators</CardTitle>
              <CardDescription>Compare values and get true/false results</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Testing Relationships</h4>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Equal (===)</h5>
                  <code className="text-sm">5 === 5 → true</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Not Equal (!==)</h5>
                  <code className="text-sm">5 !== 3 → true</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Greater Than (&gt;)</h5>
                  <code className="text-sm">10 &gt; 5 → true</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Less Than (&lt;)</h5>
                  <code className="text-sm">3 &lt; 8 → true</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Greater or Equal (&gt;=)</h5>
                  <code className="text-sm">5 &gt;= 5 → true</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">Less or Equal (&lt;=)</h5>
                  <code className="text-sm">4 &lt;= 7 → true</code>
                </div>
              </div>
            </div>
          </div>

          <Alert className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/30">
            <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle>Important: Use === not ==</AlertTitle>
            <AlertDescription className="text-base">
              Always use <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">===</code> (strict equality) instead of <code className="px-2 py-0.5 bg-red-100 dark:bg-red-900/30 rounded text-xs">==</code>. It checks both value AND type!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Comparison Operators Examples"
        description="Comparing values returns boolean results"
        code={`// Equal (strict)
console.log(5 === 5);      // true
console.log(5 === '5');    // false (different types!)

// Not equal
console.log(5 !== 3);      // true
console.log(5 !== 5);      // false

// Greater/Less than
console.log(10 > 5);       // true
console.log(3 < 8);        // true
console.log(5 >= 5);       // true
console.log(4 <= 7);       // true

// Real-world: Check age
const age = 18;
const isAdult = age >= 18;
console.log(isAdult);      // true

// Check if logged in
const username = 'Alice';
const isLoggedIn = username !== '';
console.log(isLoggedIn);   // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Logical Operators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>3. Logical Operators</CardTitle>
              <CardDescription>Combine multiple conditions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">AND, OR, NOT</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">&amp;&amp;</span> AND - Both must be true
                </h5>
                <div className="space-y-2 text-sm">
                  <div><code>true &amp;&amp; true → true</code> ✅</div>
                  <div><code>true &amp;&amp; false → false</code> ❌</div>
                  <div><code>false &amp;&amp; false → false</code> ❌</div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">||</span> OR - At least one must be true
                </h5>
                <div className="space-y-2 text-sm">
                  <div><code>true || true → true</code> ✅</div>
                  <div><code>true || false → true</code> ✅</div>
                  <div><code>false || false → false</code> ❌</div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border">
                <h5 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-2xl">!</span> NOT - Flips true/false
                </h5>
                <div className="space-y-2 text-sm">
                  <div><code>!true → false</code></div>
                  <div><code>!false → true</code></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Logical Operators in Real Code"
        description="Combining conditions for decision making"
        code={`const age = 25;
const hasLicense = true;
const hasInsurance = true;

// AND (&&) - Both must be true
const canDrive = hasLicense && hasInsurance;
console.log(canDrive);  // true

// Check multiple conditions
const isAdult = age >= 18 && age < 65;
console.log(isAdult);   // true

// OR (||) - At least one must be true
const canEnter = age >= 18 || hasParent;
const isWeekend = day === 'Saturday' || day === 'Sunday';

// NOT (!) - Flip boolean
const isLoggedOut = !isLoggedIn;
const isClosed = !isOpen;

// Real-world: Access control
const username = 'Alice';
const password = 'secret123';
const isAdmin = false;

const canAccess = (username && password) || isAdmin;
console.log(canAccess);  // true`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Assignment Operators */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <Equal className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>4. Assignment Operators</CardTitle>
              <CardDescription>Assign and update values</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Shortcuts for Updating</h4>
            </div>
            <div className="p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">= (Assign)</h5>
                  <code className="text-sm">x = 5</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">+= (Add &amp; Assign)</h5>
                  <code className="text-sm">x += 3 → x = x + 3</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">-= (Subtract &amp; Assign)</h5>
                  <code className="text-sm">x -= 2 → x = x - 2</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">*= (Multiply &amp; Assign)</h5>
                  <code className="text-sm">x *= 4 → x = x * 4</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">++ (Increment)</h5>
                  <code className="text-sm">x++ → x = x + 1</code>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border">
                  <h5 className="font-semibold mb-2">-- (Decrement)</h5>
                  <code className="text-sm">x-- → x = x - 1</code>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Assignment Operators Examples"
        description="Shortcuts for updating variables"
        code={`let score = 0;

// Add to score
score += 10;     // score = score + 10
console.log(score);  // 10

score += 5;      // score = score + 5
console.log(score);  // 15

// Subtract from score
score -= 3;      // score = score - 3
console.log(score);  // 12

// Multiply
let points = 10;
points *= 2;     // points = points * 2
console.log(points); // 20

// Increment & Decrement
let count = 5;
count++;         // count = count + 1
console.log(count);  // 6

count--;         // count = count - 1
console.log(count);  // 5

// Real-world: Shopping cart
let cartTotal = 50;
cartTotal += 25;  // Add item
cartTotal += 15;  // Add another
cartTotal -= 10;  // Apply discount
console.log(cartTotal);  // 80`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* String Concatenation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/30">
              <Plus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <CardTitle>Bonus: + Operator with Strings</CardTitle>
              <CardDescription>Combine text together</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-indigo-200 dark:border-indigo-800/30 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 overflow-hidden">
            <div className="bg-indigo-600 dark:bg-indigo-700 px-4 py-3">
              <h4 className="text-white font-semibold">String Concatenation</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                The <code className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded text-xs">+</code> operator can also join strings together!
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-indigo-200 dark:border-indigo-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const firstName = 'John';
const lastName = 'Doe';

// Combine strings
const fullName = firstName + ' ' + lastName;
console.log(fullName);  // John Doe

// With numbers becomes a string
const result = '5' + 3;
console.log(result);    // '53' (string!)

// But other operators convert to number
console.log('10' - 5);  // 5 (number)
console.log('10' * 2);  // 20 (number)`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Operator Types</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <strong>Arithmetic</strong>: +, -, *, /, %, **</li>
                <li>• <strong>Comparison</strong>: ===, !==, &gt;, &lt;, &gt;=, &lt;=</li>
                <li>• <strong>Logical</strong>: &amp;&amp;, ||, !</li>
                <li>• <strong>Assignment</strong>: =, +=, -=, *=, ++, --</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Remember</h4>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Always use <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">===</code> not <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">==</code></li>
                <li>• <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">&amp;&amp;</code> means both must be true</li>
                <li>• <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">||</code> means at least one true</li>
                <li>• <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">!</code> flips true ↔ false</li>
                <li>• <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">+=</code> is shorthand for x = x +</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
