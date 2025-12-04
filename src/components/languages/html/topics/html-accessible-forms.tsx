'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { FileText, FormInput, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAccessibleFormsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAccessibleForms({ onOpenWebPlayground }: HtmlAccessibleFormsProps) {
  
  const accessibleFormExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible Form Example</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #312e81 0%, #4c1d95 100%); }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2rem; color: #6366f1; margin-bottom: 10px; }
    :root.dark h1 { color: #818cf8; }
    
    .form-description {
      color: #6b7280;
      margin-bottom: 30px;
      line-height: 1.5;
    }
    :root.dark .form-description { color: #94a3b8; }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    label {
      display: block;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 8px;
      font-size: 0.95rem;
    }
    :root.dark label { color: #f1f5f9; }
    
    .required {
      color: #ef4444;
      margin-left: 4px;
    }
    
    input, textarea, select {
      width: 100%;
      padding: 12px;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.2s;
    }
    
    :root.dark input,
    :root.dark textarea,
    :root.dark select {
      background: #334155;
      border-color: #475569;
      color: #e2e8f0;
    }
    
    input:focus, textarea:focus, select:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }
    
    .hint {
      font-size: 0.85rem;
      color: #6b7280;
      margin-top: 6px;
    }
    :root.dark .hint { color: #94a3b8; }
    
    .error {
      color: #ef4444;
      font-size: 0.85rem;
      margin-top: 6px;
      display: none;
    }
    
    input:invalid[data-touched="true"] {
      border-color: #ef4444;
    }
    
    input:invalid[data-touched="true"] ~ .error {
      display: block;
    }
    
    fieldset {
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 25px;
    }
    :root.dark fieldset { border-color: #475569; }
    
    legend {
      font-weight: 600;
      color: #1f2937;
      padding: 0 10px;
      font-size: 1rem;
    }
    :root.dark legend { color: #f1f5f9; }
    
    .radio-group, .checkbox-group {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .radio-option, .checkbox-option {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    input[type="radio"],
    input[type="checkbox"] {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    
    .radio-option label,
    .checkbox-option label {
      margin: 0;
      font-weight: 400;
      cursor: pointer;
    }
    
    button {
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      color: white;
      border: none;
      padding: 14px 32px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      width: 100%;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
    }
    
    button:focus {
      outline: 3px solid #818cf8;
      outline-offset: 2px;
    }
    
    .success-message {
      background: #dcfce7;
      border: 2px solid #10b981;
      color: #065f46;
      padding: 15px;
      border-radius: 8px;
      margin-top: 20px;
      display: none;
    }
    :root.dark .success-message {
      background: #064e3b;
      border-color: #34d399;
      color: #a7f3d0;
    }
  </style>
  
  <script>
    function handleSubmit(e) {
      e.preventDefault();
      document.querySelector('.success-message').style.display = 'block';
      document.querySelector('.success-message').focus();
    }
    
    function markTouched(input) {
      input.setAttribute('data-touched', 'true');
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>📝 Sign Up Form</h1>
    <p class="form-description">
      All fields marked with <span class="required">*</span> are required.
    </p>
    
    <form onsubmit="handleSubmit(event)" novalidate>
      <!-- Text Input -->
      <div class="form-group">
        <label for="fullname">
          Full Name<span class="required">*</span>
        </label>
        <input 
          type="text" 
          id="fullname" 
          name="fullname"
          required
          aria-required="true"
          aria-describedby="name-hint"
          onblur="markTouched(this)">
        <p id="name-hint" class="hint">Enter your first and last name</p>
        <p class="error">Please enter your full name</p>
      </div>
      
      <!-- Email Input -->
      <div class="form-group">
        <label for="email">
          Email<span class="required">*</span>
        </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          aria-required="true"
          aria-describedby="email-hint"
          onblur="markTouched(this)">
        <p id="email-hint" class="hint">We'll never share your email</p>
        <p class="error">Please enter a valid email address</p>
      </div>
      
      <!-- Password Input -->
      <div class="form-group">
        <label for="password">
          Password<span class="required">*</span>
        </label>
        <input 
          type="password" 
          id="password" 
          name="password"
          required
          minlength="8"
          aria-required="true"
          aria-describedby="password-hint"
          onblur="markTouched(this)">
        <p id="password-hint" class="hint">Minimum 8 characters</p>
        <p class="error">Password must be at least 8 characters</p>
      </div>
      
      <!-- Radio Buttons -->
      <fieldset>
        <legend>Account Type<span class="required">*</span></legend>
        <div class="radio-group" role="radiogroup" aria-required="true">
          <div class="radio-option">
            <input type="radio" id="personal" name="accountType" value="personal" required>
            <label for="personal">Personal</label>
          </div>
          <div class="radio-option">
            <input type="radio" id="business" name="accountType" value="business">
            <label for="business">Business</label>
          </div>
        </div>
      </fieldset>
      
      <!-- Checkboxes -->
      <fieldset>
        <legend>Interests (Optional)</legend>
        <div class="checkbox-group">
          <div class="checkbox-option">
            <input type="checkbox" id="newsletter" name="interests" value="newsletter">
            <label for="newsletter">Subscribe to newsletter</label>
          </div>
          <div class="checkbox-option">
            <input type="checkbox" id="updates" name="interests" value="updates">
            <label for="updates">Receive product updates</label>
          </div>
        </div>
      </fieldset>
      
      <!-- Select Dropdown -->
      <div class="form-group">
        <label for="country">
          Country<span class="required">*</span>
        </label>
        <select id="country" name="country" required aria-required="true">
          <option value="">Select your country</option>
          <option value="us">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>
      </div>
      
      <!-- Textarea -->
      <div class="form-group">
        <label for="bio">
          Bio (Optional)
        </label>
        <textarea 
          id="bio" 
          name="bio"
          rows="4"
          aria-describedby="bio-hint"></textarea>
        <p id="bio-hint" class="hint">Tell us about yourself</p>
      </div>
      
      <!-- Submit Button -->
      <button type="submit">Create Account</button>
      
      <!-- Success Message -->
      <div class="success-message" role="status" tabindex="-1">
        ✅ Form submitted successfully! (Demo only - not actually sent)
      </div>
    </form>
  </div>
</body>
</html>`;

  const errorHandlingExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Error Handling</title>
  
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      padding: 20px;
      min-height: 100vh;
    }
    :root.dark body { background: linear-gradient(135deg, #78350f 0%, #92400e 100%); }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    :root.dark .container { background: #1e293b; color: #e2e8f0; }
    
    h1 { font-size: 2rem; color: #f59e0b; margin-bottom: 30px; }
    :root.dark h1 { color: #fbbf24; }
    
    .error-summary {
      background: #fef2f2;
      border: 2px solid #ef4444;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 30px;
      display: none;
    }
    :root.dark .error-summary {
      background: #7f1d1d;
      border-color: #f87171;
    }
    
    .error-summary.visible { display: block; }
    
    .error-summary h2 {
      color: #991b1b;
      font-size: 1.2rem;
      margin-bottom: 15px;
    }
    :root.dark .error-summary h2 { color: #fca5a5; }
    
    .error-list {
      list-style: none;
      padding: 0;
    }
    
    .error-list li {
      padding: 8px 0;
      color: #991b1b;
    }
    :root.dark .error-list li { color: #fecaca; }
    
    .error-list a {
      color: #dc2626;
      text-decoration: none;
      font-weight: 600;
    }
    :root.dark .error-list a { color: #f87171; }
    
    .error-list a:hover { text-decoration: underline; }
    
    .form-group {
      margin-bottom: 25px;
    }
    
    .form-group.has-error input {
      border-color: #ef4444;
      background: #fef2f2;
    }
    :root.dark .form-group.has-error input {
      background: #7f1d1d;
    }
    
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    input {
      width: 100%;
      padding: 12px;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      font-size: 1rem;
    }
    :root.dark input {
      background: #334155;
      border-color: #475569;
      color: #e2e8f0;
    }
    
    input:focus {
      outline: none;
      border-color: #f59e0b;
      box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
    }
    
    .error-message {
      color: #ef4444;
      font-size: 0.85rem;
      margin-top: 6px;
      display: none;
      font-weight: 600;
    }
    
    .form-group.has-error .error-message {
      display: block;
    }
    
    button {
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
      color: white;
      border: none;
      padding: 14px 32px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      width: 100%;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4);
    }
  </style>
  
  <script>
    function validateForm(e) {
      e.preventDefault();
      const errors = [];
      
      // Validate username
      const username = document.getElementById('username');
      if (!username.value.trim()) {
        errors.push({ field: username, message: 'Username is required' });
      }
      
      // Validate email
      const email = document.getElementById('email2');
      if (!email.value.includes('@')) {
        errors.push({ field: email, message: 'Please enter a valid email' });
      }
      
      // Display errors
      if (errors.length > 0) {
        displayErrors(errors);
      } else {
        alert('Form submitted successfully!');
      }
    }
    
    function displayErrors(errors) {
      // Clear previous errors
      document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('has-error');
      });
      
      // Show error summary
      const errorSummary = document.getElementById('error-summary');
      const errorList = document.getElementById('error-list');
      errorList.innerHTML = '';
      
      errors.forEach((error, index) => {
        // Mark field as error
        error.field.closest('.form-group').classList.add('has-error');
        error.field.setAttribute('aria-invalid', 'true');
        
        // Add to error list
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#' + error.field.id;
        link.textContent = error.message;
        link.onclick = (e) => {
          e.preventDefault();
          error.field.focus();
        };
        li.appendChild(link);
        errorList.appendChild(li);
      });
      
      errorSummary.classList.add('visible');
      errorSummary.focus();
    }
  </script>
</head>
<body>
  <div class="container">
    <h1>⚠️ Error Handling Demo</h1>
    
    <!-- Error Summary -->
    <div 
      id="error-summary" 
      class="error-summary"
      role="alert"
      aria-live="assertive"
      tabindex="-1">
      <h2>⚠️ There are 2 errors in this form</h2>
      <ul id="error-list" class="error-list"></ul>
    </div>
    
    <form onsubmit="validateForm(event)">
      <div class="form-group">
        <label for="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username"
          aria-describedby="username-error">
        <p id="username-error" class="error-message">
          ❌ Username is required
        </p>
      </div>
      
      <div class="form-group">
        <label for="email2">Email</label>
        <input 
          type="email" 
          id="email2" 
          name="email"
          aria-describedby="email-error">
        <p id="email-error" class="error-message">
          ❌ Please enter a valid email
        </p>
      </div>
      
      <button type="submit">Submit</button>
    </form>
    
    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-top: 30px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #78350f; margin-bottom: 10px;">💡 Try This:</h3>
      <p style="color: #92400e; line-height: 1.6;">
        Click "Submit" without filling the form. Notice:
        <br>• Error summary appears at top (gets focus)
        <br>• Errors listed with clickable links
        <br>• Fields highlighted in red
        <br>• Error messages shown below fields
      </p>
    </div>
  </div>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={FormInput}
        category="HTML · Accessibility"
        title="What are Accessible Forms?"
        description="Learn how to create forms that everyone can use successfully"
        colorTheme="blue"
      />

      {/* Accessible Form Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Complete Accessible Form
          </CardTitle>
          <CardDescription>
            Best practices for labels, hints, validation, and grouping
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={accessibleFormExample}
            title="Accessible Form Example"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Error Handling */}
      <Card>
        <CardHeader>
          <CardTitle>Error Handling & Validation</CardTitle>
          <CardDescription>
            How to handle and communicate form errors accessibly
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={errorHandlingExample}
            title="Form Error Handling"
            colorTheme="blue"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Form Elements Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Accessible Form Elements</CardTitle>
          <CardDescription>
            Requirements for each form element type
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📝 Text Inputs</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Every input must have a &lt;label&gt; with matching for/id</li>
                <li>• Use aria-describedby for hints</li>
                <li>• Mark required with required + aria-required="true"</li>
                <li>• Use appropriate input type (email, tel, url, etc.)</li>
                <li>• Add autocomplete attributes where appropriate</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">🔘 Radio Buttons</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Group with &lt;fieldset&gt; and &lt;legend&gt;</li>
                <li>• Same name attribute for all options</li>
                <li>• Each radio needs its own label with matching for/id</li>
                <li>• Use role="radiogroup" on container</li>
                <li>• Arrow keys should navigate between options</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">☑️ Checkboxes</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Each checkbox needs its own label</li>
                <li>• Group related checkboxes in &lt;fieldset&gt;</li>
                <li>• Use aria-describedby for group instructions</li>
                <li>• Consider aria-checked for custom checkboxes</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📋 Select Dropdowns</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Must have associated label</li>
                <li>• First option should be a prompt ("Select...")</li>
                <li>• Group options with &lt;optgroup&gt; if needed</li>
                <li>• Use size="1" for single select</li>
              </ul>
            </div>
            
            <div className="p-4 rounded-lg bg-muted border">
              <h4 className="font-semibold mb-2">📄 Textareas</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Must have associated label</li>
                <li>• Set appropriate rows/cols or use CSS</li>
                <li>• Use aria-describedby for character limits</li>
                <li>• Consider maxlength attribute</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>Accessible Forms Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Always use labels</strong> - Every input needs a label, not just placeholder</li>
            <li><strong>Mark required fields</strong> - Use required attribute + visual indicator</li>
            <li><strong>Provide clear instructions</strong> - Explain format requirements upfront</li>
            <li><strong>Error handling</strong> - Show error summary, highlight fields, provide guidance</li>
            <li><strong>Use fieldsets</strong> - Group related inputs (radio buttons, checkboxes)</li>
            <li><strong>Keyboard accessible</strong> - All inputs accessible via Tab, Enter, Space, Arrows</li>
            <li><strong>Focus management</strong> - Move focus to errors, confirmation messages</li>
            <li><strong>Clear button text</strong> - "Submit Registration" not just "Submit"</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Common Mistakes */}
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Common Form Accessibility Mistakes</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>No labels</strong> - Using only placeholder text</li>
            <li><strong>Generic labels</strong> - Multiple inputs labeled "Name"</li>
            <li><strong>Missing for/id connection</strong> - Label not linked to input</li>
            <li><strong>Poor error messages</strong> - "Error" without explanation</li>
            <li><strong>No error summary</strong> - Errors only shown inline</li>
            <li><strong>Color only</strong> - Using only red border to indicate error</li>
            <li><strong>Not marking required</strong> - Users don't know what's required</li>
            <li><strong>Custom inputs without ARIA</strong> - Divs pretending to be inputs</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Error Handling Best Practices */}
      <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertTitle className="text-blue-900 dark:text-blue-100">Error Handling Best Practices</AlertTitle>
        <AlertDescription className="text-blue-800 dark:text-blue-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Error summary at top</strong> - List all errors with links to fields</li>
            <li><strong>Move focus to summary</strong> - Use role="alert" and focus()</li>
            <li><strong>Inline errors</strong> - Show error message below each field</li>
            <li><strong>aria-invalid="true"</strong> - Mark fields with errors</li>
            <li><strong>aria-describedby</strong> - Link field to error message</li>
            <li><strong>Clear guidance</strong> - Explain how to fix the error</li>
            <li><strong>Don't clear form</strong> - Keep valid entries when showing errors</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
