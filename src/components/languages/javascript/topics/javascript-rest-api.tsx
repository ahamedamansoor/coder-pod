'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CodeSnippet } from '@/components/shared/code-snippet';
import { Sparkles, Lightbulb, Database, AlertTriangle, CheckCircle2, Globe } from 'lucide-react';

export default function JavaScriptRestAPI() {
  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Database}
        category="APIs & Browser"
        title="Working with REST APIs"
        description="Consuming RESTful APIs with JavaScript"
        colorTheme="emerald"
      />

      <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-green-50/30 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-xl">
              <Database className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-green-600 bg-clip-text text-transparent">
                What is a REST API?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <strong className="text-emerald-700 dark:text-emerald-400">REST</strong> (Representational State Transfer) is an 
                <strong className="text-teal-700 dark:text-teal-400"> architectural style</strong> for building web APIs. 
                A REST API uses <strong className="text-green-700 dark:text-green-400">HTTP methods</strong> (GET, POST, PUT, DELETE) 
                to perform CRUD operations on resources, returning data usually in JSON format.
              </p>
            </div>
          </div>

          <Alert className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10 border-blue-300 dark:border-blue-700">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-900 dark:text-blue-100">Simple Analogy</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              Think of REST API as a waiter in a restaurant: You (client) give an order (HTTP request), 
              the waiter takes it to the kitchen (server), and brings back your food (JSON response).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>REST API Fundamentals</CardTitle>
          <CardDescription>Core concepts you need to understand</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/10 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="text-4xl mb-3">📋</div>
              <h4 className="font-bold text-emerald-900 dark:text-emerald-100 mb-2">Resources</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Everything is a resource (users, posts, products)
              </p>
              <code className="text-xs bg-white dark:bg-slate-900 px-2 py-1 rounded">
                /api/users/123
              </code>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-2">HTTP Methods</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Actions performed on resources
              </p>
              <div className="text-xs space-y-1">
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">GET</code> - Retrieve</div>
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">POST</code> - Create</div>
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">PUT</code> - Update</div>
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">DELETE</code> - Remove</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800">
              <div className="text-4xl mb-3">📊</div>
              <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Status Codes</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Response status indicators
              </p>
              <div className="text-xs space-y-1">
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">200</code> - Success</div>
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">201</code> - Created</div>
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">404</code> - Not Found</div>
                <div><code className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">500</code> - Server Error</div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/10 border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-4xl mb-3">📦</div>
              <h4 className="font-bold text-cyan-900 dark:text-cyan-100 mb-2">JSON Format</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Data exchange format
              </p>
              <pre className="text-xs bg-white dark:bg-slate-900 p-2 rounded overflow-x-auto">
{`{
  "id": 1,
  "name": "John"
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>HTTP Methods & CRUD Operations</CardTitle>
          <CardDescription>Mapping REST to database operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">HTTP Method</th>
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">CRUD</th>
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">Purpose</th>
                  <th className="p-3 text-left border border-emerald-200 dark:border-emerald-800 text-gray-900 dark:text-gray-100">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">GET</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Read</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Retrieve data</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">GET /users</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded">POST</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Create</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Add new resource</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">POST /users</code></td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">PUT</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Update</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Replace entire resource</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">PUT /users/1</code></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-slate-800/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">PATCH</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Update</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Partial update</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">PATCH /users/1</code></td>
                </tr>
                <tr className="bg-white dark:bg-slate-900/50">
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">DELETE</code></td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Delete</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">Remove resource</td>
                  <td className="p-3 border border-gray-200 dark:border-gray-700"><code className="text-xs">DELETE /users/1</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Complete CRUD Example</CardTitle>
          <CardDescription>Using Fetch API with a REST endpoint</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border-2 border-blue-200 dark:border-blue-800">
            <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3">1. GET - Fetch All Users</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function getUsers() {
  const response = await fetch('https://api.example.com/users');
  const users = await response.json();
  return users;
}

// Get single user
async function getUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`);
  return await response.json();
}`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border-2 border-green-200 dark:border-green-800">
            <h4 className="font-bold text-green-900 dark:text-green-100 mb-3">2. POST - Create New User</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function createUser(userData) {
  const response = await fetch('https://api.example.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  if (!response.ok) {
    throw new Error('Failed to create user');
  }
  
  return await response.json();
}

// Usage
const newUser = await createUser({
  name: 'John Doe',
  email: 'john@example.com'
});`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/10 border-2 border-orange-200 dark:border-orange-800">
            <h4 className="font-bold text-orange-900 dark:text-orange-100 mb-3">3. PUT - Update User (Full Replace)</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function updateUser(id, userData) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  
  return await response.json();
}

// Usage - must include ALL fields
await updateUser(1, {
  name: 'Jane Doe',
  email: 'jane@example.com',
  age: 25
});`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/10 border-2 border-purple-200 dark:border-purple-800">
            <h4 className="font-bold text-purple-900 dark:text-purple-100 mb-3">4. PATCH - Partial Update</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function patchUser(id, updates) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updates)
  });
  
  return await response.json();
}

// Usage - only update specific fields
await patchUser(1, { email: 'newemail@example.com' });`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/10 border-2 border-red-200 dark:border-red-800">
            <h4 className="font-bold text-red-900 dark:text-red-100 mb-3">5. DELETE - Remove User</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function deleteUser(id) {
  const response = await fetch(\`https://api.example.com/users/\${id}\`, {
    method: 'DELETE'
  });
  
  if (response.ok) {
    return { success: true };
  }
  
  throw new Error('Failed to delete user');
}

// Usage
await deleteUser(1);`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Query Parameters & Filtering</CardTitle>
          <CardDescription>Passing additional data in URLs</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700 dark:text-gray-300">
            Query parameters allow you to filter, sort, paginate, and search data:
          </p>

          <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/10 border-2 border-indigo-200 dark:border-indigo-800">
            <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-3">Common Query Parameters</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`// Pagination
GET /users?page=2&limit=10

// Filtering
GET /users?age=25&status=active

// Sorting
GET /users?sort=name&order=asc

// Searching
GET /users?search=john

// Multiple filters
GET /users?country=USA&role=admin&sort=createdAt`}</pre>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/10 border-2 border-teal-200 dark:border-teal-800">
            <h4 className="font-bold text-teal-900 dark:text-teal-100 mb-3">Building Query Strings in JavaScript</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`// Method 1: Manual string concatenation
const url = \`https://api.example.com/users?page=\${page}&limit=\${limit}\`;

// Method 2: URLSearchParams (Recommended)
const params = new URLSearchParams({
  page: 2,
  limit: 10,
  status: 'active'
});

const url = \`https://api.example.com/users?\${params.toString()}\`;
// Result: https://api.example.com/users?page=2&limit=10&status=active

// Method 3: URL object
const url = new URL('https://api.example.com/users');
url.searchParams.set('page', '2');
url.searchParams.set('limit', '10');
fetch(url);`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Authentication & Authorization</CardTitle>
          <CardDescription>Securing API requests</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/10 border-2 border-sky-200 dark:border-sky-800">
              <h4 className="font-bold text-sky-900 dark:text-sky-100 mb-3">Bearer Token (JWT)</h4>
              <pre className="text-sm bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto leading-relaxed">
{`const token = 'your-jwt-token';

fetch(url, {
  headers: {
    'Authorization': \`Bearer \${token}\`
  }
});`}</pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Most common for modern APIs
              </p>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/10 border-2 border-violet-200 dark:border-violet-800">
              <h4 className="font-bold text-violet-900 dark:text-violet-100 mb-3">API Key</h4>
              <pre className="text-sm bg-white dark:bg-slate-900 p-3 rounded overflow-x-auto leading-relaxed">
{`const apiKey = 'your-api-key';

fetch(url, {
  headers: {
    'X-API-Key': apiKey
  }
});`}</pre>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                Simple authentication method
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/10 border-2 border-rose-200 dark:border-rose-800">
            <h4 className="font-bold text-rose-900 dark:text-rose-100 mb-3">Reusable API Client with Auth</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`class APIClient {
  constructor(baseURL, token) {
    this.baseURL = baseURL;
    this.token = token;
  }
  
  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': \`Bearer \${this.token}\`,
      ...options.headers
    };
    
    const response = await fetch(url, { ...options, headers });
    
    if (!response.ok) {
      throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
    }
    
    return await response.json();
  }
  
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }
  
  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

// Usage
const api = new APIClient('https://api.example.com', 'your-token');
const users = await api.get('/users');
const newUser = await api.post('/users', { name: 'John' });`}</pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Error Handling & Best Practices</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/10 border-2 border-amber-200 dark:border-amber-800">
            <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-3">Comprehensive Error Handling</h4>
            <pre className="text-sm bg-white dark:bg-slate-900 p-4 rounded overflow-x-auto leading-relaxed">
{`async function apiRequest(url, options) {
  try {
    const response = await fetch(url, options);
    
    // Handle different status codes
    switch (response.status) {
      case 200:
      case 201:
        return await response.json();
      
      case 400:
        throw new Error('Bad Request - Check your data');
      
      case 401:
        throw new Error('Unauthorized - Login required');
      
      case 403:
        throw new Error('Forbidden - No permission');
      
      case 404:
        throw new Error('Not Found - Resource doesn\\'t exist');
      
      case 500:
        throw new Error('Server Error - Try again later');
      
      default:
        throw new Error(\`HTTP Error: \${response.status}\`);
    }
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}`}</pre>
          </div>

          <Alert className="bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/10 border-red-300 dark:border-red-700">
            <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            <AlertTitle className="text-red-900 dark:text-red-100">Common Mistakes to Avoid</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300 space-y-2">
              <p>1. <strong>Hardcoding API URLs</strong> - Use environment variables</p>
              <p>2. <strong>Exposing API keys</strong> - Never commit keys to repositories</p>
              <p>3. <strong>Not handling errors</strong> - Always use try-catch</p>
              <p>4. <strong>Ignoring HTTP status codes</strong> - Check response.ok</p>
              <p>5. <strong>No request timeouts</strong> - Use AbortController</p>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>REST API Best Practices</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-100 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Do's
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li>• Use proper HTTP methods</li>
                <li>• Check response status codes</li>
                <li>• Implement error handling</li>
                <li>• Use async/await for clarity</li>
                <li>• Cache responses when possible</li>
                <li>• Implement request timeouts</li>
                <li>• Use environment variables</li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" /> Don'ts
              </h4>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1.5">
                <li>• Don't hardcode API keys</li>
                <li>• Don't ignore error responses</li>
                <li>• Don't use GET for mutations</li>
                <li>• Don't send sensitive data in URLs</li>
                <li>• Don't skip authentication</li>
                <li>• Don't make unnecessary requests</li>
                <li>• Don't expose internal errors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-gray-100">Complete Example: Blog Post Manager</CardTitle>
          <CardDescription>Complete CRUD operations with REST API</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Code Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">JavaScript Code</h4>
                <span className="text-xs px-2 py-1 rounded bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">CRUD</span>
              </div>
              <div className="rounded-lg bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-700 overflow-x-auto">
                <pre className="text-xs text-slate-800 dark:text-slate-100 leading-relaxed"><code>{`// Complete blog post management system
class BlogAPI {
  constructor() {
    this.baseURL = 'https://api.example.com';
    this.token = localStorage.getItem('authToken');
  }
  
  // GET - Fetch all posts
  async getAllPosts() {
    const response = await fetch(
      \`\${this.baseURL}/posts\`, 
      {
        headers: { 
          'Authorization': \`Bearer \${this.token}\` 
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  }
  
  // POST - Create new post
  async createPost(postData) {
    const response = await fetch(
      \`\${this.baseURL}/posts\`, 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${this.token}\`
        },
        body: JSON.stringify(postData)
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to create post');
    }
    return await response.json();
  }
  
  // PUT - Update entire post
  async updatePost(id, postData) {
    const response = await fetch(
      \`\${this.baseURL}/posts/\${id}\`, 
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${this.token}\`
        },
        body: JSON.stringify(postData)
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to update post');
    }
    return await response.json();
  }
  
  // DELETE - Remove post
  async deletePost(id) {
    const response = await fetch(
      \`\${this.baseURL}/posts/\${id}\`, 
      {
        method: 'DELETE',
        headers: { 
          'Authorization': \`Bearer \${this.token}\` 
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return { success: true };
  }
}

// Usage example
const blog = new BlogAPI();

// Create post
const newPost = await blog.createPost({
  title: 'My First Post',
  content: 'This is amazing!',
  author: 'John Doe'
});`}</code></pre>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Expected Output</h4>
                <span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">Success</span>
              </div>
              <div className="rounded-lg bg-white dark:bg-slate-900 p-6 border-2 border-emerald-200 dark:border-emerald-800/30 min-h-[400px]">
                <div className="space-y-4">
                  {/* POST - Create */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/10 border border-green-200 dark:border-green-700">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-2">POST /posts (Create)</p>
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <p className="font-mono text-xs">{'{'}</p>
                      <p className="font-mono text-xs ml-4">"id": 1,</p>
                      <p className="font-mono text-xs ml-4">"title": "My First Post",</p>
                      <p className="font-mono text-xs ml-4">"content": "This is amazing!",</p>
                      <p className="font-mono text-xs ml-4">"author": "John Doe"</p>
                      <p className="font-mono text-xs">{'}'}</p>
                    </div>
                  </div>

                  {/* GET - Read */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/10 border border-blue-200 dark:border-blue-700">
                    <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-2">GET /posts (Read All)</p>
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <p className="font-mono text-xs">[{'{ id: 1, title: "My First Post", ... }'}]</p>
                    </div>
                  </div>

                  {/* PUT - Update */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/10 border border-amber-200 dark:border-amber-700">
                    <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">PUT /posts/1 (Update)</p>
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <p className="font-mono text-xs">{'{ id: 1, title: "Updated Title", ... }'}</p>
                    </div>
                  </div>

                  {/* DELETE - Delete */}
                  <div className="p-4 rounded-lg bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/10 border border-red-200 dark:border-red-700">
                    <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-2">DELETE /posts/1 (Delete)</p>
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      <p className="font-mono text-xs">{'{ success: true }'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Alert className="mt-4 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-700">
            <Lightbulb className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-900 dark:text-emerald-100">What This Shows</AlertTitle>
            <AlertDescription className="text-gray-700 dark:text-gray-300">
              <div className="grid sm:grid-cols-2 gap-2 mt-2">
                <p className="text-sm">✅ Complete CRUD operations</p>
                <p className="text-sm">✅ Proper HTTP methods</p>
                <p className="text-sm">✅ Authentication headers</p>
                <p className="text-sm">✅ Error handling</p>
              </div>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      <Card className="border-2 border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/20 dark:via-teal-950/10 dark:to-green-950/5 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-500 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Key Takeaways</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">HTTP Methods</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    GET, POST, PUT, PATCH, DELETE for CRUD
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-teal-200 dark:border-teal-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Status Codes</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    2xx success, 4xx client error, 5xx server error
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Authentication</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Bearer tokens or API keys in headers
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-cyan-200 dark:border-cyan-800/30">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1.5 text-gray-900 dark:text-gray-100">Error Handling</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Always check response.ok and handle errors
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
