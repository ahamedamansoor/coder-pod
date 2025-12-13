'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import {
  ShieldAlert,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RefreshCw,
  Target,
} from 'lucide-react';

export default function JavaScriptAsyncErrorHandling() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={ShieldAlert}
        category="JavaScript Fundamentals"
        title="Async Error Handling"
        description="Handle errors in promises and async/await code properly"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-yellow-50/50 via-amber-50/30 to-orange-50/20 dark:from-yellow-950/10 dark:via-amber-950/5 dark:to-orange-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Why Error Handling Matters
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Async operations can fail - network issues, invalid data, server errors. <strong className="text-yellow-700 dark:text-yellow-400">Always handle errors</strong> to prevent crashes and provide good user experience!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-yellow-200 dark:border-yellow-800/30">
            <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <AlertTitle className="text-lg">Critical: Don't Ignore Errors</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Unhandled errors can crash your app or leave it in a broken state. Always catch errors in async code!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Promise .catch() */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
              <XCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle>Promise Error Handling with .catch()</CardTitle>
              <CardDescription>Catch errors in promise chains</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-blue-200 dark:border-blue-800/30 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 overflow-hidden">
            <div className="bg-blue-600 dark:bg-blue-700 px-4 py-3">
              <h4 className="text-white font-semibold">Chain .catch() at the End</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Add <code className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 rounded text-xs">.catch()</code> to handle errors from any promise in the chain
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-blue-200 dark:border-blue-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.log('Error:', error);
  });`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Promise .catch() Examples"
        description="Handle errors in promise chains"
        code={`// Basic error handling
fetch('/api/user')
  .then(response => response.json())
  .then(user => {
    console.log('User loaded:', user.name);
  })
  .catch(error => {
    console.log('Failed to load user:', error);
    // Show error message to user
  });

// Catch handles ANY error in the chain
fetch('/api/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    if (!data.valid) {
      throw new Error('Invalid data');
    }
    console.log('Data:', data);
  })
  .catch(error => {
    // Catches errors from ANY step above
    console.log('Something went wrong:', error.message);
  });

// Multiple catches
fetch('/api/data')
  .then(response => response.json())
  .catch(error => {
    console.log('Parsing failed:', error);
    return { default: 'data' };  // Return fallback
  })
  .then(data => {
    console.log('Using data:', data);
  });

// Always use .finally() for cleanup
let isLoading = true;

fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.log('Error:', error);
  })
  .finally(() => {
    isLoading = false;
    console.log('Request complete');
  });`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* try/catch with async/await */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
              <ShieldAlert className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <CardTitle>try/catch with async/await</CardTitle>
              <CardDescription>Modern error handling</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-green-200 dark:border-green-800/30 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 overflow-hidden">
            <div className="bg-green-600 dark:bg-green-700 px-4 py-3">
              <h4 className="text-white font-semibold">Wrap await in try/catch</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Use try/catch to handle errors when using async/await
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-green-200 dark:border-green-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`async function loadUser() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    console.log('User:', user);
  } catch (error) {
    console.log('Error:', error);
  }
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="try/catch with async/await"
        description="Clean error handling"
        code={`// Basic try/catch
async function fetchUser() {
  try {
    const response = await fetch('/api/user');
    const user = await response.json();
    return user;
  } catch (error) {
    console.log('Failed to fetch user:', error);
    return null;
  }
}

// Multiple operations
async function loadDashboard() {
  try {
    const user = await fetch('/api/user').then(r => r.json());
    const posts = await fetch('/api/posts').then(r => r.json());
    const stats = await fetch('/api/stats').then(r => r.json());
    
    return { user, posts, stats };
  } catch (error) {
    console.log('Dashboard load failed:', error);
    return null;
  }
}

// With finally for cleanup
async function saveData(data) {
  let loading = true;
  
  try {
    const response = await fetch('/api/save', {
      method: 'POST',
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Save failed');
    }
    
    console.log('Saved successfully');
    return true;
    
  } catch (error) {
    console.log('Save error:', error);
    return false;
    
  } finally {
    loading = false;
    console.log('Save operation complete');
  }
}

// Specific error handling
async function login(username, password) {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    
    if (response.status === 401) {
      throw new Error('INVALID_CREDENTIALS');
    }
    
    if (response.status === 429) {
      throw new Error('TOO_MANY_ATTEMPTS');
    }
    
    if (!response.ok) {
      throw new Error('LOGIN_FAILED');
    }
    
    const user = await response.json();
    return user;
    
  } catch (error) {
    switch (error.message) {
      case 'INVALID_CREDENTIALS':
        console.log('Wrong username or password');
        break;
      case 'TOO_MANY_ATTEMPTS':
        console.log('Too many login attempts. Try later.');
        break;
      default:
        console.log('Login failed:', error);
    }
    return null;
  }
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Error Types */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
              <AlertTriangle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <CardTitle>Different Error Types</CardTitle>
              <CardDescription>Network, parsing, validation errors</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-purple-200 dark:border-purple-800/30 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 overflow-hidden">
            <div className="bg-purple-600 dark:bg-purple-700 px-4 py-3">
              <h4 className="text-white font-semibold">Handle Different Error Types</h4>
            </div>
            <div className="p-6 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Network Errors</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connection failed, timeout, offline
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">HTTP Errors</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  404 not found, 500 server error, 401 unauthorized
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Parsing Errors</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Invalid JSON, corrupt data
                </p>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded p-4 border">
                <h5 className="font-semibold mb-2">Validation Errors</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Business logic failures, invalid input
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Handling Different Error Types"
        description="Identify and handle specific errors"
        code={`async function fetchData(url) {
  try {
    // 1. Network request
    const response = await fetch(url);
    
    // 2. Check HTTP status
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Resource not found');
      }
      if (response.status === 401) {
        throw new Error('Unauthorized');
      }
      if (response.status >= 500) {
        throw new Error('Server error');
      }
      throw new Error(\`HTTP error: \${response.status}\`);
    }
    
    // 3. Parse response
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      throw new Error('Invalid JSON response');
    }
    
    // 4. Validate data
    if (!data || !data.id) {
      throw new Error('Invalid data structure');
    }
    
    return data;
    
  } catch (error) {
    // Handle different error types
    if (error.message.includes('Failed to fetch')) {
      console.log('Network error - check connection');
    } else if (error.message === 'Unauthorized') {
      console.log('Please log in');
    } else if (error.message === 'Invalid JSON') {
      console.log('Server returned invalid data');
    } else {
      console.log('Error:', error.message);
    }
    
    return null;
  }
}

// Real-world: Form submission with detailed errors
async function submitForm(formData) {
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      if (result.errors) {
        // Validation errors from server
        console.log('Validation errors:', result.errors);
        return { success: false, errors: result.errors };
      }
      throw new Error(result.message || 'Submit failed');
    }
    
    return { success: true, data: result };
    
  } catch (error) {
    if (error.name === 'TypeError') {
      return { 
        success: false, 
        errors: ['Network error. Please check your connection.'] 
      };
    }
    
    return { 
      success: false, 
      errors: [error.message] 
    };
  }
}`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Retrying Failed Requests */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
              <RefreshCw className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Retrying Failed Requests</CardTitle>
              <CardDescription>Automatic retry with exponential backoff</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-xl border-2 border-orange-200 dark:border-orange-800/30 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 overflow-hidden">
            <div className="bg-orange-600 dark:bg-orange-700 px-4 py-3">
              <h4 className="text-white font-semibold">Retry Pattern</h4>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Automatically retry failed requests with increasing delays
              </p>
              <div className="bg-white dark:bg-slate-900 rounded-lg p-5 border-2 border-orange-200 dark:border-orange-800/30">
                <pre className="font-mono text-sm text-gray-800 dark:text-gray-200">
{`async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await delay(1000 * (i + 1));
    }
  }
}`}</pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <CodeSnippet
        title="Retry Pattern Implementation"
        description="Retry with exponential backoff"
        code={`// Helper: delay function
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Simple retry
async function fetchWithRetry(url, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(\`Attempt \${attempt} of \${maxRetries}\`);
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      
      return await response.json();
      
    } catch (error) {
      lastError = error;
      console.log(\`Attempt \${attempt} failed:\`, error.message);
      
      // Don't wait after last attempt
      if (attempt < maxRetries) {
        const waitTime = 1000 * attempt;  // 1s, 2s, 3s
        console.log(\`Waiting \${waitTime}ms before retry...\`);
        await delay(waitTime);
      }
    }
  }
  
  throw new Error(\`Failed after \${maxRetries} attempts: \${lastError.message}\`);
}

// Exponential backoff
async function fetchWithBackoff(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);
      return await response.json();
      
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Exponential backoff: 1s, 2s, 4s, 8s...
      const waitTime = Math.pow(2, attempt - 1) * 1000;
      await delay(waitTime);
    }
  }
}

// Retry only on specific errors
async function smartRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url);
      
      // Don't retry on 4xx errors (client errors)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(\`Client error: \${response.status}\`);
      }
      
      // Retry on 5xx errors (server errors)
      if (!response.ok) {
        throw new Error(\`Server error: \${response.status}\`);
      }
      
      return await response.json();
      
    } catch (error) {
      // Network errors are retryable
      const isNetworkError = error.message.includes('Failed to fetch');
      const isServerError = error.message.includes('Server error');
      
      if (!isNetworkError && !isServerError) {
        throw error;  // Don't retry client errors
      }
      
      if (attempt === maxRetries) {
        throw error;
      }
      
      await delay(1000 * attempt);
    }
  }
}

// Usage
fetchWithRetry('/api/data')
  .then(data => console.log('Success:', data))
  .catch(error => console.log('Failed:', error.message));`}
        language="javascript"
        colorTheme="yellow"
      />

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• <strong>Always</strong> use try/catch with await</li>
                <li>• Always use <strong>.catch()</strong> with promises</li>
                <li>• Check HTTP status codes</li>
                <li>• Provide user-friendly error messages</li>
                <li>• Use <strong>finally</strong> for cleanup</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don't ignore errors (unhandled rejections)</li>
                <li>• Don't show technical errors to users</li>
                <li>• Don't retry infinitely</li>
                <li>• Don't catch errors without handling them</li>
                <li>• Don't forget HTTP status checks</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
            <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Error Handling Checklist</h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div>✓ Wrap async code in try/catch</div>
              <div>✓ Add .catch() to promise chains</div>
              <div>✓ Check response.ok before parsing</div>
              <div>✓ Handle different error types specifically</div>
              <div>✓ Show user-friendly error messages</div>
              <div>✓ Log detailed errors for debugging</div>
              <div>✓ Use finally for cleanup (loading states)</div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Golden Rule</AlertTitle>
            <AlertDescription className="text-base">
              <strong>Every async operation can fail.</strong> Always handle errors - your users will thank you!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}
