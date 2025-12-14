'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  ShieldCheck,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';

export default function JavaScriptFormValidationNew() {
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
        icon={ShieldCheck}
        category="JavaScript DOM"
        title="Form Validation"
        description="Validate user input before processing"
        colorTheme="yellow"
      />

      {/* Introduction */}
      <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50/50 via-green-50/30 to-teal-50/20 dark:from-emerald-950/10 dark:via-green-950/5 dark:to-teal-950/5">
        <CardContent className="pt-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 text-white shadow-lg">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
                Why Validate Forms?
              </h3>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Form validation ensures users enter <strong className="text-emerald-700 dark:text-emerald-400">correct and complete data</strong>. Validate on both client (better UX) and server (security)!
              </p>
            </div>
          </div>

          <Alert className="bg-white/80 dark:bg-slate-900/80 border-emerald-200 dark:border-emerald-800/30">
            <AlertCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-lg">Client + Server Validation</AlertTitle>
            <AlertDescription className="text-base leading-relaxed">
              Client-side validation provides instant feedback, but <strong>always validate on the server</strong> too - users can bypass client validation!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Validation Methods */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Validation Methods</h2>

        {/* Basic Validation */}
        <Card className="border-2 border-blue-200 dark:border-blue-800">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/10">
            <CardTitle>Basic Field Validation</CardTitle>
            <CardDescription>Check for empty fields and basic requirements</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  
  // Check if empty
  if (!name) {
    alert('Name is required!');
    return;
  }
  
  if (!email) {
    alert('Email is required!');
    return;
  }
  
  console.log('Form is valid!');
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'basic-dark' : 'basic-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    input { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #3b82f6; }
    input.error { border-color: #ef4444; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #2563eb; }
    #output { padding: 15px; margin-top: 15px; border-radius: 8px; font-weight: 500; }
    .success { background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; }
    .error { background: ${isDarkMode ? '#7f1d1d' : '#fee2e2'}; color: ${isDarkMode ? '#fca5a5' : '#991b1b'}; }
  </style>
</head>
<body>
  <form id="form">
    <label>Name</label>
    <input type="text" id="name" placeholder="Enter your name">
    <label>Email</label>
    <input type="text" id="email" placeholder="Enter your email">
    <button type="submit">Submit</button>
  </form>
  <div id="output">Try submitting with empty fields...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      nameInput.classList.remove('error');
      emailInput.classList.remove('error');
      
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      
      if (!name) {
        output.className = 'error';
        output.innerHTML = '❌ Name is required!';
        nameInput.classList.add('error');
        return;
      }
      
      if (!email) {
        output.className = 'error';
        output.innerHTML = '❌ Email is required!';
        emailInput.classList.add('error');
        return;
      }
      
      output.className = 'success';
      output.innerHTML = '✅ Form is valid!<br>Name: ' + name + '<br>Email: ' + email;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-blue-300 dark:border-blue-700"
                  title="Basic Validation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Email Validation */}
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10">
            <CardTitle>Email Validation with Regex</CardTitle>
            <CardDescription>Validate email format using regular expressions</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`function validateEmail(email) {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  
  if (!validateEmail(email)) {
    alert('Invalid email format!');
    return;
  }
  
  console.log('Valid email:', email);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'email-dark' : 'email-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    input { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #8b5cf6; }
    input.error { border-color: #ef4444; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #8b5cf6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #7c3aed; }
    #output { padding: 15px; margin-top: 15px; border-radius: 8px; font-weight: 500; }
    .success { background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; }
    .error { background: ${isDarkMode ? '#7f1d1d' : '#fee2e2'}; color: ${isDarkMode ? '#fca5a5' : '#991b1b'}; }
  </style>
</head>
<body>
  <form id="form">
    <label>Email</label>
    <input type="text" id="email" placeholder="example@email.com">
    <button type="submit">Validate</button>
  </form>
  <div id="output">Try: test@example.com or invalid-email</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    const emailInput = document.querySelector('#email');
    
    function validateEmail(email) {
      const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      return regex.test(email);
    }
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      emailInput.classList.remove('error');
      
      const email = emailInput.value.trim();
      
      if (!email) {
        output.className = 'error';
        output.innerHTML = '❌ Email is required!';
        emailInput.classList.add('error');
        return;
      }
      
      if (!validateEmail(email)) {
        output.className = 'error';
        output.innerHTML = '❌ Invalid email format!<br>Use: example@email.com';
        emailInput.classList.add('error');
        return;
      }
      
      output.className = 'success';
      output.innerHTML = '✅ Valid email format!<br>Email: ' + email;
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-purple-300 dark:border-purple-700"
                  title="Email Validation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Password Strength */}
        <Card className="border-2 border-orange-200 dark:border-orange-800">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10">
            <CardTitle>Password Strength Validation</CardTitle>
            <CardDescription>Check password requirements in real-time</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`function validatePassword(password) {
  const minLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  
  return {
    valid: minLength && hasUpper && hasLower && hasNumber,
    minLength, hasUpper, hasLower, hasNumber
  };
}

input.addEventListener('input', function(e) {
  const result = validatePassword(e.target.value);
  updateChecklist(result);
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'password-dark' : 'password-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    label { font-weight: 600; font-size: 14px; display: block; margin-bottom: 8px; }
    input { width: 100%; padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #f59e0b; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    #checklist { margin-top: 15px; padding: 15px; background: ${isDarkMode ? '#1e293b' : '#f8fafc'}; border-radius: 8px; border: 2px solid ${isDarkMode ? '#475569' : '#e2e8f0'}; }
    .requirement { padding: 8px; margin: 5px 0; border-radius: 6px; display: flex; align-items: center; gap: 8px; font-size: 14px; }
    .requirement.valid { background: ${isDarkMode ? '#065f46' : '#d1fae5'}; color: ${isDarkMode ? '#6ee7b7' : '#047857'}; }
    .requirement.invalid { background: ${isDarkMode ? '#7f1d1d' : '#fee2e2'}; color: ${isDarkMode ? '#fca5a5' : '#991b1b'}; }
  </style>
</head>
<body>
  <label>Password</label>
  <input type="password" id="password" placeholder="Enter password">
  <div id="checklist">
    <div id="length" class="requirement invalid">❌ At least 8 characters</div>
    <div id="upper" class="requirement invalid">❌ One uppercase letter</div>
    <div id="lower" class="requirement invalid">❌ One lowercase letter</div>
    <div id="number" class="requirement invalid">❌ One number</div>
  </div>
  
  <script>
    const input = document.querySelector('#password');
    
    function validatePassword(password) {
      return {
        minLength: password.length >= 8,
        hasUpper: /[A-Z]/.test(password),
        hasLower: /[a-z]/.test(password),
        hasNumber: /[0-9]/.test(password)
      };
    }
    
    input.addEventListener('input', function(e) {
      const result = validatePassword(e.target.value);
      
      const length = document.querySelector('#length');
      const upper = document.querySelector('#upper');
      const lower = document.querySelector('#lower');
      const number = document.querySelector('#number');
      
      length.className = 'requirement ' + (result.minLength ? 'valid' : 'invalid');
      length.innerHTML = (result.minLength ? '✅' : '❌') + ' At least 8 characters';
      
      upper.className = 'requirement ' + (result.hasUpper ? 'valid' : 'invalid');
      upper.innerHTML = (result.hasUpper ? '✅' : '❌') + ' One uppercase letter';
      
      lower.className = 'requirement ' + (result.hasLower ? 'valid' : 'invalid');
      lower.innerHTML = (result.hasLower ? '✅' : '❌') + ' One lowercase letter';
      
      number.className = 'requirement ' + (result.hasNumber ? 'valid' : 'invalid');
      number.innerHTML = (result.hasNumber ? '✅' : '❌') + ' One number';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-orange-300 dark:border-orange-700"
                  title="Password Validation Demo"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* HTML5 Validation */}
        <Card className="border-2 border-green-200 dark:border-green-800">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/10">
            <CardTitle>HTML5 Built-in Validation</CardTitle>
            <CardDescription>Use native HTML validation attributes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Code */}
              <div>
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">HTML & JavaScript Code</h4>
                <div className="bg-slate-50 dark:bg-slate-950 rounded-lg p-4 font-mono text-sm border-2 border-slate-200 dark:border-slate-800">
                  <pre className="text-slate-800 dark:text-emerald-400 whitespace-pre-wrap break-words">{`<!-- HTML5 Validation Attributes -->
<input type="email" required>
<input type="number" min="1" max="100">
<input type="text" pattern="[A-Za-z]{3,}">

<!-- JavaScript to check validity -->
form.addEventListener('submit', function(e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Please fix errors!');
  }
});`}</pre>
                </div>
              </div>

              {/* Live Preview */}
              <div className="flex flex-col h-full">
                <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100">Live Preview</h4>
                <iframe
                  key={isDarkMode ? 'html5-dark' : 'html5-light'}
                  srcDoc={`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui; padding: 20px; background: ${isDarkMode ? '#0f172a' : '#f8fafc'}; margin: 0; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; }
    form { display: flex; flex-direction: column; gap: 12px; }
    label { font-weight: 600; font-size: 14px; }
    input { padding: 10px; border: 2px solid ${isDarkMode ? '#475569' : '#cbd5e1'}; background: ${isDarkMode ? '#1e293b' : '#ffffff'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; }
    input:focus { outline: none; border-color: #10b981; }
    input:invalid { border-color: #ef4444; }
    input:valid { border-color: #10b981; }
    input::placeholder { color: ${isDarkMode ? '#94a3b8' : '#64748b'}; }
    button { padding: 12px; background: #10b981; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; }
    button:hover { background: #059669; }
    #output { padding: 15px; margin-top: 15px; background: ${isDarkMode ? '#1e293b' : '#f1f5f9'}; color: ${isDarkMode ? '#e2e8f0' : '#1e293b'}; border-radius: 8px; font-size: 13px; }
  </style>
</head>
<body>
  <form id="form">
    <label>Email (required)</label>
    <input type="email" required placeholder="test@example.com">
    
    <label>Age (1-100)</label>
    <input type="number" min="1" max="100" required placeholder="25">
    
    <label>Name (min 3 letters)</label>
    <input type="text" pattern="[A-Za-z]{3,}" required placeholder="John">
    
    <button type="submit">Submit</button>
  </form>
  <div id="output">Fill all fields with valid data...</div>
  
  <script>
    const form = document.querySelector('#form');
    const output = document.querySelector('#output');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!form.checkValidity()) {
        output.innerHTML = '❌ Please fix validation errors!<br><small>Check red borders</small>';
        return;
      }
      
      output.innerHTML = '✅ <strong>Form is valid!</strong><br>HTML5 validation passed!';
    });
  </script>
</body>
</html>`}
                  className="w-full flex-1 rounded-lg border-2 border-green-300 dark:border-green-700"
                  title="HTML5 Validation Demo"
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
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Validation Quick Reference</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800/30">
                <h4 className="font-semibold mb-3">Common Validations</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <strong>Required:</strong> <code className="text-blue-600 dark:text-blue-400">!value</code></li>
                  <li>• <strong>Min Length:</strong> <code className="text-blue-600 dark:text-blue-400">value.length &gt;= 5</code></li>
                  <li>• <strong>Max Length:</strong> <code className="text-blue-600 dark:text-blue-400">value.length &lt;= 50</code></li>
                  <li>• <strong>Email:</strong> <code className="text-blue-600 dark:text-blue-400">/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/</code></li>
                  <li>• <strong>Numbers Only:</strong> <code className="text-blue-600 dark:text-blue-400">/^[0-9]+$/</code></li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-green-200 dark:border-green-800/30">
                <h4 className="font-semibold mb-3">HTML5 Attributes</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-green-600 dark:text-green-400">required</code> - Field must be filled</li>
                  <li><code className="text-green-600 dark:text-green-400">min/max</code> - Numeric range</li>
                  <li><code className="text-green-600 dark:text-green-400">minlength/maxlength</code> - Text length</li>
                  <li><code className="text-green-600 dark:text-green-400">pattern</code> - Regex validation</li>
                  <li><code className="text-green-600 dark:text-green-400">type</code> - email, url, number, etc.</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-800/30">
                <h4 className="font-semibold mb-3">Password Requirements</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li>• <strong>Uppercase:</strong> <code className="text-purple-600 dark:text-purple-400">/[A-Z]/</code></li>
                  <li>• <strong>Lowercase:</strong> <code className="text-purple-600 dark:text-purple-400">/[a-z]/</code></li>
                  <li>• <strong>Number:</strong> <code className="text-purple-600 dark:text-purple-400">/[0-9]/</code></li>
                  <li>• <strong>Special:</strong> <code className="text-purple-600 dark:text-purple-400">/[!@#$%^&*]/</code></li>
                  <li>• <strong>Min Length:</strong> <code className="text-purple-600 dark:text-purple-400">length &gt;= 8</code></li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-800/30">
                <h4 className="font-semibold mb-3">Validation Methods</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li><code className="text-orange-600 dark:text-orange-400">form.checkValidity()</code> - Check all</li>
                  <li><code className="text-orange-600 dark:text-orange-400">input.validity.valid</code> - Check one</li>
                  <li><code className="text-orange-600 dark:text-orange-400">input.setCustomValidity()</code> - Custom message</li>
                </ul>
              </div>
            </div>
          </div>

          <Alert className="mt-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/30">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription className="text-base">
              Show validation errors <strong>inline</strong> near the input field for better UX. Use both HTML5 and custom JavaScript validation!
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
                <li>• Validate on both <strong>client and server</strong></li>
                <li>• Show <strong>inline error messages</strong></li>
                <li>• Provide <strong>instant feedback</strong> (on input)</li>
                <li>• Use <strong>clear error messages</strong></li>
                <li>• Highlight <strong>invalid fields</strong> visually</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white dark:bg-slate-900 border-2 border-red-200 dark:border-red-800/30">
              <div className="flex items-start gap-3 mb-3">
                <XCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">Avoid This ❌</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Don not rely on <strong>client-side only</strong></li>
                <li>• Don not use vague error messages</li>
                <li>• Don not validate only on submit</li>
                <li>• Don not forget to trim whitespace</li>
                <li>• Don not use alert() for errors</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
