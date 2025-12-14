'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Zap,
  Rocket,
  CheckCircle,
  Package,
  Lightbulb,
  Code2,
} from 'lucide-react';

export default function JavaScriptVitest() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Zap}
        category="JavaScript Testing"
        title="Vitest Testing Framework"
        description="Blazing fast unit testing powered by Vite"
        colorTheme="yellow"
      />

      {/* What is Vitest */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/20 dark:from-green-950/10 dark:via-emerald-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Vitest?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Vitest is a <strong className="text-green-700 dark:text-green-400">blazing fast</strong> testing framework powered by Vite. It provides a <strong className="text-emerald-700 dark:text-emerald-400">Jest-compatible API</strong> with modern features and instant HMR (Hot Module Replacement) for tests.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-yellow-950/30 dark:to-amber-900/30 border-2 border-yellow-200 dark:border-yellow-800/30">
              <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mb-2" />
              <h4 className="font-semibold text-sm text-yellow-900 dark:text-yellow-100">Lightning Fast</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Instant test execution</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-900/30 border-2 border-blue-200 dark:border-blue-800/30">
              <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400 mb-2" />
              <h4 className="font-semibold text-sm text-blue-900 dark:text-blue-100">Vite-Powered</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Uses Vite's transform</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950/30 dark:to-pink-900/30 border-2 border-purple-200 dark:border-purple-800/30">
              <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold text-sm text-purple-900 dark:text-purple-100">Jest Compatible</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Easy migration</p>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/30 dark:to-emerald-900/30 border-2 border-green-200 dark:border-green-800/30">
              <Package className="w-6 h-6 text-green-600 dark:text-green-400 mb-2" />
              <h4 className="font-semibold text-sm text-green-900 dark:text-green-100">ESM First</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">Native ES modules</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Why Vitest */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <Rocket className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Why Vitest Over Jest?</CardTitle>
              <CardDescription>Modern features and performance</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Vitest Advantages
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>10x faster</strong> - Vite's instant HMR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>ESM native</strong> - No transpilation needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>TypeScript</strong> - First-class support out of box</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>Watch mode</strong> - Smart & instant rerun</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span><strong>UI mode</strong> - Beautiful browser-based UI</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                🔄 Migration from Jest
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Same API</strong> - test(), describe(), expect()</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Drop-in replacement</strong> - Most tests work as-is</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Same matchers</strong> - toBe(), toEqual(), etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span><strong>Mocking compatible</strong> - vi.fn() = jest.fn()</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Installation */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Package className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Installation & Setup</CardTitle>
              <CardDescription>Get started with Vitest</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-slate-900 dark:bg-slate-950 border border-slate-700">
            <code className="text-sm text-emerald-400 font-mono">
              npm install -D vitest
            </code>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>package.json</AlertTitle>
            <AlertDescription>
              <code className="text-sm">"test": "vitest"</code><br/>
              <code className="text-sm">"test:ui": "vitest --ui"</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 1: Your First Vitest Test</CardTitle>
          <CardDescription>Identical to Jest syntax</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// math.test.js
import { describe, it, expect } from 'vitest';
import { add, multiply } from './math';

describe('Math functions', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
  
  it('multiplies numbers correctly', () => {
    expect(multiply(4, 5)).toBe(20);
  });
});

// Run: npm test`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 2: Using vi.fn() for Mocking</CardTitle>
          <CardDescription>vi.fn() is equivalent to jest.fn()</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`import { describe, it, expect, vi } from 'vitest';

describe('Mock functions', () => {
  it('tracks function calls', () => {
    const mockFn = vi.fn();
    
    mockFn('hello');
    mockFn('world');
    
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith('hello');
  });
  
  it('mocks return values', () => {
    const mockFn = vi.fn().mockReturnValue(42);
    
    expect(mockFn()).toBe(42);
  });
  
  it('mocks resolved values', async () => {
    const mockFn = vi.fn().mockResolvedValue({ data: 'success' });
    
    const result = await mockFn();
    expect(result.data).toBe('success');
  });
});`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Unique Vitest Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
              <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <CardTitle>Unique Vitest Features</CardTitle>
              <CardDescription>What makes Vitest special</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Browser Mode</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Run tests in real browser environment with Playwright
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Workspace</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Test multiple projects in a monorepo setup
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Benchmarking</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built-in performance benchmarking with bench()
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 3: UI Mode</CardTitle>
          <CardDescription>Beautiful browser-based test UI</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// Run tests with UI
// Command: npm run test:ui

// Benefits:
// - See all tests in a beautiful interface
// - Filter by file, test name, or status
// - Watch mode with instant updates
// - Click to see test details
// - View console logs and errors
// - Time tracking for each test

// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    ui: true, // Enable UI mode
    open: true // Auto-open browser
  }
});`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 4: In-Source Testing</CardTitle>
          <CardDescription>Write tests alongside your code</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// math.js
export function add(a, b) {
  return a + b;
}

// Tests in the same file!
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  
  it('adds numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
  
  it('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3);
  });
}

// Benefits:
// - Tests close to implementation
// - Easy to maintain
// - No separate test files
// - Tests are tree-shaken in production`}</code>
          </pre>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 5: Benchmarking</CardTitle>
          <CardDescription>Performance testing built-in</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`import { bench, describe } from 'vitest';

describe('Array operations', () => {
  bench('native map', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    arr.map(x => x * 2);
  });
  
  bench('for loop', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * 2);
    }
  });
  
  bench('forEach', () => {
    const arr = Array.from({ length: 1000 }, (_, i) => i);
    const result = [];
    arr.forEach(x => result.push(x * 2));
  });
});

// Output shows:
// - Operations per second
// - Time per operation
// - Statistical analysis
// - Performance comparison`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Configuration */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Vitest Configuration</CardTitle>
              <CardDescription>Common configuration options</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950 border border-gray-200 dark:border-gray-800">
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">vitest.config.js</h4>
            <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono overflow-x-auto">
{`import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,           // Use global test, expect, etc.
    environment: 'jsdom',    // or 'node', 'happy-dom'
    coverage: {
      provider: 'v8',        // or 'istanbul'
      reporter: ['text', 'html'],
      exclude: ['node_modules', 'dist']
    },
    ui: true,                // Enable UI mode
    watch: false             // Disable watch in CI
  }
});`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Example 6: Testing with TypeScript</CardTitle>
          <CardDescription>First-class TypeScript support</CardDescription>
        </CardHeader>
        <CardContent>
          <pre className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-auto">
            <code>{`// types.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export function createUser(name: string, email: string): User {
  return {
    id: Math.random(),
    name,
    email
  };
}

// types.test.ts
import { describe, it, expect } from 'vitest';
import { createUser, type User } from './types';

describe('User creation', () => {
  it('creates a valid user', () => {
    const user: User = createUser('Alice', 'alice@example.com');
    
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('name', 'Alice');
    expect(user).toHaveProperty('email', 'alice@example.com');
  });
  
  it('user has correct types', () => {
    const user = createUser('Bob', 'bob@example.com');
    
    expect(typeof user.id).toBe('number');
    expect(typeof user.name).toBe('string');
    expect(typeof user.email).toBe('string');
  });
});

// No configuration needed - TypeScript works out of the box!`}</code>
          </pre>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-green-300 dark:border-green-700 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/10 dark:to-teal-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Lightning Fast</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    10x faster than Jest<br/>
                    Instant HMR for tests
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Jest Compatible</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Same API as Jest<br/>
                    Easy migration
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🎨</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Beautiful UI Mode</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Browser-based test UI<br/>
                    Visual test management
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📦</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Modern Stack</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Native ESM, TypeScript<br/>
                    Vite-powered
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <Rocket className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Choose Vitest If</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              You're using <strong>Vite</strong>, want <strong>faster tests</strong>, need <strong>TypeScript</strong> support, or building <strong>modern apps</strong>. Otherwise, Jest is still excellent!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
