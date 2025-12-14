'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  FileText,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  Send,
} from 'lucide-react';

export default function JavaScriptFormHandlingNew() {
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
        icon={FileText}
        category="JavaScript DOM"
        title="Form Handling"
        description="Capture and process user input from forms"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/20 dark:from-blue-950/10 dark:via-indigo-950/5 dark:to-purple-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Working with Forms
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Forms are the primary way users interact with web applications. Learn how to <strong className="text-blue-700 dark:text-blue-400">capture, validate, and process</strong> form data with JavaScript!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-blue-200 dark:border-blue-800/30">
            <Send className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-lg">Always Prevent Default</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Use <code>e.preventDefault()</code> on form submit to stop page reload and handle data with JavaScript instead!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Form Submit Handling */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Form Submit Handling</h2>

        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10">
            <CardTitle>Basic Form Submission</CardTitle>
            <CardDescription>Capture form data on submit</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Stop page reload
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  
  console.log('Name:', name);
  console.log('Email:', email);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'submit-dark' : 'submit-light'}
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
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#e0e7ff'}; color: ${isDarkMode ? '#93c5fd' : '#1e40af'}; border-radius: 8px; font-size: 13px; line-height: 1.8; }
  </style>
</head>
<body>
  <form id="myForm">
    <label>Name</label>
    <input type="text" id="name" placeholder="Enter your name" required>
    <label>Email</label>
    <input type="email" id="email" placeholder="Enter your email" required>
    <button type="submit">Submit</button>
  </form>
  <div id="output">Submit the form to see data...</div>
  
  <script>
    const form = document.querySelector('#myForm');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      output.innerHTML = 
        '✅ <strong>Form submitted!</strong><br>' +
        '👤 Name: ' + name + '<br>' +
        '📧 Email: ' + email;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="Form Submit Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Form Values */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>Multiple Ways to Get Form Values</CardTitle>
            <CardDescription>Different methods to access input values</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`const form = document.querySelector('#form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Method 1: By ID
  const name = document.querySelector('#name').value;
  
  // Method 2: Form elements collection
  const email = form.elements.email.value;
  
  // Method 3: FormData API
  const formData = new FormData(form);
  const age = formData.get('age');
});`}</pre>
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
    <label>Name</label>
    <input type="text" id="name" name="name" placeholder="Your name" required>
    <label>Email</label>
    <input type="email" name="email" placeholder="Your email" required>
    <label>Age</label>
    <input type="number" name="age" placeholder="Your age" required>
    <button type="submit">Submit</button>
  </form>
  <div id="output">Submit to see different access methods...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameById = document.querySelector('#name').value;
      const emailByElements = form.elements.email.value;
      const formData = new FormData(form);
      const ageByFormData = formData.get('age');
      
      output.innerHTML = 
        '<strong>Method 1:</strong> By ID<br>Name: ' + nameById + '<br><br>' +
        '<strong>Method 2:</strong> Form elements<br>Email: ' + emailByElements + '<br><br>' +
        '<strong>Method 3:</strong> FormData API<br>Age: ' + ageByFormData;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Multiple Methods Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Radio & Checkbox */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>Radio Buttons & Checkboxes</CardTitle>
            <CardDescription>Handle different input types</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Radio button (selected value)
  const gender = document.querySelector(
    'input[name="gender"]:checked'
  ).value;
  
  // Checkbox (checked state)
  const subscribe = document.querySelector(
    '#subscribe'
  ).checked;
  
  console.log('Gender:', gender);
  console.log('Subscribe:', subscribe);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'radio-dark' : 'radio-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 15px; }
    .group { display: flex; flex-direction: column; gap: 8px; }
    label { font-weight: 600; font-size: 14px; }
    .radio-group { display: flex; gap: 20px; }
    .radio-item { display: flex; align-items: center; gap: 6px; }
    input[type="radio"], input[type="checkbox"] { width: 18px; height: 18px; cursor: pointer; }
    button { padding: 12px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #059669; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <form id="form">
    <div class="group">
      <label>Gender</label>
      <div class="radio-group">
        <div class="radio-item">
          <input type="radio" id="male" name="gender" value="male" checked>
          <label for="male">Male</label>
        </div>
        <div class="radio-item">
          <input type="radio" id="female" name="gender" value="female">
          <label for="female">Female</label>
        </div>
      </div>
    </div>
    
    <div class="group">
      <div class="radio-item">
        <input type="checkbox" id="subscribe" name="subscribe">
        <label for="subscribe">Subscribe to newsletter</label>
      </div>
    </div>
    
    <button type="submit">Submit</button>
  </form>
  <div id="output">Select options and submit...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const subscribe = document.querySelector('#subscribe').checked;
      output.innerHTML = 
        '✅ <strong>Form submitted!</strong><br>' +
        '👤 Gender: ' + gender + '<br>' +
        '📬 Subscribe: ' + (subscribe ? 'Yes' : 'No');
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="Radio & Checkbox Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Select & Textarea */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>Select Dropdown & Textarea</CardTitle>
            <CardDescription>Handle select and textarea elements</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Select dropdown
  const country = document.querySelector(
    '#country'
  ).value;
  
  // Textarea
  const message = document.querySelector(
    '#message'
  ).value;
  
  console.log('Country:', country);
  console.log('Message:', message);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'select-dark' : 'select-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    select, textarea { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    select:focus, textarea:focus { outline: none; border-color: #f59e0b; }
    textarea { resize: vertical; min-height: 60px; }
    button { padding: 12px; background: #f59e0b; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #d97706; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#7c2d12' : '#fed7aa'}; color: ${isDarkMode ? '#fcd34d' : '#78350f'}; border-radius: 8px; font-weight: 500; }
  </style>
</head>
<body>
  <form id="form">
    <label>Country</label>
    <select id="country">
      <option value="usa">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="canada">Canada</option>
    </select>
    
    <label>Message</label>
    <textarea id="message" placeholder="Enter your message..."></textarea>
    
    <button type="submit">Submit</button>
  </form>
  <div id="output">Fill the form and submit...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const country = document.querySelector('#country').value;
      const message = document.querySelector('#message').value;
      output.innerHTML = 
        '✅ <strong>Form submitted!</strong><br>' +
        '🌍 Country: ' + country + '<br>' +
        '💬 Message: ' + (message || '(empty)');
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="Select & Textarea Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Reference */}
      <Card className="border-2 border-indigo-300 dark:border-indigo-700 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/10 dark:to-pink-950/10 shadow-lg">
        <CardContent className="pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 text-white shadow-lg">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Form Handling Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-3">Getting Values</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-blue-600 dark:text-blue-400">element.value</code> - Text inputs, textarea, select</li>
                  <li><code className="text-blue-600 dark:text-blue-400">element.checked</code> - Checkbox, radio (boolean)</li>
                  <li><code className="text-blue-600 dark:text-blue-400">form.elements.name</code> - By name attribute</li>
                  <li><code className="text-blue-600 dark:text-blue-400">FormData(form)</code> - All form data</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-3">Input Types</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-green-600 dark:text-green-400">text</code> - Single line text</li>
                  <li><code className="text-green-600 dark:text-green-400">email</code> - Email with validation</li>
                  <li><code className="text-green-600 dark:text-green-400">number</code> - Numeric input</li>
                  <li><code className="text-green-600 dark:text-green-400">checkbox</code> - Multiple options</li>
                  <li><code className="text-green-600 dark:text-green-400">radio</code> - Single option</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-3">Form Events</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-purple-600 dark:text-purple-400">submit</code> - Form submitted</li>
                  <li><code className="text-purple-600 dark:text-purple-400">input</code> - Value changed (live)</li>
                  <li><code className="text-purple-600 dark:text-purple-400">change</code> - Value committed</li>
                  <li><code className="text-purple-600 dark:text-purple-400">focus</code> - Input focused</li>
                  <li><code className="text-purple-600 dark:text-purple-400">blur</code> - Input lost focus</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-3">Radio Buttons</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>Get checked: <code className="text-orange-600 dark:text-orange-400">input[name="x"]:checked</code></li>
                  <li>Access value: <code className="text-orange-600 dark:text-orange-400">.value</code></li>
                  <li>Same name for grouping</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Always use <code>e.preventDefault()</code> on submit and consider using the FormData API for complex forms!
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
                <li>• Use <strong>preventDefault()</strong> on submit</li>
                <li>• Add <strong>name</strong> attributes to inputs</li>
                <li>• Use appropriate <strong>input types</strong></li>
                <li>• Validate before processing</li>
                <li>• Clear form after successful submit</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not forget <strong>preventDefault()</strong></li>
                <li>• Don not use inline onclick handlers</li>
                <li>• Don not trust client-side validation only</li>
                <li>• Don not forget to check for empty values</li>
                <li>• Don not access non-existent form fields</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
