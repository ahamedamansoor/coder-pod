'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Grid3x3, Target, AlertCircle, CheckCircle, Sparkles, XCircle, 
  Zap, Box, TrendingUp
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ArraysIntroduction() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Grid3x3} 
        category="DSA · Arrays" 
        title="What is an Array?" 
        description="Understanding the fundamental contiguous data structure for storing elements"
        colorTheme="orange"
        badges={[
          { label: 'Fundamental', variant: 'default' },
          { label: 'Random Access', variant: 'success' },
          { label: 'Contiguous', variant: 'info' }
        ]}
      />

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-orange-600" />
            Introduction to Arrays
          </CardTitle>
          <CardDescription>The most fundamental data structure in computer science</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" />
              What is an Array?
            </h4>
            <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              An <strong>Array</strong> is a linear data structure that stores elements of the <strong>same type</strong> in 
              <strong> contiguous memory locations</strong>. Each element can be accessed directly using its index.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-2">
                  <Box className="w-4 h-4" />
                  Fixed Size
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Size is determined at creation time</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Random Access
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Access any element in O(1) time</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-900 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                <div className="text-sm font-semibold text-orange-600 mb-2 flex items-center gap-2">
                  <Grid3x3 className="w-4 h-4" />
                  Contiguous
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">Elements stored in adjacent memory</p>
              </div>
            </div>
          </div>

          <Alert className="border-orange-200 dark:border-orange-700 bg-orange-50 dark:bg-orange-950/30">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <AlertTitle>Key Concept</AlertTitle>
            <AlertDescription>
              Arrays use <strong>zero-based indexing</strong> in most programming languages. The first element is at 
              index 0, second at index 1, and so on.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-6 h-6 text-orange-600" />
            Visual Representation
          </CardTitle>
          <CardDescription>How an array looks in memory</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Array Structure</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700 overflow-x-auto">
              <div className="space-y-6">
                {/* Array visualization */}
                <div className="flex items-center justify-center gap-0">
                  {[10, 20, 30, 40, 50].map((val, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="w-20 h-20 border-2 border-orange-500 dark:border-orange-400 bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                        <span className="text-2xl font-bold text-orange-900 dark:text-orange-100">{val}</span>
                      </div>
                      <div className="mt-2 text-xs font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/80 px-2 py-1 rounded border border-orange-500">
                        [{idx}]
                      </div>
                    </div>
                  ))}
                </div>

                {/* Memory addresses */}
                <div className="flex items-center justify-center gap-0">
                  {[1000, 1004, 1008, 1012, 1016].map((addr, idx) => (
                    <div key={idx} className="w-20 text-center">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        {addr}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <p className="font-semibold">Contiguous Memory Allocation</p>
                  <p className="text-xs">Memory addresses shown for illustration (4 bytes per integer)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Index Formula</h4>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border-2 border-blue-200 dark:border-blue-700">
              <div className="text-center space-y-3">
                <div className="text-lg font-mono font-bold text-blue-900 dark:text-blue-100">
                  Address of arr[i] = base_address + (i × element_size)
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  This formula allows <strong>O(1)</strong> random access to any element
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-orange-600" />
            Arrays vs Other Data Structures
          </CardTitle>
          <CardDescription>Understanding when to use arrays</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Advantages
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      <strong>O(1)</strong> random access by index
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Cache-friendly (contiguous memory)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Simple and easy to use
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Efficient memory usage (no overhead)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Better for iteration/loops
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
                <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Disadvantages
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Fixed size (static arrays)
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Insertion/deletion is <strong>O(n)</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Wasted space if not fully used
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      Memory allocation failures if too large
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      No dynamic resizing (static arrays)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Array Declaration and Access"
        language="javascript"
        code={`// Creating an array
const numbers = [10, 20, 30, 40, 50];

// Accessing elements by index - O(1)
console.log(numbers[0]);  // Output: 10 (first element)
console.log(numbers[2]);  // Output: 30 (third element)
console.log(numbers[4]);  // Output: 50 (last element)

// Array length
console.log(numbers.length);  // Output: 5

// Modifying elements - O(1)
numbers[1] = 25;
console.log(numbers);  // [10, 25, 30, 40, 50]

// Iterating through array
for (let i = 0; i < numbers.length; i++) {
  console.log(\`Index \${i}: \${numbers[i]}\`);
}

// Using forEach
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});`}
      />

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle>Time Complexity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-orange-200 dark:border-orange-700">
                  <th className="text-left p-3 font-semibold text-slate-900 dark:text-slate-100">Operation</th>
                  <th className="text-center p-3 font-semibold text-slate-900 dark:text-slate-100">Time Complexity</th>
                  <th className="text-left p-3 font-semibold text-slate-900 dark:text-slate-100">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Access by index</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">Direct access using formula</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Update element</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">Direct assignment to index</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Search (unsorted)</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">Must check each element</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Search (sorted)</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded font-mono text-xs">O(log n)</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">Binary search possible</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Insert at end</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 rounded font-mono text-xs">O(1)*</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">If space available</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Insert at beginning/middle</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">Must shift elements</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700 dark:text-slate-300">Delete</td>
                  <td className="p-3 text-center">
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded font-mono text-xs">O(n)</span>
                  </td>
                  <td className="p-3 text-slate-700 dark:text-slate-300 text-xs">Must shift elements</td>
                </tr>
              </tbody>
            </table>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">* Dynamic arrays may require O(n) if resizing is needed</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-orange-200 dark:border-orange-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-orange-600" />
            When to Use Arrays?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Use Arrays When:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You need fast access by index</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>The size is known or doesn't change much</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Memory efficiency is important</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>You need to iterate frequently</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Cache performance matters</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-400 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Avoid Arrays When:
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Frequent insertions/deletions needed</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Size changes unpredictably</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Need to insert at beginning often</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-red-600 font-bold">•</span>
                  <span>Memory is highly fragmented</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-orange-200 dark:border-orange-700 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
        <Sparkles className="h-5 w-5 text-orange-600" />
        <AlertTitle>Next Steps</AlertTitle>
        <AlertDescription>
          Now that you understand what arrays are, let's explore:
          <ul className="mt-2 space-y-1 text-sm">
            <li>• Different types of arrays (static vs dynamic)</li>
            <li>• Common array operations and algorithms</li>
            <li>• Two-pointer and sliding window techniques</li>
            <li>• Sorting and searching in arrays</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
