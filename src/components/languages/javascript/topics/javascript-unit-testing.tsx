'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  TestTube,
  CheckCircle,
  XCircle,
  Target,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptUnitTesting() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={TestTube}
        category="JavaScript Testing"
        title="Unit Testing"
        description="Test individual units of code in isolation for reliability"
        colorTheme="yellow"
      />

      {/* What is Unit Testing */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-teal-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 text-white shadow-lg">
              <TestTube className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Unit Testing?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Unit testing is the practice of testing <strong className="text-blue-700 dark:text-blue-400">individual units</strong> (functions, methods, components) of your code in <strong className="text-cyan-700 dark:text-cyan-400">isolation</strong>. Each test verifies that a specific piece of code works as expected.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Focused</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tests one function or method at a time
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Isolated</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                No external dependencies or side effects
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">Fast</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Runs quickly - thousands in seconds
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Your First Unit Test</CardTitle>
          <CardDescription>Testing a simple function</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Function to test
function add(a, b) {
  return a + b;
}

// Unit test
function testAdd() {
  const result = add(2, 3);
  
  if (result === 5) {
    console.log('✓ Test passed: add(2, 3) returns 5');
  } else {
    console.error('✗ Test failed: expected 5, got ' + result);
  }
}

testAdd(); // Run the test`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* AAA Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>AAA Pattern (Arrange-Act-Assert)</CardTitle>
              <CardDescription>The standard structure for writing tests</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">1. Arrange</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Set up test data and conditions
                </p>
                <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-blue-300 dark:border-blue-700">
{`// Arrange
const x = 10;
const y = 5;`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">2. Act</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Execute the function being tested
                </p>
                <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-green-300 dark:border-green-700">
{`// Act
const result = add(x, y);`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 overflow-hidden">
              <div className="bg-purple-100 dark:bg-purple-900/30 px-4 py-3 border-b-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300">3. Assert</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Verify the result is correct
                </p>
                <pre className="font-mono text-xs bg-white dark:bg-slate-900 p-3 rounded border border-purple-300 dark:border-purple-700">
{`// Assert
expect(result).toBe(15);`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: AAA Pattern in Action</CardTitle>
          <CardDescription>Complete test structure</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`function multiply(a, b) {
  return a * b;
}

function testMultiply() {
  // Arrange - Set up test data
  const num1 = 4;
  const num2 = 5;
  const expected = 20;
  
  // Act - Execute the function
  const actual = multiply(num1, num2);
  
  // Assert - Check the result
  if (actual === expected) {
    console.log('✓ Test passed');
  } else {
    console.error(\`✗ Test failed: expected \${expected}, got \${actual}\`);
  }
}

testMultiply();`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* What to Test */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>What Should You Test?</CardTitle>
              <CardDescription>Focus on behavior, not implementation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do Test
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Pure functions</strong> - Same input = same output</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Edge cases</strong> - Empty arrays, null, undefined, 0</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Error handling</strong> - Invalid inputs, exceptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Business logic</strong> - Core functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Public API</strong> - Functions users call</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Don't Test
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span><strong>Third-party code</strong> - Libraries are already tested</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span><strong>Implementation details</strong> - How it works internally</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span><strong>Trivial getters/setters</strong> - Simple property access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span><strong>Constants</strong> - Static values don't need tests</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: Testing Pure Functions</CardTitle>
          <CardDescription>Functions with no side effects are easiest to test</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Pure function - easy to test
function calculateDiscount(price, percentage) {
  if (price < 0 || percentage < 0 || percentage > 100) {
    throw new Error('Invalid input');
  }
  return price * (percentage / 100);
}

// Tests for pure function
function testCalculateDiscount() {
  // Test normal case
  console.assert(
    calculateDiscount(100, 10) === 10,
    'Should calculate 10% of 100'
  );
  
  // Test edge case - zero
  console.assert(
    calculateDiscount(100, 0) === 0,
    'Should handle 0% discount'
  );
  
  // Test edge case - 100%
  console.assert(
    calculateDiscount(100, 100) === 100,
    'Should handle 100% discount'
  );
  
  // Test error handling
  try {
    calculateDiscount(-50, 10);
    console.error('Should throw error for negative price');
  } catch (e) {
    console.log('✓ Correctly throws error for negative price');
  }
}

testCalculateDiscount();`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: Testing with Edge Cases</CardTitle>
          <CardDescription>Cover boundary conditions and special values</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`function getFirstElement(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Input must be an array');
  }
  return array[0];
}

// Comprehensive tests
function testGetFirstElement() {
  // Normal case
  console.assert(
    getFirstElement([1, 2, 3]) === 1,
    'Should return first element'
  );
  
  // Edge case: empty array
  console.assert(
    getFirstElement([]) === undefined,
    'Should return undefined for empty array'
  );
  
  // Edge case: single element
  console.assert(
    getFirstElement([42]) === 42,
    'Should work with single element'
  );
  
  // Edge case: null/undefined in array
  console.assert(
    getFirstElement([null, 1, 2]) === null,
    'Should return null if first element is null'
  );
  
  // Error case: not an array
  try {
    getFirstElement('not array');
    console.error('Should throw TypeError');
  } catch (e) {
    console.log('✓ Correctly throws TypeError for non-array');
  }
}

testGetFirstElement();`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 5: Testing Object Methods</CardTitle>
          <CardDescription>Testing methods on classes or objects</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(n) {
    this.result += n;
    return this;
  }
  
  subtract(n) {
    this.result -= n;
    return this;
  }
  
  getResult() {
    return this.result;
  }
  
  reset() {
    this.result = 0;
    return this;
  }
}

// Tests
function testCalculator() {
  // Test addition
  const calc1 = new Calculator();
  calc1.add(5);
  console.assert(
    calc1.getResult() === 5,
    'Should add correctly'
  );
  
  // Test chaining
  const calc2 = new Calculator();
  const result = calc2.add(10).subtract(3).getResult();
  console.assert(
    result === 7,
    'Should support method chaining'
  );
  
  // Test reset
  const calc3 = new Calculator();
  calc3.add(100).reset();
  console.assert(
    calc3.getResult() === 0,
    'Should reset to zero'
  );
  
  console.log('✓ All Calculator tests passed');
}

testCalculator();`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Test Coverage */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Test Coverage</CardTitle>
              <CardDescription>How much of your code is tested?</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>What is Coverage?</AlertTitle>
            <AlertDescription>
              Test coverage measures what percentage of your code is executed during tests. Aim for <strong>80%+</strong> coverage for critical code.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold mb-2 text-sm text-gray-900 dark:text-gray-100">Line Coverage</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                % of lines executed
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold mb-2 text-sm text-gray-900 dark:text-gray-100">Branch Coverage</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                % of if/else paths tested
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold mb-2 text-sm text-gray-900 dark:text-gray-100">Function Coverage</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                % of functions called
              </p>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-800">
              <h4 className="font-semibold mb-2 text-sm text-gray-900 dark:text-gray-100">Statement Coverage</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                % of statements run
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 6: Testing Different Branches</CardTitle>
          <CardDescription>Ensure all code paths are tested</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`function getGrade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

// Test all branches for 100% coverage
function testGetGrade() {
  // Test each branch
  console.assert(getGrade(95) === 'A', 'Should return A for 90+');
  console.assert(getGrade(85) === 'B', 'Should return B for 80-89');
  console.assert(getGrade(75) === 'C', 'Should return C for 70-79');
  console.assert(getGrade(65) === 'D', 'Should return D for 60-69');
  console.assert(getGrade(50) === 'F', 'Should return F for <60');
  
  // Test boundaries
  console.assert(getGrade(90) === 'A', 'Should return A for exactly 90');
  console.assert(getGrade(89) === 'B', 'Should return B for 89');
  console.assert(getGrade(60) === 'D', 'Should return D for exactly 60');
  console.assert(getGrade(59) === 'F', 'Should return F for 59');
  
  console.log('✓ All grade tests passed - 100% branch coverage');
}

testGetGrade();`}</code>
          </pre>
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
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Test Units in Isolation</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Each test should focus on one function<br/>
                    No dependencies on external systems
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📋</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">AAA Pattern</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Arrange → Act → Assert<br/>
                    Standard test structure
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔍</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Test Edge Cases</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Empty arrays, null, undefined, 0<br/>
                    Boundaries and error conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📊</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Aim for 80%+ Coverage</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test all critical paths<br/>
                    100% coverage isn't always necessary
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-300 dark:border-emerald-700">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">Remember</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Unit tests should be <strong>fast</strong>, <strong>independent</strong>, and <strong>repeatable</strong>. They're your first line of defense against bugs!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
