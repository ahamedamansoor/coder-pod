'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Calculator,
  Scale,
  GitCompare,
  ToggleLeft,
  Type,
  Sparkles,
  ClipboardCheck,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  XCircle,
  ShoppingCart,
  UserCheck,
} from 'lucide-react';

interface JavaScriptOperatorsProps {}

export default function JavaScriptOperators({}: JavaScriptOperatorsProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={Calculator}
        category="JavaScript Fundamentals"
        title="Operators"
        description="Perform calculations, compare values, combine conditions, and inspect types with JavaScript operators."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Operator Categories
          </CardTitle>
          <CardDescription className="text-base">
            Five core groups cover most everyday tasks: arithmetic, assignment, comparison, logical, and type-checking.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-5 gap-3">
          {[
            { label: 'Arithmetic', color: 'blue' },
            { label: 'Assignment', color: 'amber' },
            { label: 'Comparison', color: 'emerald' },
            { label: 'Logical', color: 'purple' },
            { label: 'Type/Unary', color: 'indigo' },
          ].map(({ label, color }) => (
            <div
              key={label}
              className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-3 space-y-2"
            >
              <h3 className="font-semibold">{label}</h3>
              <Badge
                className={`bg-${color}-100/80 text-${color}-700 dark:bg-${color}-900/30 dark:text-${color}-300 border border-${color}-300/50 dark:border-${color}-700/40`}
              >
                Core set
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* What are Operators? */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-blue-950/10 dark:to-indigo-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Calculator className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What are Operators?
          </CardTitle>
          <CardDescription className="text-base">
            Operators are symbols that perform operations on values (operands) to produce new results
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border space-y-4">
            <p className="text-sm text-muted-foreground">
              Think of operators as <strong>action verbs</strong> in JavaScript. They tell the computer what to do with your data.
              Each operator takes one or more values (operands) and produces a result.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Basic Example</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Operator: +
// Operands: 5 and 3
const sum = 5 + 3;

console.log(sum);
// Output: 8`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">Comparison Example</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Operator: ===
// Operands: age and 18
const age = 20;
const isAdult = age >= 18;

console.log(isAdult);
// Output: true`}
                </pre>
              </div>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Key Concept</AlertTitle>
              <AlertDescription>
                Operators always <strong>evaluate to a value</strong>. Mathematical operators return numbers, comparison operators return booleans.
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Arithmetic & Assignment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Calculator className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Arithmetic & Assignment
          </CardTitle>
          <CardDescription className="text-base">
            Modify numbers and variables with expressive operators.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
              Arithmetic
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>2 + 3 // addition</div>
              <div>10 - 4 // subtraction</div>
              <div>6 * 7 // multiplication</div>
              <div>9 / 3 // division</div>
              <div>10 % 3 // remainder</div>
              <div>2 ** 3 // exponent</div>
            </div>
          </div>
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Scale className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
              Assignment
            </h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>let total = 10;</div>
              <div>total += 5; <span className="text-slate-500">// 15</span></div>
              <div>total -= 3; <span className="text-slate-500">// 12</span></div>
              <div>total *= 2; <span className="text-slate-500">// 24</span></div>
              <div>total /= 4; <span className="text-slate-500">// 6</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitCompare className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Comparison Operators
          </CardTitle>
          <CardDescription className="text-base">
            Check equality or ordering. Prefer strict equality to avoid type coercion surprises.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Strict Equality (===)
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>'5' === 5 <span className="text-rose-500">// false</span></div>
              <div>5 === 5 <span className="text-emerald-500">// true</span></div>
              <div>null === undefined <span className="text-rose-500">// false</span></div>
            </div>
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Tip</AlertTitle>
              <AlertDescription>Use === over == to avoid implicit conversions.</AlertDescription>
            </Alert>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <GitCompare className="w-5 h-5" />
              Relational
            </h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>10 {'>'} 3 <span className="text-emerald-500">// true</span></div>
              <div>2 {'<='} 2 <span className="text-emerald-500">// true</span></div>
              <div>'b' {'>'} 'a' <span className="text-emerald-500">// true (lexicographic)</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logical */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ToggleLeft className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Logical Operators
          </CardTitle>
          <CardDescription className="text-base">
            Combine conditions and use short-circuiting to simplify defaults.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30 space-y-3">
            <h4 className="font-semibold">Boolean logic</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>true && false <span className="text-rose-500">// false</span></div>
              <div>true || false <span className="text-emerald-500">// true</span></div>
              <div>!true <span className="text-rose-500">// false</span></div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Short-circuit defaults</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>const name = input || 'Guest';</div>
              <div>const enabled = isAdmin && featureFlag;</div>
            </div>
            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Remember</AlertTitle>
              <AlertDescription>Logical operators return the last evaluated operand, not just true/false.</AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      {/* Type & unary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Type className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            typeof & Unary Helpers
          </CardTitle>
          <CardDescription className="text-base">
            Inspect types and flip booleans or signs with quick operators.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-blue-50/60 dark:from-indigo-950/10 dark:to-blue-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30 space-y-3">
            <h4 className="font-semibold">typeof quirks</h4>
            <div className="bg-white/80 dark:bg-slate-900/80 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>typeof 42 <span className="text-emerald-500">// "number"</span></div>
              <div>typeof 'hi' <span className="text-emerald-500">// "string"</span></div>
              <div>typeof null <span className="text-rose-500">// "object" (historical bug)</span></div>
              <div>typeof undefined <span className="text-emerald-500">// "undefined"</span></div>
            </div>
          </div>
          <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border space-y-3">
            <h4 className="font-semibold">Unary + and !</h4>
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 font-mono text-xs space-y-1 border">
              <div>+'5' <span className="text-emerald-500">// 5</span></div>
              <div>-7 <span className="text-rose-500">// -7</span></div>
              <div>!!'text' <span className="text-emerald-500">// true (truthy)</span></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Operator Precedence */}
      <Card className="bg-gradient-to-br from-orange-50/60 to-red-50/60 dark:from-orange-950/10 dark:to-red-950/10 border border-orange-200/50 dark:border-orange-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Scale className="w-6 h-6 text-orange-600/80 dark:text-orange-400/80" />
            Operator Precedence
          </CardTitle>
          <CardDescription className="text-base">
            Understanding which operators evaluate first to avoid unexpected results
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-5 bg-white/80 dark:bg-slate-900/80 rounded-xl border space-y-4">
            <p className="text-sm text-muted-foreground">
              When multiple operators appear in one expression, JavaScript follows a specific order (precedence) to evaluate them.
              Higher precedence operators execute before lower precedence ones.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Without Parentheses</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Multiplication happens first
const result1 = 5 + 3 * 2;

console.log(result1);
// Output: 11 (not 16)

// Division before subtraction  
const result2 = 10 - 8 / 2;

console.log(result2);
// Output: 6 (not 1)`}
                </pre>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2 text-emerald-700 dark:text-emerald-300">With Parentheses (Recommended)</h4>
                <pre className="bg-slate-50 dark:bg-slate-950 rounded-lg p-3 font-mono text-xs overflow-x-auto border">
{`// Force order with parentheses
const result1 = (5 + 3) * 2;

console.log(result1);
// Output: 16

// Clear intent
const result2 = (10 - 8) / 2;

console.log(result2);
// Output: 1`}
                </pre>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">Common Precedence Order (High to Low)</h4>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <div className="font-semibold text-xs text-blue-600 dark:text-blue-400 mb-2">HIGHEST</div>
                  <div className="font-mono text-xs space-y-1">
                    <div>( ) - Grouping</div>
                    <div>** - Exponent</div>
                    <div>*, /, % - Multiply/Divide</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <div className="font-semibold text-xs text-amber-600 dark:text-amber-400 mb-2">MEDIUM</div>
                  <div className="font-mono text-xs space-y-1">
                    <div>+, - - Add/Subtract</div>
                    <div>{'<, >, <=, >='} - Comparison</div>
                    <div>===, !== - Equality</div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-3 border">
                  <div className="font-semibold text-xs text-purple-600 dark:text-purple-400 mb-2">LOWEST</div>
                  <div className="font-mono text-xs space-y-1">
                    <div>&& - Logical AND</div>
                    <div>|| - Logical OR</div>
                    <div>=, +=, -= - Assignment</div>
                  </div>
                </div>
              </div>
            </div>

            <Alert>
              <Lightbulb className="h-4 w-4" />
              <AlertTitle>Pro Tip</AlertTitle>
              <AlertDescription>
                Always use <strong>parentheses</strong> to make your intent clear, even if precedence rules would work. Code readability beats cleverness!
              </AlertDescription>
            </Alert>
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
            Practical patterns you'll use every day in real applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 3xl:grid-cols-2 gap-6">
            {/* Pattern 1: Default Values with OR */}
            <CodeSnippet
              title="Default Values with OR (||)"
              description="Provide fallback values - the OR operator returns the first truthy value"
              code={`// Pattern: Provide fallback values
function greetUser(name) {
  const displayName = name || 'Guest';
  return 'Hello, ' + displayName;
}

console.log(greetUser('Alice'));
// Output: Hello, Alice

console.log(greetUser(''));
// Output: Hello, Guest

console.log(greetUser());
// Output: Hello, Guest`}
              language="javascript"
              colorTheme="blue"
              icon={CheckCircle2}
              features={[
                "|| returns first truthy value",
                "Empty string is falsy",
                "undefined is falsy",
                "Common for default parameters"
              ]}
              tips={[
                "Use ?? for null/undefined only",
                "Watch out for 0 and false",
                "Modern: use default parameters"
              ]}
            />

            {/* Pattern 2: Conditional Execution with AND */}
            <CodeSnippet
              title="Conditional Execution with AND (&&)"
              description="Execute only if condition is true - AND operator short-circuits"
              code={`// Pattern: Execute only if condition is true
const user = { 
  isAdmin: true, 
  name: 'Bob' 
};

// Only log if user is admin
user.isAdmin && console.log('Admin access granted');
// Output: Admin access granted

const normalUser = { isAdmin: false };
normalUser.isAdmin && console.log('Will not print');
// Output: (nothing - second part not executed)`}
              language="javascript"
              colorTheme="emerald"
              icon={UserCheck}
              features={[
                "&& short-circuits at first falsy",
                "Right side only runs if left is truthy",
                "Common for conditional execution",
                "React: condition && <Component />"
              ]}
              tips={[
                "Cleaner than if statements sometimes",
                "Watch return values",
                "Popular in JSX rendering"
              ]}
            />

            {/* Pattern 3: Calculate Discounts */}
            <CodeSnippet
              title="Calculate Discounts"
              description="Arithmetic operators combined for real business logic like pricing and discounts"
              code={`// Pattern: Apply percentage discounts
function applyDiscount(price, percent) {
  const discount = price * (percent / 100);
  const finalPrice = price - discount;
  return finalPrice;
}

const originalPrice = 100;
const discountRate = 20;

const salePrice = applyDiscount(
  originalPrice, 
  discountRate
);

console.log('Original: $' + originalPrice);
// Output: Original: $100

console.log('Discount: ' + discountRate + '%');
// Output: Discount: 20%

console.log('Final: $' + salePrice);
// Output: Final: $80`}
              language="javascript"
              colorTheme="purple"
              icon={ShoppingCart}
              features={[
                "Multiply for percentage calculation",
                "Subtract discount from original",
                "Common in e-commerce",
                "Real business logic example"
              ]}
              tips={[
                "Always validate discount range",
                "Consider rounding for currency",
                "Use toFixed() for display"
              ]}
            />

            {/* Pattern 4: Form Validation */}
            <CodeSnippet
              title="Form Validation"
              description="Combining comparison and logical operators to validate multiple conditions"
              code={`// Pattern: Validate user input
function validateForm(email, age) {
  const hasEmail = email && email.length > 0;
  const isAdult = age >= 18;
  const isValid = hasEmail && isAdult;
  
  return isValid;
}

console.log(validateForm('user@email.com', 25));
// Output: true

console.log(validateForm('', 25));
// Output: false

console.log(validateForm('user@email.com', 16));
// Output: false`}
              language="javascript"
              colorTheme="amber"
              icon={CheckCircle2}
              features={[
                "Combines && and >= operators",
                "Multiple validation checks",
                "Returns boolean result",
                "Real form validation pattern"
              ]}
              tips={[
                "Check each condition separately",
                "Combine with && for all checks",
                "Essential for user input"
              ]}
            />
          </div>
        </CardContent>
      </Card>

      {/* Best practices */}
      <Card className="bg-gradient-to-br from-green-50/60 to-emerald-50/60 dark:from-green-950/10 dark:to-emerald-950/10 border border-green-200/50 dark:border-green-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ClipboardCheck className="w-6 h-6 text-green-600/80 dark:text-green-400/80" />
            Operator Tips
          </CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
              <CheckCircle2 className="w-5 h-5" />
              Do This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✅ Prefer strict equality (===) for reliability.</li>
              <li>✅ Use parentheses to make complex logic readable.</li>
              <li>✅ Consider optional chaining <code className="font-mono">?.</code> before accessing deep properties.</li>
              <li>✅ Use logical OR for defaults and AND for guarded calls.</li>
            </ul>
          </div>
          <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
              <XCircle className="w-5 h-5" />
              Avoid This
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>❌ Relying on <code className="font-mono">==</code> for mixed types.</li>
              <li>❌ Forgetting that <code className="font-mono">typeof null</code> is "object".</li>
              <li>❌ Overusing negation chains (e.g., <code className="font-mono">!!!!!value</code>).</li>
              <li>❌ Leaving arithmetic on non-numbers without parsing first.</li>
            </ul>
          </div>
        </CardContent>
      </Card>

    </div>
  );
}
