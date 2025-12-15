'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Hash } from 'lucide-react';

export default function JavaScriptNumericSeparators() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Hash}
        category="Modern JavaScript (ES2021)"
        title="Numeric Separators"
        description="Make numbers readable - use underscores like commas!"
        colorTheme="indigo"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50/80 via-violet-50/50 to-purple-50/30 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-xl">
              <Hash className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-700 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                What are Numeric Separators?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Numeric separators let you use <code className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded">_</code> (underscore) 
                in numbers to <strong className="text-indigo-700 dark:text-indigo-400">improve readability</strong>! 
                Just like using commas in written numbers (1,000,000), you can write 
                <code className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 rounded mx-1">1_000_000</code> in code. 
                The underscores are <strong className="text-violet-700 dark:text-violet-400">ignored at runtime</strong> - purely visual!
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Readability Matters!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Which is easier to read: <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">1000000</code> or 
              <code className="bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded text-xs">1_000_000</code>? Separators make large numbers instantly clear!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Example 1: Making Numbers Readable"
        description="Use underscores anywhere in numbers for clarity"
        language="javascript"
        colorTheme="indigo"
        code={`// Large numbers - much clearer!
const million = 1_000_000;
const billion = 1_000_000_000;
const trillion = 1_000_000_000_000;

console.log(million);   // 1000000
console.log(billion);   // 1000000000
console.log(trillion);  // 1000000000000


// Financial amounts
const salary = 75_000;
const price = 1_299_99;  // $1,299.99
const budget = 50_000_000;

console.log(\`Salary: $\${salary}\`);  // Salary: $75000


// Binary numbers (group by 4 or 8)
const permissions = 0b1111_1010_0011_1100;
const flags = 0b1010_1010;

console.log(permissions);  // 64060
console.log(flags);        // 170


// Hexadecimal colors (group by color channel)
const color = 0xFF_00_FF;  // Magenta (R_G_B)
const white = 0xFF_FF_FF;

console.log(color.toString(16));  // "ff00ff"


// Scientific notation
const planckConstant = 6.626_070_15e-34;
const speedOfLight = 299_792_458;  // m/s

console.log(planckConstant);  // 6.62607015e-34


// Decimals
const pi = 3.14_15_92_65;
const price2 = 19.99;  // Can use, but less common

console.log(pi);  // 3.14159265`}
      />

      <CodeSnippet
        title="Example 2: Real-World Use Cases"
        description="Practical scenarios for numeric separators"
        language="javascript"
        colorTheme="violet"
        code={`// 1. Configuration values
const config = {
  maxFileSize: 10_000_000,      // 10 MB
  timeout: 30_000,               // 30 seconds
  retryLimit: 5_000,             // 5k attempts
  cacheSize: 100_000_000         // 100 million entries
};


// 2. Database IDs and timestamps
const userId = 123_456_789;
const timestamp = 1_702_589_123_456;  // Milliseconds since epoch


// 3. Financial calculations
function calculateLoan(principal, rate, years) {
  const monthlyRate = rate / 12 / 100;
  const payments = years * 12;
  
  return principal * monthlyRate / 
    (1 - Math.pow(1 + monthlyRate, -payments));
}

const loanAmount = 250_000;  // $250,000
const monthlyPayment = calculateLoan(loanAmount, 3.5, 30);
console.log(\`Monthly: $\${monthlyPayment.toFixed(2)}\`);


// 4. Bit manipulation
const READ    = 0b0000_0100;  // 4
const WRITE   = 0b0000_0010;  // 2
const EXECUTE = 0b0000_0001;  // 1

const permissions = READ | WRITE;  // 6
console.log(\`Permissions: \${permissions.toString(2)}\`);


// 5. Large array sizes
const BUFFER_SIZE = 1_048_576;  // 1 MB
const buffer = new ArrayBuffer(BUFFER_SIZE);

console.log(\`Buffer size: \${BUFFER_SIZE.toLocaleString()} bytes\`);


// 6. Credit card numbers (just for display, not storage!)
// Note: Don't store card numbers like this in real code!
const displayNumber = '4532_1234_5678_9010';
console.log(displayNumber);`}
      />

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Rules & Restrictions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Allowed</h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">1_000_000</code> - Between digits</div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">0xFF_00_FF</code> - In hex</div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">0b1111_0000</code> - In binary</div>
              <div>• <code className="bg-green-100 dark:bg-green-900/30 px-1 rounded">3.14_15</code> - In decimals</div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">❌ Not Allowed</h4>
            <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <div>• <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">_1000</code> - At start</div>
              <div>• <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">1000_</code> - At end</div>
              <div>• <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">1__000</code> - Multiple consecutive</div>
              <div>• <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">3._14</code> - After decimal point</div>
              <div>• <code className="bg-red-100 dark:bg-red-900/30 px-1 rounded">1e_5</code> - Before/after 'e'</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 dark:from-indigo-950/20 dark:via-violet-950/10 dark:to-purple-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">_</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Underscore</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use _ anywhere between digits for readability
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-violet-200 dark:border-violet-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Visual Only</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ignored at runtime - doesn't change value
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">All Formats</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works with decimal, hex, binary, octal, BigInt
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-fuchsia-200 dark:border-fuchsia-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2021</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Modern readability feature
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
