'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Package,
  CheckCircle,
  Zap,
  Code2,
  Lightbulb,
  PlayCircle,
} from 'lucide-react';

export default function JavaScriptJest() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Package}
        category="JavaScript Testing"
        title="Jest Testing Framework"
        description="Delightful JavaScript testing with zero configuration"
        colorTheme="yellow"
      />

      {/* What is Jest */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-pink-50/30 to-rose-50/20 dark:from-red-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 text-white shadow-lg">
              <Package className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Jest?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Jest is a <strong className="text-red-700 dark:text-red-400">delightful</strong> JavaScript testing framework maintained by Facebook. It works with <strong className="text-pink-700 dark:text-pink-400">zero configuration</strong> for most projects and provides a complete testing solution.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <Zap className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold text-sm text-green-900 dark:text-green-100">Fast</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Parallel test execution</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100">Complete</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Assertions, mocks, spies</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <Package className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold text-sm text-purple-900 dark:text-purple-100">Zero Config</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Works out of the box</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/30 dark:to-orange-900/30 border-2 border-amber-200 dark:border-amber-800/30">
              <PlayCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 mb-2" />
              <h4 className="font-semibold text-sm text-amber-900 dark:text-amber-100">Snapshots</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Test UI components</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Package className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Installation & Setup</CardTitle>
              <CardDescription>Get started with Jest in seconds</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-slate-900 dark:bg-slate-950 border border-slate-700">
            <code className="text-sm text-emerald-400 font-mono">
              npm install --save-dev jest
            </code>
          </div>

          <Alert className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/30">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle>package.json Setup</AlertTitle>
            <AlertDescription>
              Add test script: <code className="text-sm">"test": "jest"</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 1: Your First Jest Test</CardTitle>
          <CardDescription>Basic test with Jest syntax</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// math.js
function add(a, b) {
  return a + b;
}

module.exports = { add };

// math.test.js
const { add } = require('./math');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds negative numbers', () => {
  expect(add(-1, -2)).toBe(-3);
});

// Run: npm test`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Matchers */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Common Matchers</CardTitle>
              <CardDescription>Jest's expressive assertion methods</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Equality</h4>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(value).toBe(5)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Strict equality (===)</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(obj).toEqual({'{'}...{'}'})
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Deep equality</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Truthiness</h4>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(value).toBeTruthy()
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Any truthy value</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(value).toBeNull()
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Matches null only</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Numbers</h4>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(n).toBeGreaterThan(3)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Greater than comparison</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(n).toBeCloseTo(0.3)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Floating point equality</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">Strings & Arrays</h4>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(str).toMatch(/pattern/)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Regex matching</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
                <code className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  expect(arr).toContain(item)
                </code>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Array includes item</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Using Matchers</CardTitle>
          <CardDescription>Different assertion styles</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`test('matchers examples', () => {
  // Equality
  expect(2 + 2).toBe(4);
  expect({ name: 'Alice' }).toEqual({ name: 'Alice' });
  
  // Truthiness
  expect(null).toBeNull();
  expect(undefined).toBeUndefined();
  expect('hello').toBeTruthy();
  expect(0).toBeFalsy();
  
  // Numbers
  expect(10).toBeGreaterThan(5);
  expect(10).toBeGreaterThanOrEqual(10);
  expect(0.1 + 0.2).toBeCloseTo(0.3); // Floating point
  
  // Strings
  expect('Hello World').toMatch(/World/);
  expect('test@example.com').toMatch(/^\\w+@\\w+\\.\\w+$/);
  
  // Arrays
  const fruits = ['apple', 'banana', 'orange'];
  expect(fruits).toContain('banana');
  expect(fruits).toHaveLength(3);
  
  // Objects
  const user = { name: 'John', age: 30 };
  expect(user).toHaveProperty('name');
  expect(user).toHaveProperty('age', 30);
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Test Structure */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: Test Suites with describe()</CardTitle>
          <CardDescription>Organizing tests into groups</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// calculator.js
class Calculator {
  add(a, b) { return a + b; }
  subtract(a, b) { return a - b; }
  multiply(a, b) { return a * b; }
  divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }
}

module.exports = Calculator;

// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
  let calc;
  
  // Runs before each test
  beforeEach(() => {
    calc = new Calculator();
  });
  
  describe('addition', () => {
    test('adds positive numbers', () => {
      expect(calc.add(2, 3)).toBe(5);
    });
    
    test('adds negative numbers', () => {
      expect(calc.add(-2, -3)).toBe(-5);
    });
  });
  
  describe('division', () => {
    test('divides numbers', () => {
      expect(calc.divide(10, 2)).toBe(5);
    });
    
    test('throws error on division by zero', () => {
      expect(() => calc.divide(10, 0)).toThrow('Division by zero');
    });
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Lifecycle Hooks */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Zap className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Setup & Teardown</CardTitle>
              <CardDescription>Lifecycle hooks for test preparation</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">beforeEach()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Runs before each test in the suite
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                Use for: Setup common test data
              </code>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">afterEach()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Runs after each test completes
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                Use for: Cleanup, reset state
              </code>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">beforeAll()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Runs once before all tests
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                Use for: Expensive setup (DB connection)
              </code>
            </div>

            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">afterAll()</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Runs once after all tests
              </p>
              <code className="text-xs text-gray-600 dark:text-gray-400">
                Use for: Final cleanup (close connections)
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: Async Testing</CardTitle>
          <CardDescription>Testing asynchronous code with Jest</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// api.js
async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

// api.test.js

// Method 1: async/await
test('fetches user data', async () => {
  const user = await fetchUser(1);
  expect(user.name).toBe('John Doe');
});

// Method 2: return promise
test('fetches user with promise', () => {
  return fetchUser(1).then(user => {
    expect(user.name).toBe('John Doe');
  });
});

// Method 3: resolves matcher
test('fetches user with resolves', async () => {
  await expect(fetchUser(1)).resolves.toHaveProperty('name', 'John Doe');
});

// Testing rejections
test('handles errors', async () => {
  await expect(fetchUser(-1)).rejects.toThrow('User not found');
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 5: Mocking Functions</CardTitle>
          <CardDescription>Creating mock functions for testing</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Basic mock function
test('mock function basics', () => {
  const mockFn = jest.fn();
  
  // Call the mock
  mockFn('hello');
  mockFn('world');
  
  // Assertions
  expect(mockFn).toHaveBeenCalled();
  expect(mockFn).toHaveBeenCalledTimes(2);
  expect(mockFn).toHaveBeenCalledWith('hello');
  expect(mockFn).toHaveBeenLastCalledWith('world');
});

// Mock with return value
test('mock with return value', () => {
  const mockFn = jest.fn().mockReturnValue(42);
  
  expect(mockFn()).toBe(42);
  expect(mockFn()).toBe(42); // Always returns 42
});

// Mock implementation
test('mock implementation', () => {
  const mockFn = jest.fn((x, y) => x + y);
  
  expect(mockFn(2, 3)).toBe(5);
});

// Mock resolved value (for promises)
test('mock async function', async () => {
  const mockFn = jest.fn().mockResolvedValue({ data: 'success' });
  
  const result = await mockFn();
  expect(result.data).toBe('success');
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 6: Snapshot Testing</CardTitle>
          <CardDescription>Testing UI components and data structures</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Link.js
function Link({ page, children }) {
  return <a href={page}>{children}</a>;
}

// Link.test.js
import renderer from 'react-test-renderer';
import Link from './Link';

test('Link renders correctly', () => {
  const tree = renderer
    .create(<Link page="https://example.com">Example</Link>)
    .toJSON();
  
  expect(tree).toMatchSnapshot();
  // Creates __snapshots__/Link.test.js.snap
});

// Inline snapshots (no separate file)
test('inline snapshot', () => {
  const data = { name: 'John', age: 30 };
  
  expect(data).toMatchInlineSnapshot(\`
    {
      "age": 30,
      "name": "John",
    }
  \`);
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Jest Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Code2 className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Jest Configuration</CardTitle>
              <CardDescription>Common configuration options</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">jest.config.js</h4>
            <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
{`module.exports = {
  testEnvironment: 'node',     // or 'jsdom' for browser
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: ['src/**/*.js'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
};`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 dark:from-red-950/20 dark:via-pink-950/10 dark:to-rose-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Zero Configuration</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Works out of the box<br/>
                    Just run <code>npm test</code>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✅</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Rich Matchers</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    toBe, toEqual, toContain, etc.<br/>
                    Expressive assertions
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎭</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Built-in Mocking</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    jest.fn(), mock modules<br/>
                    No extra libraries needed
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📸</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Snapshot Testing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Test UI components easily<br/>
                    Auto-detect changes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-950/30 dark:to-emerald-950/30 border-green-300 dark:border-green-700">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Getting Started</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Install: <code>npm install --save-dev jest</code><br/>
              Run: <code>npm test</code> - Jest will find and run all <code>*.test.js</code> files!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
