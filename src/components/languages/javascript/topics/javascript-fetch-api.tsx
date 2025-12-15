'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Cloud, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function JavaScriptFetchAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Cloud}
        category="APIs & Browser"
        title="Fetch API"
        description="Modern way to make HTTP requests in JavaScript"
        colorTheme="blue"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50/80 via-cyan-50/50 to-sky-50/30 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-xl">
              <Cloud className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
                What is the Fetch API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                The <code className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded">fetch()</code> function is the 
                <strong className="text-blue-700 dark:text-blue-400"> modern, promise-based</strong> way to make HTTP requests. 
                It replaces the older XMLHttpRequest with a <strong className="text-cyan-700 dark:text-cyan-400">cleaner, more powerful API</strong> 
                that works seamlessly with async/await and provides better error handling.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10 border-green-300 dark:border-green-700">
            <Lightbulb className="h-5 w-5 text-green-600 dark:text-green-400" />
            <AlertTitle className="text-green-900 dark:text-green-100">Modern Standard!</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Fetch is now the standard for HTTP requests in modern JavaScript. It's supported in all modern browsers and Node.js (18+).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic Fetch Syntax</CardTitle>
          <CardDescription>Understanding the fundamental structure</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">Simple GET Request</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`}</pre>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              <strong>How it works:</strong>
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">fetch()</code> returns a Promise</li>
              <li>• First <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">.then()</code> receives the Response object</li>
              <li>• <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">.json()</code> parses the response body as JSON (also returns a Promise)</li>
              <li>• Second <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">.then()</code> receives the parsed data</li>
              <li>• <code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-1.5 py-0.5 rounded">.catch()</code> handles network errors</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/10 border-2 border-cyan-200 dark:border-cyan-800">
            <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-3">With Async/Await (Recommended)</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</pre>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              <strong>Why async/await is better:</strong> More readable, easier error handling, and looks like synchronous code.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Understanding the Response Object</CardTitle>
          <CardDescription>What fetch() returns and how to use it</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            The Response object contains information about the HTTP response:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Response Properties</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">response.ok</code> - true if status 200-299</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">response.status</code> - HTTP status code</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">response.statusText</code> - status message</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">response.headers</code> - Headers object</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">response.url</code> - final URL</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold text-cyan-900 dark:text-cyan-100 mb-2">Response Methods</h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">.json()</code> - Parse JSON</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">.text()</code> - Get as text</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">.blob()</code> - Get as Blob (files)</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">.arrayBuffer()</code> - Get as binary</li>
                <li><code className="text-xs bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">.formData()</code> - Parse form data</li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/10 border-2 border-sky-200 dark:border-sky-800">
            <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-3">Checking Response Status</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const response = await fetch('https://api.example.com/data');

if (!response.ok) {
  throw new Error(\`HTTP error! status: \${response.status}\`);
}

const data = await response.json();`}</pre>
            <Alert className="mt-3">
              <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <AlertDescription className="text-sm">
                <strong>Important:</strong> Fetch only rejects on network errors, not HTTP errors (404, 500, etc.). 
                Always check <code className="bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded text-xs">response.ok</code>!
              </AlertDescription>
            </Alert>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Making Different Types of Requests</CardTitle>
          <CardDescription>GET, POST, PUT, DELETE, etc.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">POST Request with JSON Data</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`await fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
});`}</pre>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              <strong>Key points:</strong>
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
              <li>• <code className="text-xs bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">method</code> specifies HTTP method</li>
              <li>• <code className="text-xs bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">headers</code> sets Content-Type for JSON</li>
              <li>• <code className="text-xs bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded">body</code> must be a string (use JSON.stringify)</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 border-2 border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">PUT/PATCH Request (Update)</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`await fetch('https://api.example.com/users/123', {
  method: 'PUT',  // or 'PATCH' for partial update
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Jane Doe' })
});`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/10 border-2 border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">DELETE Request</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`await fetch('https://api.example.com/users/123', {
  method: 'DELETE'
});`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Request Configuration Options</CardTitle>
          <CardDescription>Customizing your requests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30">
                  <th className="p-3 text-left border border-blue-200 dark:border-blue-800 text-gray-900 dark:text-gray-100">Option</th>
                  <th className="p-3 text-left border border-blue-200 dark:border-blue-800 text-gray-900 dark:text-gray-100">Description</th>
                  <th className="p-3 text-left border border-blue-200 dark:border-blue-800 text-gray-900 dark:text-gray-100">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">method</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">HTTP method</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">'GET', 'POST', 'PUT'</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">headers</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Request headers</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">{`{'Authorization': 'Bearer ...'}`}</code></td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">body</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Request payload</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">JSON.stringify(data)</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">credentials</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Send cookies</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">'include', 'same-origin'</code></td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">mode</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">CORS mode</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">'cors', 'no-cors'</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">cache</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Cache mode</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">'no-cache', 'reload'</code></td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">signal</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Abort signal</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">controller.signal</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Features</CardTitle>
          <CardDescription>Aborting requests, timeouts, and authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">Aborting Requests (AbortController)</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const controller = new AbortController();

fetch('https://api.example.com/data', {
  signal: controller.signal
});

// Cancel the request
controller.abort();`}</pre>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-3">
              Useful for canceling requests when user navigates away or when implementing request timeouts.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/10 border-2 border-indigo-200 dark:border-indigo-800">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Request with Timeout</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch(url, { signal: controller.signal });
  clearTimeout(timeoutId);
  return await response.json();
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request timed out');
  }
}`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Authentication with Headers</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`// Bearer token authentication
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer your-token-here',
    'Content-Type': 'application/json'
  }
});

// Basic authentication
const credentials = btoa('username:password');
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': \`Basic \${credentials}\`
  }
});`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error Handling Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/10 border-2 border-rose-200 dark:border-rose-800">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-3">Comprehensive Error Handling</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    
    // Check HTTP status
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    // Parse JSON with error handling
    try {
      return await response.json();
    } catch (parseError) {
      throw new Error('Invalid JSON response');
    }
    
  } catch (error) {
    if (error.name === 'TypeError') {
      // Network error
      console.error('Network error:', error);
    } else if (error.name === 'AbortError') {
      // Request aborted
      console.error('Request aborted');
    } else {
      // Other errors
      console.error('Fetch error:', error.message);
    }
    throw error;
  }
}`}</pre>
          </div>

          <Alert className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10 border-amber-300 dark:border-amber-700">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-900 dark:text-amber-100">Common Pitfalls</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>1. <strong>Not checking response.ok</strong> - 404 and 500 errors won't trigger catch</p>
              <p>2. <strong>Forgetting await on .json()</strong> - It returns a Promise!</p>
              <p>3. <strong>Not handling JSON parse errors</strong> - Response might not be JSON</p>
              <p>4. <strong>CORS issues</strong> - Server must allow cross-origin requests</p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Complete Example: Fetching User Data</CardTitle>
          <CardDescription>Real-world example with loading states and error handling</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Code Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">JavaScript Code</h4>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">async/await</span>
              </div>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`async function loadUserDashboard(userId) {
  const dashboardDiv = document.getElementById('dashboard');
  
  // Show loading state
  dashboardDiv.innerHTML = '<p>Loading...</p>';
  
  try {
    // Fetch user data
    const response = await fetch(
      \`https://api.example.com/users/\${userId}\`
    );
    
    if (!response.ok) {
      throw new Error(\`User not found: \${response.status}\`);
    }
    
    const user = await response.json();
    
    // Display user data
    dashboardDiv.innerHTML = \`
      <div class="user-card">
        <h2>\${user.name}</h2>
        <p>Email: \${user.email}</p>
        <p>Joined: \${new Date(user.joinedDate)
          .toLocaleDateString()}</p>
      </div>
    \`;
    
  } catch (error) {
    // Display error message
    dashboardDiv.innerHTML = \`
      <div class="error">
        <p>Failed to load user data: \${error.message}</p>
        <button onclick="loadUserDashboard(\${userId})">
          Retry
        </button>
      </div>
    \`;
  }
}

// Call the function
loadUserDashboard(123);`}</code></pre>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Expected Output</h4>
                <span className="text-xs px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">Success</span>
              </div>
              <div className="rounded-lg bg-white dark:bg-slate-900 p-6 border-2 border-blue-200 dark:border-blue-800/30 min-h-[400px]">
                <div className="space-y-4">
                  {/* Success State */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-700">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">John Doe</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Email: john.doe@example.com</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Joined: 12/1/2024</p>
                  </div>

                  {/* Loading State */}
                  <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
                    <p className="text-sm text-amber-800 dark:text-amber-300">💡 Loading state: "Loading..."</p>
                  </div>

                  {/* Error State */}
                  <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700">
                    <p className="text-sm text-red-800 dark:text-red-300 mb-2">❌ Error state (if API fails):</p>
                    <p className="text-xs text-red-700 dark:text-red-400">"Failed to load user data: User not found: 404"</p>
                    <button className="mt-2 text-xs px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                      Retry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-4 bg-blue-50 dark:bg-blue-950/20 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">What This Shows</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <div className="grid sm:grid-cols-3 gap-2 mt-2">
                <p className="text-sm">✅ Loading states</p>
                <p className="text-sm">✅ Success rendering</p>
                <p className="text-sm">✅ Error handling</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-blue-300 dark:border-blue-700 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/10 dark:to-sky-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Promise-Based</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Returns promises, works with async/await
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Check response.ok</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always verify HTTP status codes
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-sky-200 dark:border-sky-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Response Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    .json(), .text(), .blob() for different formats
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-indigo-200 dark:border-indigo-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Abortable</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Cancel requests with AbortController
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
