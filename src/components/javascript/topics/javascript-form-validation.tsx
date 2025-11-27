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
  Shield,
  AlertCircle,
  PlayCircle,
  RefreshCw,
  Globe,
  Info,
  AlertTriangle,
  Check,
  X
} from 'lucide-react';

interface FormValidationProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function JavaScriptFormValidation({ onOpenWebPlayground }: FormValidationProps) {
  // Demo states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [validationLog, setValidationLog] = useState<string[]>([]);

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError('Email is required');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Invalid email format');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError('Password is required');
      return false;
    }
    if (value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    if (!/[A-Z]/.test(value)) {
      setPasswordError('Password must contain uppercase letter');
      return false;
    }
    if (!/[0-9]/.test(value)) {
      setPasswordError('Password must contain number');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (isEmailValid && isPasswordValid) {
      setValidationLog(prev => [...prev, '✓ Form validated successfully!']);
    } else {
      setValidationLog(prev => [...prev, '✗ Validation failed']);
    }
  };

  const resetDemo = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
    setValidationLog([]);
  };

  const playgroundHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Form Validation Masterclass</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
  <div class="container">
    <h1>🛡️ Form Validation Techniques</h1>
    <p class="subtitle">Master client-side validation patterns</p>

    <!-- HTML5 Validation -->
    <section class="demo-section">
      <h2>HTML5 Built-in Validation</h2>
      <form id="html5-form" novalidate class="form">
        <div class="form-group">
          <label for="email">Email *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            placeholder="john@example.com"
          />
          <span class="error"></span>
        </div>

        <div class="form-group">
          <label for="username">Username * (3-20 chars, alphanumeric)</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            required 
            minlength="3"
            maxlength="20"
            pattern="[a-zA-Z0-9_]+"
            title="Only letters, numbers, and underscores"
          />
          <span class="error"></span>
        </div>

        <div class="form-group">
          <label for="age">Age * (18-120)</label>
          <input 
            type="number" 
            id="age" 
            name="age" 
            required 
            min="18"
            max="120"
          />
          <span class="error"></span>
        </div>

        <button type="submit">Validate & Submit</button>
      </form>
    </section>

    <!-- Custom Validation -->
    <section class="demo-section">
      <h2>Custom Validation Logic</h2>
      <form id="custom-form" class="form">
        <div class="form-group">
          <label for="password">Password *</label>
          <input 
            type="password" 
            id="password" 
            name="password"
            placeholder="Min 8 chars, 1 uppercase, 1 number"
          />
          <span class="error"></span>
          <div class="requirements">
            <div id="req-length" class="requirement">✗ At least 8 characters</div>
            <div id="req-upper" class="requirement">✗ One uppercase letter</div>
            <div id="req-number" class="requirement">✗ One number</div>
          </div>
        </div>

        <div class="form-group">
          <label for="confirm">Confirm Password *</label>
          <input 
            type="password" 
            id="confirm" 
            name="confirm"
          />
          <span class="error"></span>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>

    <div id="console" class="console">
      <h3>Validation Log</h3>
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

.demo-section {
  margin-bottom: 32px;
  padding: 24px;
  background: #f8fafc;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.demo-section h2 {
  color: #334155;
  font-size: 20px;
  margin-bottom: 16px;
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

input {
  width: 100%;
  padding: 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

input.valid {
  border-color: #10b981;
}

input.invalid {
  border-color: #ef4444;
}

.error {
  display: block;
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  min-height: 16px;
}

.requirements {
  margin-top: 8px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.requirement {
  font-size: 13px;
  margin: 4px 0;
  color: #64748b;
}

.requirement.met {
  color: #10b981;
}

button[type="submit"] {
  width: 100%;
  padding: 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

button[type="submit"]:hover {
  background: #2563eb;
}

button[type="submit"]:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

.console {
  margin-top: 24px;
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
}`;

  const playgroundJs = `const consoleLog = document.getElementById('console-log');

function log(message, color = '#22d3ee') {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.style.borderLeftColor = color;
  entry.textContent = message;
  consoleLog.appendChild(entry);
  consoleLog.scrollTop = consoleLog.scrollHeight;
}

// HTML5 Form Validation
const html5Form = document.getElementById('html5-form');
const html5Inputs = html5Form.querySelectorAll('input');

html5Inputs.forEach(input => {
  input.addEventListener('input', () => {
    validateHTML5Field(input);
  });
  
  input.addEventListener('blur', () => {
    validateHTML5Field(input);
  });
});

function validateHTML5Field(field) {
  const errorSpan = field.nextElementSibling;
  
  if (field.validity.valid) {
    field.classList.add('valid');
    field.classList.remove('invalid');
    errorSpan.textContent = '';
  } else {
    field.classList.remove('valid');
    field.classList.add('invalid');
    
    if (field.validity.valueMissing) {
      errorSpan.textContent = 'This field is required';
    } else if (field.validity.typeMismatch) {
      errorSpan.textContent = \`Please enter a valid \${field.type}\`;
    } else if (field.validity.tooShort) {
      errorSpan.textContent = \`Minimum \${field.minLength} characters required\`;
    } else if (field.validity.tooLong) {
      errorSpan.textContent = \`Maximum \${field.maxLength} characters allowed\`;
    } else if (field.validity.rangeUnderflow) {
      errorSpan.textContent = \`Minimum value is \${field.min}\`;
    } else if (field.validity.rangeOverflow) {
      errorSpan.textContent = \`Maximum value is \${field.max}\`;
    } else if (field.validity.patternMismatch) {
      errorSpan.textContent = field.title || 'Invalid format';
    }
  }
}

html5Form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let isValid = true;
  html5Inputs.forEach(input => {
    validateHTML5Field(input);
    if (!input.validity.valid) {
      isValid = false;
    }
  });
  
  if (isValid) {
    log('✓ HTML5 Form validated successfully!', '#10b981');
  } else {
    log('✗ HTML5 Form has errors', '#ef4444');
  }
});

// Custom Validation
const customForm = document.getElementById('custom-form');
const password = document.getElementById('password');
const confirm = document.getElementById('confirm');
const reqLength = document.getElementById('req-length');
const reqUpper = document.getElementById('req-upper');
const reqNumber = document.getElementById('req-number');

password.addEventListener('input', () => {
  validatePassword();
});

confirm.addEventListener('input', () => {
  validateConfirm();
});

function validatePassword() {
  const value = password.value;
  const errorSpan = password.nextElementSibling;
  
  // Length check
  if (value.length >= 8) {
    reqLength.classList.add('met');
    reqLength.textContent = '✓ At least 8 characters';
  } else {
    reqLength.classList.remove('met');
    reqLength.textContent = '✗ At least 8 characters';
  }
  
  // Uppercase check
  if (/[A-Z]/.test(value)) {
    reqUpper.classList.add('met');
    reqUpper.textContent = '✓ One uppercase letter';
  } else {
    reqUpper.classList.remove('met');
    reqUpper.textContent = '✗ One uppercase letter';
  }
  
  // Number check
  if (/[0-9]/.test(value)) {
    reqNumber.classList.add('met');
    reqNumber.textContent = '✓ One number';
  } else {
    reqNumber.classList.remove('met');
    reqNumber.textContent = '✗ One number';
  }
  
  const isValid = value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value);
  
  if (isValid) {
    password.classList.add('valid');
    password.classList.remove('invalid');
    errorSpan.textContent = '';
  } else if (value) {
    password.classList.remove('valid');
    password.classList.add('invalid');
  }
  
  return isValid;
}

function validateConfirm() {
  const errorSpan = confirm.nextElementSibling;
  
  if (confirm.value === password.value && confirm.value) {
    confirm.classList.add('valid');
    confirm.classList.remove('invalid');
    errorSpan.textContent = '';
    return true;
  } else if (confirm.value) {
    confirm.classList.remove('valid');
    confirm.classList.add('invalid');
    errorSpan.textContent = 'Passwords do not match';
    return false;
  }
  
  return false;
}

customForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirm();
  
  if (isPasswordValid && isConfirmValid) {
    log('✓ Custom validation passed!', '#10b981');
  } else {
    log('✗ Custom validation failed', '#ef4444');
  }
});

log('👆 Try filling out the forms above', '#94a3b8');`;

  return (
    <div className="w-full min-h-screen space-y-10 pb-16">
      {/* Page Header */}
      <PageHeader
        icon={Shield}
        category="11. Forms"
        title="Form Validation"
        description="Master client-side validation - ensure data quality before submission"
        colorTheme="blue"
      />

      {/* Overview */}
      <Card className="bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 border border-emerald-200/50 dark:border-emerald-800/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Sparkles className="w-6 h-6 text-emerald-600/80 dark:text-emerald-400/80" />
            Why Validation Matters
          </CardTitle>
          <CardDescription className="text-base">
            Validation is your first line of defense against bad data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-6 bg-gradient-to-br from-emerald-50/40 to-green-50/40 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              Form validation ensures users provide correct, complete data before submission. It improves user experience with instant feedback and reduces server load by catching errors early. <strong className="text-foreground">Always validate on both client AND server</strong> - client-side for UX, server-side for security.
            </p>
            <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Basic validation pattern
function validateForm(data) {
  const errors = {};
  
  // Required field
  if (!data.email) {
    errors.email = 'Email is required';
  }
  
  // Format validation
  if (data.email && !isValidEmail(data.email)) {
    errors.email = 'Invalid email format';
  }
  
  // Length validation
  if (data.password && data.password.length < 8) {
    errors.password = 'Password too short';
  }
  
  return errors;
}`}</pre>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600/80 dark:text-emerald-400/80" />
                <h3 className="font-semibold">Client-Side</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Instant feedback, better UX
              </p>
              <Badge className="bg-emerald-100/80 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-300/50 dark:border-emerald-700/40">
                HTML5 + JavaScript
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600/80 dark:text-blue-400/80" />
                <h3 className="font-semibold">Server-Side</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Security, prevent bypass
              </p>
              <Badge className="bg-blue-100/80 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-300/50 dark:border-blue-700/40">
                Required!
              </Badge>
            </div>

            <div className="rounded-xl border bg-white/80 dark:bg-slate-900/80 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600/80 dark:text-amber-400/80" />
                <h3 className="font-semibold">Real-time</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Validate as user types
              </p>
              <Badge className="bg-amber-100/80 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
                Best UX
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* HTML5 Validation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Code2 className="w-6 h-6 text-blue-600/80 dark:text-blue-400/80" />
            1. HTML5 Validation (Built-in)
          </CardTitle>
          <CardDescription className="text-base">
            Use browser-native validation with HTML attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Required & Type */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">required & type</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`<!-- Required field -->
<input type="text" name="username" required />

<!-- Type validation -->
<input type="email" name="email" required />
<!-- Auto-validates email format -->

<input type="url" name="website" />
<!-- Must be valid URL -->

<input type="number" name="age" />
<!-- Only numbers allowed -->

<input type="tel" name="phone" />
<!-- Telephone pattern (mobile keyboards) -->

<input type="date" name="birthdate" />
<!-- Date picker, validates date format -->`}</pre>
            </div>

            {/* Length Validation */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">minlength & maxlength</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`<!-- String length limits -->
<input 
  type="text" 
  name="username" 
  minlength="3" 
  maxlength="20" 
  required 
/>

<!-- Textarea length -->
<textarea 
  name="bio" 
  minlength="10" 
  maxlength="500"
></textarea>

<!-- Password requirements -->
<input 
  type="password" 
  name="password" 
  minlength="8" 
  maxlength="128" 
  required 
/>`}</pre>
            </div>

            {/* Number Range */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">min, max & step</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`<!-- Number range -->
<input 
  type="number" 
  name="age" 
  min="18" 
  max="120" 
  required 
/>

<!-- Date range -->
<input 
  type="date" 
  name="appointment" 
  min="2024-01-01" 
  max="2024-12-31" 
/>

<!-- Step increments -->
<input 
  type="number" 
  name="price" 
  min="0" 
  max="1000" 
  step="0.01" 
  placeholder="0.00"
/>`}</pre>
            </div>

            {/* Pattern */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">pattern (Regex)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`<!-- Custom patterns with regex -->
<input 
  type="text" 
  name="username" 
  pattern="[a-zA-Z0-9_]{3,20}" 
  title="3-20 chars, letters/numbers/underscore"
  required 
/>

<!-- Phone number -->
<input 
  type="tel" 
  name="phone" 
  pattern="[0-9]{10}" 
  title="10 digit phone number"
/>

<!-- Zip code -->
<input 
  type="text" 
  name="zip" 
  pattern="[0-9]{5}" 
  title="5 digit zip code"
/>`}</pre>
            </div>
          </div>

          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Disable Browser UI</AlertTitle>
            <AlertDescription>
              Add <code className="text-xs">novalidate</code> to form to disable default browser validation UI and handle errors with JavaScript for better UX: <code className="text-xs">&lt;form novalidate&gt;</code>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Constraint Validation API */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <Shield className="w-6 h-6 text-indigo-600/80 dark:text-indigo-400/80" />
            2. Constraint Validation API
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript API to check HTML5 validation state
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* validity Object */}
            <div className="p-5 bg-gradient-to-br from-indigo-50/60 to-purple-50/60 dark:from-indigo-950/10 dark:to-purple-950/10 rounded-xl border border-indigo-200/50 dark:border-indigo-800/30">
              <h4 className="font-semibold mb-3">validity Object</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Check if valid
console.log(input.validity.valid); // true/false

// Specific checks
input.validity.valueMissing;     // required but empty
input.validity.typeMismatch;     // wrong type (email, url)
input.validity.patternMismatch;  // doesn't match pattern
input.validity.tooShort;         // < minlength
input.validity.tooLong;          // > maxlength
input.validity.rangeUnderflow;   // < min
input.validity.rangeOverflow;    // > max
input.validity.stepMismatch;     // doesn't match step
input.validity.badInput;         // browser can't convert

// All false = valid!`}</pre>
            </div>

            {/* Validation Methods */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Validation Methods</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const input = document.querySelector('input');

// Check validity
const isValid = input.checkValidity();
console.log(isValid); // true/false

// Get error message
console.log(input.validationMessage);
// "Please fill out this field"
// "Please enter an email address"

// Set custom error
input.setCustomValidity('Custom error message');

// Clear custom error
input.setCustomValidity('');

// Report validity (shows browser UI)
input.reportValidity(); // Shows validation message

// Form-level validation
const form = document.querySelector('form');
form.checkValidity(); // Check all fields`}</pre>
            </div>

            {/* Real-time Validation */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Display Errors</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function showValidationError(input) {
  const errorElement = input.nextElementSibling;
  
  if (!input.validity.valid) {
    // Show appropriate error
    if (input.validity.valueMissing) {
      errorElement.textContent = 'This field is required';
    } else if (input.validity.typeMismatch) {
      errorElement.textContent = \`Invalid \${input.type}\`;
    } else if (input.validity.tooShort) {
      errorElement.textContent = 
        \`Min \${input.minLength} characters\`;
    } else if (input.validity.tooLong) {
      errorElement.textContent = 
        \`Max \${input.maxLength} characters\`;
    } else if (input.validity.patternMismatch) {
      errorElement.textContent = input.title || 'Invalid format';
    } else {
      errorElement.textContent = input.validationMessage;
    }
    
    input.classList.add('invalid');
  } else {
    errorElement.textContent = '';
    input.classList.remove('invalid');
    input.classList.add('valid');
  }
}`}</pre>
            </div>

            {/* Form Validation */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Validate on Submit</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputs = form.querySelectorAll('input, textarea');
  let isValid = true;
  
  // Validate each field
  inputs.forEach(input => {
    showValidationError(input);
    
    if (!input.validity.valid) {
      isValid = false;
    }
  });
  
  if (isValid) {
    // All fields valid, submit
    const formData = new FormData(form);
    submitToServer(formData);
  } else {
    // Focus first invalid field
    const firstInvalid = form.querySelector('.invalid');
    firstInvalid?.focus();
  }
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Custom Validation */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <AlertCircle className="w-6 h-6 text-purple-600/80 dark:text-purple-400/80" />
            3. Custom Validation Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Implement complex validation logic with JavaScript
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Password Strength */}
            <div className="p-5 bg-gradient-to-br from-purple-50/60 to-pink-50/60 dark:from-purple-950/10 dark:to-pink-950/10 rounded-xl border border-purple-200/50 dark:border-purple-800/30">
              <h4 className="font-semibold mb-3">Password Strength</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function validatePassword(password) {
  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password)
  };
  
  const errors = [];
  
  if (!rules.length) {
    errors.push('At least 8 characters');
  }
  if (!rules.uppercase) {
    errors.push('One uppercase letter');
  }
  if (!rules.lowercase) {
    errors.push('One lowercase letter');
  }
  if (!rules.number) {
    errors.push('One number');
  }
  if (!rules.special) {
    errors.push('One special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors,
    strength: Object.values(rules).filter(Boolean).length
  };
}`}</pre>
            </div>

            {/* Email Validation */}
            <div className="p-5 bg-gradient-to-br from-blue-50/60 to-cyan-50/60 dark:from-blue-950/10 dark:to-cyan-950/10 rounded-xl border border-blue-200/50 dark:border-blue-800/30">
              <h4 className="font-semibold mb-3">Email Validation</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`function validateEmail(email) {
  // Basic format check
  const basicRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  
  if (!basicRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  // More strict validation
  const strictRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  
  if (!strictRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  // Check for common mistakes
  const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];
  const domain = email.split('@')[1];
  
  // Suggest corrections for typos
  if (domain === 'gmial.com') {
    return { isValid: false, error: 'Did you mean gmail.com?' };
  }
  
  return { isValid: true };
}`}</pre>
            </div>

            {/* Match Fields */}
            <div className="p-5 bg-gradient-to-br from-emerald-50/60 to-green-50/60 dark:from-emerald-950/10 dark:to-green-950/10 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30">
              <h4 className="font-semibold mb-3">Matching Fields</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`// Password confirmation
const password = document.querySelector('#password');
const confirm = document.querySelector('#confirm');

confirm.addEventListener('input', () => {
  if (confirm.value !== password.value) {
    confirm.setCustomValidity('Passwords do not match');
  } else {
    confirm.setCustomValidity('');
  }
});

// Also validate when password changes
password.addEventListener('input', () => {
  if (confirm.value) {
    // Trigger confirm validation
    confirm.dispatchEvent(new Event('input'));
  }
});

// Email confirmation
const email = document.querySelector('#email');
const emailConfirm = document.querySelector('#email-confirm');

emailConfirm.addEventListener('input', () => {
  if (emailConfirm.value !== email.value) {
    emailConfirm.setCustomValidity('Emails do not match');
  } else {
    emailConfirm.setCustomValidity('');
  }
});`}</pre>
            </div>

            {/* Async Validation */}
            <div className="p-5 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 dark:from-amber-950/10 dark:to-yellow-950/10 rounded-xl border border-amber-200/50 dark:border-amber-800/30">
              <h4 className="font-semibold mb-3">Async Validation (API Check)</h4>
              <pre className="bg-white dark:bg-gray-900 rounded p-3 font-mono text-xs overflow-x-auto">
{`const username = document.querySelector('#username');
let debounceTimer;

username.addEventListener('input', (e) => {
  clearTimeout(debounceTimer);
  
  debounceTimer = setTimeout(async () => {
    const value = e.target.value;
    
    if (value.length < 3) return;
    
    try {
      const response = await fetch(\`/api/check-username?\${value}\`);
      const data = await response.json();
      
      if (data.exists) {
        username.setCustomValidity('Username already taken');
        showError(username, 'Username already taken');
      } else {
        username.setCustomValidity('');
        showSuccess(username, 'Username available');
      }
    } catch (error) {
      console.error('Validation failed:', error);
    }
  }, 500); // Wait 500ms after typing stops
});`}</pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Demo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl">
            <PlayCircle className="w-6 h-6 text-cyan-600/80 dark:text-cyan-400/80" />
            Live Demo - Real-time Validation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email *</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => validateEmail(email)}
                className={`w-full px-3 py-2 border-2 rounded ${
                  emailError ? 'border-red-500' : email ? 'border-emerald-500' : 'border-gray-300'
                }`}
                required
              />
              {emailError && (
                <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  {emailError}
                </p>
              )}
              {email && !emailError && (
                <p className="text-sm text-emerald-500 mt-1 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Valid email format
                </p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-semibold mb-2">Password *</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => validatePassword(password)}
                className={`w-full px-3 py-2 border-2 rounded ${
                  passwordError ? 'border-red-500' : password ? 'border-emerald-500' : 'border-gray-300'
                }`}
                required
              />
              {passwordError && (
                <p className="text-sm text-red-500 mt-1 flex items-center gap-1">
                  <X className="w-4 h-4" />
                  {passwordError}
                </p>
              )}
              {password && !passwordError && (
                <p className="text-sm text-emerald-500 mt-1 flex items-center gap-1">
                  <Check className="w-4 h-4" />
                  Strong password
                </p>
              )}
            </div>
            
            <div className="flex gap-2">
              <Button type="submit">
                Validate & Submit
              </Button>
              <Button type="button" variant="outline" onClick={resetDemo}>
                <RefreshCw className="w-3 h-3 mr-1" />
                Reset
              </Button>
            </div>
          </form>
          
          {validationLog.length > 0 && (
            <div className="p-3 bg-white dark:bg-gray-900 rounded border">
              <p className="font-semibold text-sm mb-2">Validation Log:</p>
              {validationLog.map((log, i) => (
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
                <li>• Validate on both client AND server</li>
                <li>• Show errors as user types (real-time)</li>
                <li>• Use HTML5 attributes when possible</li>
                <li>• Provide clear, specific error messages</li>
                <li>• Highlight invalid fields visually</li>
                <li>• Focus first invalid field on submit</li>
                <li>• Debounce async validations</li>
                <li>• Show success states for valid fields</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-rose-700 dark:text-rose-300">
                <XCircle className="w-5 h-5" />
                ❌ Avoid This
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Don&apos;t rely only on client-side validation</li>
                <li>• Don&apos;t show errors before user finishes</li>
                <li>• Don&apos;t use vague error messages</li>
                <li>• Don&apos;t validate every keystroke (use debounce)</li>
                <li>• Don&apos;t forget to clear errors when fixed</li>
                <li>• Don&apos;t disable submit button permanently</li>
                <li>• Don&apos;t forget accessibility (aria labels)</li>
                <li>• Don&apos;t validate hidden/disabled fields</li>
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
            Open this playground to see complete validation implementations with HTML5, Constraint API, and custom validation!
          </p>
          {onOpenWebPlayground && (
            <Button
              className="w-full md:w-auto"
              onClick={() => onOpenWebPlayground(playgroundHtml, playgroundCss, playgroundJs)}
            >
              <Globe className="w-4 h-4 mr-2" />
              Open Form Validation Playground
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
