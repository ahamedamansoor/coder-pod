'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Hash, Sparkles } from 'lucide-react';

export default function JavaScriptNumberMethods() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Hash}
        category="JavaScript Math & Numbers"
        title="Number Methods"
        description="Convert, format, and validate numbers"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-sky-50/50 to-cyan-50/30 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-xl">
              <Hash className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                Working with Numbers
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                JavaScript provides methods to convert, format, and validate numbers. Perfect for parsing user input, formatting display values, and checking number validity.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Number() - Convert to Number"
        description="Convert strings and other types to numbers"
        language="javascript"
        colorTheme="blue"
        code={`// String to number
console.log(Number("123"));        // 123
console.log(Number("3.14"));       // 3.14
console.log(Number("  42  "));     // 42 (trims whitespace)

// Boolean to number
console.log(Number(true));         // 1
console.log(Number(false));        // 0

// Invalid conversions return NaN
console.log(Number("hello"));      // NaN
console.log(Number("12abc"));      // NaN
console.log(Number(undefined));    // NaN

// null and empty string
console.log(Number(null));         // 0
console.log(Number(""));           // 0`}
      />

      <CodeSnippet
        title="parseInt() & parseFloat()"
        description="Parse strings to integers or decimals"
        language="javascript"
        colorTheme="sky"
        code={`// parseInt - extracts integer
console.log(parseInt("123"));          // 123
console.log(parseInt("123.99"));       // 123 (stops at decimal)
console.log(parseInt("123abc"));       // 123 (stops at non-digit)
console.log(parseInt("   456   "));    // 456

// parseFloat - extracts decimal
console.log(parseFloat("3.14"));       // 3.14
console.log(parseFloat("3.14.159"));   // 3.14 (stops at 2nd dot)
console.log(parseFloat("10.5px"));     // 10.5

// Parse with radix (base)
console.log(parseInt("1010", 2));      // 10 (binary)
console.log(parseInt("FF", 16));       // 255 (hexadecimal)
console.log(parseInt("77", 8));        // 63 (octal)

// Invalid parsing returns NaN
console.log(parseInt("hello"));        // NaN
console.log(parseFloat("abc"));        // NaN`}
      />

      <CodeSnippet
        title="toFixed() - Format Decimals"
        description="Round to specific decimal places (returns string)"
        language="javascript"
        colorTheme="cyan"
        code={`const price = 19.99567;

// Round to decimal places
console.log(price.toFixed(0));     // "20"
console.log(price.toFixed(1));     // "20.0"
console.log(price.toFixed(2));     // "20.00"
console.log(price.toFixed(3));     // "19.996"

// Use with money
const amount = 123.456;
console.log("$" + amount.toFixed(2));  // "$123.46"

// Convert back to number
const rounded = Number(price.toFixed(2));
console.log(rounded);              // 19.996 (number, not string)

// Edge case: very large numbers use exponential notation
const big = 1e21;
console.log(big.toFixed(2));       // "1e+21" (not precise for huge numbers)`}
      />

      <CodeSnippet
        title="toPrecision() - Significant Digits"
        description="Format to specific number of significant figures"
        language="javascript"
        colorTheme="indigo"
        code={`const num = 123.456;

// Format to significant digits
console.log(num.toPrecision(1));   // "1e+2" (exponential)
console.log(num.toPrecision(2));   // "1.2e+2"
console.log(num.toPrecision(3));   // "123"
console.log(num.toPrecision(4));   // "123.5"
console.log(num.toPrecision(5));   // "123.46"
console.log(num.toPrecision(6));   // "123.456"

// Small numbers
const small = 0.000123;
console.log(small.toPrecision(2)); // "0.00012"
console.log(small.toPrecision(3)); // "0.000123"`}
      />

      <CodeSnippet
        title="toString() - Convert to String"
        description="Convert number to string with optional base"
        language="javascript"
        colorTheme="purple"
        code={`const num = 255;

// Default (base 10)
console.log(num.toString());       // "255"

// Binary (base 2)
console.log(num.toString(2));      // "11111111"

// Octal (base 8)
console.log(num.toString(8));      // "377"

// Hexadecimal (base 16)
console.log(num.toString(16));     // "ff"

// Useful for color codes
const red = 255;
const green = 128;
const blue = 64;
const color = "#" + 
  red.toString(16).padStart(2, "0") + 
  green.toString(16).padStart(2, "0") + 
  blue.toString(16).padStart(2, "0");
console.log(color);                // "#ff8040"`}
      />

      <CodeSnippet
        title="isNaN() & isFinite()"
        description="Check if value is a valid number"
        language="javascript"
        colorTheme="green"
        code={`// isNaN - checks if value is NaN
console.log(isNaN(123));           // false (valid number)
console.log(isNaN("hello"));       // true (not a number)
console.log(isNaN(NaN));           // true
console.log(isNaN(undefined));     // true

// Number.isNaN (more strict - doesn't convert)
console.log(Number.isNaN(NaN));    // true
console.log(Number.isNaN("hello"));// false (no conversion)
console.log(Number.isNaN(123));    // false

// isFinite - checks if number is finite
console.log(isFinite(123));        // true
console.log(isFinite(Infinity));   // false
console.log(isFinite(-Infinity));  // false
console.log(isFinite(NaN));        // false
console.log(isFinite("123"));      // true (converts)

// Number.isFinite (more strict)
console.log(Number.isFinite(123)); // true
console.log(Number.isFinite("123")); // false (no conversion)

// Validate user input
function isValidNumber(value) {
  return !isNaN(value) && isFinite(value);
}

console.log(isValidNumber(42));    // true
console.log(isValidNumber("abc")); // false
console.log(isValidNumber(Infinity)); // false`}
      />

      <CodeSnippet
        title="Number.isInteger()"
        description="Check if number is an integer"
        language="javascript"
        colorTheme="orange"
        code={`// Check for integers
console.log(Number.isInteger(5));      // true
console.log(Number.isInteger(5.0));    // true (5.0 === 5)
console.log(Number.isInteger(5.1));    // false
console.log(Number.isInteger("5"));    // false (string)
console.log(Number.isInteger(NaN));    // false
console.log(Number.isInteger(Infinity)); // false

// Validate age input
function isValidAge(age) {
  return Number.isInteger(age) && age > 0 && age < 150;
}

console.log(isValidAge(25));       // true
console.log(isValidAge(25.5));     // false
console.log(isValidAge("25"));     // false`}
      />

      <CodeSnippet
        title="Number Constants"
        description="Useful number limits and special values"
        language="javascript"
        colorTheme="red"
        code={`// Maximum safe integer
console.log(Number.MAX_SAFE_INTEGER);    // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);    // -9007199254740991

// Maximum/minimum values
console.log(Number.MAX_VALUE);           // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);           // 5e-324 (smallest positive)

// Special values
console.log(Number.POSITIVE_INFINITY);   // Infinity
console.log(Number.NEGATIVE_INFINITY);   // -Infinity
console.log(Number.NaN);                 // NaN

// Check safe integers
console.log(Number.isSafeInteger(123));           // true
console.log(Number.isSafeInteger(9007199254740992)); // false (too large)

// Epsilon (smallest difference between two numbers)
console.log(Number.EPSILON);             // 2.220446049250313e-16`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Convert</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>Number()</code> - any to number</div>
                <div><code>parseInt()</code> - to integer</div>
                <div><code>parseFloat()</code> - to decimal</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Format</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>toFixed(n)</code> - n decimals</div>
                <div><code>toPrecision(n)</code> - n digits</div>
                <div><code>toString(base)</code> - to string</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Validate</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>isNaN()</code> - check NaN</div>
                <div><code>isFinite()</code> - check finite</div>
                <div><code>isInteger()</code> - check integer</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50 dark:from-blue-950/20 dark:via-sky-950/10 dark:to-cyan-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <Hash className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Conversion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">Number()</code>, <code className="text-xs">parseInt()</code>, or <code className="text-xs">parseFloat()</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Formatting</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">toFixed()</code> returns string, convert back if needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Validation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use <code className="text-xs">Number.isNaN()</code> for strict checks
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Watch Out</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">parseInt("10px")</code> = 10, not NaN!
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
