'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, TrendingUp, AlertCircle, Lightbulb, Code, CheckCircle } from 'lucide-react';

export default function BigONotation() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Timer className="w-10 h-10 text-slate-600" />
          <h1 className="text-4xl font-bold text-foreground">Big O Notation Fundamentals</h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
          Master the language of algorithm efficiency and learn to analyze time and space complexity.
        </p>
      </div>

      {/* What is Big O */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-blue-600" />
            What is Big O Notation?
          </CardTitle>
          <CardDescription>
            Understanding the mathematical notation for describing algorithm performance
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            <strong>Big O notation</strong> is a mathematical way to describe how the runtime or space requirements 
            of an algorithm grow as the input size increases. It focuses on the <strong>worst-case scenario</strong> 
            and ignores constant factors and lower-order terms.
          </p>
          <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Key Principle</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Big O describes the <strong>upper bound</strong> of an algorithm's growth rate. 
              If an algorithm is O(n), it means the time or space will not grow faster than a linear function of n.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Common Complexities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Common Time Complexities
          </CardTitle>
          <CardDescription>From fastest to slowest</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                complexity: 'O(1)',
                name: 'Constant Time',
                description: 'Execution time does not depend on input size',
                examples: 'Array access, hash table lookup, pushing to stack',
                color: 'green',
              },
              {
                complexity: 'O(log n)',
                name: 'Logarithmic Time',
                description: 'Execution time grows logarithmically with input',
                examples: 'Binary search, balanced BST operations',
                color: 'lime',
              },
              {
                complexity: 'O(n)',
                name: 'Linear Time',
                description: 'Execution time grows linearly with input',
                examples: 'Linear search, array traversal, finding max/min',
                color: 'yellow',
              },
              {
                complexity: 'O(n log n)',
                name: 'Linearithmic Time',
                description: 'Common in efficient sorting algorithms',
                examples: 'Merge sort, quick sort (average), heap sort',
                color: 'orange',
              },
              {
                complexity: 'O(n²)',
                name: 'Quadratic Time',
                description: 'Nested loops over input',
                examples: 'Bubble sort, insertion sort, selection sort',
                color: 'red',
              },
              {
                complexity: 'O(2ⁿ)',
                name: 'Exponential Time',
                description: 'Doubles with each additional input',
                examples: 'Recursive fibonacci, subsets generation',
                color: 'purple',
              },
              {
                complexity: 'O(n!)',
                name: 'Factorial Time',
                description: 'Slowest - generates all permutations',
                examples: 'Traveling salesman (brute force), permutations',
                color: 'slate',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border bg-${item.color}-50 dark:bg-${item.color}-950/20 border-${item.color}-200 dark:border-${item.color}-800`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <code className={`text-lg font-bold text-${item.color}-700 dark:text-${item.color}-400`}>
                        {item.complexity}
                      </code>
                      <Badge variant="outline">{item.name}</Badge>
                    </div>
                    <p className="text-sm mb-2">{item.description}</p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Examples:</strong> {item.examples}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-6 h-6 text-purple-600" />
            Code Examples
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* O(1) Example */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <code className="text-green-600 font-semibold">O(1) - Constant Time</code>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
{`function getFirstElement(arr) {
    return arr[0];  // Always takes the same time
}

function addToHashMap(map, key, value) {
    map[key] = value;  // O(1) average case
}`}
                </pre>
              </div>
            </div>

            {/* O(n) Example */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <code className="text-yellow-600 font-semibold">O(n) - Linear Time</code>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
{`function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {  // Loops n times
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}`}
                </pre>
              </div>
            </div>

            {/* O(n²) Example */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <code className="text-red-600 font-semibold">O(n²) - Quadratic Time</code>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
{`function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {       // n times
        for (let j = 0; j < arr.length - 1; j++) { // n times
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}`}
                </pre>
              </div>
            </div>

            {/* O(log n) Example */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <code className="text-lime-600 font-semibold">O(log n) - Logarithmic Time</code>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
{`function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;  // Halves the search space each iteration
}`}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Rules for Calculating Big O */}
      <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-900 dark:text-blue-100">
            <Lightbulb className="w-6 h-6" />
            Rules for Calculating Big O
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Drop Constants:</strong> O(2n) becomes O(n), O(500) becomes O(1)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Drop Non-Dominant Terms:</strong> O(n² + n) becomes O(n²), O(n + log n) becomes O(n)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Different Inputs = Different Variables:</strong> If two arrays, use O(a + b) not O(n)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Nested Loops = Multiply:</strong> Two nested loops = O(n²), three nested = O(n³)
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Sequential Loops = Add:</strong> Loop then another loop = O(n + m) = O(n) if same input
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common Pitfalls */}
      <Card className="border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-900 dark:text-amber-100">
            <AlertCircle className="w-6 h-6" />
            Common Pitfalls
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Confusing <strong>best case</strong> with Big O (Big O is always worst case)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Forgetting that Big O describes <strong>growth rate</strong>, not exact time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Not accounting for hidden operations (like array resizing in dynamic arrays)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Assuming all O(1) operations take the same time in practice</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Practice Problems */}
      <Card>
        <CardHeader>
          <CardTitle>Practice: Analyze These Complexities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm font-semibold mb-2">Problem 1: What is the time complexity?</p>
              <pre className="text-sm overflow-x-auto">
{`function mystery(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

Answer: O(n²) - nested loops still quadratic`}
              </pre>
            </div>

            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm font-semibold mb-2">Problem 2: What is the time complexity?</p>
              <pre className="text-sm overflow-x-auto">
{`function mystery2(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
    return sum;
}

Answer: O(n) - two sequential loops = O(n + n) = O(n)`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
