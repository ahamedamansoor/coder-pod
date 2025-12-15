'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Eye,
  Users,
  CheckCircle,
  Code2,
  Lightbulb,
  Shield,
} from 'lucide-react';

export default function JavaScriptMockingSpies() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Users}
        category="JavaScript Testing"
        title="Mocking & Spies"
        description="Simulate and track function behavior in tests"
        colorTheme="yellow"
      />

      {/* What is Mocking */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-rose-50/20 dark:from-purple-950/10 dark:via-pink-950/5 dark:to-rose-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Users className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What are Mocks and Spies?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-purple-700 dark:text-purple-400">Mocks</strong> are fake functions that replace real implementations for testing. <strong className="text-pink-700 dark:text-pink-400">Spies</strong> track how functions are called without changing their behavior. Both help test code in isolation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Mocks</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Replace real function with fake implementation
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Control return values and behavior
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Spies</h4>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Watch function calls without changing it
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Track calls, arguments, and return values
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Mock */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Why Use Mocks and Spies?</CardTitle>
              <CardDescription>Testing benefits</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Isolation</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test one unit without dependencies (APIs, databases, files)
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Speed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fast tests - no network calls or slow operations
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Control</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Simulate errors, edge cases, and specific scenarios
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 1: Basic Mock Function</CardTitle>
          <CardDescription>Creating and using mock functions</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Using Jest
import { jest } from '@jest/globals';

// Create a mock function
const mockFn = jest.fn();

// Call it
mockFn('hello');
mockFn('world', 42);

// Assert it was called
expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledTimes(2);

// Assert specific arguments
expect(mockFn).toHaveBeenCalledWith('hello');
expect(mockFn).toHaveBeenLastCalledWith('world', 42);

// Check all calls
console.log(mockFn.mock.calls);
// [['hello'], ['world', 42]]

// Using Vitest
import { vi } from 'vitest';

const mockFn2 = vi.fn();
// Same API as Jest!`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Mock Return Values</CardTitle>
          <CardDescription>Controlling what mocks return</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Single return value
const mockFn = jest.fn().mockReturnValue(42);

console.log(mockFn()); // 42
console.log(mockFn()); // 42 (always returns 42)

// Different values for each call
const mockFn2 = jest.fn()
  .mockReturnValueOnce('first')
  .mockReturnValueOnce('second')
  .mockReturnValue('default');

console.log(mockFn2()); // 'first'
console.log(mockFn2()); // 'second'
console.log(mockFn2()); // 'default'
console.log(mockFn2()); // 'default'

// Mock implementation
const mockAdd = jest.fn((a, b) => a + b);

console.log(mockAdd(2, 3)); // 5
expect(mockAdd).toHaveBeenCalledWith(2, 3);

// Mock async function
const mockAsync = jest.fn()
  .mockResolvedValue({ data: 'success' });

const result = await mockAsync();
console.log(result); // { data: 'success' }

// Mock rejected promise
const mockError = jest.fn()
  .mockRejectedValue(new Error('Failed'));

try {
  await mockError();
} catch (e) {
  console.log(e.message); // 'Failed'
}`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Spying vs Mocking */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Eye className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Spies vs Mocks</CardTitle>
              <CardDescription>Understanding the difference</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">👀 Spy</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Watches existing function
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Original function still runs</li>
                  <li>• Tracks calls and arguments</li>
                  <li>• Records return values</li>
                  <li>• Doesn't change behavior</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">🎭 Mock</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  Replaces entire function
                </p>
                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                  <li>• Custom implementation</li>
                  <li>• Control return values</li>
                  <li>• Simulate errors</li>
                  <li>• Completely replaces behavior</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: Spying on Functions</CardTitle>
          <CardDescription>Using spies to track calls</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Spy on object method
const calculator = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

// Create spy (Jest)
const addSpy = jest.spyOn(calculator, 'add');

// Original function still works
const result = calculator.add(2, 3);
console.log(result); // 5

// But we can track calls
expect(addSpy).toHaveBeenCalled();
expect(addSpy).toHaveBeenCalledWith(2, 3);

// Can also override return value
addSpy.mockReturnValue(100);
console.log(calculator.add(2, 3)); // 100 (mocked)

// Restore original
addSpy.mockRestore();
console.log(calculator.add(2, 3)); // 5 (original)

// Vitest spy
import { vi } from 'vitest';

const multiplySpy = vi.spyOn(calculator, 'multiply');
calculator.multiply(4, 5);
expect(multiplySpy).toHaveBeenCalledWith(4, 5);`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: Mocking Modules</CardTitle>
          <CardDescription>Replace entire modules for testing</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// api.js
export async function fetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

// user-service.js
import { fetchUser } from './api';

export async function getUserName(id) {
  const user = await fetchUser(id);
  return user.name;
}

// user-service.test.js
import { fetchUser } from './api';
import { getUserName } from './user-service';

// Mock the entire module
jest.mock('./api');

test('gets user name', async () => {
  // Mock the fetchUser function
  fetchUser.mockResolvedValue({
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
  });
  
  const name = await getUserName(1);
  
  expect(name).toBe('Alice');
  expect(fetchUser).toHaveBeenCalledWith(1);
});

// Vitest module mocking
import { vi } from 'vitest';

vi.mock('./api', () => ({
  fetchUser: vi.fn()
}));`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 5: Mocking fetch() API</CardTitle>
          <CardDescription>Testing API calls without network</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Using Jest
global.fetch = jest.fn();

test('fetches user data', async () => {
  // Mock successful response
  fetch.mockResolvedValueOnce({
    ok: true,
    json: async () => ({ name: 'Alice', age: 25 })
  });
  
  const response = await fetch('/api/user');
  const data = await response.json();
  
  expect(data.name).toBe('Alice');
  expect(fetch).toHaveBeenCalledWith('/api/user');
});

test('handles fetch error', async () => {
  // Mock failed response
  fetch.mockResolvedValueOnce({
    ok: false,
    status: 404,
    json: async () => ({ error: 'Not found' })
  });
  
  const response = await fetch('/api/user');
  
  expect(response.ok).toBe(false);
  expect(response.status).toBe(404);
});

test('handles network error', async () => {
  // Mock network failure
  fetch.mockRejectedValueOnce(new Error('Network error'));
  
  await expect(fetch('/api/user')).rejects.toThrow('Network error');
});

// Clean up after tests
afterEach(() => {
  fetch.mockClear();
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Mock Implementation Patterns */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Common Mocking Patterns</CardTitle>
              <CardDescription>Practical examples</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Mock Timer Functions</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 font-mono">
                jest.useFakeTimers() / vi.useFakeTimers()
              </code>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Mock Date</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 font-mono">
                jest.setSystemTime(new Date('2024-01-01'))
              </code>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Partial Module Mock</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 font-mono">
                jest.mock('./module', () {'=>'} ({'{'} ...actualModule, foo: mockFoo {'}'}))</code>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">Mock Class Constructor</h4>
              <code className="text-xs text-gray-700 dark:text-gray-300 font-mono">
                jest.mock('./MyClass')
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 6: Mocking Timers</CardTitle>
          <CardDescription>Test time-dependent code</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Function that uses setTimeout
function delayedGreeting(name, callback) {
  setTimeout(() => {
    callback(\`Hello, \${name}!\`);
  }, 1000);
}

test('calls callback after delay', () => {
  // Enable fake timers
  jest.useFakeTimers();
  
  const callback = jest.fn();
  
  delayedGreeting('Alice', callback);
  
  // Callback not called yet
  expect(callback).not.toHaveBeenCalled();
  
  // Fast-forward time by 1 second
  jest.advanceTimersByTime(1000);
  
  // Now callback should be called
  expect(callback).toHaveBeenCalledWith('Hello, Alice!');
  
  // Restore real timers
  jest.useRealTimers();
});

// Test setInterval
test('polls every second', () => {
  jest.useFakeTimers();
  
  const callback = jest.fn();
  const intervalId = setInterval(callback, 1000);
  
  // No calls yet
  expect(callback).toHaveBeenCalledTimes(0);
  
  // Advance 1 second
  jest.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalledTimes(1);
  
  // Advance 2 more seconds
  jest.advanceTimersByTime(2000);
  expect(callback).toHaveBeenCalledTimes(3);
  
  clearInterval(intervalId);
  jest.useRealTimers();
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 7: Mocking Classes</CardTitle>
          <CardDescription>Replace class instances with mocks</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// database.js
export class Database {
  connect() {
    // Real database connection
  }
  
  async query(sql) {
    // Real database query
  }
}

// user-repository.js
import { Database } from './database';

export class UserRepository {
  constructor() {
    this.db = new Database();
  }
  
  async findUser(id) {
    await this.db.connect();
    return this.db.query(\`SELECT * FROM users WHERE id = \${id}\`);
  }
}

// user-repository.test.js
import { Database } from './database';
import { UserRepository } from './user-repository';

// Mock the entire Database class
jest.mock('./database');

test('finds user by id', async () => {
  // Mock database methods
  const mockConnect = jest.fn();
  const mockQuery = jest.fn().mockResolvedValue({
    id: 1,
    name: 'Alice'
  });
  
  // Make Database constructor return mock instance
  Database.mockImplementation(() => ({
    connect: mockConnect,
    query: mockQuery
  }));
  
  const repo = new UserRepository();
  const user = await repo.findUser(1);
  
  expect(mockConnect).toHaveBeenCalled();
  expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM users WHERE id = 1');
  expect(user.name).toBe('Alice');
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Mocking Best Practices</CardTitle>
              <CardDescription>Do's and don'ts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Mock external dependencies (APIs, databases)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Clear mocks between tests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Mock at module boundaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Use spies for observing behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Restore original implementations</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ❌ Don't
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Mock everything - test real code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Mock implementation details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Over-specify mock behavior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Forget to reset mocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 dark:text-red-400 mt-1">•</span>
                  <span>Test mock behavior instead of real logic</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-rose-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎭</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Mocks Replace Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Create fake implementations<br/>
                    Control return values
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">👀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Spies Watch Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Track calls and arguments<br/>
                    Original function still runs
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔌</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Mock Dependencies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    APIs, databases, external services<br/>
                    Fast, isolated tests
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🧹</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Clean Up Mocks</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Clear between tests<br/>
                    Restore originals
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Golden Rule</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Mock <strong>dependencies</strong>, not the code you're testing. Test real logic with fake data sources.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
