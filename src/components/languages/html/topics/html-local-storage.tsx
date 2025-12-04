'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Database, Save, Trash2, CheckCircle, AlertCircle, Info, HardDrive } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlLocalStorageProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlLocalStorage({ onOpenWebPlayground }: HtmlLocalStorageProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>localStorage Basics</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
      color: #667eea;
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    
    .input-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #4b5563;
    }
    
    input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.3s;
    }
    
    input:focus {
      outline: none;
      border-color: #667eea;
    }
    
    .button-group {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
    }
    
    button {
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    
    .btn-save {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
    
    .btn-save:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
    
    .btn-load {
      background: #10b981;
      color: white;
    }
    
    .btn-load:hover {
      background: #059669;
    }
    
    .btn-remove {
      background: #ef4444;
      color: white;
    }
    
    .btn-remove:hover {
      background: #dc2626;
    }
    
    .btn-clear {
      background: #6b7280;
      color: white;
    }
    
    .btn-clear:hover {
      background: #4b5563;
    }
    
    .output {
      padding: 16px;
      background: #f3f4f6;
      border-radius: 8px;
      border-left: 4px solid #667eea;
      min-height: 60px;
    }
    
    .output-label {
      font-weight: 600;
      color: #667eea;
      margin-bottom: 8px;
    }
    
    .output-value {
      color: #1f2937;
      font-family: monospace;
      font-size: 14px;
    }
    
    .message {
      padding: 12px 16px;
      border-radius: 8px;
      margin-top: 16px;
      font-size: 14px;
      animation: slideIn 0.3s ease;
    }
    
    .message-success {
      background: #d1fae5;
      color: #065f46;
      border: 1px solid #10b981;
    }
    
    .message-error {
      background: #fee2e2;
      color: #991b1b;
      border: 1px solid #ef4444;
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
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #818cf8;
      }
      
      label {
        color: #94a3b8;
      }
      
      input {
        background: #0f172a;
        border-color: #475569;
        color: #e2e8f0;
      }
      
      input:focus {
        border-color: #818cf8;
      }
      
      .output {
        background: #0f172a;
        border-left-color: #818cf8;
      }
      
      .output-label {
        color: #818cf8;
      }
      
      .output-value {
        color: #e2e8f0;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #818cf8;
    }
    
    :root.dark label {
      color: #94a3b8;
    }
    
    :root.dark input {
      background: #0f172a;
      border-color: #475569;
      color: #e2e8f0;
    }
    
    :root.dark input:focus {
      border-color: #818cf8;
    }
    
    :root.dark .output {
      background: #0f172a;
      border-left-color: #818cf8;
    }
    
    :root.dark .output-label {
      color: #818cf8;
    }
    
    :root.dark .output-value {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>💾 localStorage Demo</h1>
    
    <div class="input-group">
      <label for="keyInput">Key</label>
      <input type="text" id="keyInput" placeholder="e.g., username" value="username">
    </div>
    
    <div class="input-group">
      <label for="valueInput">Value</label>
      <input type="text" id="valueInput" placeholder="Enter value to store">
    </div>
    
    <div class="button-group">
      <button class="btn-save" id="saveBtn">💾 Save</button>
      <button class="btn-load" id="loadBtn">📂 Load</button>
      <button class="btn-remove" id="removeBtn">🗑️ Remove</button>
      <button class="btn-clear" id="clearBtn">🧹 Clear All</button>
    </div>
    
    <div class="output">
      <div class="output-label">Stored Value:</div>
      <div class="output-value" id="output">No data loaded yet</div>
    </div>
    
    <div id="messageBox"></div>
  </div>
  
  <script>
    const keyInput = document.getElementById('keyInput');
    const valueInput = document.getElementById('valueInput');
    const output = document.getElementById('output');
    const messageBox = document.getElementById('messageBox');
    
    function showMessage(text, type) {
      messageBox.innerHTML = \`<div class="message message-\${type}">\${text}</div>\`;
      setTimeout(() => messageBox.innerHTML = '', 3000);
    }
    
    // Save to localStorage
    document.getElementById('saveBtn').addEventListener('click', () => {
      const key = keyInput.value.trim();
      const value = valueInput.value.trim();
      
      if (!key) {
        showMessage('❌ Please enter a key', 'error');
        return;
      }
      
      if (!value) {
        showMessage('❌ Please enter a value', 'error');
        return;
      }
      
      try {
        localStorage.setItem(key, value);
        showMessage(\`✅ Saved "\${key}" to localStorage\`, 'success');
        output.textContent = value;
      } catch (e) {
        showMessage('❌ Error saving to localStorage', 'error');
      }
    });
    
    // Load from localStorage
    document.getElementById('loadBtn').addEventListener('click', () => {
      const key = keyInput.value.trim();
      
      if (!key) {
        showMessage('❌ Please enter a key to load', 'error');
        return;
      }
      
      const value = localStorage.getItem(key);
      
      if (value === null) {
        output.textContent = 'No data found for this key';
        showMessage('⚠️ Key not found in localStorage', 'error');
      } else {
        output.textContent = value;
        valueInput.value = value;
        showMessage(\`✅ Loaded "\${key}" from localStorage\`, 'success');
      }
    });
    
    // Remove from localStorage
    document.getElementById('removeBtn').addEventListener('click', () => {
      const key = keyInput.value.trim();
      
      if (!key) {
        showMessage('❌ Please enter a key to remove', 'error');
        return;
      }
      
      localStorage.removeItem(key);
      output.textContent = 'Item removed';
      showMessage(\`✅ Removed "\${key}" from localStorage\`, 'success');
    });
    
    // Clear all localStorage
    document.getElementById('clearBtn').addEventListener('click', () => {
      if (confirm('Are you sure you want to clear ALL localStorage data?')) {
        localStorage.clear();
        output.textContent = 'All data cleared';
        showMessage('✅ Cleared all localStorage data', 'success');
      }
    });
    
    // Load on page load
    window.addEventListener('load', () => {
      const storedValue = localStorage.getItem('username');
      if (storedValue) {
        output.textContent = storedValue;
        valueInput.value = storedValue;
      }
    });
  </script>
</body>
</html>`;

  const storageEventsExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>localStorage Events</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
      color: #10b981;
      margin-bottom: 10px;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
    }
    
    .info-box {
      padding: 16px;
      background: #d1fae5;
      border-radius: 8px;
      border-left: 4px solid #10b981;
      margin-bottom: 20px;
      font-size: 14px;
      color: #065f46;
    }
    
    .events-log {
      background: #f9fafb;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      padding: 16px;
      min-height: 200px;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .log-title {
      font-weight: 600;
      color: #374151;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .event-item {
      padding: 12px;
      background: white;
      border-radius: 6px;
      margin-bottom: 8px;
      border-left: 3px solid #10b981;
      font-size: 13px;
      animation: slideIn 0.3s ease;
    }
    
    .event-time {
      color: #6b7280;
      font-size: 11px;
      font-family: monospace;
    }
    
    .event-details {
      margin-top: 6px;
      color: #1f2937;
    }
    
    .event-key {
      font-weight: 600;
      color: #10b981;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-10px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    button {
      background: #10b981;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 14px;
      margin-top: 12px;
    }
    
    button:hover {
      background: #059669;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #34d399;
      }
      
      .subtitle {
        color: #94a3b8;
      }
      
      .info-box {
        background: #14532d;
        color: #86efac;
        border-left-color: #10b981;
      }
      
      .events-log {
        background: #0f172a;
        border-color: #475569;
      }
      
      .log-title {
        color: #e2e8f0;
      }
      
      .event-item {
        background: #1e293b;
        border-left-color: #34d399;
      }
      
      .event-details {
        color: #e2e8f0;
      }
      
      .event-key {
        color: #34d399;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #34d399;
    }
    
    :root.dark .subtitle {
      color: #94a3b8;
    }
    
    :root.dark .info-box {
      background: #14532d;
      color: #86efac;
      border-left-color: #10b981;
    }
    
    :root.dark .events-log {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .log-title {
      color: #e2e8f0;
    }
    
    :root.dark .event-item {
      background: #1e293b;
      border-left-color: #34d399;
    }
    
    :root.dark .event-details {
      color: #e2e8f0;
    }
    
    :root.dark .event-key {
      color: #34d399;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔔 Storage Events</h1>
    <p class="subtitle">Open this page in multiple tabs to see storage events in action</p>
    
    <div class="info-box">
      <strong>💡 How it works:</strong> When one tab changes localStorage, other tabs receive a "storage" event. Try opening this page in 2+ tabs and make changes!
    </div>
    
    <div class="events-log">
      <div class="log-title">📋 Event Log</div>
      <div id="eventLog">Waiting for storage events...</div>
    </div>
    
    <button onclick="testChange()">🧪 Trigger Storage Change</button>
  </div>
  
  <script>
    const eventLog = document.getElementById('eventLog');
    let eventCount = 0;
    
    function addLog(message, details = '') {
      if (eventCount === 0) {
        eventLog.innerHTML = '';
      }
      eventCount++;
      
      const time = new Date().toLocaleTimeString();
      const eventItem = document.createElement('div');
      eventItem.className = 'event-item';
      eventItem.innerHTML = \`
        <div class="event-time">\${time}</div>
        <div class="event-details">\${message}</div>
        \${details ? \`<div class="event-details">\${details}</div>\` : ''}
      \`;
      
      eventLog.insertBefore(eventItem, eventLog.firstChild);
      
      // Keep only last 10 events
      while (eventLog.children.length > 10) {
        eventLog.removeChild(eventLog.lastChild);
      }
    }
    
    // Listen for storage events
    window.addEventListener('storage', (e) => {
      console.log('Storage event detected:', e);
      
      if (e.key === null) {
        addLog('🧹 <strong>All storage cleared</strong>', 'localStorage.clear() was called');
      } else {
        const message = \`📝 Key <span class="event-key">"\${e.key}"</span> changed\`;
        const details = \`Old: "\${e.oldValue || '(empty)'}" → New: "\${e.newValue || '(removed)'}"\`;
        addLog(message, details);
      }
    });
    
    // Test function
    function testChange() {
      const testKey = 'testKey_' + Date.now();
      const testValue = 'Test value ' + Math.floor(Math.random() * 100);
      
      localStorage.setItem(testKey, testValue);
      
      addLog('✅ <strong>Local change made</strong>', \`Set "\${testKey}" = "\${testValue}"\`);
      addLog('ℹ️ Open this page in another tab to see the storage event!');
    }
    
    // Log on load
    addLog('🚀 <strong>Page loaded</strong>', 'Listening for storage events from other tabs...');
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Database}
        category="HTML · APIs"
        title="localStorage API"
        description="Learn how to store data persistently in the browser using localStorage"
        colorTheme="blue"
      />

      {/* What is localStorage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <HardDrive className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            What is localStorage?
          </CardTitle>
          <CardDescription>
            localStorage is a web storage API that allows you to store key-value pairs in the browser
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <code className="px-2 py-1 bg-muted rounded">localStorage</code> provides a simple way to store data that persists even after the browser is closed. It's perfect for storing user preferences, settings, or any data that should survive page refreshes.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Save className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Persistent</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Data remains even after browser restart
              </p>
            </div>

            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-5 w-5 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold text-green-900 dark:text-green-100">Per Origin</h4>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200">
                Each website has its own storage
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h4 className="font-semibold text-purple-900 dark:text-purple-100">~5-10MB</h4>
              </div>
              <p className="text-sm text-purple-800 dark:text-purple-200">
                Storage limit per domain
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            Basic localStorage Operations
          </CardTitle>
          <CardDescription>
            Learn the fundamental methods: setItem, getItem, removeItem, and clear
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="localStorage CRUD Operations"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Storage Events Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Info className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            Storage Events (Cross-Tab Communication)
          </CardTitle>
          <CardDescription>
            Listen for changes made to localStorage from other tabs/windows
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={storageEventsExample}
            title="Storage Event Listener"
            colorTheme="green"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Common Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Core Methods</CardTitle>
          <CardDescription>
            Essential localStorage API methods you'll use daily
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">localStorage.setItem(key, value)</code>
              <p className="text-sm text-muted-foreground mt-2">Store a key-value pair</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">localStorage.getItem(key)</code>
              <p className="text-sm text-muted-foreground mt-2">Retrieve value by key</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">localStorage.removeItem(key)</code>
              <p className="text-sm text-muted-foreground mt-2">Delete a specific item</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-blue-600 dark:text-blue-400">localStorage.clear()</code>
              <p className="text-sm text-muted-foreground mt-2">Remove all stored data</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Always use try-catch when accessing localStorage (can fail in private browsing)</li>
            <li>Store only strings - use JSON.stringify() for objects</li>
            <li>Never store sensitive data (passwords, tokens) in localStorage</li>
            <li>Check storage quota before storing large amounts of data</li>
            <li>Use meaningful, prefixed keys to avoid conflicts</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          localStorage is supported in all modern browsers (Chrome, Firefox, Safari, Edge) and IE 8+. It's safe to use in production without polyfills.
        </AlertDescription>
      </Alert>
    </div>
  );
}
