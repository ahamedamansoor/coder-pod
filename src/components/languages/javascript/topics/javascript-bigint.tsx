'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Infinity } from 'lucide-react';

export default function JavaScriptBigInt() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Infinity}
        category="Modern JavaScript (ES2020)"
        title="BigInt"
        description="Work with huge numbers - beyond JavaScript's limits!"
        colorTheme="emerald"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-xl">
              <Infinity className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent">
                What is BigInt?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                BigInt is a <strong className="text-emerald-700 dark:text-emerald-400">new number type</strong> for working with 
                <strong className="text-teal-700 dark:text-teal-400"> arbitrarily large integers</strong>! 
                Regular numbers in JavaScript are limited to ±2^53, but BigInt lets you work with numbers as large as your memory allows. 
                Perfect for cryptography, timestamps, and huge calculations!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">The Number Limit Problem</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              JavaScript numbers can only safely go up to <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">9007199254740991</code> 
              (Number.MAX_SAFE_INTEGER). Above that, precision is lost. BigInt solves this!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">🔢</span>
            Creating BigInt Values
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">n</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Add 'n' suffix</h4>
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-emerald-200 dark:border-emerald-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">123n</code>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">🔧</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">BigInt() function</h4>
              <div className="bg-white dark:bg-slate-900 p-2 rounded border border-teal-200 dark:border-teal-700">
                <code className="text-xs text-gray-800 dark:text-gray-200">BigInt(123)</code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Working with Large Numbers"
        description="BigInt handles numbers beyond JavaScript's safe integer limit"
        language="javascript"
        colorTheme="emerald"
        code={`// Regular number precision loss
const bigNum = 9007199254740992;
console.log(bigNum);      // 9007199254740992
console.log(bigNum + 1);  // 9007199254740992 ❌ (no change!)
console.log(bigNum + 2);  // 9007199254740994 ❌ (skipped 993!)


// BigInt - no precision loss!
const bigInt = 9007199254740992n;
console.log(bigInt);      // 9007199254740992n
console.log(bigInt + 1n); // 9007199254740993n ✅
console.log(bigInt + 2n); // 9007199254740994n ✅


// Creating BigInt
const big1 = 123456789012345678901234567890n;
const big2 = BigInt("123456789012345678901234567890");
const big3 = BigInt(123);

console.log(big1);  // 123456789012345678901234567890n
console.log(big2);  // 123456789012345678901234567890n
console.log(big3);  // 123n


// Math operations
const a = 100n;
const b = 50n;

console.log(a + b);   // 150n
console.log(a - b);   // 50n
console.log(a * b);   // 5000n
console.log(a / b);   // 2n (integer division!)
console.log(a % b);   // 0n
console.log(a ** b);  // 100^50 (huge number!)


// Comparisons work
console.log(10n > 5n);    // true
console.log(10n === 10n); // true
console.log(10n == 10);   // true (loose equality)
console.log(10n === 10);  // false (different types)`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for BigInt"
        language="javascript"
        colorTheme="teal"
        code={`// 1. Timestamps in nanoseconds
const nanoTimestamp = BigInt(Date.now()) * 1000000n;
console.log(nanoTimestamp);
// 1702589123456789000n


// 2. Cryptocurrency calculations (avoid decimals with large amounts)
const satoshis = 100000000n;  // 1 Bitcoin = 100 million satoshis
const bitcoins = 21000000n;   // Total supply
const totalSatoshis = satoshis * bitcoins;
console.log(totalSatoshis);
// 2100000000000000n


// 3. Large ID numbers
const userId = 987654321098765432109876543210n;
console.log(userId);
// 987654321098765432109876543210n


// 4. Factorial of large numbers
function factorial(n) {
  if (n <= 1n) return 1n;
  return n * factorial(n - 1n);
}

console.log(factorial(20n));
// 2432902008176640000n
// Regular Number would lose precision!


// 5. Convert between BigInt and Number
const big = 100n;
const num = Number(big);
console.log(num);  // 100 (regular number)

const big2 = BigInt(123);
console.log(big2);  // 123n

// ⚠️ Warning: Converting huge BigInt to Number loses precision!
const huge = 12345678901234567890n;
console.log(Number(huge));  // 12345678901234567000 (precision lost)`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Important Limitations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Can't Mix with Numbers</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              Cannot perform operations between BigInt and Number directly
            </p>
            <div className="bg-white dark:bg-slate-900 p-2 rounded border border-red-200 dark:border-red-700">
              <code className="text-xs text-red-600 dark:text-red-400">
                10n + 5  // ❌ TypeError!<br/>
                10n + 5n // ✅ Works!
              </code>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-2">⚠️ No Math Object Methods</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">Math.sqrt()</code>, 
              <code className="bg-amber-100 dark:bg-amber-900/30 px-1 rounded">Math.pow()</code> don't work with BigInt
            </p>
          </div>

          <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">ℹ️ Division is Integer Only</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <code className="bg-blue-100 dark:bg-blue-900/30 px-1 rounded">10n / 3n = 3n</code> (not 3.333...)
            </p>
          </div>

          <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-2">💡 JSON Doesn't Support BigInt</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Need to convert to string for JSON: <code className="bg-purple-100 dark:bg-purple-900/30 px-1 rounded">bigInt.toString()</code>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">∞</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Unlimited Size</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Work with integers of any size
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">n</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Add 'n' Suffix</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <code className="text-xs">123n</code> creates BigInt literal
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Can't Mix Types</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Must convert between BigInt and Number
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Use Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Crypto, timestamps, large IDs, precise calculations
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
