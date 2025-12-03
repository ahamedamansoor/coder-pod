'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Clock, Database, RefreshCw, CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlSessionStorageProps {
  onOpenWebPlayground?: (content: { html: string; css?: string; js?: string }) => void;
}

export default function HtmlSessionStorage({ onOpenWebPlayground }: HtmlSessionStorageProps) {
  const basicExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>sessionStorage Demo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      padding: 20px;
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
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
      color: #f59e0b;
      margin-bottom: 10px;
      font-size: 1.8rem;
    }
    
    .subtitle {
      color: #6b7280;
      margin-bottom: 20px;
      font-size: 14px;
      padding: 12px;
      background: #fef3c7;
      border-radius: 8px;
      border-left: 4px solid #f59e0b;
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
    
    input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
      transition: border-color 0.3s;
    }
    
    input:focus {
      outline: none;
      border-color: #f59e0b;
    }
    
    .button-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
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
    
    .btn-save {
      background: #f59e0b;
      color: white;
    }
    
    .btn-save:hover {
      background: #d97706;
      transform: translateY(-1px);
    }
    
    .btn-load {
      background: #10b981;
      color: white;
    }
    
    .btn-load:hover {
      background: #059669;
    }
    
    .btn-clear {
      background: #ef4444;
      color: white;
      grid-column: 1 / -1;
    }
    
    .btn-clear:hover {
      background: #dc2626;
    }
    
    .result-box {
      padding: 16px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      min-height: 80px;
      margin-bottom: 16px;
    }
    
    .result-label {
      font-weight: 600;
      color: #f59e0b;
      margin-bottom: 8px;
      font-size: 13px;
      text-transform: uppercase;
    }
    
    .result-value {
      color: #1f2937;
      font-family: monospace;
      font-size: 14px;
    }
    
    .info-card {
      padding: 16px;
      background: #fef3c7;
      border-radius: 8px;
      border: 1px solid #fbbf24;
      font-size: 13px;
      color: #92400e;
      line-height: 1.6;
    }
    
    .info-card strong {
      color: #78350f;
      display: block;
      margin-bottom: 4px;
    }
    
    .status {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    
    .status-active {
      background: #d1fae5;
      color: #065f46;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #fbbf24;
      }
      
      .subtitle {
        background: #78350f;
        color: #fde68a;
        border-left-color: #f59e0b;
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
        border-color: #fbbf24;
      }
      
      .result-box {
        background: #0f172a;
        border-color: #475569;
      }
      
      .result-label {
        color: #fbbf24;
      }
      
      .result-value {
        color: #e2e8f0;
      }
      
      .info-card {
        background: #78350f;
        color: #fed7aa;
        border-color: #f59e0b;
      }
      
      .info-card strong {
        color: #fde68a;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #fbbf24;
    }
    
    :root.dark .subtitle {
      background: #78350f;
      color: #fde68a;
      border-left-color: #f59e0b;
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
      border-color: #fbbf24;
    }
    
    :root.dark .result-box {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .result-label {
      color: #fbbf24;
    }
    
    :root.dark .result-value {
      color: #e2e8f0;
    }
    
    :root.dark .info-card {
      background: #78350f;
      color: #fed7aa;
      border-color: #f59e0b;
    }
    
    :root.dark .info-card strong {
      color: #fde68a;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>⏱️ sessionStorage Demo</h1>
    <div class="subtitle">
      ⚠️ Data persists only for this tab session and clears when you close it
    </div>
    
    <span class="status status-active" id="sessionStatus">✅ Session Active</span>
    
    <div class="form-group">
      <label for="nameInput">Your Name</label>
      <input type="text" id="nameInput" placeholder="Enter your name">
    </div>
    
    <div class="form-group">
      <label for="emailInput">Your Email</label>
      <input type="text" id="emailInput" placeholder="Enter your email">
    </div>
    
    <div class="button-group">
      <button class="btn-save" onclick="saveData()">💾 Save to Session</button>
      <button class="btn-load" onclick="loadData()">📂 Load from Session</button>
      <button class="btn-clear" onclick="clearData()">🗑️ Clear Session</button>
    </div>
    
    <div class="result-box">
      <div class="result-label">Stored Data</div>
      <div class="result-value" id="output">No data in this session yet</div>
    </div>
    
    <div class="info-card">
      <strong>💡 Try this:</strong>
      1. Save some data<br>
      2. Refresh the page (data persists)<br>
      3. Open in a new tab (empty - different session)<br>
      4. Close and reopen this tab (data is gone!)
    </div>
  </div>
  
  <script>
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const output = document.getElementById('output');
    
    // Save to sessionStorage
    function saveData() {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      
      if (!name || !email) {
        alert('❌ Please fill in both fields');
        return;
      }
      
      const userData = {
        name: name,
        email: email,
        savedAt: new Date().toLocaleString()
      };
      
      sessionStorage.setItem('userData', JSON.stringify(userData));
      
      output.innerHTML = \`
        <strong>Name:</strong> \${userData.name}<br>
        <strong>Email:</strong> \${userData.email}<br>
        <small style="color: #6b7280;">Saved at: \${userData.savedAt}</small>
      \`;
      
      alert('✅ Data saved to sessionStorage!');
    }
    
    // Load from sessionStorage
    function loadData() {
      const stored = sessionStorage.getItem('userData');
      
      if (!stored) {
        output.textContent = 'No data found in this session';
        alert('⚠️ No data found. Save some data first!');
        return;
      }
      
      try {
        const userData = JSON.parse(stored);
        
        nameInput.value = userData.name;
        emailInput.value = userData.email;
        
        output.innerHTML = \`
          <strong>Name:</strong> \${userData.name}<br>
          <strong>Email:</strong> \${userData.email}<br>
          <small style="color: #6b7280;">Saved at: \${userData.savedAt}</small>
        \`;
        
        alert('✅ Data loaded from sessionStorage!');
      } catch (e) {
        output.textContent = 'Error parsing stored data';
      }
    }
    
    // Clear sessionStorage
    function clearData() {
      if (confirm('Are you sure you want to clear session data?')) {
        sessionStorage.clear();
        nameInput.value = '';
        emailInput.value = '';
        output.textContent = 'Session cleared';
        alert('✅ Session data cleared!');
      }
    }
    
    // Auto-load on page load
    window.addEventListener('load', () => {
      const stored = sessionStorage.getItem('userData');
      if (stored) {
        try {
          const userData = JSON.parse(stored);
          nameInput.value = userData.name;
          emailInput.value = userData.email;
          output.innerHTML = \`
            <strong>Name:</strong> \${userData.name}<br>
            <strong>Email:</strong> \${userData.email}<br>
            <small style="color: #6b7280;">Saved at: \${userData.savedAt}</small>
          \`;
        } catch (e) {
          console.error('Error loading session data:', e);
        }
      }
    });
    
    // Detect when tab is about to close
    window.addEventListener('beforeunload', (e) => {
      const stored = sessionStorage.getItem('userData');
      if (stored) {
        e.returnValue = 'You have unsaved session data. Close anyway?';
      }
    });
  </script>
</body>
</html>`;

  const multiStepFormExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multi-Step Form with sessionStorage</title>
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
      max-width: 600px;
      margin: 0 auto;
      background: white;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    h1 {
      color: #ec4899;
      margin-bottom: 20px;
    }
    
    .progress-bar {
      height: 8px;
      background: #e5e7eb;
      border-radius: 20px;
      overflow: hidden;
      margin-bottom: 30px;
    }
    
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #ec4899 0%, #8b5cf6 100%);
      border-radius: 20px;
      transition: width 0.3s ease;
    }
    
    .step {
      display: none;
      animation: fadeIn 0.3s ease;
    }
    
    .step.active {
      display: block;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .step-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 20px;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    label {
      display: block;
      margin-bottom: 6px;
      font-weight: 600;
      color: #4b5563;
      font-size: 14px;
    }
    
    input, select, textarea {
      width: 100%;
      padding: 12px;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      font-size: 15px;
    }
    
    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: #ec4899;
    }
    
    .button-group {
      display: flex;
      gap: 12px;
      margin-top: 30px;
    }
    
    button {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .btn-next {
      background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
      color: white;
    }
    
    .btn-next:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(236, 72, 153, 0.4);
    }
    
    .btn-prev {
      background: #e5e7eb;
      color: #4b5563;
    }
    
    .btn-prev:hover {
      background: #d1d5db;
    }
    
    .summary {
      padding: 16px;
      background: #f9fafb;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      margin-bottom: 20px;
    }
    
    .summary-item {
      padding: 8px 0;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .summary-item:last-child {
      border-bottom: none;
    }
    
    .summary-label {
      font-weight: 600;
      color: #6b7280;
      font-size: 12px;
      text-transform: uppercase;
    }
    
    .summary-value {
      color: #1f2937;
      margin-top: 4px;
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
      
      h1 {
        color: #f472b6;
      }
      
      .progress-bar {
        background: #475569;
      }
      
      .step-title {
        color: #e2e8f0;
      }
      
      label {
        color: #94a3b8;
      }
      
      input, select, textarea {
        background: #0f172a;
        border-color: #475569;
        color: #e2e8f0;
      }
      
      input:focus, select:focus, textarea:focus {
        border-color: #f472b6;
      }
      
      .summary {
        background: #0f172a;
        border-color: #475569;
      }
      
      .summary-value {
        color: #e2e8f0;
      }
    }
    
    :root.dark .container {
      background: #1e293b;
      color: #e2e8f0;
    }
    
    :root.dark h1 {
      color: #f472b6;
    }
    
    :root.dark .progress-bar {
      background: #475569;
    }
    
    :root.dark .step-title {
      color: #e2e8f0;
    }
    
    :root.dark label {
      color: #94a3b8;
    }
    
    :root.dark input,
    :root.dark select,
    :root.dark textarea {
      background: #0f172a;
      border-color: #475569;
      color: #e2e8f0;
    }
    
    :root.dark input:focus,
    :root.dark select:focus,
    :root.dark textarea:focus {
      border-color: #f472b6;
    }
    
    :root.dark .summary {
      background: #0f172a;
      border-color: #475569;
    }
    
    :root.dark .summary-value {
      color: #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 Multi-Step Form</h1>
    <div class="progress-bar">
      <div class="progress-fill" id="progressBar" style="width: 33%"></div>
    </div>
    
    <!-- Step 1: Personal Info -->
    <div class="step active" id="step1">
      <div class="step-title">Step 1: Personal Information</div>
      <div class="form-group">
        <label>Full Name</label>
        <input type="text" id="fullName" placeholder="John Doe">
      </div>
      <div class="form-group">
        <label>Email</label>
        <input type="email" id="email" placeholder="john@example.com">
      </div>
      <div class="button-group">
        <button class="btn-next" onclick="nextStep(1)">Next →</button>
      </div>
    </div>
    
    <!-- Step 2: Address -->
    <div class="step" id="step2">
      <div class="step-title">Step 2: Address</div>
      <div class="form-group">
        <label>Street Address</label>
        <input type="text" id="address" placeholder="123 Main St">
      </div>
      <div class="form-group">
        <label>City</label>
        <input type="text" id="city" placeholder="New York">
      </div>
      <div class="button-group">
        <button class="btn-prev" onclick="prevStep(2)">← Back</button>
        <button class="btn-next" onclick="nextStep(2)">Next →</button>
      </div>
    </div>
    
    <!-- Step 3: Review -->
    <div class="step" id="step3">
      <div class="step-title">Step 3: Review & Submit</div>
      <div class="summary" id="summary"></div>
      <div class="button-group">
        <button class="btn-prev" onclick="prevStep(3)">← Back</button>
        <button class="btn-next" onclick="submitForm()">Submit ✓</button>
      </div>
    </div>
  </div>
  
  <script>
    const formData = {
      fullName: '',
      email: '',
      address: '',
      city: ''
    };
    
    // Load saved data on page load
    window.addEventListener('load', () => {
      const saved = sessionStorage.getItem('formData');
      if (saved) {
        Object.assign(formData, JSON.parse(saved));
        document.getElementById('fullName').value = formData.fullName;
        document.getElementById('email').value = formData.email;
        document.getElementById('address').value = formData.address;
        document.getElementById('city').value = formData.city;
      }
    });
    
    function saveFormData() {
      formData.fullName = document.getElementById('fullName').value;
      formData.email = document.getElementById('email').value;
      formData.address = document.getElementById('address').value;
      formData.city = document.getElementById('city').value;
      
      sessionStorage.setItem('formData', JSON.stringify(formData));
    }
    
    function nextStep(current) {
      saveFormData();
      
      document.getElementById(\`step\${current}\`).classList.remove('active');
      document.getElementById(\`step\${current + 1}\`).classList.add('active');
      
      const progress = ((current + 1) / 3) * 100;
      document.getElementById('progressBar').style.width = progress + '%';
      
      if (current === 2) {
        showSummary();
      }
    }
    
    function prevStep(current) {
      document.getElementById(\`step\${current}\`).classList.remove('active');
      document.getElementById(\`step\${current - 1}\`).classList.add('active');
      
      const progress = ((current - 1) / 3) * 100;
      document.getElementById('progressBar').style.width = progress + '%';
    }
    
    function showSummary() {
      const summary = document.getElementById('summary');
      summary.innerHTML = \`
        <div class="summary-item">
          <div class="summary-label">Full Name</div>
          <div class="summary-value">\${formData.fullName}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Email</div>
          <div class="summary-value">\${formData.email}</div>
        </div>
        <div class="summary-item">
          <div class="summary-label">Address</div>
          <div class="summary-value">\${formData.address}, \${formData.city}</div>
        </div>
      \`;
    }
    
    function submitForm() {
      alert('✅ Form submitted! (Session data will be cleared)');
      sessionStorage.removeItem('formData');
      location.reload();
    }
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Clock}
        category="9. HTML APIs"
        title="sessionStorage API"
        description="Learn how to store temporary data that persists only for the browser session"
        colorTheme="amber"
      />

      {/* What is sessionStorage */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            What is sessionStorage?
          </CardTitle>
          <CardDescription>
            sessionStorage stores data for the duration of the page session (until tab/window closes)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <code className="px-2 py-1 bg-muted rounded">sessionStorage</code> is similar to localStorage, but the data is cleared when the page session ends. Perfect for temporary data like form progress, wizard states, or tab-specific settings.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h4 className="font-semibold text-amber-900 dark:text-amber-100">Session-Scoped</h4>
              </div>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                Data cleared when tab/window closes
              </p>
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <Database className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Tab-Specific</h4>
              </div>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Each tab has its own storage
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-6">
            <h4 className="font-semibold mb-3">localStorage vs sessionStorage</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Feature</th>
                    <th className="text-left p-2 font-semibold text-blue-600 dark:text-blue-400">localStorage</th>
                    <th className="text-left p-2 font-semibold text-amber-600 dark:text-amber-400">sessionStorage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Persistence</td>
                    <td className="p-2">
                      <CheckCircle className="inline w-4 h-4 text-green-600 mr-1" />
                      Survives browser restart
                    </td>
                    <td className="p-2">
                      <XCircle className="inline w-4 h-4 text-red-600 mr-1" />
                      Cleared on tab close
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">Scope</td>
                    <td className="p-2">Shared across all tabs</td>
                    <td className="p-2">Per tab/window</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Use Case</td>
                    <td className="p-2">User preferences, auth tokens</td>
                    <td className="p-2">Form state, wizard progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-amber-500/10 rounded-lg">
              <Database className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            Basic sessionStorage Operations
          </CardTitle>
          <CardDescription>
            Learn the core methods and see session-specific behavior
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={basicExample}
            title="sessionStorage Demo"
            colorTheme="amber"
          />
        </CardContent>
      </Card>

      {/* Multi-Step Form Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-pink-500/10 rounded-lg">
              <RefreshCw className="h-5 w-5 text-pink-600 dark:text-pink-400" />
            </div>
            Real-World Example: Multi-Step Form
          </CardTitle>
          <CardDescription>
            Preserve form progress using sessionStorage - perfect for wizards and surveys
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={multiStepFormExample}
            title="Multi-Step Form with Progress Saving"
            colorTheme="pink"
          />
        </CardContent>
      </Card>

      {/* Common Methods */}
      <Card>
        <CardHeader>
          <CardTitle>Core Methods</CardTitle>
          <CardDescription>
            sessionStorage uses the same API as localStorage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400">sessionStorage.setItem(key, value)</code>
              <p className="text-sm text-muted-foreground mt-2">Store data for this session</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400">sessionStorage.getItem(key)</code>
              <p className="text-sm text-muted-foreground mt-2">Retrieve session data</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400">sessionStorage.removeItem(key)</code>
              <p className="text-sm text-muted-foreground mt-2">Delete specific item</p>
            </div>
            <div className="p-4 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-amber-600 dark:text-amber-400">sessionStorage.clear()</code>
              <p className="text-sm text-muted-foreground mt-2">Clear all session data</p>
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
            <li>Use for temporary data that should NOT persist across sessions</li>
            <li>Perfect for multi-step forms, shopping cart states, or wizard progress</li>
            <li>Remember: each tab has its own sessionStorage - not shared</li>
            <li>Store objects as JSON strings using JSON.stringify/parse</li>
            <li>Always wrap in try-catch as it can fail in private browsing</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* When to Use */}
      <Alert className="border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
        <AlertCircle className="h-4 w-4 text-amber-600" />
        <AlertTitle className="text-amber-900 dark:text-amber-100">When to Use sessionStorage?</AlertTitle>
        <AlertDescription className="text-amber-800 dark:text-amber-200">
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Multi-step forms:</strong> Save progress without polluting localStorage</li>
            <li><strong>Tab-specific states:</strong> Different data per tab (e.g., filters, sorting)</li>
            <li><strong>Sensitive workflow data:</strong> Auto-cleared when user closes tab</li>
            <li><strong>Temporary shopping carts:</strong> Reset on new session</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
}
