'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  MessageSquare,
  Sparkles,
  Code2,
  Lightbulb,
  FileText,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export default function JavaScriptComments() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={MessageSquare}
        category="JavaScript Fundamentals"
        title="Comments"
        description="Add notes to your code that JavaScript ignores - helpful for yourself and other developers"
        colorTheme="yellow"
      />

      {/* What are Comments? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Comments: Notes for Humans
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Comments are <strong className="text-green-700 dark:text-green-400">notes in your code</strong> that JavaScript completely ignores. They're for you and other developers to understand what the code does and why!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-green-200 dark:border-green-800/30">
            <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-lg">Why Use Comments?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              • Explain tricky code • Remind yourself what you did • Help teammates understand • Leave TODO reminders
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Two Types of Comments */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
              <Code2 className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <CardTitle>Two Types of Comments</CardTitle>
              <CardDescription>Single-line and multi-line comments</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Single Line */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
              <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
                <h4 className="text-white font-semibold">Single-Line Comment</h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <code className="text-3xl font-mono text-blue-600 dark:text-blue-400">//</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Two forward slashes</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-blue-200 dark:border-blue-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// This is a comment
console.log('Hello');`}</pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Everything after // on that line is ignored
                </p>
              </div>
            </div>

            {/* Multi Line */}
            <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
              <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
                <h4 className="text-white font-semibold">Multi-Line Comment</h4>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center mb-4">
                  <code className="text-3xl font-mono text-purple-600 dark:text-purple-400">/* */</code>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Slash-star ... star-slash</p>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-lg p-4 border-2 border-purple-200 dark:border-purple-800/30">
                  <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`/*
This is a comment
that spans multiple
lines
*/
console.log('Hello');`}</pre>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Everything between /* and */ is ignored
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Single-Line Comments"
        description="Quick notes on one line"
        code={`// This entire line is a comment
console.log('This will run');

// You can explain what the next line does
const age = 25;

const price = 99.99;  // Comment at the end of a line

// Multiple single-line comments
// can be stacked
// like this
console.log('Hello!');

// Temporarily disable code
// console.log('This will NOT run');
console.log('This will run');`}
        language="javascript"
        colorTheme="yellow"
      />

      <CodeSnippet
        title="Multi-Line Comments"
        description="Longer explanations across multiple lines"
        code={`/*
This is a multi-line comment.
You can write as much as you want here.
JavaScript will ignore all of it.
*/

console.log('This runs');

/*
Use multi-line comments to:
- Explain complex logic
- Document how functions work
- Temporarily disable big blocks of code
*/

function calculateTotal(price, tax) {
  /*
  This function takes a price and tax rate
  and returns the total amount
  */
  return price + (price * tax);
}

const total = calculateTotal(100, 0.08);
console.log('Total:', total);  // 108`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* When to Use Each */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>When to Use Each Type</CardTitle>
              <CardDescription>Choose the right comment style for the situation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-4">
                <code className="text-2xl font-mono text-blue-600 dark:text-blue-400">//</code>
                <h4 className="font-bold text-blue-700 dark:text-blue-300">Use // For:</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Quick notes on one line</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Explaining what the next line does</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Adding notes at the end of code lines</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                  <span>Temporarily disabling one line</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-4">
                <code className="text-2xl font-mono text-purple-600 dark:text-purple-400">/* */</code>
                <h4 className="font-bold text-purple-700 dark:text-purple-300">Use /* */ For:</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
                  <span>Longer explanations</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
                  <span>Documenting how functions work</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
                  <span>Describing complex algorithms</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
                  <span>Disabling large blocks of code</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Real-World Example: Shopping Cart"
        description="See how comments help explain code in a practical example"
        code={`// Shopping cart calculation

// Get the base price
const itemPrice = 50;
const quantity = 3;
const subtotal = itemPrice * quantity;  // 150

console.log('Subtotal: $' + subtotal);

/*
Apply discount if customer is a member.
Members get 10% off all purchases.
This is set in the admin dashboard.
*/
const isMember = true;
let discount = 0;

if (isMember) {
  discount = subtotal * 0.10;  // 10% discount
}

// Calculate final total
const total = subtotal - discount;

console.log('Discount: $' + discount);
console.log('Final Total: $' + total);

// TODO: Add shipping cost calculation
// TODO: Add tax calculation by state`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Comment Best Practices</CardTitle>
              <CardDescription>How to write helpful comments</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h4 className="font-bold text-lg text-green-700 dark:text-green-300">Do This ✅</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Explain WHY</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Tell why you did something, not what the code does</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Document complex parts</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">If it took you time to figure out, comment it</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Use TODO for reminders</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Mark things you need to come back to</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 text-lg">✓</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Update when code changes</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Keep comments accurate and current</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-2 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-red-200 dark:border-red-800/30">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h4 className="font-bold text-lg text-red-700 dark:text-red-300">Avoid This ❌</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 text-lg">✗</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Stating the obvious</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Don't write: i++  // increment i</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 text-lg">✗</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Too many comments</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Don't comment every single line</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 text-lg">✗</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Leaving old comments</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Remove comments that are no longer true</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 text-lg">✗</span>
                  <div>
                    <strong className="text-gray-900 dark:text-gray-100">Commenting bad code</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-0.5">Fix the code instead of explaining why it's confusing</p>
                  </div>
                </div>
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
                <span className="text-2xl">💬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Comments Are Ignored</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    JavaScript skips them completely - they're just notes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">//</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Two Slashes for One Line</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Everything after // is a comment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">/* */</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Slash-Star for Multiple Lines</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Everything between /* and */ is a comment
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Explain WHY, Not WHAT</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tell why you made a decision, not what the code does
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
