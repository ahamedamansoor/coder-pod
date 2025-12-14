'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Sparkles,
  Code2,
  CheckCircle,
  XCircle,
  FileCode,
  Lightbulb,
  BookOpen,
} from 'lucide-react';

export default function JavaScriptCleanCode() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Code2}
        category="JavaScript Best Practices"
        title="Clean Code"
        description="Write readable, maintainable, and elegant code"
        colorTheme="blue"
      />

      {/* What is Clean Code */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-indigo-50/20 dark:from-blue-950/10 dark:via-cyan-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is Clean Code?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Clean code is code that is <strong className="text-blue-700 dark:text-blue-400">easy to read</strong>, <strong className="text-cyan-700 dark:text-cyan-400">easy to understand</strong>, and <strong className="text-indigo-700 dark:text-indigo-400">easy to maintain</strong>. It's not just about making code work—it's about making code that other developers (including future you) can quickly grasp and modify.
              </p>
            </div>
          </div>

          <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Why Clean Code Matters</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Code is read far more often than it's written. Clean code reduces bugs, speeds up development, and makes collaboration easier.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Clean Code Principles */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>Core Clean Code Principles</CardTitle>
              <CardDescription>Fundamental guidelines</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Meaningful Names</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Names should reveal intent
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Use descriptive variable names</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Avoid abbreviations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Name by what it does</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Small Functions</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Functions should do one thing
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Keep functions short (10-20 lines)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>Single Responsibility Principle</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                  <span>One level of abstraction</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 dark:bg-purple-950/20 border-2 border-purple-200 dark:border-purple-800/30">
              <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">DRY Principle</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Don't Repeat Yourself
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Extract repeated code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Create reusable functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                  <span>Avoid code duplication</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border-2 border-amber-200 dark:border-amber-800/30">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Comments When Needed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Code should be self-explanatory
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Prefer clear code over comments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Comment WHY, not WHAT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 dark:text-amber-400 mt-1">•</span>
                  <span>Update comments with code</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Naming */}
      <Card>
        <CardHeader>
          <CardTitle>Example 1: Meaningful Names</CardTitle>
          <CardDescription>Bad vs Good variable/function names</CardDescription>
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
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Unclear purpose
let d; // elapsed time in days
let x = 10;
function calc(a, b) { ... }

// Abbreviations
let usrCnt = 5;
let btn = document.querySelector('.btn');
function getPrdDta() { ... }

// Generic names
let data;
let temp;
let result;
function doStuff() { ... }`}</pre>
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
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Clear and descriptive
let elapsedTimeInDays;
let maxRetryCount = 10;
function calculateTotalPrice(items, taxRate) { ... }

// Full words
let userCount = 5;
let submitButton = document.querySelector('.btn');
function getProductData() { ... }

// Specific names
let userProfile;
let temporaryUserId;
let validatedEmail;
function sendConfirmationEmail() { ... }`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Function Size */}
      <Card>
        <CardHeader>
          <CardTitle>Example 2: Small, Focused Functions</CardTitle>
          <CardDescription>Break down complex functions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Too Complex</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Does too many things
function processUser(data) {
  // Validate
  if (!data.email || !data.name) {
    throw new Error('Invalid data');
  }
  
  // Transform
  const user = {
    email: data.email.toLowerCase(),
    name: data.name.trim(),
    createdAt: Date.now()
  };
  
  // Save to database
  db.users.insert(user);
  
  // Send email
  sendEmail(user.email, 'Welcome!');
  
  // Log
  console.log('User created:', user.id);
  
  return user;
}`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Well Organized</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Each function does ONE thing
function validateUserData(data) {
  if (!data.email || !data.name) {
    throw new Error('Invalid data');
  }
}

function transformUserData(data) {
  return {
    email: data.email.toLowerCase(),
    name: data.name.trim(),
    createdAt: Date.now()
  };
}

function createUser(data) {
  validateUserData(data);
  const user = transformUserData(data);
  const savedUser = saveUser(user);
  sendWelcomeEmail(savedUser);
  logUserCreation(savedUser);
  return savedUser;
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: DRY Principle */}
      <Card>
        <CardHeader>
          <CardTitle>Example 3: DRY - Don't Repeat Yourself</CardTitle>
          <CardDescription>Extract repeated code</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Repetitive</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Repeated validation logic
function createAdmin(data) {
  if (!data.email) {
    throw new Error('Email required');
  }
  if (!/^[^@]+@[^@]+$/.test(data.email)) {
    throw new Error('Invalid email');
  }
  // create admin...
}

function createUser(data) {
  if (!data.email) {
    throw new Error('Email required');
  }
  if (!/^[^@]+@[^@]+$/.test(data.email)) {
    throw new Error('Invalid email');
  }
  // create user...
}

function updateUser(data) {
  if (!data.email) {
    throw new Error('Email required');
  }
  if (!/^[^@]+@[^@]+$/.test(data.email)) {
    throw new Error('Invalid email');
  }
  // update user...
}`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Reusable</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Extract to reusable function
function validateEmail(email) {
  if (!email) {
    throw new Error('Email required');
  }
  if (!/^[^@]+@[^@]+$/.test(email)) {
    throw new Error('Invalid email');
  }
}

function createAdmin(data) {
  validateEmail(data.email);
  // create admin...
}

function createUser(data) {
  validateEmail(data.email);
  // create user...
}

function updateUser(data) {
  validateEmail(data.email);
  // update user...
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Example: Comments */}
      <Card>
        <CardHeader>
          <CardTitle>Example 4: Comments - When and How</CardTitle>
          <CardDescription>Write self-documenting code</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Bad Comments</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Stating the obvious
let i = 0; // Initialize i to 0
i++; // Increment i

// Outdated comments
// Returns user name (actually returns full object)
function getUser() {
  return { name: 'John', age: 30 };
}

// Commented-out code (delete it!)
function process() {
  // const x = 10;
  // doSomething(x);
  doSomethingElse();
}

// Noise comments
// ======================
// USER SERVICE
// ======================`}</pre>
              </div>
            </div>

            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Good Comments</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-xs text-gray-800 dark:text-gray-200 leading-relaxed overflow-x-auto">
{`// Explain WHY, not WHAT
// Using binary search because dataset
// is sorted and can be huge (100k+ items)
function findUser(id) { ... }

// Warn about consequences
// WARNING: This operation is expensive
// Consider caching the result
function calculateComplexMetrics() { ... }

// Clarify complex algorithms
// Implemented using Knuth-Morris-Pratt algorithm
// Time: O(n+m), Space: O(m)
function patternMatch(text, pattern) { ... }

// Legal/license comments
/**
 * Copyright (c) 2024 Company Name
 * Licensed under MIT
 */`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Clean Code Checklist */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Lightbulb className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Clean Code Checklist</CardTitle>
              <CardDescription>Review your code against these criteria</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Clean Code
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Descriptive, meaningful names</li>
                <li>• Small, focused functions (one thing)</li>
                <li>• No code duplication (DRY)</li>
                <li>• Consistent formatting</li>
                <li>• Minimal comments (code explains itself)</li>
                <li>• Proper error handling</li>
                <li>• Easy to test</li>
                <li>• Clear abstractions</li>
                <li>• No magic numbers</li>
                <li>• Self-documenting</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Code Smells
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Vague names (x, data, temp)</li>
                <li>• Large functions (100+ lines)</li>
                <li>• Repeated code blocks</li>
                <li>• Inconsistent style</li>
                <li>• Too many comments</li>
                <li>• Try-catch everywhere</li>
                <li>• Hard to test code</li>
                <li>• Complex conditionals</li>
                <li>• Hard-coded values</li>
                <li>• Obscure logic</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Takeaways */}
      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Meaningful Names</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Names reveal intent<br/>
                    Avoid abbreviations
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">✂️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Small Functions</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    One thing per function<br/>
                    10-20 lines ideal
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🔄</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">DRY Principle</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Don't repeat yourself<br/>
                    Extract reusable code
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <span className="text-3xl">💬</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Minimal Comments</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Code should explain itself<br/>
                    Comment WHY, not WHAT
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-300 dark:border-blue-700">
            <Code2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Code is Communication</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <strong>Always write code for humans first, computers second.</strong> Clean code saves time, reduces bugs, and makes everyone's life easier!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
