'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Target,
  CheckCircle,
  XCircle,
  Code2,
  Lightbulb,
  RefreshCw,
} from 'lucide-react';

export default function JavaScriptTDD() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={RefreshCw}
        category="JavaScript Testing"
        title="Test-Driven Development (TDD)"
        description="Write tests first, then make them pass"
        colorTheme="yellow"
      />

      {/* What is TDD */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-orange-50/30 to-amber-50/20 dark:from-red-950/10 dark:via-orange-950/5 dark:to-amber-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-lg">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Test-Driven Development?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                TDD is a development approach where you write <strong className="text-red-700 dark:text-red-400">tests first</strong>, before writing the actual code. The test initially fails, then you write just enough code to make it pass, and finally refactor for quality.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Red-Green-Refactor Cycle */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <RefreshCw className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>The Red-Green-Refactor Cycle</CardTitle>
              <CardDescription>The core TDD workflow</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  1. 🔴 Red
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Write a failing test first
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Write test for desired behavior</li>
                  <li>• Test fails (code doesn't exist)</li>
                  <li>• Defines what success looks like</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  2. 🟢 Green
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Make the test pass
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Write minimal code to pass</li>
                  <li>• Don't worry about perfection</li>
                  <li>• Just make it work</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  3. 🔵 Refactor
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Improve the code
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Clean up implementation</li>
                  <li>• Remove duplication</li>
                  <li>• Tests still pass</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <RefreshCw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>The Cycle Repeats</AlertTitle>
            <AlertDescription>
              After refactoring, start again with the next test. This continuous cycle ensures code quality and test coverage.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 1: TDD in Action - String Reversal</CardTitle>
          <CardDescription>Complete TDD cycle from start to finish</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// STEP 1: 🔴 RED - Write failing test first
test('reverses a string', () => {
  expect(reverse('hello')).toBe('olleh');
});
// ❌ Test fails: reverse is not defined

// STEP 2: 🟢 GREEN - Write minimal code to pass
function reverse(str) {
  return str.split('').reverse().join('');
}
// ✅ Test passes!

// STEP 3: 🔵 REFACTOR - Improve (optional in this case)
// Code is already clean, move to next test

// NEXT TEST: 🔴 RED - Add edge case
test('handles empty string', () => {
  expect(reverse('')).toBe('');
});
// ✅ Already passes with current implementation!

// NEXT TEST: 🔴 RED - Another edge case
test('handles single character', () => {
  expect(reverse('a')).toBe('a');
});
// ✅ Passes!

// TDD complete - all tests pass, feature is done`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Building a Calculator with TDD</CardTitle>
          <CardDescription>Step-by-step TDD process</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Test 1: 🔴 RED
test('adds two numbers', () => {
  const calc = new Calculator();
  expect(calc.add(2, 3)).toBe(5);
});
// ❌ Fails: Calculator doesn't exist

// 🟢 GREEN: Minimal implementation
class Calculator {
  add(a, b) {
    return a + b;
  }
}
// ✅ Passes!

// Test 2: 🔴 RED
test('subtracts two numbers', () => {
  const calc = new Calculator();
  expect(calc.subtract(5, 3)).toBe(2);
});
// ❌ Fails: subtract doesn't exist

// 🟢 GREEN: Add subtract method
class Calculator {
  add(a, b) {
    return a + b;
  }
  
  subtract(a, b) {
    return a - b;
  }
}
// ✅ Passes!

// Test 3: 🔴 RED - Chain operations
test('chains operations', () => {
  const calc = new Calculator();
  const result = calc.add(10, 5).subtract(3).getResult();
  expect(result).toBe(12);
});
// ❌ Fails: Methods don't return this

// 🟢 GREEN: Enable chaining
class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(a, b = null) {
    if (b === null) {
      this.result += a;
    } else {
      this.result = a + b;
    }
    return this;
  }
  
  subtract(a, b = null) {
    if (b === null) {
      this.result -= a;
    } else {
      this.result = a - b;
    }
    return this;
  }
  
  getResult() {
    return this.result;
  }
}
// ✅ All tests pass!

// 🔵 REFACTOR: Clean up implementation (if needed)`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Benefits of TDD */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Benefits of TDD</CardTitle>
              <CardDescription>Why write tests first?</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Advantages
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>100% test coverage</strong> - Every line has a test</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Better design</strong> - Tests force modular code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Confidence</strong> - Know code works before writing it</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Documentation</strong> - Tests show how code should work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Fewer bugs</strong> - Catch issues early</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                ⚠️ Challenges
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span><strong>Slower initially</strong> - Takes time to adjust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span><strong>Learning curve</strong> - Requires practice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span><strong>Over-testing</strong> - Can test too many details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span><strong>Difficult for UI</strong> - Visual components are harder</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: TDD for Array Utilities</CardTitle>
          <CardDescription>Building features test-first</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Feature: Get unique values from array

// Test 1: 🔴 RED - Basic functionality
test('returns unique values', () => {
  expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
});
// ❌ Fails: unique doesn't exist

// 🟢 GREEN: Minimal implementation
function unique(arr) {
  return [...new Set(arr)];
}
// ✅ Passes!

// Test 2: 🔴 RED - Empty array
test('handles empty array', () => {
  expect(unique([])).toEqual([]);
});
// ✅ Already passes!

// Test 3: 🔴 RED - Non-primitives
test('handles objects', () => {
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const result = unique([obj1, obj2, obj1]);
  expect(result).toEqual([obj1, obj2]);
});
// ✅ Passes! Set handles object references

// Test 4: 🔴 RED - Custom comparator
test('uses custom comparator', () => {
  const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
  const result = unique(arr, (a, b) => a.id === b.id);
  expect(result).toEqual([{ id: 1 }, { id: 2 }]);
});
// ❌ Fails: No comparator support

// 🟢 GREEN: Add comparator
function unique(arr, compareFn) {
  if (!compareFn) {
    return [...new Set(arr)];
  }
  
  return arr.reduce((acc, item) => {
    const exists = acc.some(x => compareFn(x, item));
    return exists ? acc : [...acc, item];
  }, []);
}
// ✅ All tests pass!

// 🔵 REFACTOR: Already clean!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* TDD Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>TDD Best Practices</CardTitle>
              <CardDescription>How to do TDD effectively</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Start Simple</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Begin with the simplest test case. Don't try to handle all edge cases at once.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">One Test at a Time</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Write one failing test, make it pass, then move to the next. Don't write multiple failing tests.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Small Steps</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Take tiny steps. Each cycle should be quick (1-5 minutes). Don't write too much code at once.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Refactor Confidently</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Tests give you safety to refactor. If tests pass, your refactoring didn't break anything.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Test Behavior, Not Implementation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Focus on what the code should do, not how it does it. This makes tests more resilient to refactoring.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: TDD for Validation Function</CardTitle>
          <CardDescription>Real-world TDD example</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Feature: Email validator

// Test 1: 🔴 RED - Valid email
test('validates correct email', () => {
  expect(isValidEmail('test@example.com')).toBe(true);
});
// ❌ Fails

// 🟢 GREEN
function isValidEmail(email) {
  return email.includes('@');
}
// ✅ Passes (but too simple)

// Test 2: 🔴 RED - Must have domain
test('requires domain', () => {
  expect(isValidEmail('test@')).toBe(false);
});
// ❌ Fails

// 🟢 GREEN
function isValidEmail(email) {
  return email.includes('@') && email.split('@')[1].length > 0;
}
// ✅ Passes

// Test 3: 🔴 RED - Must have username
test('requires username', () => {
  expect(isValidEmail('@example.com')).toBe(false);
});
// ❌ Fails

// 🟢 GREEN
function isValidEmail(email) {
  const parts = email.split('@');
  return parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;
}
// ✅ Passes

// Test 4: 🔴 RED - Domain must have dot
test('domain must have dot', () => {
  expect(isValidEmail('test@example')).toBe(false);
  expect(isValidEmail('test@example.com')).toBe(true);
});
// ❌ Fails

// 🟢 GREEN
function isValidEmail(email) {
  const parts = email.split('@');
  if (parts.length !== 2) return false;
  const [username, domain] = parts;
  return username.length > 0 && domain.includes('.');
}
// ✅ All tests pass!

// 🔵 REFACTOR: Use regex for better validation
function isValidEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}
// ✅ All tests still pass, cleaner implementation!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* When to Use TDD */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>When to Use TDD</CardTitle>
              <CardDescription>Choosing the right approach</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Great For</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Business logic and algorithms</li>
                <li>• Utility functions and helpers</li>
                <li>• Data transformations</li>
                <li>• APIs and endpoints</li>
                <li>• Core features</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">⚠️ Less Useful For</h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• UI/visual components</li>
                <li>• Prototypes and experiments</li>
                <li>• External integrations</li>
                <li>• Unclear requirements</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-amber-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-400 to-orange-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔴</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Red: Write Failing Test</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test what you want to build<br/>
                    It should fail initially
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🟢</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Green: Make It Pass</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Write minimal code<br/>
                    Just make the test pass
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔵</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Refactor: Improve Code</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clean up implementation<br/>
                    Tests give you confidence
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔁</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Repeat the Cycle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    One feature at a time<br/>
                    Small, incremental steps
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Start Small</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              TDD takes practice. Start with simple functions, then gradually apply it to more complex features. The rhythm becomes natural over time!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
