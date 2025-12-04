'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview } from '@/components/shared';
import { Settings, Tag, Eye, CheckCircle, AlertTriangle, Info, Sparkles, Layers, FileText } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

interface HtmlAriaPropertiesProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

export default function HtmlAriaProperties({ onOpenWebPlayground }: HtmlAriaPropertiesProps) {
  
  const ariaLabelExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aria-label & aria-labelledby</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%);
      }
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #8b5cf6;
      margin-bottom: 15px;
      text-align: center;
      font-size: 2rem;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #a78bfa;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .example-section {
      margin: 30px 0;
      padding: 25px;
      background: #f5f3ff;
      border-radius: 12px;
      border-left: 4px solid #8b5cf6;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-section {
        background: #4c1d95;
        border-left-color: #a78bfa;
      }
    }
    
    .example-section h2 {
      color: #6d28d9;
      margin-bottom: 20px;
      font-size: 1.4rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-section h2 {
        color: #c4b5fd;
      }
    }
    
    .button-group {
      display: flex;
      gap: 15px;
      margin: 20px 0;
      flex-wrap: wrap;
    }
    
    button {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .btn-primary {
      background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
      color: white;
    }
    
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
    }
    
    .btn-primary:focus {
      outline: 3px solid #c4b5fd;
      outline-offset: 2px;
    }
    
    .code-block {
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 14px;
      overflow-x: auto;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-block {
        background: #0f172a;
      }
    }
    
    .label-demo {
      color: #4b5563;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .label-demo {
        color: #cbd5e1;
      }
    }
    
    #form-title {
      color: #8b5cf6;
      font-weight: 700;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      #form-title {
        color: #a78bfa;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏷️ aria-label & aria-labelledby</h1>
    <p class="subtitle">Providing accessible names for elements</p>
    
    <div class="example-section">
      <h2>1️⃣ aria-label (Direct Label)</h2>
      <p class="label-demo">
        Use <strong>aria-label</strong> when there's no visible text label.
        It provides a text alternative that screen readers will announce.
      </p>
      
      <div class="button-group">
        <button class="btn-primary" aria-label="Close dialog window">
          ❌
        </button>
        <button class="btn-primary" aria-label="Search for products">
          🔍
        </button>
        <button class="btn-primary" aria-label="Add to shopping cart">
          🛒
        </button>
      </div>
      
      <div class="code-block">
&lt;button aria-label="Close dialog"&gt;❌&lt;/button&gt;
&lt;button aria-label="Search"&gt;🔍&lt;/button&gt;
      </div>
    </div>
    
    <div class="example-section">
      <h2>2️⃣ aria-labelledby (Reference Label)</h2>
      <p class="label-demo">
        Use <strong>aria-labelledby</strong> to reference an existing element's ID.
        This creates a relationship between elements.
      </p>
      
      <h3 id="form-title">📝 Contact Form</h3>
      <form aria-labelledby="form-title">
        <div class="button-group">
          <button type="button" class="btn-primary">
            Submit Form
          </button>
        </div>
      </form>
      
      <div class="code-block">
&lt;h3 id="form-title"&gt;Contact Form&lt;/h3&gt;
&lt;form aria-labelledby="form-title"&gt;
  &lt;!-- Form content --&gt;
&lt;/form&gt;
      </div>
    </div>
    
    <div class="example-section">
      <h2>💡 Key Differences</h2>
      <ul class="label-demo" style="margin-left: 20px; line-height: 2;">
        <li>✅ <strong>aria-label</strong>: Creates new text (not visible on screen)</li>
        <li>✅ <strong>aria-labelledby</strong>: Points to visible text already on page</li>
        <li>✅ Use aria-label for icons without text</li>
        <li>✅ Use aria-labelledby to reuse existing labels</li>
      </ul>
    </div>
  </div>
</body>
</html>`;

  const ariaDescribedByExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aria-describedby</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
      }
    }
    
    .container {
      max-width: 700px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #10b981;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #34d399;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .form-group {
      margin: 25px 0;
    }
    
    label {
      display: block;
      font-weight: 600;
      color: #059669;
      margin-bottom: 8px;
    }
    
    @media (prefers-color-scheme: dark) {
      label {
        color: #6ee7b7;
      }
    }
    
    input {
      width: 100%;
      padding: 12px;
      border: 2px solid #d1d5db;
      border-radius: 8px;
      font-size: 16px;
      transition: border-color 0.2s;
    }
    
    @media (prefers-color-scheme: dark) {
      input {
        background: #0f172a;
        color: #e2e8f0;
        border-color: #475569;
      }
    }
    
    input:focus {
      outline: none;
      border-color: #10b981;
    }
    
    .help-text {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      color: #6b7280;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .help-text {
        color: #94a3b8;
      }
    }
    
    .error-text {
      display: block;
      margin-top: 8px;
      font-size: 14px;
      color: #dc2626;
      line-height: 1.5;
    }
    
    @media (prefers-color-scheme: dark) {
      .error-text {
        color: #fca5a5;
      }
    }
    
    .info-box {
      background: #d1fae5;
      padding: 20px;
      border-radius: 8px;
      border-left: 4px solid #10b981;
      margin: 30px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #064e3b;
        border-left-color: #34d399;
      }
    }
    
    .info-box h3 {
      color: #065f46;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box h3 {
        color: #a7f3d0;
      }
    }
    
    .info-box p {
      color: #047857;
      line-height: 1.6;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box p {
        color: #d1fae5;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📝 aria-describedby</h1>
    <p class="subtitle">Adding helpful descriptions to form fields</p>
    
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input 
          type="text" 
          id="username" 
          aria-describedby="username-help"
          placeholder="Enter your username"
        >
        <span id="username-help" class="help-text">
          💡 Use 3-20 characters, letters and numbers only
        </span>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          aria-describedby="password-help password-error"
          placeholder="Create a password"
        >
        <span id="password-help" class="help-text">
          🔒 Must be at least 8 characters with one number
        </span>
        <span id="password-error" class="error-text" style="display: none;">
          ❌ Password is too weak
        </span>
      </div>
      
      <div class="form-group">
        <label for="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          aria-describedby="email-help"
          placeholder="your@email.com"
        >
        <span id="email-help" class="help-text">
          ✉️ We'll never share your email with anyone
        </span>
      </div>
    </form>
    
    <div class="info-box">
      <h3>🎯 How it Works</h3>
      <p>
        <strong>aria-describedby</strong> references the ID of an element that describes 
        the current element. Screen readers announce this description after the label.
      </p>
      <p style="margin-top: 10px;">
        You can reference multiple IDs separated by spaces!
      </p>
    </div>
  </div>
</body>
</html>`;

  const ariaHiddenExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aria-hidden</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #ef4444;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #f87171;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .example-card {
      background: #fef2f2;
      padding: 25px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #ef4444;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card {
        background: #7f1d1d;
        border-left-color: #f87171;
      }
    }
    
    .example-card h2 {
      color: #991b1b;
      margin-bottom: 15px;
      font-size: 1.3rem;
    }
    
    @media (prefers-color-scheme: dark) {
      .example-card h2 {
        color: #fca5a5;
      }
    }
    
    .icon-text {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 15px;
      background: white;
      border-radius: 8px;
      margin: 15px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .icon-text {
        background: #334155;
      }
    }
    
    .decorative-icon {
      font-size: 2rem;
    }
    
    .text-content {
      color: #374151;
    }
    
    @media (prefers-color-scheme: dark) {
      .text-content {
        color: #cbd5e1;
      }
    }
    
    .code-example {
      background: #1e293b;
      color: #e2e8f0;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 13px;
      margin: 15px 0;
      overflow-x: auto;
    }
    
    @media (prefers-color-scheme: dark) {
      .code-example {
        background: #0f172a;
      }
    }
    
    .warning {
      background: #fffbeb;
      border: 2px solid #fbbf24;
      padding: 20px;
      border-radius: 8px;
      color: #78350f;
      margin: 25px 0;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning {
        background: #78350f;
        border-color: #fcd34d;
        color: #fef3c7;
      }
    }
    
    .warning strong {
      color: #b45309;
    }
    
    @media (prefers-color-scheme: dark) {
      .warning strong {
        color: #fcd34d;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>👻 aria-hidden</h1>
    <p class="subtitle">Hiding decorative content from screen readers</p>
    
    <div class="example-card">
      <h2>✅ Good Example - Decorative Icons</h2>
      
      <div class="icon-text">
        <span class="decorative-icon" aria-hidden="true">⭐</span>
        <span class="text-content">This is a featured product</span>
      </div>
      
      <div class="icon-text">
        <span class="decorative-icon" aria-hidden="true">✅</span>
        <span class="text-content">Item successfully added</span>
      </div>
      
      <div class="icon-text">
        <span class="decorative-icon" aria-hidden="true">🔥</span>
        <span class="text-content">Hot deal - Limited time only</span>
      </div>
      
      <div class="code-example">
&lt;span aria-hidden="true"&gt;⭐&lt;/span&gt;
&lt;span&gt;Featured product&lt;/span&gt;
      </div>
      
      <p class="text-content" style="margin-top: 15px;">
        Screen readers will only announce "Featured product", not "star featured product"
      </p>
    </div>
    
    <div class="example-card">
      <h2>💡 When to Use aria-hidden="true"</h2>
      <ul class="text-content" style="margin-left: 20px; line-height: 2;">
        <li>✅ Decorative icons that don't add meaning</li>
        <li>✅ Visual spacing or styling elements</li>
        <li>✅ Duplicate content (like icon + text)</li>
        <li>✅ Background patterns or images</li>
      </ul>
    </div>
    
    <div class="warning">
      <strong>⚠️ Warning:</strong><br>
      Never use aria-hidden="true" on focusable elements like buttons or links!
      It will hide them from screen readers but users can still tab to them,
      causing confusion.
    </div>
  </div>
</body>
</html>`;

  const ariaLiveExample = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>aria-live Regions</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      padding: 40px 20px;
      min-height: 100vh;
      transition: background-color 0.3s;
    }
    
    @media (prefers-color-scheme: dark) {
      body {
        background: linear-gradient(135deg, #0c4a6e 0%, #075985 100%);
      }
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 40px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);
    }
    
    @media (prefers-color-scheme: dark) {
      .container {
        background: #1e293b;
        color: #e2e8f0;
      }
    }
    
    h1 {
      color: #06b6d4;
      margin-bottom: 15px;
      text-align: center;
    }
    
    @media (prefers-color-scheme: dark) {
      h1 {
        color: #22d3ee;
      }
    }
    
    .subtitle {
      text-align: center;
      color: #6b7280;
      margin-bottom: 40px;
    }
    
    @media (prefers-color-scheme: dark) {
      .subtitle {
        color: #94a3b8;
      }
    }
    
    .demo-section {
      background: #cffafe;
      padding: 25px;
      border-radius: 12px;
      margin: 25px 0;
      border-left: 4px solid #06b6d4;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-section {
        background: #164e63;
        border-left-color: #22d3ee;
      }
    }
    
    .demo-section h2 {
      color: #0e7490;
      margin-bottom: 15px;
    }
    
    @media (prefers-color-scheme: dark) {
      .demo-section h2 {
        color: #67e8f9;
      }
    }
    
    button {
      background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
      color: white;
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
    }
    
    .status-message {
      margin-top: 20px;
      padding: 15px;
      border-radius: 8px;
      font-weight: 600;
    }
    
    .success-message {
      background: #d1fae5;
      color: #065f46;
      border: 2px solid #10b981;
    }
    
    @media (prefers-color-scheme: dark) {
      .success-message {
        background: #064e3b;
        color: #6ee7b7;
        border-color: #34d399;
      }
    }
    
    .error-message {
      background: #fee2e2;
      color: #991b1b;
      border: 2px solid #ef4444;
    }
    
    @media (prefers-color-scheme: dark) {
      .error-message {
        background: #7f1d1d;
        color: #fca5a5;
        border-color: #f87171;
      }
    }
    
    .info-box {
      background: #e0f2fe;
      padding: 20px;
      border-radius: 8px;
      margin: 25px 0;
      color: #0c4a6e;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box {
        background: #164e63;
        color: #bae6fd;
      }
    }
    
    .info-box h3 {
      color: #075985;
      margin-bottom: 10px;
    }
    
    @media (prefers-color-scheme: dark) {
      .info-box h3 {
        color: #67e8f9;
      }
    }
    
    code {
      background: #1e293b;
      color: #e2e8f0;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📢 aria-live Regions</h1>
    <p class="subtitle">Announcing dynamic content changes to screen readers</p>
    
    <div class="demo-section">
      <h2>🔔 aria-live="polite"</h2>
      <p style="color: #0c4a6e; margin-bottom: 15px;">
        Announces changes when the user is idle (waits for pause)
      </p>
      
      <button onclick="showPoliteMessage()">
        Save Changes
      </button>
      
      <div id="polite-region" aria-live="polite" style="min-height: 50px;"></div>
    </div>
    
    <div class="demo-section">
      <h2>🚨 aria-live="assertive"</h2>
      <p style="color: #0c4a6e; margin-bottom: 15px;">
        Immediately interrupts to announce (use sparingly!)
      </p>
      
      <button onclick="showAssertiveMessage()">
        Delete Account
      </button>
      
      <div id="assertive-region" aria-live="assertive" style="min-height: 50px;"></div>
    </div>
    
    <div class="info-box">
      <h3>💡 Common Use Cases</h3>
      <ul style="margin-left: 20px; line-height: 1.8;">
        <li><code>polite</code>: Form validation messages, status updates, notifications</li>
        <li><code>assertive</code>: Critical errors, time-sensitive alerts, important warnings</li>
        <li><code>off</code>: Don't announce (default)</li>
      </ul>
    </div>
  </div>
  
  <script>
    function showPoliteMessage() {
      const region = document.getElementById('polite-region');
      region.innerHTML = '<div class="status-message success-message">✅ Changes saved successfully!</div>';
      setTimeout(() => {
        region.innerHTML = '';
      }, 4000);
    }
    
    function showAssertiveMessage() {
      const region = document.getElementById('assertive-region');
      region.innerHTML = '<div class="status-message error-message">⚠️ Warning: This action cannot be undone!</div>';
      setTimeout(() => {
        region.innerHTML = '';
      }, 4000);
    }
  </script>
</body>
</html>`;

  return (
    <div className="space-y-8">
      <PageHeader
        icon={Settings}
        category="HTML · ARIA"
        title="ARIA Properties"
        description="Learn how to use ARIA properties to enhance accessibility and provide better context to assistive technologies"
        colorTheme="purple"
      />

      {/* What are ARIA Properties */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            What are ARIA Properties?
          </CardTitle>
          <CardDescription>
            Understanding how ARIA properties enhance accessibility
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">ARIA Properties</strong> are attributes that provide additional 
            information about elements to assistive technologies like screen readers. They describe the purpose, 
            state, or relationships of elements that might not be obvious from the HTML alone.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Tag className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Labeling</h4>
              <p className="text-sm text-muted-foreground">
                aria-label, aria-labelledby, aria-describedby provide names and descriptions
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Eye className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Visibility</h4>
              <p className="text-sm text-muted-foreground">
                aria-hidden controls what screen readers can see and announce
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <Layers className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">Live Regions</h4>
              <p className="text-sm text-muted-foreground">
                aria-live announces dynamic content changes automatically
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
              <h4 className="font-semibold mb-2">States</h4>
              <p className="text-sm text-muted-foreground">
                Properties that communicate current state to users
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* aria-label & aria-labelledby */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <Tag className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            1. Labeling Elements
          </CardTitle>
          <CardDescription>
            aria-label and aria-labelledby provide accessible names
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaLabelExample}
            title="aria-label vs aria-labelledby"
            colorTheme="purple"
            onOpenPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">🎯 When to Use Each:</h4>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>aria-label</strong>: For icon-only buttons, close buttons, or when no visible label exists</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span><strong>aria-labelledby</strong>: When you want to use existing visible text as the label</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Don't use both on the same element - aria-labelledby takes precedence</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* aria-describedby */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            2. Adding Descriptions
          </CardTitle>
          <CardDescription>
            aria-describedby provides additional context and help text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaDescribedByExample}
            title="Form Fields with aria-describedby"
            colorTheme="green"
            onOpenPlayground={onOpenWebPlayground}
          />
          
          <Alert className="mt-4 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
            <Info className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-900 dark:text-green-100">Perfect for Forms</AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200 text-sm">
              Use <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">aria-describedby</code> to link 
              form inputs with their help text, instructions, or error messages. Screen readers will announce the 
              description after the label, giving users complete context.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* aria-hidden */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <Eye className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            3. Hiding Decorative Content
          </CardTitle>
          <CardDescription>
            aria-hidden removes elements from the accessibility tree
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaHiddenExample}
            title="Using aria-hidden for Decorative Icons"
            colorTheme="red"
            onOpenPlayground={onOpenWebPlayground}
          />
          
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Important Warning</AlertTitle>
            <AlertDescription>
              <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                <li>Never use aria-hidden="true" on focusable elements (buttons, links, inputs)</li>
                <li>Don't hide important content that sighted users can see</li>
                <li>Only use for purely decorative elements that don't add meaning</li>
                <li>Remember: aria-hidden doesn't affect visual display, only screen readers</li>
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* aria-live */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              <Sparkles className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            4. Live Regions (Dynamic Content)
          </CardTitle>
          <CardDescription>
            aria-live announces content changes automatically
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            html={ariaLiveExample}
            title="aria-live: polite vs assertive"
            colorTheme="cyan"
            onOpenPlayground={onOpenWebPlayground}
          />
          
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
              <h4 className="font-semibold mb-2">📢 aria-live="polite"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Waits for user to pause before announcing
              </p>
              <p className="text-xs text-muted-foreground">
                Use for: Status messages, form validation, progress updates, notifications
              </p>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
              <h4 className="font-semibold mb-2">🚨 aria-live="assertive"</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Immediately interrupts to announce
              </p>
              <p className="text-xs text-muted-foreground">
                Use for: Critical errors, urgent alerts, time-sensitive warnings (use sparingly!)
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Common ARIA Properties Reference */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Reference: Common ARIA Properties</CardTitle>
          <CardDescription>
            Essential properties you'll use most often
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-label="string"</code>
              <p className="text-sm text-muted-foreground mt-1">Provides an accessible name when no visible label exists</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-labelledby="id"</code>
              <p className="text-sm text-muted-foreground mt-1">References another element's text as the label</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-describedby="id"</code>
              <p className="text-sm text-muted-foreground mt-1">Links to additional descriptive text (help text, errors)</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-hidden="true"</code>
              <p className="text-sm text-muted-foreground mt-1">Hides decorative elements from screen readers</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-live="polite|assertive"</code>
              <p className="text-sm text-muted-foreground mt-1">Announces dynamic content changes automatically</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-required="true"</code>
              <p className="text-sm text-muted-foreground mt-1">Indicates a form field must be filled out</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-invalid="true"</code>
              <p className="text-sm text-muted-foreground mt-1">Marks form field as having invalid value</p>
            </div>
            
            <div className="p-3 rounded-lg bg-muted border">
              <code className="text-sm font-mono text-purple-600 dark:text-purple-400">aria-expanded="true|false"</code>
              <p className="text-sm text-muted-foreground mt-1">Shows if a collapsible element is open or closed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Alert>
        <CheckCircle className="h-4 w-4" />
        <AlertTitle>ARIA Properties Best Practices</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Use semantic HTML first</strong> - ARIA should enhance, not replace proper HTML</li>
            <li><strong>Be descriptive</strong> - Labels should be clear and meaningful</li>
            <li><strong>Keep it simple</strong> - Don't over-complicate with too many ARIA attributes</li>
            <li><strong>Test with screen readers</strong> - Always verify with actual assistive technology</li>
            <li><strong>Update dynamically</strong> - Change ARIA properties when state changes</li>
            <li><strong>Don't duplicate</strong> - If HTML provides semantics, don't add redundant ARIA</li>
            <li><strong>Reference correctly</strong> - Ensure IDs in aria-labelledby and aria-describedby exist</li>
          </ul>
        </AlertDescription>
      </Alert>

      {/* Browser Support */}
      <Alert className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-900 dark:text-green-100">Excellent Browser Support</AlertTitle>
        <AlertDescription className="text-green-800 dark:text-green-200">
          All major ARIA properties are supported in modern browsers and screen readers (NVDA, JAWS, VoiceOver, TalkBack). 
          These are essential for creating accessible web applications and are part of the WAI-ARIA specification.
        </AlertDescription>
      </Alert>
    </div>
  );
}
