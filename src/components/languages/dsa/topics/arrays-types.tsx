'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Grid3x3, Target, AlertCircle, CheckCircle, Sparkles, Layers, 
  Maximize2, ChevronRight, Box
} from 'lucide-react';
import { CodeSnippet } from '@/components/shared';
import { PageHeader } from '@/components/shared/generic-page-header';

export default function ArraysTypes() {
  return (
    <div className="space-y-8">
      <PageHeader 
        icon={Layers} 
        category="DSA · Arrays" 
        title="Types of Arrays" 
        description="Explore static, dynamic, and multidimensional arrays with practical examples"
        colorTheme="amber"
        badges={[
          { label: 'Static', variant: 'default' },
          { label: 'Dynamic', variant: 'info' },
          { label: 'Multidimensional', variant: 'success' }
        ]}
      />

      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-600" />
            Overview
          </CardTitle>
          <CardDescription>Different types of arrays for different use cases</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-700">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Arrays come in different forms depending on <strong>size flexibility</strong>, <strong>dimensions</strong>, 
              and <strong>memory allocation</strong>. Understanding these variations helps you choose the right array type for your problem.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* STATIC ARRAYS */}
      <Card className="border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Box className="w-6 h-6 text-blue-600" />
            1. Static Arrays (Fixed-Size)
          </CardTitle>
          <CardDescription>Size determined at compile time and cannot change</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Characteristics
            </h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Fixed size</strong> - Cannot grow or shrink</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Memory allocated at <strong>compile time</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Stored on the <strong>stack</strong> (typically)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>More <strong>memory efficient</strong> - no overhead</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">Visual Structure</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-0">
                  {[10, 20, 30, 40, 50].map((val, idx) => (
                    <div key={idx} className="w-16 h-16 border-2 border-blue-500 dark:border-blue-400 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-900 dark:text-blue-100">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg border-2 border-blue-400 dark:border-blue-600">
                    <Box className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-semibold text-blue-900 dark:text-blue-100">Size: 5 (Fixed)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Advantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Predictable memory usage</li>
                <li>• Faster access (stack)</li>
                <li>• No dynamic allocation overhead</li>
                <li>• Better cache performance</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Disadvantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Cannot resize</li>
                <li>• Wasted memory if undersized</li>
                <li>• Stack overflow risk if too large</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Static Arrays - C/C++ and JavaScript"
        language="javascript"
        code={`// C/C++ (truly static)
int numbers[5] = {10, 20, 30, 40, 50};  // Size fixed at compile time

// JavaScript (arrays are dynamic, but can simulate static behavior)
const numbers = new Array(5);  // Creates array with length 5
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

console.log(numbers.length);  // 5

// Note: JavaScript arrays can still be resized even after initialization
// They are not truly "static" like in C/C++`}
      />

      {/* DYNAMIC ARRAYS */}
      <Card className="border-purple-200 dark:border-purple-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Maximize2 className="w-6 h-6 text-purple-600" />
            2. Dynamic Arrays (Resizable)
          </CardTitle>
          <CardDescription>Can grow or shrink at runtime</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Characteristics
            </h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span><strong>Flexible size</strong> - Can grow and shrink</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Memory allocated on the <strong>heap</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Automatically <strong>resizes</strong> when capacity exceeded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">•</span>
                <span>Examples: JavaScript arrays, Python lists, Java ArrayList, C++ vector</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">How Resizing Works</h4>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-lg border-2 border-purple-200 dark:border-purple-700">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">Initial (Capacity: 4)</div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  <div className="flex gap-0">
                    {[10, 20, 30, 40].map((val, idx) => (
                      <div key={idx} className="w-12 h-12 border border-purple-500 dark:border-purple-400 bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-xs font-bold">
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold text-amber-900 dark:text-amber-100">Add 50 (Full!)</div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  <div className="text-sm text-amber-700 dark:text-amber-300 font-medium">Resize needed...</div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold text-emerald-900 dark:text-emerald-100">After Resize (Capacity: 8)</div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                  <div className="flex gap-0">
                    {[10, 20, 30, 40, 50].map((val, idx) => (
                      <div key={idx} className="w-12 h-12 border border-emerald-500 dark:border-emerald-400 bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-xs font-bold">
                        {val}
                      </div>
                    ))}
                    {[null, null, null].map((_, idx) => (
                      <div key={idx} className="w-12 h-12 border border-slate-300 dark:border-slate-600 bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs text-slate-400">
                        -
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-4">
                💡 Typically doubles capacity (2x growth factor) when full
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Advantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Flexible size</li>
                <li>• No need to know size upfront</li>
                <li>• Easy to use (push/pop)</li>
                <li>• Amortized O(1) append</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Disadvantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Extra memory for capacity</li>
                <li>• Resize operation is O(n)</li>
                <li>• Heap allocation overhead</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Dynamic Arrays - JavaScript"
        language="javascript"
        code={`// JavaScript arrays are dynamic by default
const numbers = [];  // Start empty

// Adding elements - array grows automatically
numbers.push(10);  // [10]
numbers.push(20);  // [10, 20]
numbers.push(30);  // [10, 20, 30]
numbers.push(40);  // [10, 20, 30, 40]

console.log(numbers.length);  // 4

// Adding more elements
for (let i = 50; i <= 100; i += 10) {
  numbers.push(i);
}
console.log(numbers.length);  // 10

// Removing elements - array shrinks
numbers.pop();     // Removes 100
numbers.pop();     // Removes 90
console.log(numbers.length);  // 8

// Insert at any position
numbers.splice(2, 0, 25);  // Insert 25 at index 2
// [10, 20, 25, 30, 40, 50, 60, 70, 80]

// Dynamic resizing is handled automatically!`}
      />

      {/* MULTIDIMENSIONAL ARRAYS */}
      <Card className="border-emerald-200 dark:border-emerald-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Grid3x3 className="w-6 h-6 text-emerald-600" />
            3. Multidimensional Arrays (2D, 3D, etc.)
          </CardTitle>
          <CardDescription>Arrays of arrays for matrix and grid representations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
            <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-3 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Characteristics
            </h4>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>Array of arrays</strong> - Nested structure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>2D arrays</strong> - Matrices, grids, tables</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span><strong>3D arrays</strong> - Cubes, tensors, 3D spaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>Access using multiple indices: <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-xs">arr[i][j]</code></span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100">2D Array (Matrix)</h4>
            <div className="p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 rounded-xl border-2 border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <div className="flex flex-col items-center gap-2">
                  {[
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12]
                  ].map((row, rowIdx) => (
                    <div key={rowIdx} className="flex gap-2">
                      {row.map((val, colIdx) => (
                        <div key={colIdx} className="w-14 h-14 border-2 border-emerald-500 dark:border-emerald-400 bg-emerald-100 dark:bg-emerald-900 flex flex-col items-center justify-center">
                          <span className="text-base font-bold text-emerald-900 dark:text-emerald-100">{val}</span>
                          <span className="text-[9px] text-emerald-600 dark:text-emerald-400">[{rowIdx}][{colIdx}]</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                  <p>3 rows × 4 columns matrix</p>
                  <p className="text-xs mt-1">Access: <code className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded">matrix[row][col]</code></p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Advantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• Natural for grids/matrices</li>
                <li>• Intuitive row-column access</li>
                <li>• Easy to visualize</li>
                <li>• Good for game boards, images</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border-2 border-red-200 dark:border-red-700">
              <h5 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Disadvantages
              </h5>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li>• More memory usage</li>
                <li>• Complex iteration</li>
                <li>• Jagged arrays in JavaScript</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="2D Arrays - JavaScript"
        language="javascript"
        code={`// Creating a 2D array (3x4 matrix)
const matrix = [
  [1,  2,  3,  4],
  [5,  6,  7,  8],
  [9, 10, 11, 12]
];

// Accessing elements
console.log(matrix[0][0]);  // 1 (first row, first column)
console.log(matrix[1][2]);  // 7 (second row, third column)
console.log(matrix[2][3]);  // 12 (third row, fourth column)

// Modifying elements
matrix[1][1] = 99;
console.log(matrix[1][1]);  // 99

// Iterating through 2D array
for (let i = 0; i < matrix.length; i++) {        // rows
  for (let j = 0; j < matrix[i].length; j++) {  // columns
    console.log(\`[\${i}][\${j}] = \${matrix[i][j]}\`);
  }
}

// Creating empty 2D array
const rows = 3, cols = 4;
const emptyMatrix = Array(rows).fill(null).map(() => Array(cols).fill(0));
console.log(emptyMatrix);
// [[0,0,0,0], [0,0,0,0], [0,0,0,0]]

// 3D Array example
const cube = [
  [[1, 2], [3, 4]],
  [[5, 6], [7, 8]]
];
console.log(cube[0][1][1]);  // 4 (first layer, second row, second col)`}
      />

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle>Comparison Table</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-slate-300 dark:border-slate-700">
                  <th className="text-left p-3 font-semibold text-slate-900 dark:text-slate-100">Feature</th>
                  <th className="text-center p-3 font-semibold text-blue-900 dark:text-blue-100">Static</th>
                  <th className="text-center p-3 font-semibold text-purple-900 dark:text-purple-100">Dynamic</th>
                  <th className="text-center p-3 font-semibold text-emerald-900 dark:text-emerald-100">2D/3D</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Size flexibility</td>
                  <td className="p-3 text-center text-red-600">Fixed</td>
                  <td className="p-3 text-center text-green-600">Resizable</td>
                  <td className="p-3 text-center text-green-600">Resizable</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Memory location</td>
                  <td className="p-3 text-center text-blue-700 dark:text-blue-300">Stack</td>
                  <td className="p-3 text-center text-purple-700 dark:text-purple-300">Heap</td>
                  <td className="p-3 text-center text-emerald-700 dark:text-emerald-300">Heap</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Access time</td>
                  <td className="p-3 text-center text-green-600">O(1)</td>
                  <td className="p-3 text-center text-green-600">O(1)</td>
                  <td className="p-3 text-center text-green-600">O(1)</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Resize cost</td>
                  <td className="p-3 text-center text-red-600">N/A</td>
                  <td className="p-3 text-center text-orange-600">O(n)</td>
                  <td className="p-3 text-center text-orange-600">O(n×m)</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="p-3 text-slate-700 dark:text-slate-300">Memory efficient</td>
                  <td className="p-3 text-center text-green-600">✓</td>
                  <td className="p-3 text-center text-yellow-600">~</td>
                  <td className="p-3 text-center text-red-600">✗</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-700 dark:text-slate-300">Use case</td>
                  <td className="p-3 text-center text-xs">Known size</td>
                  <td className="p-3 text-center text-xs">Variable size</td>
                  <td className="p-3 text-center text-xs">Grids/matrices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-slate-600" />
            Use Cases
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl border-2 border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Static Arrays</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Fixed-size buffers</li>
                <li>• Embedded systems</li>
                <li>• Performance-critical code</li>
                <li>• RGB color values [255,0,0]</li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 rounded-xl border-2 border-purple-200 dark:border-purple-700">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Dynamic Arrays</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Shopping carts</li>
                <li>• User lists</li>
                <li>• Event logs</li>
                <li>• Any growing collection</li>
              </ul>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border-2 border-emerald-200 dark:border-emerald-700">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-3">Multidimensional</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>• Chess boards (8×8)</li>
                <li>• Image pixels (width×height)</li>
                <li>• Spreadsheets</li>
                <li>• Graph adjacency matrices</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="border-amber-200 dark:border-amber-700 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
        <Sparkles className="h-5 w-5 text-amber-600" />
        <AlertTitle>Choosing the Right Type</AlertTitle>
        <AlertDescription>
          <ul className="mt-2 space-y-1 text-sm">
            <li>• <strong>Static:</strong> When size is known and won't change (performance critical)</li>
            <li>• <strong>Dynamic:</strong> When size varies or is unknown (most common in JavaScript)</li>
            <li>• <strong>2D/3D:</strong> When working with matrices, grids, or spatial data</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
