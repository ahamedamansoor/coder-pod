'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ShieldAlert,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Play,
  ArrowRight,
  AlertTriangle,
  RefreshCw,
  TrendingUp,
  Network,
  Loader2,
  GitBranch,
  Layers,
  Target,
  Zap,
} from 'lucide-react';

interface JavaScriptAsyncErrorHandlingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const SnippetOutput = ({ lines }: { lines: string[] }) => (
  <div className="mt-3 rounded-xl border border-blue-200/60 dark:border-blue-800/40 bg-white/90 dark:bg-slate-900/80 shadow-sm">
    <div className="flex items-center gap-2 border-b border-blue-100/60 dark:border-blue-900/40 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/30 px-4 py-2 rounded-t-xl">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">IO</span>
      <p className="text-xs font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-200">Output</p>
    </div>
    <pre className="px-4 py-3 text-xs font-mono text-blue-900 dark:text-blue-100 whitespace-pre-wrap">{lines.join('\n')}</pre>
  </div>
);

const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Async Error Handling Demo</title>
  <style>
    body { 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); 
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container { 
      text-align: center; 
      background: rgba(255,255,255,0.95); 
      padding: 48px 32px; 
      border-radius: 20px; 
      max-width: 600px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    h1 { 
      color: #f5576c; 
      margin-bottom: 16px; 
      font-size: 32px; 
    }
    p { 
      color: #64748b; 
      font-size: 18px; 
      margin-bottom: 24px;
    }
    .console-hint { 
      background: #0f172a; 
      color: #f093fb; 
      padding: 16px; 
      border-radius: 12px; 
      font-family: monospace; 
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🛡️ Async Error Handling</h1>
    <p>Open the browser console to see error handling patterns!</p>
    <div class="console-hint">Press F12 or Cmd+Option+J</div>
  </div>
</body>
</html>`;

const playgroundJs = `console.clear();
console.log("🛡️ Async Error Handling Demo\\n");

// Helper: Simulated API that can fail
function fetchData(shouldFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error("Network error"));
      } else {
        resolve({ data: "Success!" });
      }
    }, 1000);
  });
}

// 1. Basic try/catch
console.log("1. BASIC TRY/CATCH:");
async function example1() {
  try {
    const result = await fetchData(true);
    console.log("✅", result);
  } catch (error) {
    console.log("❌ Caught:", error.message);
  }
}
example1();

// 2. try/catch/finally
console.log("\\n2. TRY/CATCH/FINALLY:");
async function example2() {
  try {
    console.log("Loading...");
    const result = await fetchData(false);
    console.log("✅ Success:", result.data);
  } catch (error) {
    console.log("❌ Error:", error.message);
  } finally {
    console.log("🧹 Cleanup complete");
  }
}
setTimeout(() => example2(), 1500);

// 3. Retry logic
console.log("\\n3. RETRY LOGIC:");
async function example3() {
  for (let i = 0; i < 3; i++) {
    try {
      console.log(\`Attempt \${i + 1}/3\`);
      const result = await fetchData(i < 2); // Fail first 2 times
      console.log("✅ Success on attempt", i + 1);
      return result;
    } catch (error) {
      console.log(\`❌ Attempt \${i + 1} failed\`);
      if (i === 2) console.log("All retries failed");
    }
  }
}
setTimeout(() => example3(), 4000);

console.log("\\n💡 Watch error handling patterns!");`;

export default function JavaScriptAsyncErrorHandling({ onOpenWebPlayground }: JavaScriptAsyncErrorHandlingProps) {
  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      <PageHeader
        icon={ShieldAlert}
        category="JavaScript · Asynchronous Programming"
        title="Async Error Handling"
        description="Master error handling patterns for async/await code - try/catch/finally, error propagation, retry logic, and production-ready error management strategies."
        colorTheme="blue"
      />

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is Async Error Handling?
          </CardTitle>
          <CardDescription className="text-base">
            Managing errors in asynchronous code to prevent crashes and provide graceful failure recovery
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 3-Column Overview */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-red-50/60 to-rose-50/60 dark:from-red-950/10 dark:to-rose-950/10 rounded-xl border border-red-200/50 dark:border-red-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h4 className="font-semibold text-sm">Prevent Crashes</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Catch errors before they crash your app - handle failures gracefully
              </p>
              <Badge className="bg-red-100/80 text-red-700 dark:bg-red-900/30 text-xs">Critical</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h4 className="font-semibold text-sm">Retry Logic</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Automatically retry failed operations with exponential backoff
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 text-xs">Resilient</Badge>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-sm">User Experience</h4>
              </div>
              <p className="text-xs text-muted-foreground">
                Show meaningful error messages instead of cryptic failures
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 text-xs">Professional</Badge>
            </div>
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Why Error Handling Matters</AlertTitle>
            <AlertDescription>
              Unhandled errors in async code can crash your entire application. Network requests fail, APIs go down, and timeouts occur. Proper error handling makes your app resilient, provides better UX, and helps you debug issues faster in production.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* try/catch Basics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <ShieldAlert className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            try/catch Basics
          </CardTitle>
          <CardDescription className="text-base">
            The foundation of async error handling - wrapping awaited operations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic try/catch */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">1. Basic Pattern</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function fetchUserSafely(id) {
  try {
    // Code that might throw errors
    const response = await fetch(\`/api/users/\${id}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const user = await response.json();
    console.log("✅ User loaded:", user.name);
    return user;
    
  } catch (error) {
    // Handle any errors that occurred
    console.error("❌ Failed to load user:", error.message);
    
    // Return fallback value
    return null;
  }
}

// Usage
const user = await fetchUserSafely(999);
if (user) {
  displayUser(user);
} else {
  showErrorMessage("User not found");
}`}</pre>
            <SnippetOutput lines={[
              '❌ Failed to load user: HTTP error! status: 404',
              '',
              '// Function returns null instead of crashing',
              '// App continues running normally'
            ]} />
          </div>

          {/* Multiple await calls */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">2. Multiple Await Calls in try Block</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadUserProfile(userId) {
  try {
    // All awaits in one try block
    const user = await fetch(\`/api/users/\${userId}\`).then(r => r.json());
    console.log("✅ User loaded");
    
    const posts = await fetch(\`/api/posts?user=\${userId}\`).then(r => r.json());
    console.log("✅ Posts loaded");
    
    const comments = await fetch(\`/api/comments?user=\${userId}\`).then(r => r.json());
    console.log("✅ Comments loaded");
    
    return { user, posts, comments };
    
  } catch (error) {
    // Catches errors from ANY of the awaits above
    console.error("❌ Failed to load profile:", error.message);
    throw error; // Re-throw to let caller handle it
  }
}

// Usage
try {
  const profile = await loadUserProfile(123);
  renderProfile(profile);
} catch (error) {
  showErrorPage("Could not load profile");
}`}</pre>
            <SnippetOutput lines={[
              '✅ User loaded',
              '❌ Failed to load profile: Network error',
              '',
              '// If second fetch fails, error is caught',
              '// Subsequent fetches are skipped'
            ]} />
          </div>

          {/* Specific error types */}
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              3. Handling Different Error Types
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
    
  } catch (error) {
    // Check error type and handle accordingly
    if (error.name === 'TypeError') {
      console.error("❌ Network error:", error.message);
      return { error: "Network unavailable" };
    }
    
    if (error.name === 'SyntaxError') {
      console.error("❌ Invalid JSON:", error.message);
      return { error: "Invalid data format" };
    }
    
    // Generic error
    console.error("❌ Unknown error:", error);
    return { error: "Something went wrong" };
  }
}

// Usage
const result = await fetchWithErrorHandling('/api/data');
if (result.error) {
  showErrorMessage(result.error);
} else {
  processData(result);
}`}</pre>
            <SnippetOutput lines={[
              '❌ Network error: Failed to fetch',
              '{ error: "Network unavailable" }',
              '',
              '// Different errors get different messages'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* finally Block */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Layers className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            The finally Block - Cleanup Code
          </CardTitle>
          <CardDescription className="text-base">
            Code that runs no matter what - perfect for hiding loaders and releasing resources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic finally */}
          <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
            <h4 className="font-semibold">1. Basic finally Usage</h4>
            <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadDataWithSpinner(id) {
  showLoadingSpinner(); // Show loading UI
  
  try {
    const response = await fetch(\`/api/data/\${id}\`);
    const data = await response.json();
    console.log("✅ Data loaded");
    return data;
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    showErrorNotification(error.message);
    throw error;
    
  } finally {
    // ALWAYS executes - success or failure
    hideLoadingSpinner(); // Hide loading UI
    console.log("🧹 Cleanup complete");
  }
}

// Usage
try {
  const data = await loadDataWithSpinner(123);
  displayData(data);
} catch (error) {
  // Error already logged and shown to user
  console.log("Could not load data");
}`}</pre>
            <SnippetOutput lines={[
              '// Loading spinner shown',
              '✅ Data loaded',
              '🧹 Cleanup complete',
              '// Loading spinner hidden',
              '',
              '// finally runs even if there\'s an error or early return'
            ]} />
          </div>

          {/* Real-world finally */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Loader2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              2. Real-World: Form Submission with Cleanup
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function submitForm(formData) {
  const submitButton = document.querySelector('#submit');
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      throw new Error(\`Server error: \${response.status}\`);
    }
    
    const result = await response.json();
    console.log("✅ Form submitted:", result.id);
    showSuccessMessage("Submitted successfully!");
    return result;
    
  } catch (error) {
    console.error("❌ Submission failed:", error.message);
    showErrorMessage(error.message);
    throw error;
    
  } finally {
    // Always restore button state
    submitButton.disabled = false;
    submitButton.textContent = "Submit";
    console.log("🧹 Button restored");
  }
}`}</pre>
            <SnippetOutput lines={[
              '// Button disabled, text: "Submitting..."',
              '✅ Form submitted: abc-123',
              '🧹 Button restored',
              '// Button enabled, text: "Submit"',
              '',
              '// Button is restored even if submission fails'
            ]} />
          </div>

          <Alert>
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>When to Use finally</AlertTitle>
            <AlertDescription>
              Use <code>finally</code> for cleanup operations that must happen regardless of success or failure: hiding loaders, closing connections, releasing resources, resetting UI state, or logging completion.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Error Propagation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <GitBranch className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Error Propagation
          </CardTitle>
          <CardDescription className="text-base">
            When to catch errors locally vs passing them up the call stack
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Catch and handle */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Catch and Handle</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadUser(id) {
  try {
    const user = await fetchUser(id);
    return user;
  } catch (error) {
    // Handle it here
    console.error("Error:", error);
    return null; // Provide fallback
  }
}

// Caller gets null, no error thrown
const user = await loadUser(123);
if (!user) {
  showMessage("User not found");
}`}</pre>
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 text-xs">Local Handling</Badge>
            </div>

            {/* Catch and re-throw */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Catch and Re-throw</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadUser(id) {
  try {
    const user = await fetchUser(id);
    return user;
  } catch (error) {
    // Log it but pass it up
    console.error("Error:", error);
    throw error; // Re-throw
  }
}

// Caller must handle error
try {
  const user = await loadUser(123);
} catch (error) {
  showErrorPage();
}`}</pre>
              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 text-xs">Propagate Up</Badge>
            </div>
          </div>

          {/* Error transformation */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Error Transformation
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function loadUserWithContext(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
    
  } catch (error) {
    // Transform generic error into specific one
    throw new Error(\`Failed to load user \${id}: \${error.message}\`);
  }
}

// Caller gets meaningful error message
try {
  const user = await loadUserWithContext(123);
} catch (error) {
  console.error(error.message);
  // Output: "Failed to load user 123: Network error"
}`}</pre>
            <SnippetOutput lines={[
              'Failed to load user 123: Network error',
              '',
              '// Error message now includes context',
              '// Easier to debug in production logs'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Retry Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <RefreshCw className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Retry Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Automatically retry failed operations with exponential backoff and maximum attempts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic retry */}
          <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Real-World: Retry with Exponential Backoff
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      console.log(\`Attempt \${attempt + 1}/\${maxRetries}\`);
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}\`);
      }
      
      const data = await response.json();
      console.log(\`✅ Success on attempt \${attempt + 1}\`);
      return data;
      
    } catch (error) {
      console.error(\`❌ Attempt \${attempt + 1} failed:\`, error.message);
      
      // Last attempt - throw error
      if (attempt === maxRetries - 1) {
        throw new Error(\`All \${maxRetries} retries failed: \${error.message}\`);
      }
      
      // Exponential backoff: 1s, 2s, 4s, 8s...
      const delay = Math.pow(2, attempt) * 1000;
      console.log(\`⏳ Waiting \${delay}ms before retry...\`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage
try {
  const data = await fetchWithRetry('/api/flaky-endpoint', 3);
  processData(data);
} catch (error) {
  showErrorMessage("Service unavailable. Please try again later.");
  console.error("Final error:", error.message);
}`}</pre>
            <SnippetOutput lines={[
              'Attempt 1/3',
              '❌ Attempt 1 failed: HTTP 500',
              '⏳ Waiting 1000ms before retry...',
              'Attempt 2/3',
              '❌ Attempt 2 failed: HTTP 500',
              '⏳ Waiting 2000ms before retry...',
              'Attempt 3/3',
              '✅ Success on attempt 3'
            ]} />
          </div>

          {/* Retry with specific errors */}
          <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Retry Only on Specific Errors
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function smartRetry(url, maxRetries = 3) {
  const retryableErrors = [500, 502, 503, 504, 408]; // Server errors
  
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        // Don't retry client errors (400-499)
        if (response.status >= 400 && response.status < 500) {
          throw new Error(\`Client error \${response.status} - Not retrying\`);
        }
        
        // Only retry server errors
        if (retryableErrors.includes(response.status)) {
          throw new Error(\`Server error \${response.status}\`);
        }
      }
      
      return await response.json();
      
    } catch (error) {
      // Don't retry client errors
      if (error.message.includes('Client error')) {
        throw error;
      }
      
      console.log(\`Retry \${i + 1}/\${maxRetries}: \${error.message}\`);
      
      if (i === maxRetries - 1) throw error;
      
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

// Usage
try {
  const data = await smartRetry('/api/data');
} catch (error) {
  if (error.message.includes('Client error')) {
    showMessage("Invalid request");
  } else {
    showMessage("Server unavailable");
  }
}`}</pre>
            <SnippetOutput lines={[
              '// 404 error: No retry (client error)',
              'Client error 404 - Not retrying',
              '',
              '// 503 error: Retries 3 times (server error)',
              'Retry 1/3: Server error 503',
              'Retry 2/3: Server error 503',
              '✅ Success'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Parallel Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Network className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Parallel Error Handling
          </CardTitle>
          <CardDescription className="text-base">
            Managing errors when running multiple async operations simultaneously
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Promise.all with try/catch */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Promise.all() - All or Nothing</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadAll() {
  try {
    const [users, posts, comments] = 
      await Promise.all([
        fetch('/api/users').then(r => r.json()),
        fetch('/api/posts').then(r => r.json()),
        fetch('/api/comments').then(r => r.json())
      ]);
    
    return { users, posts, comments };
    
  } catch (error) {
    // If ANY fails, catch here
    console.error("❌ One failed:", error);
    throw error;
  }
}`}</pre>
              <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 text-xs">Fails if any fails</Badge>
            </div>

            {/* Promise.allSettled */}
            <div className="rounded-xl border bg-white dark:bg-gray-900 p-5 space-y-3">
              <h4 className="font-semibold">Promise.allSettled() - Get All</h4>
              <pre className="bg-slate-50 dark:bg-slate-950 rounded p-3 font-mono text-xs overflow-x-auto border">
{`async function loadAllSafely() {
  const results = await Promise.allSettled([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  const data = {};
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      data[\`resource\${i}\`] = result.value;
    } else {
      console.error(\`Resource \${i} failed:\`, 
                    result.reason);
    }
  });
  
  return data;
}`}</pre>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 text-xs">Never rejects</Badge>
            </div>
          </div>

          {/* Practical example */}
          <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30 space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              Real-World: Partial Success Dashboard
            </h4>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function loadDashboard() {
  const results = await Promise.allSettled([
    fetch('/api/user').then(r => r.json()),
    fetch('/api/stats').then(r => r.json()),
    fetch('/api/notifications').then(r => r.json())
  ]);
  
  const dashboard = {
    user: null,
    stats: null,
    notifications: null,
    errors: []
  };
  
  if (results[0].status === 'fulfilled') {
    dashboard.user = results[0].value;
  } else {
    dashboard.errors.push('Failed to load user');
    console.error('User error:', results[0].reason);
  }
  
  if (results[1].status === 'fulfilled') {
    dashboard.stats = results[1].value;
  } else {
    dashboard.errors.push('Failed to load stats');
  }
  
  if (results[2].status === 'fulfilled') {
    dashboard.notifications = results[2].value;
  } else {
    dashboard.errors.push('Failed to load notifications');
  }
  
  // Show what we got, even if some failed
  return dashboard;
}

// Usage
const dashboard = await loadDashboard();
if (dashboard.user) renderUser(dashboard.user);
if (dashboard.stats) renderStats(dashboard.stats);
if (dashboard.errors.length > 0) {
  showPartialErrorBanner(dashboard.errors);
}`}</pre>
            <SnippetOutput lines={[
              '// Even if 1 or 2 fail, dashboard still loads',
              'User error: Network failed',
              'Failed to load user',
              '',
              '// Stats and notifications still render',
              '// Partial error banner shown'
            ]} />
          </div>
        </CardContent>
      </Card>

      {/* Common Mistakes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertTriangle className="w-6 h-6 text-amber-600/80 dark:text-amber-400/80" />
            Common Mistakes
          </CardTitle>
          <CardDescription className="text-base">
            Pitfalls that lead to unhandled errors and app crashes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mistake 1 */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ No error handling</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function loadData() {
  // NO try/catch - crashes on error!
  const data = await fetch('/api/data');
  return data.json();
}`}</pre>
            </div>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ With error handling</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`async function loadData() {
  try {
    const data = await fetch('/api/data');
    return data.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}`}</pre>
            </div>

            {/* Mistake 2 */}
            <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-red-700 dark:text-red-300">❌ Catching but not handling</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`try {
  const data = await fetch('/api/data');
  return data.json();
} catch (error) {
  // Empty catch - error silenced!
}`}</pre>
            </div>

            <div className="rounded-xl border border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20 p-5 space-y-3">
              <h4 className="font-semibold text-green-700 dark:text-green-300">✅ Log and handle properly</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`try {
  const data = await fetch('/api/data');
  return data.json();
} catch (error) {
  console.error("API Error:", error);
  showErrorMessage(error.message);
  return { error: true };
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <CheckCircle2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Best Practices
          </CardTitle>
          <CardDescription className="text-base">
            Production-ready error handling patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Do This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                Do This ✅
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Always wrap await with try/catch</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use finally for cleanup (hide loaders, reset state)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Add context to error messages for debugging</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Implement retry logic for network operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>Use Promise.allSettled() for parallel ops with partial success</span>
                </li>
              </ul>
            </div>
            
            {/* Avoid This */}
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                Avoid This ❌
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't leave async functions without error handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use empty catch blocks - always log errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't retry client errors (4xx) - only server errors (5xx)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't use Promise.all() if partial success is acceptable</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                  <span>Don't expose sensitive error details to users</span>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6">
            <Lightbulb className="h-4 w-4" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Every async function should have error handling. Use try/catch for operations that might fail, finally for cleanup, and consider retry logic for network requests. In production, log errors to monitoring services and show user-friendly messages instead of raw errors.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Playground */}
      {onOpenWebPlayground && (
        <Card className="border border-blue-200/60 dark:border-blue-900/30 bg-white/95 dark:bg-slate-950/70">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Play className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
              Interactive Playground
            </CardTitle>
            <CardDescription className="text-base">
              See error handling patterns in action
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row md:items-center md:gap-6 gap-4">
            <Button
              onClick={() => onOpenWebPlayground(playgroundHtml, '', playgroundJs)}
              className="bg-blue-600 text-white hover:bg-blue-500 w-full md:w-auto"
            >
              Run in Playground
            </Button>
            <p className="text-sm text-muted-foreground">
              The console demonstrates try/catch, finally blocks, and retry logic with error handling patterns.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
