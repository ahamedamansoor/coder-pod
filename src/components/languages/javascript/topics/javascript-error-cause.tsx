'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export default function JavaScriptErrorCause() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={AlertCircle}
        category="Modern JavaScript"
        title="Error.cause"
        description="Chaining errors with cause property for better debugging (ES2022)"
        colorTheme="red"
      />

      <Card className="border-2 border-red-300 dark:border-red-700 shadow-lg bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/10">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-lg">
              <AlertCircle className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                What is Error.cause? 🔗
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Chain errors together to preserve the <strong className="text-red-700 dark:text-red-400">original error context</strong>! 
                When catching and re-throwing errors, you can now attach the <strong className="text-orange-700 dark:text-orange-400">original error</strong> as 
                the <code className="bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">cause</code> - making debugging much easier!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-300 dark:border-red-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Basic Usage 📝</CardTitle>
          <CardDescription>Attach the original error</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold text-red-900 dark:text-red-100 mb-3">Simple Example</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`try {
  // This might fail
  JSON.parse('invalid json');
} catch (error) {
  // Re-throw with context, preserving original error
  throw new Error('Failed to parse config', {
    cause: error
  });
}

// Output:
// Error: Failed to parse config
//   Caused by: SyntaxError: Unexpected token i in JSON...`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-300 dark:border-red-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Practical Examples 💡</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border-2 border-blue-200 dark:border-blue-700">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Example 1: API Error Handling</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}\`);
    }
    
    return await response.json();
  } catch (error) {
    // Add context about what we were doing
    throw new Error(
      \`Failed to fetch user \${userId}\`,
      { cause: error }
    );
  }
}

// Usage
try {
  await fetchUserData(123);
} catch (error) {
  console.error(error.message); // 'Failed to fetch user 123'
  console.error(error.cause);   // Original network/parse error
}`}</code></pre>
          </div>

          <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-4 border-2 border-green-200 dark:border-green-700">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">Example 2: Error Chain</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`async function loadConfig() {
  try {
    return await readFile('config.json');
  } catch (error) {
    throw new Error('Config read failed', { cause: error });
  }
}

async function initializeApp() {
  try {
    const config = await loadConfig();
    return setupApp(config);
  } catch (error) {
    throw new Error('App initialization failed', { cause: error });
  }
}

// Usage shows full error chain
try {
  await initializeApp();
} catch (error) {
  console.error(error.message);        // 'App initialization failed'
  console.error(error.cause.message);  // 'Config read failed'
  console.error(error.cause.cause);    // Original file error
}`}</code></pre>
          </div>

          <div className="rounded-lg bg-purple-50 dark:bg-purple-900/20 p-4 border-2 border-purple-200 dark:border-purple-700">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Example 3: Custom Error Logger</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`function logErrorChain(error) {
  const errors = [];
  let currentError = error;
  
  // Traverse the error chain
  while (currentError) {
    errors.push({
      message: currentError.message,
      name: currentError.name,
      stack: currentError.stack
    });
    
    currentError = currentError.cause;
  }
  
  console.log('Error Chain:');
  errors.forEach((err, index) => {
    console.log(\`  \${index + 1}. \${err.name}: \${err.message}\`);
  });
}

// Usage
try {
  doSomething();
} catch (error) {
  logErrorChain(error);
  // Output shows complete error trail
}`}</code></pre>
          </div>

          <div className="rounded-lg bg-orange-50 dark:bg-orange-900/20 p-4 border-2 border-orange-200 dark:border-orange-700">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">Example 4: Database Operations</h4>
            <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed bg-slate-50 dark:bg-slate-900 p-3 rounded"><code>{`class DatabaseError extends Error {
  constructor(message, options) {
    super(message, options);
    this.name = 'DatabaseError';
  }
}

async function saveUser(user) {
  try {
    await db.users.insert(user);
  } catch (error) {
    // Preserve database-specific error details
    throw new DatabaseError(
      \`Failed to save user \${user.id}\`,
      { 
        cause: error,
        // Can add custom properties too
        userId: user.id,
        operation: 'insert'
      }
    );
  }
}

// Error handling
try {
  await saveUser({ id: 123, name: 'Alice' });
} catch (error) {
  if (error instanceof DatabaseError) {
    console.error('DB Error:', error.message);
    console.error('User ID:', error.userId);
    console.error('Original:', error.cause);
  }
}`}</code></pre>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-300 dark:border-red-700 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Benefits 🎯</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-900 dark:text-green-100 mb-1">Better Debugging</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    See the complete error chain - know exactly what went wrong
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Context Preservation</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Don't lose valuable error information when re-throwing
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-1">Cleaner Code</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Standard way to chain errors - no custom properties needed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-red-300 dark:border-red-700 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/20 dark:via-orange-950/10 dark:to-amber-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 via-orange-500 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Quick Summary 📝</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔗</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Error Chaining</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Link errors together preserving context
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">🐛</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Better Debugging</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    See complete error trail
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-amber-200 dark:border-amber-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📝</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Simple Syntax</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    new Error(msg, {'{'}cause: err{'}'})
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-yellow-200 dark:border-yellow-800/30">
              <div className="flex items-start gap-3">
                <div className="text-3xl">✨</div>
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">ES2022</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Standard error handling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
