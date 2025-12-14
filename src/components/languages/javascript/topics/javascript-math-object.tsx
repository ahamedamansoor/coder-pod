'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Calculator, Sparkles } from 'lucide-react';

export default function JavaScriptMathObject() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Calculator}
        category="JavaScript Math & Numbers"
        title="Math Object"
        description="Built-in mathematical functions and constants"
        colorTheme="indigo"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-violet-50/30 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/5">
        <CardContent className="pt-8">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-xl">
              <Calculator className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                Mathematical Operations
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The Math object provides mathematical constants and functions. It's not a constructor - all properties and methods are static. No need to create an instance!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            Understanding Math
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800">
              <div className="text-4xl mb-3">🧮</div>
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">What is Math?</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                A built-in object with mathematical functions - like a calculator for your code!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
              <div className="text-4xl mb-3">⚡</div>
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Always Ready</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No setup needed! Just use Math.method() - it's always available
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/10 border-2 border-violet-200 dark:border-violet-800">
              <div className="text-4xl mb-3">🎯</div>
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Static Methods</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Don't use "new Math()" - just call methods directly!
              </p>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-lg text-blue-900 dark:text-blue-100 mb-4">Common Math Operations</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔢</span>
                  <h5 className="font-bold text-blue-900 dark:text-blue-100">Rounding</h5>
                </div>
                <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <div>• <code>Math.round()</code> - Round to nearest</div>
                  <div>• <code>Math.ceil()</code> - Round up</div>
                  <div>• <code>Math.floor()</code> - Round down</div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-sky-200 dark:border-sky-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📐</span>
                  <h5 className="font-bold text-sky-900 dark:text-sky-100">Power & Roots</h5>
                </div>
                <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <div>• <code>Math.pow()</code> - Power (2³ = 8)</div>
                  <div>• <code>Math.sqrt()</code> - Square root</div>
                  <div>• <code>Math.cbrt()</code> - Cube root</div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📊</span>
                  <h5 className="font-bold text-cyan-900 dark:text-cyan-100">Min/Max</h5>
                </div>
                <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <div>• <code>Math.min()</code> - Smallest value</div>
                  <div>• <code>Math.max()</code> - Largest value</div>
                  <div>• <code>Math.abs()</code> - Remove minus sign</div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-indigo-200 dark:border-indigo-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎲</span>
                  <h5 className="font-bold text-indigo-900 dark:text-indigo-100">Random</h5>
                </div>
                <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                  <div>• <code>Math.random()</code> - Random 0-1</div>
                  <div>• Great for games & simulations</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-l-4 border-green-500">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Math Constants</h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">Math.PI</code> - 3.14159... (π)</div>
                  <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">Math.E</code> - 2.71828... (e)</div>
                </div>
              </div>
              <div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">Math.SQRT2</code> - √2</div>
                  <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">Math.LN2</code> - ln(2)</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Basic Math Methods"
        description="Common mathematical operations"
        language="javascript"
        colorTheme="indigo"
        code={`// Round numbers
console.log(Math.round(4.7));   // 5
console.log(Math.round(4.4));   // 4
console.log(Math.round(4.5));   // 5

// Round up
console.log(Math.ceil(4.1));    // 5
console.log(Math.ceil(4.9));    // 5

// Round down
console.log(Math.floor(4.9));   // 4
console.log(Math.floor(4.1));   // 4

// Remove decimals (truncate)
console.log(Math.trunc(4.9));   // 4
console.log(Math.trunc(-4.9));  // -4`}
      />

      <CodeSnippet
        title="Power & Square Root"
        description="Exponential and root operations"
        language="javascript"
        colorTheme="purple"
        code={`// Power (base ** exponent)
console.log(Math.pow(2, 3));    // 8 (2³)
console.log(Math.pow(5, 2));    // 25 (5²)
console.log(Math.pow(10, 3));   // 1000 (10³)

// Square root
console.log(Math.sqrt(16));     // 4
console.log(Math.sqrt(25));     // 5
console.log(Math.sqrt(2));      // 1.414...

// Cube root
console.log(Math.cbrt(27));     // 3
console.log(Math.cbrt(8));      // 2

// Alternative syntax (ES6)
console.log(2 ** 3);            // 8 (same as Math.pow)`}
      />

      <CodeSnippet
        title="Absolute & Sign"
        description="Get absolute value and sign"
        language="javascript"
        colorTheme="violet"
        code={`// Absolute value (remove negative sign)
console.log(Math.abs(-5));      // 5
console.log(Math.abs(5));       // 5
console.log(Math.abs(-3.14));   // 3.14

// Sign of number (-1, 0, or 1)
console.log(Math.sign(-5));     // -1 (negative)
console.log(Math.sign(5));      // 1 (positive)
console.log(Math.sign(0));      // 0 (zero)
console.log(Math.sign(-0));     // -0`}
      />

      <CodeSnippet
        title="Min & Max"
        description="Find minimum and maximum values"
        language="javascript"
        colorTheme="blue"
        code={`// Find minimum
console.log(Math.min(5, 2, 9, 1));      // 1
console.log(Math.min(-5, -2, -9));      // -9

// Find maximum
console.log(Math.max(5, 2, 9, 1));      // 9
console.log(Math.max(-5, -2, -9));      // -2

// With arrays (use spread operator)
const numbers = [5, 2, 9, 1, 7];
console.log(Math.min(...numbers));      // 1
console.log(Math.max(...numbers));      // 9

// Find range
const min = Math.min(...numbers);
const max = Math.max(...numbers);
const range = max - min;
console.log(range);                     // 8`}
      />

      <CodeSnippet
        title="Trigonometry"
        description="Sine, cosine, and tangent (in radians)"
        language="javascript"
        colorTheme="cyan"
        code={`// Convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Sine
console.log(Math.sin(toRadians(90)));   // 1
console.log(Math.sin(toRadians(30)));   // 0.5

// Cosine
console.log(Math.cos(toRadians(0)));    // 1
console.log(Math.cos(toRadians(60)));   // 0.5

// Tangent
console.log(Math.tan(toRadians(45)));   // 1

// Arc functions (return radians)
console.log(Math.asin(1));              // 1.57... (90°)
console.log(Math.acos(0.5));            // 1.04... (60°)
console.log(Math.atan(1));              // 0.78... (45°)`}
      />

      <CodeSnippet
        title="Mathematical Constants"
        description="Built-in mathematical constants"
        language="javascript"
        colorTheme="green"
        code={`// Pi (π) - ratio of circle's circumference to diameter
console.log(Math.PI);                    // 3.141592653589793

// Euler's number (e) - base of natural logarithms
console.log(Math.E);                     // 2.718281828459045

// Natural logarithm of 2
console.log(Math.LN2);                   // 0.693...

// Natural logarithm of 10
console.log(Math.LN10);                  // 2.302...

// Base 2 logarithm of E
console.log(Math.LOG2E);                 // 1.442...

// Base 10 logarithm of E
console.log(Math.LOG10E);                // 0.434...

// Square root of 1/2
console.log(Math.SQRT1_2);               // 0.707...

// Square root of 2
console.log(Math.SQRT2);                 // 1.414...

// Calculate circle area
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
console.log(area);                       // 78.53...`}
      />

      <CodeSnippet
        title="Logarithms"
        description="Natural and base-10 logarithms"
        language="javascript"
        colorTheme="orange"
        code={`// Natural logarithm (base e)
console.log(Math.log(Math.E));          // 1
console.log(Math.log(10));              // 2.302...

// Base 10 logarithm
console.log(Math.log10(100));           // 2
console.log(Math.log10(1000));          // 3

// Base 2 logarithm
console.log(Math.log2(8));              // 3
console.log(Math.log2(256));            // 8`}
      />

      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border-2 border-indigo-200 dark:border-indigo-800/30">
              <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">Rounding Prices</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.round(price * 100) / 100
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Round to 2 decimal places
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">Distance</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.sqrt(dx*dx + dy*dy)
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Calculate 2D distance
              </p>
            </div>

            <div className="p-4 rounded-lg bg-violet-50 dark:bg-violet-950/20 border-2 border-violet-200 dark:border-violet-800/30">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-2">Percentage</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.round((value / total) * 100)
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Calculate percentage
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Clamp Value</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 block">
                Math.min(max, Math.max(min, value))
              </code>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Keep value between min and max
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Reference</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Rounding</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>round()</code> - nearest integer</div>
                <div><code>ceil()</code> - round up</div>
                <div><code>floor()</code> - round down</div>
                <div><code>trunc()</code> - remove decimals</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Power & Root</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>pow(x, y)</code> - x to power y</div>
                <div><code>sqrt(x)</code> - square root</div>
                <div><code>cbrt(x)</code> - cube root</div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
              <Badge variant="outline" className="mb-2">Comparison</Badge>
              <div className="space-y-1 text-xs text-gray-700 dark:text-gray-300">
                <div><code>min(...)</code> - smallest value</div>
                <div><code>max(...)</code> - largest value</div>
                <div><code>abs(x)</code> - absolute value</div>
                <div><code>sign(x)</code> - -1, 0, or 1</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-violet-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <Calculator className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Static Object</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No need to create instance, use <code className="text-xs">Math.method()</code> directly
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📐</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Constants</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">Math.PI</code>, <code className="text-xs">Math.E</code>, etc. for precision
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rounding</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    round, ceil, floor, trunc for different rounding needs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Performance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimized operations faster than manual calculations
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
