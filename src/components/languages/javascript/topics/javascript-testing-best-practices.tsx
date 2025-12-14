'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Award,
  CheckCircle,
  XCircle,
  Lightbulb,
  Target,
  Shield,
} from 'lucide-react';

export default function JavaScriptTestingBestPractices() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Award}
        category="JavaScript Testing"
        title="Testing Best Practices"
        description="Write better, more maintainable tests"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50/50 via-teal-50/30 to-cyan-50/20 dark:from-emerald-950/10 dark:via-teal-950/5 dark:to-cyan-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg">
              <Award className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Testing Best Practices
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Good tests are <strong className="text-emerald-700 dark:text-emerald-400">readable</strong>, <strong className="text-teal-700 dark:text-teal-400">maintainable</strong>, and <strong className="text-cyan-700 dark:text-cyan-400">reliable</strong>. Following best practices ensures your test suite provides value and doesn't become a burden.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Naming */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Write Descriptive Test Names</CardTitle>
              <CardDescription>Tests should clearly describe what they test</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Bad Names
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`test('test1', () => { ... });

test('it works', () => { ... });

test('user', () => { ... });

test('edge case', () => { ... });`}</pre>
                <p className="text-xs text-red-600 dark:text-red-400 mt-3">
                  ❌ Vague, unclear what's being tested
                </p>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ✅ Good Names
                </h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`test('adds two numbers correctly', () => { ... });

test('returns error for invalid email', () => { ... });

test('user can login with valid credentials', () => { ... });

test('handles empty array input', () => { ... });`}</pre>
                <p className="text-xs text-green-600 dark:text-green-400 mt-3">
                  ✅ Clear, describes behavior being tested
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 1: Test Naming Patterns</CardTitle>
          <CardDescription>Different styles for descriptive test names</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Pattern 1: "should" pattern
test('should return sum of two numbers', () => {
  expect(add(2, 3)).toBe(5);
});

// Pattern 2: Behavioral description
test('returns user data when ID exists', () => {
  const user = findUser(1);
  expect(user).toBeDefined();
});

// Pattern 3: Given-When-Then format
test('given valid email, when user signs up, then account is created', () => {
  const result = signup('test@example.com', 'password');
  expect(result.success).toBe(true);
});

// Pattern 4: Error scenarios
test('throws error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero');
});

// Pattern 5: Edge cases
test('returns empty array when input is null', () => {
  expect(filterItems(null)).toEqual([]);
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* AAA Pattern */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Follow the AAA Pattern</CardTitle>
              <CardDescription>Arrange, Act, Assert for clear test structure</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30 mb-4">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>AAA Pattern</AlertTitle>
            <AlertDescription>
              <strong>Arrange:</strong> Setup test data<br/>
              <strong>Act:</strong> Execute the code being tested<br/>
              <strong>Assert:</strong> Verify the results
            </AlertDescription>
          </Alert>

          <div className="p-5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
            <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
{`test('calculates total price with discount', () => {
  // Arrange - Setup
  const cart = {
    items: [
      { name: 'Book', price: 20 },
      { name: 'Pen', price: 5 }
    ]
  };
  const discountCode = 'SAVE10';
  
  // Act - Execute
  const total = calculateTotal(cart, discountCode);
  
  // Assert - Verify
  expect(total).toBe(22.5); // 25 - 10% = 22.5
});`}</pre>
          </div>
        </CardContent>
      </Card>

      {/* One Assertion Per Test */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Test One Thing at a Time</CardTitle>
              <CardDescription>Keep tests focused and isolated</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Too Many Things</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
{`test('user operations', () => {
  // Testing multiple things!
  const user = createUser('Alice');
  expect(user.name).toBe('Alice');
  
  updateUser(user, { age: 25 });
  expect(user.age).toBe(25);
  
  deleteUser(user.id);
  expect(findUser(user.id)).toBeNull();
});
// ❌ Tests 3 different operations`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ One Thing Each</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
{`test('creates user with name', () => {
  const user = createUser('Alice');
  expect(user.name).toBe('Alice');
});

test('updates user age', () => {
  const user = createUser('Alice');
  updateUser(user, { age: 25 });
  expect(user.age).toBe(25);
});

test('deletes user by id', () => {
  const user = createUser('Alice');
  deleteUser(user.id);
  expect(findUser(user.id)).toBeNull();
});
// ✅ Each test focuses on one operation`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Independent Tests</CardTitle>
          <CardDescription>Tests should not depend on each other</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// ❌ BAD: Tests depend on execution order
let user;

test('creates user', () => {
  user = createUser('Alice'); // Sets global variable
  expect(user).toBeDefined();
});

test('updates user', () => {
  updateUser(user, { age: 25 }); // Depends on previous test!
  expect(user.age).toBe(25);
});

// ✅ GOOD: Each test is independent
test('creates user with correct data', () => {
  const user = createUser('Alice');
  expect(user.name).toBe('Alice');
  expect(user.id).toBeDefined();
});

test('updates user age successfully', () => {
  const user = createUser('Bob'); // Create fresh user
  updateUser(user, { age: 30 });
  expect(user.age).toBe(30);
});

// ✅ BETTER: Use beforeEach for common setup
describe('User operations', () => {
  let user;
  
  beforeEach(() => {
    user = createUser('Alice'); // Fresh user for each test
  });
  
  test('has correct name', () => {
    expect(user.name).toBe('Alice');
  });
  
  test('can update age', () => {
    updateUser(user, { age: 25 });
    expect(user.age).toBe(25);
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Test Data */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Use Meaningful Test Data</CardTitle>
              <CardDescription>Make test data clear and realistic</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Unclear Data</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
{`test('test', () => {
  const a = foo('x', 1);
  expect(a).toBe(2);
});
// ❌ What is 'x'? Why 1? Why expect 2?`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Clear Data</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed">
{`test('calculates sales tax', () => {
  const price = 100;
  const taxRate = 0.1; // 10%
  const expectedTotal = 110;
  
  const total = addTax(price, taxRate);
  expect(total).toBe(expectedTotal);
});
// ✅ Clear what's being tested and why`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: Test Fixtures and Helpers</CardTitle>
          <CardDescription>Reusable test data and utilities</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// test-helpers.js - Shared test utilities
export const createTestUser = (overrides = {}) => ({
  id: 1,
  name: 'Test User',
  email: 'test@example.com',
  role: 'user',
  ...overrides
});

export const createTestProduct = (overrides = {}) => ({
  id: 1,
  name: 'Test Product',
  price: 99.99,
  stock: 10,
  ...overrides
});

// Using in tests
import { createTestUser, createTestProduct } from './test-helpers';

test('applies employee discount', () => {
  const employee = createTestUser({ role: 'employee' });
  const product = createTestProduct({ price: 100 });
  
  const discountedPrice = calculatePrice(product, employee);
  
  expect(discountedPrice).toBe(80); // 20% employee discount
});

test('regular users pay full price', () => {
  const regularUser = createTestUser(); // Default role: 'user'
  const product = createTestProduct({ price: 100 });
  
  const price = calculatePrice(product, regularUser);
  
  expect(price).toBe(100); // No discount
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Avoid Test Duplication */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Shield className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>DRY Tests (Don't Repeat Yourself)</CardTitle>
              <CardDescription>Extract common logic into helpers</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Use describe() for Grouping</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Group related tests together with shared setup
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Use beforeEach() for Setup</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run common setup before each test automatically
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Create Helper Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Extract repeated logic into reusable functions
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: Test Organization</CardTitle>
          <CardDescription>Organizing tests with describe() and hooks</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`describe('Shopping Cart', () => {
  let cart;
  
  beforeEach(() => {
    cart = new ShoppingCart(); // Fresh cart for each test
  });
  
  describe('adding items', () => {
    test('adds item to cart', () => {
      cart.add({ id: 1, name: 'Book', price: 20 });
      expect(cart.items).toHaveLength(1);
    });
    
    test('increases quantity for duplicate items', () => {
      const item = { id: 1, name: 'Book', price: 20 };
      cart.add(item);
      cart.add(item);
      
      expect(cart.items).toHaveLength(1);
      expect(cart.items[0].quantity).toBe(2);
    });
  });
  
  describe('calculating total', () => {
    beforeEach(() => {
      cart.add({ id: 1, name: 'Book', price: 20 });
      cart.add({ id: 2, name: 'Pen', price: 5 });
    });
    
    test('calculates total without discount', () => {
      expect(cart.getTotal()).toBe(25);
    });
    
    test('applies discount code', () => {
      cart.applyDiscount('SAVE10'); // 10% off
      expect(cart.getTotal()).toBe(22.5);
    });
  });
  
  afterEach(() => {
    cart.clear(); // Cleanup
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Testing Best Practices Summary */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Golden Rules of Testing</CardTitle>
              <CardDescription>Essential principles to follow</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Always Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Write descriptive test names</li>
                <li>• Follow AAA pattern (Arrange-Act-Assert)</li>
                <li>• Test one thing per test</li>
                <li>• Keep tests independent</li>
                <li>• Use meaningful test data</li>
                <li>• Mock external dependencies</li>
                <li>• Clean up after tests (afterEach)</li>
                <li>• Test edge cases and errors</li>
                <li>• Run tests frequently</li>
                <li>• Keep tests fast</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Never Do
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Write vague test names ('test1', 'it works')</li>
                <li>• Test multiple things in one test</li>
                <li>• Make tests depend on each other</li>
                <li>• Use random or unclear test data</li>
                <li>• Test implementation details</li>
                <li>• Ignore failing tests</li>
                <li>• Skip writing tests "to save time"</li>
                <li>• Copy-paste test code everywhere</li>
                <li>• Use hard-coded waits (sleep/setTimeout)</li>
                <li>• Commit commented-out tests</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-cyan-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Clear Test Names</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Describe what you're testing<br/>
                    Tests are documentation
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Test One Thing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    One assertion per test<br/>
                    Focused and isolated
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">AAA Pattern</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Arrange → Act → Assert<br/>
                    Clear test structure
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Keep Tests Fast</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mock external dependencies<br/>
                    Run tests frequently
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">The Ultimate Goal</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Write tests that are so clear that anyone can understand what the code does just by reading the test names. <strong>Tests are living documentation!</strong>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
