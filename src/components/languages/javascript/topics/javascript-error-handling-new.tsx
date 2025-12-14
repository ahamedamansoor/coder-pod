'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  Sparkles,
  Code2,
  Lightbulb,
  AlertTriangle,
  Shield,
  XCircle,
} from 'lucide-react';

export default function JavaScriptErrorHandlingNew() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Shield}
        category="JavaScript Design Patterns"
        title="Error Handling"
        description="Gracefully handle errors with try-catch-finally"
        colorTheme="yellow"
      />

      {/* What is Error Handling? */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-red-50/50 via-rose-50/30 to-pink-50/20 dark:from-red-950/10 dark:via-rose-950/5 dark:to-pink-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-red-400 to-rose-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Error Handling: Expect the Unexpected
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-red-700 dark:text-red-400">Error handling</strong> prevents your application from crashing when something goes wrong. Use <strong>try-catch-finally</strong> to gracefully handle errors and provide fallbacks!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-red-200 dark:border-red-800/30">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-lg">Why Error Handling?</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Errors will happen - network failures, invalid input, missing data. Handle them gracefully instead of crashing!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Try-Catch-Finally */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Try-Catch-Finally</CardTitle>
              <CardDescription>Basic error handling syntax</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Without Error Handling */}
            <div className="rounded-xl border-2 border-red-200 dark:border-red-800/30 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/30 px-4 py-3 border-b-2 border-red-200 dark:border-red-800/30">
                <h4 className="font-semibold text-red-700 dark:text-red-300">❌ No Error Handling</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// App crashes on error
function parseJSON(jsonString) {
  const data = JSON.parse(jsonString);
  return data;
}

// If invalid JSON, app crashes! 💥
parseJSON('invalid json');
// Uncaught SyntaxError

// Nothing after error executes
console.log('This never runs');`}</pre>
              </div>
            </div>

            {/* With Error Handling */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With Error Handling</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// App continues even if error occurs
function parseJSON(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.error('Invalid JSON:', error.message);
    return null; // Fallback
  }
}

// Handles error gracefully
const result = parseJSON('invalid json');
// Logs: Invalid JSON: ...
console.log(result); // null

// Code continues to execute
console.log('App still running!');`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Try-Catch-Finally Blocks"
        description="Complete error handling flow"
        code={`// Define a risky operation
function riskyOperation() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error('Operation failed!');
  }
  return 'Success!';
}

try {
  // Code that might throw an error
  console.log('Trying...');
  const result = riskyOperation();
  console.log('Success:', result);
  
} catch (error) {
  // Handles any error from try block
  console.error('Error occurred:', error.message);
  
  // Can check error type
  if (error instanceof TypeError) {
    console.log('Type error!');
  }
  
} finally {
  // ALWAYS runs (even if error or return)
  console.log('Finally block - cleanup here');
  // Close connections, release resources, etc.
}

// Example: File operations (simulated)
function readFile(filename) {
  let file = null;
  try {
    console.log('Opening file:', filename);
    // Simulating file operations
    if (!filename) {
      throw new Error('Filename required');
    }
    file = { name: filename, content: 'File content here' };
    const content = file.content;
    console.log('Read content:', content);
    return content;
  } catch (error) {
    console.error('Failed to read file:', error.message);
    return null;
  } finally {
    // Always close file, even if error
    if (file) {
      console.log('Closing file:', file.name);
    }
    console.log('File operation completed');
  }
}

// Test it
readFile('data.txt');
readFile(''); // Will fail

// In real async code with fetch:
// async function fetchUser(id) {
//   try {
//     const response = await fetch(\`/api/users/\${id}\`);
//     return await response.json();
//   } catch (error) {
//     console.error('Failed:', error);
//     return null;
//   }
// }`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Custom Errors */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Custom Error Classes</CardTitle>
              <CardDescription>Create meaningful error types</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Custom Error Types</h4>
            </div>
            <div className="p-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-purple-200 dark:border-purple-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`// Base Error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

// Usage
function validateAge(age) {
  if (typeof age !== 'number') {
    throw new ValidationError('Age must be a number');
  }
  if (age < 0 || age > 120) {
    throw new ValidationError('Age must be between 0 and 120');
  }
  return true;
}

// Handling specific errors
try {
  validateAge('twenty');
} catch (error) {
  if (error instanceof ValidationError) {
    console.log('Validation failed:', error.message);
  } else if (error instanceof NetworkError) {
    console.log('Network issue:', error.statusCode);
  } else {
    console.log('Unknown error:', error);
  }
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Throwing Errors"
        description="When and how to throw errors"
        code={`// Throw built-in errors
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Throw custom errors
class InsufficientFundsError extends Error {
  constructor(balance, amount) {
    super(\`Insufficient funds: \${balance} < \${amount}\`);
    this.name = 'InsufficientFundsError';
    this.balance = balance;
    this.amount = amount;
  }
}

function withdraw(account, amount) {
  if (amount > account.balance) {
    throw new InsufficientFundsError(account.balance, amount);
  }
  account.balance -= amount;
  return account.balance;
}

// Error with additional info
class APIError extends Error {
  constructor(message, endpoint, statusCode) {
    super(message);
    this.name = 'APIError';
    this.endpoint = endpoint;
    this.statusCode = statusCode;
    this.timestamp = new Date();
  }
}

async function callAPI(endpoint) {
  const response = await fetch(endpoint);
  
  if (!response.ok) {
    throw new APIError(
      \`API call failed: \${response.statusText}\`,
      endpoint,
      response.status
    );
  }
  
  return response.json();
}

// Usage (wrapped in async function)
(async function testAPIError() {
  try {
    const data = await callAPI('/api/users');
    console.log('Data received:', data);
  } catch (error) {
    if (error instanceof APIError) {
      console.log('API Error Details:');
      console.log('Endpoint:', error.endpoint);
      console.log('Status:', error.statusCode);
      console.log('Time:', error.timestamp);
    }
  }
})();

// Simpler synchronous example
const account = { balance: 100 };

try {
  console.log('Withdrawing $50...');
  withdraw(account, 50);
  console.log('New balance:', account.balance);
  
  console.log('Withdrawing $80...');
  withdraw(account, 80); // This will fail
} catch (error) {
  if (error instanceof InsufficientFundsError) {
    console.log('Cannot withdraw:', error.message);
    console.log('Balance:', error.balance);
    console.log('Requested:', error.amount);
  }
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Async Error Handling */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
              <Code2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <CardTitle>Async Error Handling</CardTitle>
              <CardDescription>Handling errors in promises and async/await</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Promise .catch() */}
            <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 overflow-hidden">
              <div className="bg-blue-100 dark:bg-blue-900/30 px-4 py-3 border-b-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">Promise .catch()</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Using .catch()
fetch('/api/data')
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Failed:', error);
  })
  .finally(() => {
    console.log('Request completed');
  });

// Multiple catches
Promise.resolve()
  .then(() => {
    throw new Error('Step 1 failed');
  })
  .catch(error => {
    console.log('Caught:', error.message);
    return 'recovered';
  })
  .then(result => {
    console.log(result); // 'recovered'
  });`}</pre>
              </div>
            </div>

            {/* Async/Await try-catch */}
            <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/30 px-4 py-3 border-b-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold text-green-700 dark:text-green-300">Async/Await try-catch</h4>
              </div>
              <div className="bg-slate-50 dark:bg-slate-950 p-5">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 leading-relaxed">
{`// Using try-catch with async/await
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed:', error);
  } finally {
    console.log('Request completed');
  }
}

// Multiple async operations
async function processUser(id) {
  try {
    const user = await fetchUser(id);
    const profile = await fetchProfile(user.id);
    const posts = await fetchPosts(user.id);
    
    return { user, profile, posts };
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise.allSettled for Multiple Calls"
        description="Handle errors in parallel operations"
        code={`// Simulated async functions
function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(['Alice', 'Bob']), 100);
  });
}

function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Posts API down')), 100);
  });
}

function fetchComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(['Comment 1', 'Comment 2']), 100);
  });
}

// Async function to demonstrate
(async function demonstrateErrorHandling() {
  console.log('=== Promise.all Example ===');
  
  // Promise.all - fails if ANY promise fails
  try {
    const [users, posts, comments] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
      fetchComments()
    ]);
    console.log('All succeeded:', { users, posts, comments });
  } catch (error) {
    console.error('Promise.all failed:', error.message);
  }
  
  console.log('');
  console.log('=== Promise.allSettled Example ===');
  
  // Promise.allSettled - ALL promises complete
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]);
  
  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log('Request ' + index + ' succeeded:', result.value);
    } else {
      console.error('Request ' + index + ' failed:', result.reason.message);
    }
  });
  
  // Filter results
  const successful = results
    .filter(r => r.status === 'fulfilled')
    .map(r => r.value);
  
  const failed = results
    .filter(r => r.status === 'rejected')
    .map(r => r.reason.message);
  
  console.log('');
  console.log('Successful:', successful.length, 'requests');
  console.log('Failed:', failed.length, 'requests');
  console.log('Failed reasons:', failed);
})();

// Pattern for loading dashboard with partial failures
function loadDashboard() {
  return Promise.allSettled([
    fetchUsers(),
    fetchPosts(),
    fetchComments()
  ]).then(([userResult, postResult, commentResult]) => {
    return {
      users: userResult.status === 'fulfilled' ? userResult.value : [],
      posts: postResult.status === 'fulfilled' ? postResult.value : [],
      comments: commentResult.status === 'fulfilled' ? commentResult.value : []
    };
    // Dashboard loads with whatever data is available!
  });
}

loadDashboard().then(data => {
  console.log('');
  console.log('Dashboard data loaded:', data);
});`}
        language="javascript"
        colorTheme="yellow"
        icon={Shield}
      />

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
              <Lightbulb className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <CardTitle>Error Handling Best Practices</CardTitle>
              <CardDescription>Do's and don'ts</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ DO: Specific Error Messages
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`// Good - descriptive
throw new Error('User with ID 123 not found');

// Bad - vague
throw new Error('Error');`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ DO: Log Errors Properly
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`try {
  await riskyOperation();
} catch (error) {
  console.error('Operation failed:', {
    message: error.message,
    stack: error.stack,
    timestamp: new Date(),
    userId: currentUser.id
  });
}`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-green-50 dark:bg-green-950/20 border-2 border-green-200 dark:border-green-800/30">
            <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
              ✅ DO: Provide Fallbacks
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`function getConfig() {
  try {
    return JSON.parse(localStorage.getItem('config'));
  } catch (error) {
    console.warn('Using default config');
    return DEFAULT_CONFIG; // Fallback
  }
}`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
              ❌ DON'T: Silent Failures
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`// Bad - swallows errors
try {
  importantOperation();
} catch (error) {
  // Nothing - error disappears!
}

// Good - log or handle
try {
  importantOperation();
} catch (error) {
  console.error('Failed:', error);
  notifyUser('Operation failed');
}`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/20 border-2 border-red-200 dark:border-red-800/30">
            <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
              ❌ DON'T: Catch and Rethrow Same Error
            </h4>
            <pre className="font-mono text-sm text-gray-800 dark:text-gray-200 bg-white dark:bg-slate-900 p-4 rounded-lg">
{`// Bad - pointless catch
try {
  operation();
} catch (error) {
  throw error; // Why catch at all?
}

// Good - add context
try {
  operation();
} catch (error) {
  throw new Error(\`Operation failed: \${error.message}\`);
}`}</pre>
          </div>
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
                <span className="text-2xl">🛡️</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Try-Catch-Finally</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Try: risky code<br/>
                    Catch: handle errors<br/>
                    Finally: cleanup (always runs)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Custom Errors</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Extend Error class<br/>
                    Create meaningful error types<br/>
                    Add context and properties
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Async Errors</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use try-catch with async/await<br/>
                    Use .catch() with promises<br/>
                    Promise.allSettled for multiple calls
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📝</span>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Best Practices</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Specific error messages<br/>
                    Log errors properly<br/>
                    Provide fallbacks, never silent failures
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Always handle errors gracefully! Your users should never see cryptic error messages or crashed apps. Catch errors, log them, provide fallbacks, and keep the app running.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
