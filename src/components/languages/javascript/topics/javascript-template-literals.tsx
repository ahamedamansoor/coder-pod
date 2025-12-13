'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  Quote,
  Mail,
} from 'lucide-react';

export default function JavaScriptTemplateLiterals() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Quote}
        category="JavaScript Fundamentals"
        title="Template Literals"
        description="Modern way to create strings with backticks - insert variables easily!"
        colorTheme="yellow"
      />

      {/* What are Template Literals? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/20 dark:from-emerald-950/10 dark:via-green-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Template Literals: Smart Strings
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Template literals use <strong className="text-emerald-700 dark:text-emerald-400">backticks `</strong> instead of quotes and let you <strong>insert variables directly</strong> into strings. No more messy string concatenation with + signs!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-emerald-200 dark:border-emerald-800/30">
            <Quote className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-lg">Backtick Key</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              The backtick key ` is usually in the top-left corner of your keyboard, above Tab and next to the number 1
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Old vs New Way */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Old Way vs New Way</CardTitle>
              <CardDescription>See how much cleaner template literals are!</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Old Way */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Old Way (Quotes + Concatenation)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap break-words">
{`const name = 'Alice';
const age = 25;

// Messy with + signs
const message = 'Hello, my name is ' + name + ' and I am ' + age + ' years old.';

console.log(message);`}</pre>
              </div>
            </div>

            {/* New Way */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ New Way (Template Literals)</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap break-words">
{`const name = 'Alice';
const age = 25;

// Clean and readable!
const message = \`Hello, my name is \${name} and I am \${age} years old.\`;

console.log(message);`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>How to Use Template Literals</CardTitle>
              <CardDescription>Two simple steps</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Simple Steps</h4>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Use Backticks ` instead of Quotes</h5>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-green-200 dark:border-green-800/30">
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                        const message = `Hello World`;
                      </code>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Insert Variables with ${'{'}variable{'}'}</h5>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-purple-200 dark:border-purple-800/30">
                      <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                        const message = `Hello ${'{'}name{'}'}`;
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Template Literals Basics"
        description="Insert variables directly into strings"
        code={`const name = 'Bob';
const age = 30;
const city = 'Boston';

// Use backticks and \${} for variables
const intro = \`Hi, I'm \${name}. I'm \${age} years old and I live in \${city}.\`;

console.log(intro);
// Output: Hi, I'm Bob. I'm 30 years old and I live in Boston.

// Works with any variables
const product = 'Laptop';
const price = 999;

const description = \`The \${product} costs $\${price}.\`;
console.log(description);
// Output: The Laptop costs $999.`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Math in Template Literals */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Do Math Inside Template Literals</CardTitle>
              <CardDescription>You can calculate values right inside ${'{}'}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Expressions Inside ${'{}'}</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                You can do calculations, call functions, or use any JavaScript expression inside ${'{}'}
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`const price = 100;
const quantity = 3;

// Math inside template literal
const total = \`Total: $\${price * quantity}\`;
console.log(total);
// Output: Total: $300`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Expressions in Template Literals"
        description="Calculate values directly in your strings"
        code={`const price = 50;
const quantity = 4;
const tax = 0.08;

// Do math inside \${}
console.log(\`Subtotal: $\${price * quantity}\`);
// Output: Subtotal: $200

console.log(\`Tax: $\${price * quantity * tax}\`);
// Output: Tax: $16

console.log(\`Total: $\${price * quantity * (1 + tax)}\`);
// Output: Total: $216

// Even use functions
const name = 'alice';
console.log(\`Hello, \${name.toUpperCase()}!\`);
// Output: Hello, ALICE!`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Multiline Strings */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Multiline Strings</CardTitle>
              <CardDescription>Write strings across multiple lines easily</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border-2 bg-white dark:bg-slate-900 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold mb-3 text-red-700 dark:text-red-300">❌ Old Way - Messy</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border">
{`const message = 'Line 1\\n' +
  'Line 2\\n' +
  'Line 3';`}</pre>
              <p className="text-xs text-gray-500 mt-2">Need + and \\n for new lines</p>
            </div>

            <div className="p-5 rounded-xl border-2 bg-white dark:bg-slate-900 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">✅ New Way - Clean</h4>
              <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-slate-50 dark:bg-slate-950 rounded-lg p-4 border">
{`const message = \`Line 1
Line 2
Line 3\`;`}</pre>
              <p className="text-xs text-gray-500 mt-2">Just press Enter for new lines!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Multiline String Example"
        description="Create multiline strings without concatenation"
        code={`// Multiline string with template literals
const email = \`Dear Customer,

Thank you for your order!

Your order will be shipped within 2-3 business days.

Best regards,
The Team\`;

console.log(email);

// Output:
// Dear Customer,
// 
// Thank you for your order!
// 
// Your order will be shipped within 2-3 business days.
// 
// Best regards,
// The Team`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Real World Example */}
      <CodeSnippet
        title="Real-World Example: Email Template"
        description="Build dynamic email messages"
        code={`const customerName = 'Sarah Johnson';
const orderNumber = 'ORD-12345';
const totalAmount = 149.99;
const deliveryDate = 'December 15, 2024';

// Create email using template literal
const emailMessage = \`Hello \${customerName},

Thank you for your order #\${orderNumber}!

Order Summary:
- Total Amount: $\${totalAmount}
- Estimated Delivery: \${deliveryDate}

We will send you a tracking number once your order ships.

If you have any questions, please contact our support team.

Best regards,
Customer Service Team\`;

console.log(emailMessage);

// Output: Hello Sarah Johnson,
// 
// Thank you for your order #ORD-12345!
// 
// Order Summary:
// - Total Amount: $149.99
// - Estimated Delivery: December 15, 2024
// 
// We will send you a tracking number once your order ships.
// 
// If you have any questions, please contact our support team.
// 
// Best regards,
// Customer Service Team`}
        language="javascript"
        colorTheme="yellow"
        icon={Mail}
      />

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
                <span className="text-2xl">`</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Backticks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Backticks ` instead of quotes ' or "
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💎</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Insert Variables</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use ${'{'}variable{'}'} to insert values
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧮</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Do Math</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Calculate inside ${'{'}expression{'}'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Multiline Easy</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Just press Enter for new lines
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
