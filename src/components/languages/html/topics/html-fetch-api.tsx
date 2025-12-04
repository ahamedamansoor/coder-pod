'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Network, Download, Upload, AlertCircle, CheckCircle, Info, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlFetchApiProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlFetchApi({ onOpenWebPlayground }: HtmlFetchApiProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch API Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      margin-bottom: 20px;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
    }
    
    button:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }
    
    .result-box {
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      min-height: 150px;
    }
    
    .result-title {
      font-weight: 600;
      color: #ec4899;
      margin-bottom: 12px;
      font-size: 13px;
      text-transform: uppercase;
    }
    
    .user-card {
      padding: 16px;
      background: white;
      border-radius: 8px;
      margin-bottom: 12px;
      border: 1px solid #e5e7eb;
    }
    
    .user-name {
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 4px;
    }
    
    .user-email {
      color: #6b7280;
      font-size: 14px;
    }
    
    .loading {
      text-align: center;
      padding: 30px;
      color: #6b7280;
    }
    
    .spinner {
      border: 3px solid #f3f4f6;
      border-top: 3px solid #ec4899;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 12px;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    .error {
      color: #dc2626;
      padding: 12px;
      background: #fee2e2;
      border-radius: 6px;
      border: 1px solid #fecaca;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #f472b6;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .result-box {
        background: #0f172a;
        border-color: #475569;
      }
      
      .result-title {
        color: #f472b6;
      }
      
      .user-card {
        background: #1e293b;
        border-color: #475569;
      }
      
      .user-name {
        color: #e2e8f0;
      }
      
      .user-email {
        color: #94a3b8;
      }
      
      .error {
        background: #7f1d1d;
        color: #fecaca;
        border-color: #dc2626;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #f472b6;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .result-box {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .result-title {
      color: #f472b6;
    }
    
    :root.dark .user-card {
      background: #1e293b;
      border-color: #475569;
    }
    
    :root.dark .user-name {
      color: #e2e8f0;
    }
    
    :root.dark .user-email {
      color: #94a3b8;
    }
    
    :root.dark .error {
      background: #7f1d1d;
      color: #fecaca;
      border-color: #dc2626;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌐 Fetch API Demo</h1>
    <p class="subtitle">Load data from an API using modern fetch()</p>
    
    <button id="loadBtn">📥 Load Users</button>
    
    <div class="result-box" id="resultBox">
      <div class="result-title">API Response</div>
      <p style="color: #6b7280; text-align: center; padding: 20px;">Click the button to load data</p>
    </div>
  </div>
  
  <script>
    const loadBtn = document.getElementById('loadBtn');
    const resultBox = document.getElementById('resultBox');
    
    async function loadUsers() {
      try {
        // Disable button during request
        loadBtn.disabled = true;
        loadBtn.textContent = '⏳ Loading...';
        
        // Show loading state
        resultBox.innerHTML = \`
          <div class="loading">
            <div class="spinner"></div>
            <p>Fetching users from API...</p>
          </div>
        \`;
        
        // Make API request
        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        
        // Check if request was successful
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        // Parse JSON response
        const users = await response.json();
        
        // Display users
        resultBox.innerHTML = '<div class="result-title">✅ Loaded \${users.length} Users</div>';
        
        users.forEach(user => {
          const userCard = document.createElement('div');
          userCard.className = 'user-card';
          userCard.innerHTML = \`
            <div class="user-name">👤 \${user.name}</div>
            <div class="user-email">✉️ \${user.email}</div>
          \`;
          resultBox.appendChild(userCard);
        });
        
      } catch (error) {
        // Handle errors
        resultBox.innerHTML = \`
          <div class="error">
            <strong>❌ Error:</strong><br>
            \${error.message}
          </div>
        \`;
      } finally {
        // Re-enable button
        loadBtn.disabled = false;
        loadBtn.textContent = '🔄 Load Again';
      }
    }
    
    // Add click event
    loadBtn.addEventListener('click', loadUsers);
  </script>
</body>
</html>`;

  const postExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>POST Request Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      min-height: 100vh;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #06b6d4;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    .form-group {
      margin-bottom: 16px;
    }
    
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      color: #4b5563;
      font-size: 14px;
    }
    
    input, textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
    }
    
    input:focus, textarea:focus {
      outline: none;
      border-color: #06b6d4;
    }
    
    textarea {
      min-height: 80px;
      resize: vertical;
      font-family: inherit;
    }
    
    button {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
    }
    
    button:disabled {
      background: #9ca3af;
      cursor: not-allowed;
      transform: none;
    }
    
    .response-box {
      margin-top: 20px;
      padding: 16px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      display: none;
    }
    
    .response-box.show {
      display: block;
      animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .response-title {
      font-weight: 600;
      color: #06b6d4;
      margin-bottom: 8px;
    }
    
    .response-data {
      font-family: monospace;
      font-size: 13px;
      color: #1f2937;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #22d3ee;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      label {
        color: #94a3b8;
      }
      
      input, textarea {
        background: #0f172a;
        border-color: #475569;
        color: #e2e8f0;
      }
      
      input:focus, textarea:focus {
        border-color: #22d3ee;
      }
      
      .response-box {
        background: #0f172a;
        border-color: #475569;
      }
      
      .response-title {
        color: #22d3ee;
      }
      
      .response-data {
        color: #e2e8f0;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #22d3ee;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark label {
      color: #94a3b8;
    }
    
    :root.dark input,
    :root.dark textarea {
      background: #0f172a;
      border-color: #475569;
      color: #e2e8f0;
    }
    
    :root.dark input:focus,
    :root.dark textarea:focus {
      border-color: #22d3ee;
    }
    
    :root.dark .response-box {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .response-title {
      color: #22d3ee;
    }
    
    :root.dark .response-data {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📤 POST Request Demo</h1>
    <p class="subtitle">Send data to an API using fetch() POST method</p>
    
    <form id="postForm">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" placeholder="Enter post title" required>
      </div>
      
      <div class="form-group">
        <label for="body">Body</label>
        <textarea id="body" placeholder="Enter post content" required></textarea>
      </div>
      
      <button type="submit">📮 Send POST Request</button>
    </form>
    
    <div class="response-box" id="responseBox">
      <div class="response-title">Server Response:</div>
      <div class="response-data" id="responseData"></div>
    </div>
  </div>
  
  <script>
    const form = document.getElementById('postForm');
    const responseBox = document.getElementById('responseBox');
    const responseData = document.getElementById('responseData');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button');
      const originalText = submitBtn.textContent;
      
      try {
        // Disable button
        submitBtn.disabled = true;
        submitBtn.textContent = '⏳ Sending...';
        
        // Prepare data
        const postData = {
          title: document.getElementById('title').value,
          body: document.getElementById('body').value,
          userId: 1
        };
        
        // Make POST request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData)
        });
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        
        // Show response
        responseData.innerHTML = \`
          <strong>✅ Post Created Successfully!</strong><br><br>
          <strong>ID:</strong> \${result.id}<br>
          <strong>Title:</strong> \${result.title}<br>
          <strong>Body:</strong> \${result.body}<br>
          <strong>User ID:</strong> \${result.userId}
        \`;
        responseBox.classList.add('show');
        
        // Reset form
        form.reset();
        
      } catch (error) {
        responseData.innerHTML = \`<strong style="color: #dc2626;">❌ Error:</strong> \${error.message}\`;
        responseBox.classList.add('show');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Network}
        category="HTML · APIs"
        title="Fetch API"
        description="Modern, promise-based API for making HTTP requests"
        colorTheme="pink"
      />

      {/* What is Fetch API */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Network className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            What is the Fetch API?
          </CardTitle>
          <CardDescription>
            A modern interface for making HTTP requests in JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">Fetch API</code> provides a modern, promise-based way to make HTTP requests. It's the successor to XMLHttpRequest and offers a cleaner, more powerful interface for fetching resources.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-pink-50 dark:bg-pink-950/20 border border-pink-200 dark:border-pink-800">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                <h4 className="font-semibold text-pink-900 dark:text-pink-100">Promise-Based</h4>
              </div>
              <p className="text-sm text-pink-800 dark:text-pink-200">
                Uses async/await for clean code
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Flexible</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Supports all HTTP methods
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Modern</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Built-in to all modern browsers
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* GET Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <Download className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            GET Request Example
          </CardTitle>
          <CardDescription>
            Fetch data from an API endpoint
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Fetch API - GET Request"
            colorTheme="pink"
          />
        </CardContent>
      </Card>

      {/* POST Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Upload className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            POST Request Example
          </CardTitle>
          <CardDescription>
            Send data to an API using POST method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={postExample}
            title="Fetch API - POST Request"
            colorTheme="cyan"
          />
        </CardContent>
      </Card>

      {/* Common Options */}
      <Card>
        <CardHeader>
          <CardTitle>Common Fetch Options</CardTitle>
          <CardDescription>
            Configuration options for fetch requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400 block mb-2">method</code>
              <p className="text-sm text-muted-foreground">GET, POST, PUT, DELETE, etc.</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400 block mb-2">headers</code>
              <p className="text-sm text-muted-foreground">Request headers (Content-Type, etc.)</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400 block mb-2">body</code>
              <p className="text-sm text-muted-foreground">Request body (JSON, FormData, etc.)</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-pink-600 dark:text-pink-400 block mb-2">mode</code>
              <p className="text-sm text-muted-foreground">cors, no-cors, same-origin</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Always check <code>response.ok</code> before parsing data</li>
            <li>Use try-catch blocks to handle errors gracefully</li>
            <li>Set appropriate Content-Type headers for POST/PUT requests</li>
            <li>Consider using AbortController for request cancellation</li>
            <li>Handle loading states and provide user feedback</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Use Cases */}
      <Alert className="border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-950/20">
        <AlertCircle className="h-4 w-4 text-pink-600" />
        <AlertTitle className="text-pink-900 dark:text-pink-100">Common Use Cases</AlertTitle>
        <AlertDescription className="text-pink-800 dark:text-pink-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>API Calls:</strong> Fetch data from REST APIs</li>
            <li><strong>Form Submissions:</strong> Send form data to servers</li>
            <li><strong>File Uploads:</strong> Upload files using FormData</li>
            <li><strong>Real-time Updates:</strong> Poll APIs for new data</li>
            <li><strong>Authentication:</strong> Send credentials to login endpoints</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          Fetch API is supported in all modern browsers (Chrome, Firefox, Safari, Edge). For IE11, consider using a polyfill like `whatwg-fetch`.
        </AlertDescription>
      </Alert>
    </div>
  );
}
