'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Database,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Upload,
} from 'lucide-react';

export default function JavaScriptFormDataApiNew() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full space-y-8 pb-16">
      <PageHeader
        icon={Database}
        category="JavaScript DOM"
        title="FormData API"
        description="Modern way to handle form data and file uploads"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/20 dark:from-cyan-950/10 dark:via-blue-950/5 dark:to-indigo-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                What is FormData?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                FormData is a <strong className="text-cyan-700 dark:text-cyan-400">modern JavaScript API</strong> that makes it easy to capture all form data, including files, and send it via AJAX or fetch!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-cyan-200 dark:border-cyan-800/30">
            <Upload className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <AlertTitle className="text-lg">Perfect for File Uploads</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              FormData handles <strong>file uploads</strong> automatically! It's the best way to send multipart/form-data to a server.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* FormData Methods */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">FormData Basics</h2>

        {/* Creating FormData */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>Creating FormData from Form</CardTitle>
            <CardDescription>Capture all form data automatically</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Create FormData from form
  const formData = new FormData(form);
  
  // Get individual values
  const name = formData.get('name');
  const email = formData.get('email');
  
  console.log('Name:', name);
  console.log('Email:', email);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'create-dark' : 'create-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    input { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #3b82f6; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #2563eb; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#dbeafe'}; color: ${isDarkMode ? '#93c5fd' : '#1e40af'}; border-radius: 8px; font-size: 13px; line-height: 1.8; font-family: monospace; }
  </style>
</head>
<body>
  <form id="myForm">
    <label>Name</label>
    <input type="text" name="name" placeholder="Your name" required>
    <label>Email</label>
    <input type="email" name="email" placeholder="Your email" required>
    <label>Age</label>
    <input type="number" name="age" placeholder="Your age" required>
    <button type="submit">Submit</button>
  </form>
  <div id="output">Submit to see FormData...</div>
  
  <script>
    const form = document.querySelector('#myForm');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      
      output.innerHTML = 
        '<strong>FormData created!</strong><br>' +
        'name: ' + formData.get('name') + '<br>' +
        'email: ' + formData.get('email') + '<br>' +
        'age: ' + formData.get('age');
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="FormData Creation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Iterating FormData */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>Iterating Over FormData</CardTitle>
            <CardDescription>Loop through all form fields</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const formData = new FormData(form);

// Method 1: for...of loop
for (const [key, value] of formData) {
  console.log(key, value);
}

// Method 2: forEach
formData.forEach((value, key) => {
  console.log(key, value);
});

// Method 3: entries()
for (const entry of formData.entries()) {
  console.log(entry);
}`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'iterate-dark' : 'iterate-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 10px; }
    label { font-weight: 600; font-size: 13px; }
    input { padding: 8px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 6px; }
    input:focus { outline: none; border-color: #8b5cf6; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 10px; background: #8b5cf6; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
    button:hover { background: #7c3aed; }
    #output { padding: 12px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#fae8ff'}; color: ${isDarkMode ? '#e9d5ff' : '#581c87'}; border-radius: 8px; font-size: 12px; line-height: 1.8; font-family: monospace; }
  </style>
</head>
<body>
  <form id="form">
    <label>Username</label>
    <input type="text" name="username" value="john_doe">
    <label>Email</label>
    <input type="email" name="email" value="john@example.com">
    <label>Country</label>
    <input type="text" name="country" value="USA">
    <button type="submit">Show All Fields</button>
  </form>
  <div id="output">Submit to iterate through fields...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      
      let html = '<strong>All Form Fields:</strong><br>';
      for (const [key, value] of formData) {
        html += '🔑 ' + key + ': ' + value + '<br>';
      }
      output.innerHTML = html;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Iterate FormData Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Append & Set Methods */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>append() vs set()</CardTitle>
            <CardDescription>Add or modify FormData entries</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const formData = new FormData();

// append() - adds new entry (allows duplicates)
formData.append('hobby', 'reading');
formData.append('hobby', 'coding');

// set() - replaces existing or adds new
formData.set('name', 'John');
formData.set('name', 'Jane'); // Replaces John

// Other methods
formData.has('name');    // true
formData.delete('hobby'); // removes all hobby entries
formData.getAll('hobby'); // gets all hobby values`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'methods-dark' : 'methods-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    .buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px; }
    button { padding: 10px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; font-size: 13px; }
    .append { background: #10b981; color: white; }
    .set { background: #3b82f6; color: white; }
    .has { background: #8b5cf6; color: white; }
    .delete { background: #ef4444; color: white; }
    #output { padding: 15px; background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <div class="buttons">
    <button class="append" id="appendBtn">append('hobby', 'reading')</button>
    <button class="set" id="setBtn">set('name', 'Alice')</button>
    <button class="has" id="hasBtn">has('name')</button>
    <button class="delete" id="deleteBtn">delete('hobby')</button>
  </div>
  <div id="output">Click buttons to see FormData methods...</div>
  
  <script>
    const output = document.querySelector('#output');
    const formData = new FormData();
    
    function showData() {
      let html = '<strong>Current FormData:</strong><br>';
      if (Array.from(formData.entries()).length === 0) {
        html += '<em>(empty)</em>';
      } else {
        for (const [key, value] of formData) {
          html += '• ' + key + ': ' + value + '<br>';
        }
      }
      output.innerHTML = html;
    }
    
    document.querySelector('#appendBtn').addEventListener('click', () => {
      formData.append('hobby', 'reading');
      showData();
    });
    
    document.querySelector('#setBtn').addEventListener('click', () => {
      formData.set('name', 'Alice');
      showData();
    });
    
    document.querySelector('#hasBtn').addEventListener('click', () => {
      const has = formData.has('name');
      output.innerHTML = '<strong>has(\\'name\\'):</strong> ' + has + '<br><br>';
      setTimeout(showData, 1500);
    });
    
    document.querySelector('#deleteBtn').addEventListener('click', () => {
      formData.delete('hobby');
      showData();
    });
    
    showData();
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="FormData Methods Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* File Upload */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>File Upload with FormData</CardTitle>
            <CardDescription>Handle file uploads automatically</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`form.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  // File is automatically included!
  const file = formData.get('avatar');
  console.log('File:', file.name);
  console.log('Size:', file.size);
  console.log('Type:', file.type);
  
  // Send to server with fetch
  await fetch('/upload', {
    method: 'POST',
    body: formData // Don't set Content-Type!
  });
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'file-dark' : 'file-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    input[type="text"] { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input[type="file"] { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; cursor: pointer; }
    input:focus { outline: none; border-color: #f59e0b; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #f59e0b; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #d97706; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#7c2d12' : '#fed7aa'}; color: ${isDarkMode ? '#fcd34d' : '#78350f'}; border-radius: 8px; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <form id="form">
    <label>Name</label>
    <input type="text" name="name" placeholder="Your name" required>
    <label>Avatar (select any file)</label>
    <input type="file" name="avatar" required>
    <button type="submit">Upload</button>
  </form>
  <div id="output">Select a file and submit...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      
      const name = formData.get('name');
      const file = formData.get('avatar');
      
      if (file && file.size > 0) {
        output.innerHTML = 
          '✅ <strong>FormData ready to send!</strong><br>' +
          '👤 Name: ' + name + '<br>' +
          '📁 File: ' + file.name + '<br>' +
          '📊 Size: ' + (file.size / 1024).toFixed(2) + ' KB<br>' +
          '📄 Type: ' + file.type;
      }
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="File Upload Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sending with Fetch */}
        <Card className="border-2 border-indigo-200 dark:border-indigo-800">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/10">
            <CardTitle>Sending FormData with Fetch</CardTitle>
            <CardDescription>Send data to server with fetch API</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: formData
      // Don't set Content-Type!
      // Browser sets it automatically
    });
    
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('Error:', error);
  }
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'fetch-dark' : 'fetch-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    input { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #6366f1; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #4f46e5; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#312e81' : '#e0e7ff'}; color: ${isDarkMode ? '#c7d2fe' : '#3730a3'}; border-radius: 8px; font-family: monospace; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <form id="form">
    <label>Username</label>
    <input type="text" name="username" placeholder="john_doe" required>
    <label>Message</label>
    <input type="text" name="message" placeholder="Your message" required>
    <button type="submit">Send with Fetch</button>
  </form>
  <div id="output">Submit to see fetch request...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      
      output.innerHTML = '⏳ Preparing fetch request...<br><br>';
      
      // Simulate what would be sent
      output.innerHTML += 
        '<strong>fetch(\\'/ api/submit\\', {</strong><br>' +
        '  method: \\'POST\\',<br>' +
        '  body: FormData {<br>';
      
      for (const [key, value] of formData) {
        output.innerHTML += '    ' + key + ': \\'+ value + '\\'<br>';
      }
      
      output.innerHTML += 
        '  }<br>' +
        '})<br><br>' +
        '✅ FormData ready to send!';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-indigo-300 dark:border-indigo-700"
                  title="Fetch with FormData Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reference */}
      <Card className="border-2 border-cyan-300 dark:border-cyan-700 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-950/20 dark:via-blue-950/10 dark:to-indigo-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">FormData Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-3">Creating FormData</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-blue-600 dark:text-blue-400">new FormData(form)</code> - From form element</li>
                  <li><code className="text-blue-600 dark:text-blue-400">new FormData()</code> - Empty FormData</li>
                  <li>Automatically includes all named inputs</li>
                  <li>Includes files from file inputs</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-3">Getting Values</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-green-600 dark:text-green-400">.get(name)</code> - Get first value</li>
                  <li><code className="text-green-600 dark:text-green-400">.getAll(name)</code> - Get all values</li>
                  <li><code className="text-green-600 dark:text-green-400">.has(name)</code> - Check if exists</li>
                  <li><code className="text-green-600 dark:text-green-400">.keys()</code> - Get all keys</li>
                  <li><code className="text-green-600 dark:text-green-400">.values()</code> - Get all values</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-3">Modifying Data</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-purple-600 dark:text-purple-400">.append(name, value)</code> - Add (allows duplicates)</li>
                  <li><code className="text-purple-600 dark:text-purple-400">.set(name, value)</code> - Set (replaces existing)</li>
                  <li><code className="text-purple-600 dark:text-purple-400">.delete(name)</code> - Remove entry</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-3">Iterating</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-orange-600 dark:text-orange-400">for (const [k, v] of formData)</code></li>
                  <li><code className="text-orange-600 dark:text-orange-400">formData.forEach((v, k) =&gt; ...)</code></li>
                  <li><code className="text-orange-600 dark:text-orange-400">formData.entries()</code> - Iterator</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              When sending FormData with fetch, <strong>don't set Content-Type header</strong> - the browser sets it automatically with the correct boundary!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card className="border-2 border-yellow-300 dark:border-yellow-700 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 dark:from-yellow-950/20 dark:via-amber-950/10 dark:to-orange-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Best Practices</h3>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Do This ✅</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Use <strong>FormData for file uploads</strong></li>
                <li>• Use <strong>name attributes</strong> on inputs</li>
                <li>• Let browser set <strong>Content-Type</strong></li>
                <li>• Use <strong>append()</strong> for multiple values</li>
                <li>• Iterate with <strong>for...of</strong> loop</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not manually set <strong>Content-Type</strong></li>
                <li>• Don not forget <strong>name attributes</strong></li>
                <li>• Don not use <strong>JSON.stringify()</strong> on FormData</li>
                <li>• Don not forget <strong>preventDefault()</strong></li>
                <li>• Don not mix FormData with other encoding</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
