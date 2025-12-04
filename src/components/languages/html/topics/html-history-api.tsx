'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { History, ArrowLeft, ArrowRight, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlHistoryApiProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlHistoryApi({ onOpenWebPlayground }: HtmlHistoryApiProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>History API Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
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
      color: #6366f1;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    .nav-buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }
    
    button {
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-back {
      background: #ef4444;
      color: white;
    }
    
    .btn-back:hover {
      background: #dc2626;
    }
    
    .btn-forward {
      background: #10b981;
      color: white;
    }
    
    .btn-forward:hover {
      background: #059669;
    }
    
    .pages {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }
    
    .page-btn {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: white;
      padding: 16px 12px;
      text-align: center;
    }
    
    .page-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
    }
    
    .current-state {
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      margin-bottom: 16px;
    }
    
    .state-title {
      font-weight: 600;
      color: #6366f1;
      margin-bottom: 12px;
      font-size: 13px;
      text-transform: uppercase;
    }
    
    .state-value {
      color: #1f2937;
      font-family: monospace;
      font-size: 14px;
      line-height: 1.8;
    }
    
    .history-info {
      padding: 16px;
      background: #dbeafe;
      border-radius: 8px;
      border-left: 4px solid #6366f1;
      font-size: 13px;
      color: #1e3a8a;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #818cf8;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .current-state {
        background: #0f172a;
        border-color: #475569;
      }
      
      .state-title {
        color: #818cf8;
      }
      
      .state-value {
        color: #e2e8f0;
      }
      
      .history-info {
        background: #1e3a8a;
        color: #bfdbfe;
        border-left-color: #818cf8;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .current-state {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .state-title {
      color: #818cf8;
    }
    
    :root.dark .state-value {
      color: #e2e8f0;
    }
    
    :root.dark .history-info {
      background: #1e3a8a;
      color: #bfdbfe;
      border-left-color: #818cf8;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🕐 History API Demo</h1>
    <p class="subtitle">Navigate through pages using pushState and popstate events</p>
    
    <div class="nav-buttons">
      <button class="btn-back" onclick="goBack()">⬅️ Back</button>
      <button class="btn-forward" onclick="goForward()">Forward ➡️</button>
    </div>
    
    <div class="pages">
      <button class="page-btn" onclick="navigateTo('home')">🏠 Home</button>
      <button class="page-btn" onclick="navigateTo('about')">📖 About</button>
      <button class="page-btn" onclick="navigateTo('contact')">📧 Contact</button>
    </div>
    
    <div class="current-state">
      <div class="state-title">Current Page</div>
      <div class="state-value" id="currentPage">Loading...</div>
    </div>
    
    <div class="history-info">
      <strong>💡 Try this:</strong><br>
      Click different pages, then use Back/Forward buttons. Notice how the URL changes without page reload!
    </div>
  </div>
  
  <script>
    function updateDisplay(page) {
      const pageContent = {
        home: \`<strong>Page:</strong> Home<br><strong>URL:</strong> \${location.pathname}<br><strong>State:</strong> { page: 'home' }\`,
        about: \`<strong>Page:</strong> About<br><strong>URL:</strong> \${location.pathname}<br><strong>State:</strong> { page: 'about' }\`,
        contact: \`<strong>Page:</strong> Contact<br><strong>URL:</strong> \${location.pathname}<br><strong>State:</strong> { page: 'contact' }\`
      };
      
      document.getElementById('currentPage').innerHTML = pageContent[page] || 'Unknown page';
    }
    
    function navigateTo(page) {
      // Push new state to history
      history.pushState(
        { page: page },
        \`\${page.charAt(0).toUpperCase() + page.slice(1)} Page\`,
        \`/\${page}\`
      );
      
      updateDisplay(page);
    }
    
    function goBack() {
      history.back();
    }
    
    function goForward() {
      history.forward();
    }
    
    // Listen for popstate event (back/forward navigation)
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.page) {
        updateDisplay(event.state.page);
      } else {
        updateDisplay('home');
      }
    });
    
    // Initialize with home page
    history.replaceState({ page: 'home' }, 'Home Page', '/home');
    updateDisplay('home');
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={History}
        category="HTML · APIs"
        title="History API"
        description="Manipulate browser history and create single-page app navigation"
        colorTheme="blue"
      />

      {/* What is History API */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <History className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            What is the History API?
          </CardTitle>
          <CardDescription>
            Programmatically manipulate the browser's session history
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            The <code className="px-2 py-1 bg-muted rounded">History API</code> allows you to manipulate the browser history, enabling single-page applications (SPAs) to update the URL without triggering a full page reload.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center gap-2 mb-2">
                <ArrowLeft className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Navigate</h4>
              </div>
              <p className="text-sm text-indigo-800 dark:text-indigo-200">
                Go back/forward through history
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Push State</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Add new entries to history
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">No Reload</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Update URL without page reload
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg">
              <History className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            SPA Navigation Demo
          </CardTitle>
          <CardDescription>
            Navigate between pages without full page reloads
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="Single-Page Navigation with History API"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Core Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Core Methods</CardTitle>
          <CardDescription>
            Essential methods for working with browser history
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">history.pushState(state, title, url)</code>
              <p className="text-sm text-muted-foreground">Add a new entry to history</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">history.replaceState(state, title, url)</code>
              <p className="text-sm text-muted-foreground">Modify current history entry</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">history.back()</code>
              <p className="text-sm text-muted-foreground">Go to previous page</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">history.forward()</code>
              <p className="text-sm text-muted-foreground">Go to next page</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">history.go(n)</code>
              <p className="text-sm text-muted-foreground">Go n pages forward/back</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-indigo-600 dark:text-indigo-400 block mb-2">window.onpopstate</code>
              <p className="text-sm text-muted-foreground">Listen for back/forward events</p>
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
            <li>Always listen for <code>popstate</code> events to handle back/forward navigation</li>
            <li>Store meaningful state data in the state object</li>
            <li>Use <code>replaceState</code> for initial page load to set proper state</li>
            <li>Update page content when state changes (don't rely on URL alone)</li>
            <li>Consider using a router library for complex SPAs</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Use Cases */}
      <Alert className="border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/20">
        <AlertCircle className="h-4 w-4 text-indigo-600" />
        <AlertTitle className="text-indigo-900 dark:text-indigo-100">Common Use Cases</AlertTitle>
        <AlertDescription className="text-indigo-800 dark:text-indigo-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Single-Page Apps:</strong> Navigate without full page reloads (React Router, Vue Router)</li>
            <li><strong>Tab Navigation:</strong> Keep URL in sync with active tab</li>
            <li><strong>Modal Windows:</strong> Add modals to history for back button support</li>
            <li><strong>Infinite Scroll:</strong> Update URL as user scrolls through pages</li>
            <li><strong>Form Wizards:</strong> Track multi-step form progress in URL</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          The History API is supported in all modern browsers (Chrome, Firefox, Safari, Edge) and IE 10+. Safe to use in production.
        </AlertDescription>
      </Alert>
    </div>
  );
}
