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
  ArrowRight,
  FileText,
  Upload,
  Shield,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  AlertTriangle,
  Database,
  Zap
} from 'lucide-react';

interface FormHandlingProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptFormHandling({ onOpenWebPlayground }: FormHandlingProps) {
  // Demo states
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [submitLog, setSubmitLog] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = [];
    
    if (!formData.name) errors.push('Name is required');
    if (!formData.email.includes('@')) errors.push('Invalid email');
    if (formData.message.length < 10) errors.push('Message too short');
    
    setValidationErrors(errors);
    
    if (errors.length === 0) {
      setIsSubmitting(true);
      setSubmitLog(prev => [...prev, `Form submitted: ${formData.name}, ${formData.email}`]);
      setTimeout(() => {
        setIsSubmitting(false);
        resetDemo();
      }, 2000);
    }
  };

  const resetDemo = () => {
    setFormData({ name: '', email: '', message: '' });
    setValidationErrors([]);
    setSubmitLog([]);
    setIsSubmitting(false);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form Handling Demo</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>📝 Form Handling Masterclass</h1>
    <p class="subtitle">Modern form handling with validation</p>

    <form id="signup-form" class="form">
      <h2>Sign Up Form</h2>
      
      <div class="form-group">
        <label for="username">Username *</label>
        <input type="text" id="username" name="username" required minlength="3" />
        <span class="error" id="username-error"></span>
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required />
        <span class="error" id="email-error"></span>
      </div>

      <div class="form-group">
        <label for="password">Password *</label>
        <input type="password" id="password" name="password" required minlength="8" />
        <span class="error" id="password-error"></span>
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" id="age" name="age" min="18" max="120" />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="">Select...</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="in">India</option>
          <option value="ca">Canada</option>
        </select>
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" name="terms" required />
          I agree to terms and conditions
        </label>
      </div>

      <button type="submit" class="btn-submit">Sign Up</button>
      <button type="button" class="btn-reset" id="reset-btn">Reset</button>
    </form>

    <div id="console" class="console">
      <h3>Console Output</h3>
      <div id="console-log"></div>
    </div>

    <div id="form-data" class="data-display">
      <h3>Form Data (JSON)</h3>
      <pre id="data-output">{}</pre>
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
  max-width: 800px;
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

.form {
  background: #f8fafc;
  padding: 24px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  margin-bottom: 24px;
}

.form h2 {
  color: #334155;
  font-size: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #334155;
  font-weight: 600;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
select {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: border-color 0.3s;
}

input:focus,
select:focus {
  outline: none;
  border-color: #3b82f6;
}

input:invalid:not(:focus):not(:placeholder-shown) {
  border-color: #ef4444;
}

input:valid:not(:focus):not(:placeholder-shown) {
  border-color: #10b981;
}

.error {
  display: block;
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  min-height: 16px;
}

.btn-submit,
.btn-reset {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 12px;
}

.btn-submit {
  background: #3b82f6;
  color: white;
}

.btn-submit:hover {
  background: #2563eb;
}

.btn-submit:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.btn-reset {
  background: #64748b;
  color: white;
}

.btn-reset:hover {
  background: #475569;
}

.console {
  margin-bottom: 24px;
  padding: 20px;
  background: #0f172a;
  border-radius: 12px;
  color: #22d3ee;
  max-height: 200px;
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
}

.data-display {
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
}`;

  const playgroundJs = `const form = document.getElementById('signup-form');
const consoleLog = document.getElementById('console-log');
const dataOutput = document.getElementById('data-output');
const resetBtn = document.getElementById('reset-btn');

function log(message, color = '#22d3ee') {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.style.borderLeftColor = color;
  entry.textContent = message;
  consoleLog.appendChild(entry);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

// Real-time validation
const inputs = form.querySelectorAll('input:not([type="checkbox"]), select');
inputs.forEach(input => {
  input.addEventListener('input', (e) => {
    validateField(e.target);
  });
});

function validateField(field) {
  const errorSpan = document.getElementById(field.id + '-error');
  if (!errorSpan) return;
  
  errorSpan.textContent = '';
  
  if (field.validity.valueMissing) {
    errorSpan.textContent = 'This field is required';
  } else if (field.validity.typeMismatch) {
    errorSpan.textContent = 'Please enter a valid ' + field.type;
  } else if (field.validity.tooShort) {
    errorSpan.textContent = \`Minimum \${field.minLength} characters required\`;
  } else if (field.validity.rangeUnderflow) {
    errorSpan.textContent = \`Minimum value is \${field.min}\`;
  } else if (field.validity.rangeOverflow) {
    errorSpan.textContent = \`Maximum value is \${field.max}\`;
  }
}

// Form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  log('Form submitted!', '#10b981');
  
  // Get form data using FormData API
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  log('Extracting form data...', '#3b82f6');
  
  // Display as JSON
  dataOutput.textContent = JSON.stringify(data, null, 2);
  
  // Validate all fields
  let isValid = true;
  inputs.forEach(input => {
    validateField(input);
    if (!input.validity.valid) {
      isValid = false;
    }
  });
  
  if (!isValid) {
    log('Validation failed!', '#ef4444');
    return;
  }
  
  log('All validations passed!', '#10b981');
  
  // Simulate API call
  log('Sending to server...', '#f59e0b');
  
  setTimeout(() => {
    log('Success! User registered.', '#10b981');
    log('Form data: ' + JSON.stringify(data), '#64748b');
  }, 1000);
});

// Reset button
resetBtn.addEventListener('click', () => {
  form.reset();
  dataOutput.textContent = '{}';
  consoleLog.innerHTML = '';
  
  // Clear error messages
  document.querySelectorAll('.error').forEach(error => {
    error.textContent = '';
  });
  
  log('Form reset!', '#64748b');
});

log('👆 Fill out the form and submit', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={FileText}
        category="11. Forms"
        title="Form Handling"
        description="Master form handling - validation, submission, and the modern FormData API"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 border border-blue-200/50 dark:border-blue-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            Form Handling Essentials
          </CardTitle>
          <CardDescription className="text-base">
            Everything you need to know about working with forms
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-blue-50/40 to-cyan-50/40 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Forms are the primary way users interact with web applications. Proper form handling includes preventing default submission, extracting data, validation, error handling, and providing feedback. Modern JavaScript provides powerful APIs to make this easier.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Basic form handling pattern
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Don't reload page!
  
  // Get form data (modern way)
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Validate
  if (validateForm(data)) {
    // Submit
    submitToAPI(data);
  }
});`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">Validation</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Check user input before submission
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                HTML5 & Custom
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">Data Extraction</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Get form values efficiently
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                FormData API
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-purple-600/80 dark:text-purple-400/80" />
                <h3 className="font-semibold">Submission</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Send data to server without reload
              </p>
              <Badge className="bg-purple-100/80 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-300/50 dark:border-purple-700/40">
                Fetch API
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Getting Form Data */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Database className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. Getting Form Data
          </CardTitle>
          <CardDescription className="text-base">
            Modern and efficient ways to extract form values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* FormData API */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">FormData API (Modern)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ✅ BEST: FormData API
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Create FormData from form element
  const formData = new FormData(e.target);
  
  // Convert to plain object
  const data = Object.fromEntries(formData);
  
  console.log(data);
  // Output: { name: 'John', email: 'john@example.com' }
  
  // Get individual values
  const name = formData.get('name');
  const email = formData.get('email');
  
  // Check if field exists
  if (formData.has('newsletter')) {
    console.log('User wants newsletter');
  }
});

// Works with any form element!
const form = document.querySelector('form');
const formData = new FormData(form);`}</pre>
            </div>

            {/* Manual Method */}
            <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3">Manual Method (Old Way)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// ❌ OLD: Manual selection
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value,
    country: document.getElementById('country').value
  };
  
  // Tedious and error-prone!
});

// ❌ Even worse with querySelectorAll
const inputs = form.querySelectorAll('input');
const data = {};
inputs.forEach(input => {
  data[input.name] = input.value;
});

// Use FormData instead!`}</pre>
            </div>

            {/* Multiple Values */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Multiple Values (Checkboxes)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: Multiple checkboxes with same name
// <input name="hobbies" value="reading" />
// <input name="hobbies" value="gaming" />
// <input name="hobbies" value="sports" />

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Get all values for a field
  const hobbies = formData.getAll('hobbies');
  console.log(hobbies);
  // Output: ['reading', 'gaming']
  
  // Convert to object with arrays
  const data = {};
  for (let [key, value] of formData.entries()) {
    if (data[key]) {
      data[key] = Array.isArray(data[key]) 
        ? [...data[key], value]
        : [data[key], value];
    } else {
      data[key] = value;
    }
  }
});`}</pre>
            </div>

            {/* Nested Objects */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Nested Objects</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: Use dot notation in names
// <input name="user.name" />
// <input name="user.email" />
// <input name="address.street" />
// <input name="address.city" />

function parseNestedFormData(formData) {
  const data = {};
  
  for (let [key, value] of formData.entries()) {
    const keys = key.split('.');
    let current = data;
    
    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        current[k] = value;
      } else {
        current[k] = current[k] || {};
        current = current[k];
      }
    });
  }
  
  return data;
}

// Result: { user: { name: '...', email: '...' },
//           address: { street: '...', city: '...' } }`}</pre>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Modern Best Practice</AlertTitle>
            <AlertDescription>
              Always use <code className="text-xs">FormData</code> API. It&apos;s built-in, efficient, and works with all form elements including files. Avoid manual DOM queries!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Form Validation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            2. Form Validation
          </CardTitle>
          <CardDescription className="text-base">
            HTML5 validation and custom validation patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* HTML5 Validation */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">HTML5 Validation (Built-in)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`<!-- HTML attributes for validation -->
<input 
  type="email" 
  name="email" 
  required 
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
  minlength="5"
  maxlength="50"
  title="Enter valid email"
/>

<input 
  type="number" 
  name="age" 
  min="18" 
  max="120" 
  required 
/>

<input 
  type="text" 
  name="username" 
  required 
  minlength="3" 
  maxlength="20" 
  pattern="[a-zA-Z0-9_]+"
/>

<!-- Browser handles validation automatically! -->
<button type="submit">Submit</button>`}</pre>
            </div>

            {/* Validation API */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Constraint Validation API</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Check if valid
console.log(input.validity.valid);  // true/false

// Specific validation checks
console.log(input.validity.valueMissing);   // required
console.log(input.validity.typeMismatch);   // type error
console.log(input.validity.patternMismatch); // pattern
console.log(input.validity.tooShort);       // minlength
console.log(input.validity.tooLong);        // maxlength
console.log(input.validity.rangeUnderflow); // min
console.log(input.validity.rangeOverflow);  // max

// Get validation message
console.log(input.validationMessage);
// Output: "Please fill out this field"

// Check form validity
const form = document.querySelector('form');
if (form.checkValidity()) {
  console.log('Form is valid!');
}`}</pre>
            </div>

            {/* Custom Validation */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Custom Validation</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Set custom validation message
const password = document.querySelector('#password');

password.addEventListener('input', (e) => {
  const value = e.target.value;
  
  if (value.length < 8) {
    e.target.setCustomValidity('Password must be at least 8 characters');
  } else if (!/[A-Z]/.test(value)) {
    e.target.setCustomValidity('Password must contain uppercase letter');
  } else if (!/[0-9]/.test(value)) {
    e.target.setCustomValidity('Password must contain number');
  } else {
    e.target.setCustomValidity(''); // Clear error
  }
});

// Custom email validation
const email = document.querySelector('#email');
email.addEventListener('input', (e) => {
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
  if (!emailRegex.test(e.target.value)) {
    e.target.setCustomValidity('Please enter valid email');
  } else {
    e.target.setCustomValidity('');
  }
});`}</pre>
            </div>

            {/* Real-time Validation */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Real-time Validation Display</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Show/hide error messages in real-time
function validateField(field) {
  const errorSpan = field.nextElementSibling;
  
  if (!field.validity.valid) {
    errorSpan.textContent = field.validationMessage;
    errorSpan.style.display = 'block';
    field.classList.add('invalid');
    field.classList.remove('valid');
  } else {
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
    field.classList.remove('invalid');
    field.classList.add('valid');
  }
}

// Attach to all form fields
const inputs = form.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
  input.addEventListener('input', () => validateField(input));
  input.addEventListener('blur', () => validateField(input));
});

// Validate on submit
form.addEventListener('submit', (e) => {
  let isValid = true;
  
  inputs.forEach(input => {
    validateField(input);
    if (!input.validity.valid) {
      isValid = false;
    }
  });
  
  if (!isValid) {
    e.preventDefault();
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Zap className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. Form Events
          </CardTitle>
          <CardDescription className="text-base">
            Essential events for form interactivity
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* submit */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">submit Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Most important form event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Always prevent default!
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  // Validate
  if (!validateForm(data)) {
    return;
  }
  
  // Submit
  submitToServer(data);
});

// Triggered by:
// 1. Clicking submit button
// 2. Pressing Enter in input
// 3. form.submit() (doesn't trigger event!)
// 4. form.requestSubmit() (triggers event!)

// Use requestSubmit() instead of submit()
button.addEventListener('click', () => {
  form.requestSubmit(); // ✅ Triggers validation
  // form.submit();     // ❌ Bypasses validation
});`}</pre>
            </div>

            {/* input vs change */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">input vs change Events</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// input: Fires on every keystroke
input.addEventListener('input', (e) => {
  console.log('Input:', e.target.value);
  // Fires: a, ab, abc, abcd...
  
  // Use for: Real-time validation, live search
});

// change: Fires when value changes AND loses focus
input.addEventListener('change', (e) => {
  console.log('Changed:', e.target.value);
  // Fires: abcd (after blur)
  
  // Use for: Final validation, analytics
});

// For select/checkbox/radio: change is better
select.addEventListener('change', (e) => {
  console.log('Selected:', e.target.value);
  // Fires immediately on selection
});

// Use case: Live search
searchInput.addEventListener('input', debounce((e) => {
  searchAPI(e.target.value);
}, 300));`}</pre>
            </div>

            {/* focus & blur */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">focus & blur Events</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// focus: Element gains focus
input.addEventListener('focus', (e) => {
  e.target.classList.add('focused');
  showHelpText(e.target.name);
});

// blur: Element loses focus
input.addEventListener('blur', (e) => {
  e.target.classList.remove('focused');
  validateField(e.target); // Validate on blur
});

// Use case: Show/hide password
const passwordInput = document.querySelector('#password');
const toggleBtn = document.querySelector('#toggle');

toggleBtn.addEventListener('click', () => {
  const type = passwordInput.type === 'password' 
    ? 'text' 
    : 'password';
  passwordInput.type = type;
  passwordInput.focus(); // Keep focus
});

// Use case: Auto-format on blur
phoneInput.addEventListener('blur', (e) => {
  e.target.value = formatPhoneNumber(e.target.value);
});`}</pre>
            </div>

            {/* reset */}
            <div className="p-5 bg-gradient-to-br from-orange-50/60 to-amber-50/60 dark:from-orange-950/10 dark:to-amber-950/10 rounded-xl border border-orange-200/50 dark:border-orange-800/30">
              <h4 className="font-semibold mb-3">reset Event</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Triggered by reset button or form.reset()
form.addEventListener('reset', (e) => {
  // Can prevent if needed
  if (!confirm('Reset form?')) {
    e.preventDefault();
    return;
  }
  
  // Clear custom error messages
  document.querySelectorAll('.error').forEach(error => {
    error.textContent = '';
  });
  
  // Reset custom state
  clearUploadedFiles();
  resetCustomFields();
});

// Programmatic reset
resetButton.addEventListener('click', () => {
  form.reset(); // Triggers reset event
});

// Clear vs Reset
form.reset();  // ✅ Clears to default values
inputs.forEach(input => {
  input.value = ''; // ❌ Clears to empty
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Form Submission */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Upload className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            4. Form Submission (AJAX)
          </CardTitle>
          <CardDescription className="text-base">
            Submit forms without page reload using Fetch API
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Fetch */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">Fetch API with JSON</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const result = await response.json();
    console.log('Success:', result);
    showSuccessMessage();
    form.reset();
    
  } catch (error) {
    console.error('Error:', error);
    showErrorMessage(error.message);
  }
});`}</pre>
            </div>

            {/* FormData Direct */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Send FormData Directly</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Send FormData as-is (multipart/form-data)
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Add extra fields if needed
  formData.append('timestamp', Date.now());
  formData.append('userId', currentUser.id);
  
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData // Don't set Content-Type!
      // Browser sets multipart/form-data automatically
    });
    
    const result = await response.json();
    console.log('Uploaded:', result);
    
  } catch (error) {
    console.error('Upload failed:', error);
  }
});

// Good for file uploads!`}</pre>
            </div>

            {/* Loading State */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Loading State & UX</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const submitBtn = form.querySelector('[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Disable button & show loading
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (response.ok) {
      showSuccess('Form submitted!');
      form.reset();
    } else {
      showError(result.message);
    }
    
  } catch (error) {
    showError('Network error. Please try again.');
  } finally {
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
  }
});`}</pre>
            </div>

            {/* Error Handling */}
            <div className="p-5 bg-gradient-to-br from-rose-50/60 to-red-50/60 dark:from-rose-950/10 dark:to-red-950/10 rounded-xl border border-rose-200/50 dark:border-rose-800/30">
              <h4 className="font-semibold mb-3">Server Error Handling</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    // Handle different status codes
    if (response.status === 400) {
      // Validation errors
      displayValidationErrors(result.errors);
    } else if (response.status === 401) {
      // Unauthorized
      redirectToLogin();
    } else if (response.status === 500) {
      // Server error
      showError('Server error. Please try again.');
    } else if (response.ok) {
      // Success
      showSuccess(result.message);
    }
    
  } catch (error) {
    // Network error
    showError('Connection failed');
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* File Uploads */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Upload className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            5. File Uploads
          </CardTitle>
          <CardDescription className="text-base">
            Handle file uploads with progress and validation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Basic File Upload</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// HTML: <input type="file" name="avatar" />

fileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  
  if (!file) return;
  
  console.log('Name:', file.name);
  console.log('Size:', file.size); // bytes
  console.log('Type:', file.type); // MIME type
  console.log('Modified:', file.lastModified);
  
  // Validate
  if (file.size > 5 * 1024 * 1024) {
    alert('File too large! Max 5MB');
    e.target.value = ''; // Clear
    return;
  }
  
  if (!file.type.startsWith('image/')) {
    alert('Only images allowed!');
    e.target.value = '';
    return;
  }
  
  // Preview
  const reader = new FileReader();
  reader.onload = (e) => {
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
});`}</pre>
            </div>

            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Upload with FormData</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  
  // Files are automatically included!
  // formData has the file from <input type="file" />
  
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
      // Don't set Content-Type!
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('Uploaded:', result.url);
      showSuccess('File uploaded!');
    }
    
  } catch (error) {
    showError('Upload failed');
  }
});

// Multiple files: <input type="file" multiple />
const files = formData.getAll('photos');
console.log(\`Uploading \${files.length} files\`);`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PlayCircle className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Live Demo - Form Handling
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleDemoSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Name *</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message * (min 10 chars)</label>
              <textarea 
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-3 py-2 border rounded"
                rows={3}
                required
              />
            </div>
            {validationErrors.length > 0 && (
              <div className="p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded">
                {validationErrors.map((error, i) => (
                  <p key={i} className="text-sm text-rose-600 dark:text-rose-400">• {error}</p>
                ))}
              </div>
            )}
            <div className="flex gap-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Form'}
              </Button>
              <Button type="button" variant="outline" onClick={resetDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
          </form>
          
          {submitLog.length > 0 && (
            <div className="p-3 bg-white dark:bg-gray-900 rounded border">
              <p className="font-semibold text-sm mb-2">Submission Log:</p>
              {submitLog.map((log, i) => (
                <p key={i} className="text-xs font-mono text-emerald-600 dark:text-emerald-400">→ {log}</p>
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
                <li>• Always call <code className="text-xs">e.preventDefault()</code> on submit</li>
                <li>• Use <code className="text-xs">FormData</code> API for data extraction</li>
                <li>• Validate on both client and server</li>
                <li>• Show loading state during submission</li>
                <li>• Provide clear error messages</li>
                <li>• Reset form after successful submission</li>
                <li>• Use HTML5 validation attributes</li>
                <li>• Handle network errors gracefully</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t forget to prevent default submission</li>
                <li>• Don&apos;t manually query every input</li>
                <li>• Don&apos;t rely only on client-side validation</li>
                <li>• Don&apos;t submit multiple times (disable button)</li>
                <li>• Don&apos;t ignore server validation errors</li>
                <li>• Don&apos;t use <code className="text-xs">form.submit()</code> (bypasses validation)</li>
                <li>• Don&apos;t forget file size/type validation</li>
                <li>• Don&apos;t show generic error messages</li>
              </ul>
            </div>
          </div>
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
            Open this playground to see complete form handling with validation, submission, and real-time feedback!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Form Handling Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

