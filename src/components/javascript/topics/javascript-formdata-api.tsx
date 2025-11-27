'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Code2,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Database,
  FileText,
  Upload,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  AlertTriangle,
  Package
} from 'lucide-react';

interface FormDataApiProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptFormDataApi({ onOpenWebPlayground }: FormDataApiProps) {
  // Demo states
  const [formEntries, setFormEntries] = useState<Array<[string, string]>>([]);
  const [demoLog, setDemoLog] = useState<string[]>([]);

  const handleDemoSubmit = () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@example.com');
    formData.append('role', 'developer');
    
    const entries = Array.from(formData.entries()) as Array<[string, string]>;
    setFormEntries(entries);
    setDemoLog(prev => [...prev, `Created FormData with ${entries.length} entries`]);
  };

  const resetDemo = () => {
    setFormEntries([]);
    setDemoLog([]);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FormData API Masterclass</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>📦 FormData API</h1>
    <p class="subtitle">Modern form data handling made easy</p>

    <!-- Basic Form -->
    <section class="demo-section">
      <h2>Basic FormData from Form</h2>
      <form id="basic-form" class="form">
        <div class="form-group">
          <label>Name</label>
          <input type="text" name="name" value="John Doe" />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" name="email" value="john@example.com" />
        </div>
        <div class="form-group">
          <label>Role</label>
          <select name="role">
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" name="newsletter" value="yes" checked />
            Subscribe to newsletter
          </label>
        </div>
        <button type="button" onclick="extractFormData()">Extract Data</button>
      </form>
    </section>

    <!-- Manual FormData -->
    <section class="demo-section">
      <h2>Manual FormData Creation</h2>
      <div class="controls">
        <input type="text" id="key" placeholder="Key" />
        <input type="text" id="value" placeholder="Value" />
        <button onclick="appendToFormData()">Append</button>
        <button onclick="clearFormData()">Clear</button>
      </div>
    </section>

    <!-- File Upload -->
    <section class="demo-section">
      <h2>File Upload with FormData</h2>
      <form id="file-form" class="form">
        <div class="form-group">
          <label>Select File</label>
          <input type="file" name="file" id="file-input" />
        </div>
        <div class="form-group">
          <label>Description</label>
          <input type="text" name="description" placeholder="File description" />
        </div>
        <button type="button" onclick="uploadFile()">Upload</button>
      </form>
    </section>

    <!-- Display Area -->
    <div id="data-display" class="data-display">
      <h3>FormData Contents</h3>
      <pre id="data-output">{}</pre>
    </div>

    <div id="console" class="console">
      <h3>Console Output</h3>
      <div id="console-log"></div>
    </div>
  </div>
  <script src="./script.js"></script>
</body>
</html>`;

  const playgroundCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
  color: #1e293b;
  font-size: 32px;
  margin-bottom: 8px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #64748b;
  margin-bottom: 32px;
}

.demo-section {
  margin-bottom: 24px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  color: #334155;
  font-size: 18px;
  margin-bottom: 16px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  color: #334155;
  font-weight: 600;
  font-size: 14px;
}

input, select {
  width: 100%;
  padding: 10px;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 8px;
}

button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  margin-right: 8px;
  transition: background 0.3s;
}

button:hover {
  background: #2563eb;
}

.controls {
  display: flex;
  gap: 8px;
}

.controls input {
  flex: 1;
}

.data-display {
  margin-bottom: 24px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.data-display h3 {
  color: #334155;
  margin-bottom: 12px;
  font-size: 16px;
}

pre {
  background: #0f172a;
  color: #22d3ee;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 13px;
}

.console {
  padding: 20px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  max-height: 250px;
  overflow-y: auto;
}

.console h3 {
  margin-bottom: 12px;
  font-size: 16px;
}

#console-log {
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.8;
}

.log-entry {
  margin: 4px 0;
  padding: 4px 8px;
  background: rgba(34, 211, 238, 0.1);
  border-left: 3px solid #22d3ee;
}`;

  const playgroundJs = `const dataOutput = document.getElementById('data-output');
const consoleLog = document.getElementById('console-log');
let manualFormData = new FormData();

function log(message, color = '#22d3ee') {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.style.borderLeftColor = color;
  entry.textContent = message;
  consoleLog.appendChild(entry);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

function displayFormData(formData) {
  const obj = {};
  for (let [key, value] of formData.entries()) {
    if (value instanceof File) {
      obj[key] = \`File: \${value.name} (\${value.size} bytes)\`;
    } else {
      obj[key] = value;
    }
  }
  dataOutput.textContent = JSON.stringify(obj, null, 2);
}

// Extract from form
function extractFormData() {
  const form = document.getElementById('basic-form');
  const formData = new FormData(form);
  
  log('Extracted FormData from form', '#10b981');
  log(\`Entries: \${Array.from(formData.keys()).join(', ')}\`, '#64748b');
  
  displayFormData(formData);
}

// Manual append
function appendToFormData() {
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  
  if (key && value) {
    manualFormData.append(key, value);
    log(\`Appended: \${key} = \${value}\`, '#10b981');
    displayFormData(manualFormData);
    
    document.getElementById('key').value = '';
    document.getElementById('value').value = '';
  } else {
    log('Please enter both key and value', '#ef4444');
  }
}

function clearFormData() {
  manualFormData = new FormData();
  log('FormData cleared', '#64748b');
  displayFormData(manualFormData);
}

// File upload
function uploadFile() {
  const form = document.getElementById('file-form');
  const fileInput = document.getElementById('file-input');
  const formData = new FormData(form);
  
  if (fileInput.files.length === 0) {
    log('No file selected', '#ef4444');
    return;
  }
  
  const file = fileInput.files[0];
  log(\`File: \${file.name} (\${file.size} bytes)\`, '#10b981');
  log(\`Type: \${file.type}\`, '#64748b');
  
  displayFormData(formData);
  
  // Simulate upload
  log('Uploading to server...', '#f59e0b');
  setTimeout(() => {
    log('Upload complete!', '#10b981');
  }, 1000);
}

log('👆 Try the examples above', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Package}
        category="11. Forms"
        title="FormData API"
        description="Master the FormData interface - the modern way to handle form data"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            What is FormData?
          </CardTitle>
          <CardDescription className="text-base">
            A powerful interface for constructing key/value pairs of form data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              <code className="text-xs">FormData</code> is a built-in JavaScript interface that makes it easy to construct a set of key/value pairs representing form fields and their values. It&apos;s especially useful for sending form data (including files) to servers via AJAX without page reload.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Two ways to create FormData

// 1. From existing form element
const form = document.querySelector('form');
const formData = new FormData(form);
// Automatically includes all form fields!

// 2. Manual creation
const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');
formData.append('file', fileInput.files[0]);

// Send to server
fetch('/api/submit', {
  method: 'POST',
  body: formData // That's it!
});`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">Form Fields</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Auto-extracts all form inputs
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Automatic
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">File Uploads</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Handles files seamlessly
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                Built-in
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
                <h3 className="font-semibold">Key/Value Pairs</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Structured data format
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
                Iterable
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Creating FormData */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. Creating FormData
          </CardTitle>
          <CardDescription className="text-base">
            Two main ways to create FormData instances
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* From Form */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">From Form Element</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <form id="myForm">...</form>

const form = document.querySelector('#myForm');

// Create FormData from form
const formData = new FormData(form);
// Automatically includes ALL form fields:
// - text inputs
// - checkboxes
// - radio buttons
// - select dropdowns
// - file inputs
// - textareas

// Use in submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Ready to send!
  fetch('/api/submit', {
    method: 'POST',
    body: formData
  });
});`}</pre>
            </div>

            {/* Manual Creation */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Manual Creation</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Create empty FormData
const formData = new FormData();

// Add fields manually
formData.append('username', 'john_doe');
formData.append('email', 'john@example.com');
formData.append('age', '25');
formData.append('role', 'developer');

// Add from variables
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  role: 'admin'
};

const formData = new FormData();
Object.entries(user).forEach(([key, value]) => {
  formData.append(key, value);
});

// Add file from input
const fileInput = document.querySelector('#file');
formData.append('avatar', fileInput.files[0]);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manipulating Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            2. Manipulating FormData
          </CardTitle>
          <CardDescription className="text-base">
            Methods to add, update, delete, and retrieve data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* append() */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">append() - Add Data</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();

// Add single value
formData.append('name', 'John');

// Add multiple values for same key
formData.append('hobbies', 'reading');
formData.append('hobbies', 'gaming');
formData.append('hobbies', 'coding');

// Add file
const file = fileInput.files[0];
formData.append('avatar', file);

// Add blob
const blob = new Blob(['Hello'], { type: 'text/plain' });
formData.append('greeting', blob, 'hello.txt');

// Note: append() adds, doesn't replace
formData.append('email', 'john@example.com');
formData.append('email', 'john@work.com');
// Now has 2 email entries!`}</pre>
            </div>

            {/* set() */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">set() - Replace Data</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();

// set() replaces existing values
formData.set('email', 'john@example.com');
formData.set('email', 'john@work.com');
// Only keeps last value!

// Difference: append vs set
formData.append('tags', 'javascript');
formData.append('tags', 'react');
// Has 2 entries

formData.set('category', 'tech');
formData.set('category', 'programming');
// Only has 1 entry (replaced)

// Use set() when you want single value
// Use append() for multiple values`}</pre>
            </div>

            {/* get() & getAll() */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">get() & getAll()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('name', 'John');
formData.append('tags', 'js');
formData.append('tags', 'react');
formData.append('tags', 'node');

// get() - returns first value
const name = formData.get('name');
console.log(name); // "John"

const firstTag = formData.get('tags');
console.log(firstTag); // "js" (only first!)

// getAll() - returns all values as array
const allTags = formData.getAll('tags');
console.log(allTags); // ["js", "react", "node"]

// Check if field exists
if (formData.has('email')) {
  console.log('Email exists');
}

// Returns null if not found
console.log(formData.get('phone')); // null`}</pre>
            </div>

            {/* delete() & has() */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">delete() & has()</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');

// Check if key exists
if (formData.has('email')) {
  console.log('Email field exists');
}

// Delete field (removes ALL values for that key)
formData.delete('email');

// Check again
console.log(formData.has('email')); // false

// Delete multiple values
formData.append('tags', 'js');
formData.append('tags', 'react');
formData.delete('tags'); // Removes both!

// Safe delete
if (formData.has('optional')) {
  formData.delete('optional');
}`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Iterating FormData */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <FileText className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            3. Iterating Over FormData
          </CardTitle>
          <CardDescription className="text-base">
            Loop through entries with modern JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* for...of */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">for...of Loop</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');
formData.append('role', 'developer');

// entries() - key/value pairs
for (let [key, value] of formData.entries()) {
  console.log(\`\${key}: \${value}\`);
}
// Output:
// name: John
// email: john@example.com
// role: developer

// keys() - just keys
for (let key of formData.keys()) {
  console.log(key);
}
// Output: name, email, role

// values() - just values
for (let value of formData.values()) {
  console.log(value);
}
// Output: John, john@example.com, developer`}</pre>
            </div>

            {/* forEach */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">forEach Method</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');

// forEach (value, key, formData)
formData.forEach((value, key) => {
  console.log(\`\${key}: \${value}\`);
});

// Use case: Build object
const obj = {};
formData.forEach((value, key) => {
  obj[key] = value;
});
console.log(obj);
// { name: 'John', email: 'john@example.com' }

// Use case: Log all entries
formData.forEach((value, key) => {
  console.log(\`Field: \${key}\`);
  console.log(\`Value: \${value}\`);
  console.log(\`Type: \${typeof value}\`);
});`}</pre>
            </div>

            {/* Convert to Object */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Convert to Object</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');
formData.append('age', '25');

// Method 1: Object.fromEntries() ⭐ Best!
const obj = Object.fromEntries(formData);
console.log(obj);
// { name: 'John', email: 'john@example.com', age: '25' }

// Method 2: Manual conversion
const obj2 = {};
for (let [key, value] of formData.entries()) {
  obj2[key] = value;
}

// Handle multiple values
formData.append('tags', 'js');
formData.append('tags', 'react');

const obj3 = {};
for (let [key, value] of formData.entries()) {
  if (obj3[key]) {
    obj3[key] = Array.isArray(obj3[key]) 
      ? [...obj3[key], value]
      : [obj3[key], value];
  } else {
    obj3[key] = value;
  }
}`}</pre>
            </div>

            {/* Convert to Array */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Convert to Array</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('name', 'John');
formData.append('email', 'john@example.com');

// Convert to array of entries
const entries = Array.from(formData.entries());
console.log(entries);
// [["name", "John"], ["email", "john@example.com"]]

// Or use spread operator
const entries2 = [...formData.entries()];

// Keys array
const keys = Array.from(formData.keys());
console.log(keys); // ["name", "email"]

// Values array
const values = Array.from(formData.values());
console.log(values); // ["John", "john@example.com"]

// Filter entries
const filtered = [...formData.entries()]
  .filter(([key, value]) => value !== '');`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sending to Server */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Upload className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            4. Sending FormData to Server
          </CardTitle>
          <CardDescription className="text-base">
            Use Fetch API to upload form data without page reload
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Fetch */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">With Fetch API</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
      // DON'T set Content-Type!
      // Browser sets it automatically with boundary
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('Success:', result);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// FormData automatically sets:
// Content-Type: multipart/form-data; boundary=...`}</pre>
            </div>

            {/* With Extra Data */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Add Extra Fields</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Add extra fields
  formData.append('timestamp', Date.now());
  formData.append('userId', currentUser.id);
  formData.append('source', 'web');
  
  // Add metadata
  formData.append('metadata', JSON.stringify({
    browser: navigator.userAgent,
    language: navigator.language
  }));
  
  await fetch('/api/submit', {
    method: 'POST',
    body: formData
  });
});`}</pre>
            </div>

            {/* Convert to JSON */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Send as JSON Instead</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Convert to plain object
  const data = Object.fromEntries(formData);
  
  // Send as JSON
  await fetch('/api/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
});

// Note: Can't send files as JSON!
// Use FormData directly for file uploads`}</pre>
            </div>

            {/* URLSearchParams */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Convert to URLSearchParams</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData(form);

// Convert to URLSearchParams
const params = new URLSearchParams(formData);

// Send as URL-encoded
await fetch('/api/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: params
});

// Or append to URL for GET
const url = '/api/search?' + params.toString();
fetch(url);

// Result: /api/search?name=John&email=john@example.com`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Uploads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Upload className="w-6 h-6 text-rose-600/80 dark:text-rose-400/80" />
            5. File Uploads with FormData
          </CardTitle>
          <CardDescription className="text-base">
            Handle single and multiple file uploads
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Single File */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Single File Upload</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <input type="file" name="avatar" />

const fileInput = document.querySelector('[name="avatar"]');
const formData = new FormData();

// Get selected file
const file = fileInput.files[0];

if (file) {
  // Append file to FormData
  formData.append('avatar', file);
  
  // Add extra metadata
  formData.append('fileSize', file.size);
  formData.append('fileName', file.name);
  formData.append('fileType', file.type);
  
  // Upload
  await fetch('/api/upload', {
    method: 'POST',
    body: formData
  });
}`}</pre>
            </div>

            {/* Multiple Files */}
            <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3">Multiple Files Upload</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <input type="file" name="photos" multiple />

const fileInput = document.querySelector('[name="photos"]');
const formData = new FormData();

// Get all selected files
const files = Array.from(fileInput.files);

// Method 1: Append each file
files.forEach((file, index) => {
  formData.append(\`photos[\${index}]\`, file);
});

// Method 2: Same name (server handles array)
files.forEach(file => {
  formData.append('photos', file);
});

// Upload all
await fetch('/api/upload-multiple', {
  method: 'POST',
  body: formData
});`}</pre>
            </div>

            {/* File Validation */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">File Validation</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const fileInput = document.querySelector('[type="file"]');

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  
  if (!file) return;
  
  // Size limit (5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    alert('File too large! Max 5MB');
    e.target.value = '';
    return;
  }
  
  // Type validation
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    alert('Invalid file type!');
    e.target.value = '';
    return;
  }
  
  console.log('File valid:', file.name);
});`}</pre>
            </div>

            {/* Progress Tracking */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Upload Progress</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const formData = new FormData();
formData.append('file', file);

// Using XMLHttpRequest for progress
const xhr = new XMLHttpRequest();

xhr.upload.addEventListener('progress', (e) => {
  if (e.lengthComputable) {
    const percent = (e.loaded / e.total) * 100;
    console.log(\`Upload: \${percent.toFixed(0)}%\`);
    updateProgressBar(percent);
  }
});

xhr.addEventListener('load', () => {
  if (xhr.status === 200) {
    console.log('Upload complete!');
  }
});

xhr.open('POST', '/api/upload');
xhr.send(formData);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PlayCircle className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Live Demo - FormData Creation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button onClick={handleDemoSubmit}>
              Create FormData
            </Button>
            <Button variant="outline" onClick={resetDemo}>
              <RefreshCw className="w-3 h-3 mr-1" />
              Reset
            </Button>
          </div>

          {formEntries.length > 0 && (
            <div className="p-4 bg-white dark:bg-gray-900 rounded border">
              <p className="font-semibold text-sm mb-3">FormData Entries:</p>
              <div className="space-y-2">
                {formEntries.map(([key, value], index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="font-mono">{key}</Badge>
                    <span className="text-muted-foreground">=</span>
                    <span className="font-mono text-blue-600 dark:text-blue-400">&quot;{value}&quot;</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {demoLog.length > 0 && (
            <div className="p-3 bg-white dark:bg-gray-900 rounded border">
              <p className="font-semibold text-sm mb-2">Log:</p>
              {demoLog.map((log, i) => (
                <p key={i} className="text-xs font-mono text-muted-foreground">→ {log}</p>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Lightbulb className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-5 h-5" />
                ✅ Do This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use FormData for file uploads</li>
                <li>• Create from form element when possible</li>
                <li>• Use <code className="text-xs">append()</code> for multiple values</li>
                <li>• Use <code className="text-xs">set()</code> for single values</li>
                <li>• Validate files before uploading</li>
                <li>• Use <code className="text-xs">Object.fromEntries()</code> to convert</li>
                <li>• Let browser set Content-Type automatically</li>
                <li>• Check <code className="text-xs">has()</code> before getting values</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t manually set Content-Type for FormData</li>
                <li>• Don&apos;t send files as JSON</li>
                <li>• Don&apos;t forget to check if files exist</li>
                <li>• Don&apos;t use FormData for simple GET requests</li>
                <li>• Don&apos;t assume <code className="text-xs">get()</code> returns all values</li>
                <li>• Don&apos;t forget file size validation</li>
                <li>• Don&apos;t serialize FormData to JSON directly</li>
                <li>• Don&apos;t ignore file type validation</li>
              </ul>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Important Note</AlertTitle>
            <AlertDescription>
              When sending FormData with Fetch, <strong>do NOT</strong> set the <code className="text-xs">Content-Type</code> header. The browser automatically sets it to <code className="text-xs">multipart/form-data</code> with the correct boundary.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Interactive Playground */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Globe className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            Interactive Playground
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Open this playground to see FormData in action - create, manipulate, iterate, and visualize form data!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open FormData API Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
