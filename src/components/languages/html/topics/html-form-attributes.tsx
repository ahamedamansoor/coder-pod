'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Send, Key, Vote, FileInput, Shield, Lightbulb, Play, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlFormAttributesProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

const playgroundHTML = `<form action="#" method="get" style="max-width:620px;margin:auto;font-family:system-ui;">
  <fieldset><legend>Login Form</legend>
    <p><label for="username">Username:</label><br><input type="text" id="username" name="username" required minlength="4" autofocus placeholder="user123"></p>
    <p><label for="password">Password:</label><br><input type="password" id="password" name="password" required pattern=".{8,}" title="Min 8 chars"></p>
    <p><label for="age">Age:</label><br><input type="number" id="age" name="age" min="18" max="120" value="25"></p>
    <p><label for="profile">Profile (readonly):</label><br><input type="text" id="profile" name="profile" value="user_profile_123" readonly></p>
    <p><label for="legacy">Legacy ID (disabled):</label><br><input type="text" id="legacy" name="legacy" value="old-id-001" disabled></p>
  </fieldset>
  <input type="submit" value="Submit" style="margin-top:1rem;">
</form>`;
const playgroundCSS = `fieldset{border:1px solid #ccc;border-radius:6px;padding:1rem;margin-bottom:1rem;}legend{font-weight:600;}input{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;margin-top:4px;}input:read-only{background:#eee;}input:disabled{background:#f9f9f9;cursor:not-allowed;}`;

export default function HtmlFormAttributes({ onOpenWebPlayground }: HtmlFormAttributesProps) {
  const formAttrs = [
    { icon: Send, attr: 'action', desc: 'Submission endpoint URL.' },
    { icon: Key, attr: 'method', desc: 'HTTP verb: GET (query) or POST (body).' },
    { icon: Vote, attr: 'target', desc: 'Where response loads (_blank new tab).' },
    { icon: FileInput, attr: 'enctype', desc: 'Encoding type for form data (multipart/form-data for files).' },
    { icon: Shield, attr: 'novalidate', desc: 'Skip built-in client validation.' },
  ];
  const inputAttrs = [
    { attr: 'name', desc: 'Key used when sending value.' },
    { attr: 'id', desc: 'Identifier; connects label via for attribute.' },
    { attr: 'value', desc: 'Initial/current value of control.' },
    { attr: 'placeholder', desc: 'Hint text displayed when empty.' },
    { attr: 'required', desc: 'Must be filled before submit.' },
    { attr: 'disabled', desc: 'Unusable & skipped on submit.' },
    { attr: 'readonly', desc: 'Visible but not editable.' },
    { attr: 'autofocus', desc: 'Gets focus on page load.' },
    { attr: 'pattern', desc: 'Regex constraint applied on submit.' },
    { attr: 'min / max', desc: 'Numeric or date bounds.' },
  ];

  return (
    <div className="space-y-10 pb-16">
      <PageHeader icon={File} category="HTML Basics" title="Form Attributes" description="Configuring form submission and input behavior" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Form-Level Attributes</CardTitle><CardDescription>Govern submission mechanics & destination.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {formAttrs.map(a => <div key={a.attr} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><a.icon className="w-4 h-4 text-primary" />{a.attr}</h3><p className="text-xs text-muted-foreground">{a.desc}</p></div>)}
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Input-Level Attributes</CardTitle><CardDescription>Validation & usability for individual controls.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {inputAttrs.map(a => <div key={a.attr} className="bg-muted p-3 rounded border"><code className="font-mono bg-background px-1 rounded font-semibold">{a.attr}</code><p className="mt-1 text-muted-foreground">{a.desc}</p></div>)}
        </CardContent>
      </Card>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Tips</CardTitle></CardHeader>
        <CardContent className="text-xs space-y-1">
          <ul className="list-disc list-inside space-y-1">
            <li>Use POST for sensitive data.</li>
            <li>Combine pattern + title for helpful error messages.</li>
            <li>Prefer native validation before JS custom logic.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Form Attributes in Action */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <Settings className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Form Attributes in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          See how form and input attributes control behavior, validation, and submission
        </p>

        {/* Example 1: Form Action & Method */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="1. Form Action & Method"
              description="Control where and how form data is submitted"
            html={`<form action="/api/submit" method="POST" class="demo-form">
  <div class="form-info">
    <p><strong>action:</strong> <code>/api/submit</code> - Where data is sent</p>
    <p><strong>method:</strong> <code>POST</code> - HTTP method (GET/POST)</p>
  </div>
  <div class="input-group">
    <label for="username1">Username</label>
    <input type="text" id="username1" name="username" placeholder="Enter username" required>
  </div>
  <div class="input-group">
    <label for="email1">Email</label>
    <input type="email" id="email1" name="email" placeholder="you@example.com" required>
  </div>
  <button type="submit" class="btn-primary">Submit via POST</button>
</form>

<p class="note">📤 <code>action</code> defines destination, <code>method</code> specifies HTTP verb (GET/POST)</p>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .demo-form {
  background: #1e293b;
}

.form-info {
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

html.dark .form-info {
  background: #1e3a8a;
}

.form-info p {
  margin: 0.5rem 0;
  font-size: 0.9rem;
  color: #1e3a8a;
}

html.dark .form-info p {
  color: #bfdbfe;
}

.form-info code {
  background: #dbeafe;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #1e3a8a;
}

html.dark .form-info code {
  background: #1e40af;
  color: #bfdbfe;
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark .input-group label {
  color: #cbd5e1;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(59, 130, 246, 0.4);
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #dbeafe;
  color: #1e40af;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #1e3a8a;
  color: #bfdbfe;
}

.note code {
  background: #bfdbfe;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

html.dark .note code {
  background: #1e40af;
}`}
              colorTheme="blue"
              icon={Send}
              previewHeight="450px"
            />
          </CardContent>
        </Card>

        {/* Example 2: Required & Validation */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="2. Required & Validation Attributes"
              description="Enforce input requirements with built-in validation"
              html={`<form class="demo-form">
  <div class="input-group">
    <label for="email-req">Email (required) *</label>
    <input type="email" id="email-req" name="email" required placeholder="you@example.com">
    <small>Attribute: <code>required</code> - Must be filled before submit</small>
  </div>
  
  <div class="input-group">
    <label for="password-min">Password (min 8 chars) *</label>
    <input type="password" id="password-min" name="password" required minlength="8" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022">
    <small>Attributes: <code>required minlength="8"</code></small>
  </div>
  
  <div class="input-group">
    <label for="age-range">Age (18-120) *</label>
    <input type="number" id="age-range" name="age" min="18" max="120" value="25" required>
    <small>Attributes: <code>min="18" max="120" required</code></small>
  </div>
  
  <button type="submit" class="btn-primary">Validate & Submit</button>
</form>

<p class="note">✅ Browser validates before submission, shows error messages</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .demo-form {
  background: #1e293b;
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark .input-group label {
  color: #cbd5e1;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

input:required:valid {
  border-color: #10b981;
}

input:required:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

html.dark small {
  color: #94a3b8;
}

small code {
  background: #f1f5f9;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #10b981;
}

html.dark small code {
  background: #334155;
  color: #34d399;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.3);
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #d1fae5;
  color: #065f46;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #064e3b;
  color: #a7f3d0;
}`}
              colorTheme="emerald"
              icon={Shield}
              previewHeight="500px"
            />
          </CardContent>
        </Card>

        {/* Example 3: Pattern Validation */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="3. Pattern Validation"
              description="Use regex patterns to enforce specific formats"
              html={`<form class="demo-form">
  <div class="input-group">
    <label for="phone-pattern">Phone (Format: 123-456-7890)</label>
    <input 
      type="tel" 
      id="phone-pattern" 
      name="phone" 
      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      placeholder="123-456-7890"
      title="Phone format: 123-456-7890"
    >
    <small>🔍 Pattern: <code>pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"</code></small>
  </div>
  
  <div class="input-group">
    <label for="zip-pattern">ZIP Code (5 digits)</label>
    <input 
      type="text" 
      id="zip-pattern" 
      name="zip" 
      pattern="[0-9]{5}"
      placeholder="12345"
      title="5-digit ZIP code"
      maxlength="5"
    >
    <small>🔍 Pattern: <code>pattern="[0-9]{5}" maxlength="5"</code></small>
  </div>
  
  <button type="submit" class="btn-primary">Submit with Pattern Check</button>
</form>

<p class="note">🔍 Combine <code>pattern</code> + <code>title</code> for helpful error messages</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .demo-form {
  background: #1e293b;
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark .input-group label {
  color: #cbd5e1;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

html.dark small {
  color: #94a3b8;
}

small code {
  background: #f3e8ff;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #7c3aed;
}

html.dark small code {
  background: #581c87;
  color: #e9d5ff;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(139, 92, 246, 0.3);
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #f3e8ff;
  color: #6b21a8;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #581c87;
  color: #e9d5ff;
}

.note code {
  background: #e9d5ff;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
}

html.dark .note code {
  background: #6b21a8;
}`}
              colorTheme="purple"
              icon={Key}
              previewHeight="450px"
            />
          </CardContent>
        </Card>

        {/* Example 4: Readonly & Disabled */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="4. Readonly & Disabled States"
              description="Control editability and submission behavior"
              html={`<form class="demo-form">
  <div class="input-group">
    <label for="readonly-field">User ID (readonly)</label>
    <input type="text" id="readonly-field" name="user_id" value="USER_12345" readonly>
    <small>🔒 <code>readonly</code> - Visible but not editable, value IS submitted</small>
  </div>
  
  <div class="input-group">
    <label for="disabled-field">Legacy System (disabled)</label>
    <input type="text" id="disabled-field" name="legacy" value="old-system-ref" disabled>
    <small>🚫 <code>disabled</code> - Grayed out, value NOT submitted</small>
  </div>
  
  <button type="submit" class="btn-primary">Submit (readonly will send, disabled won't)</button>
</form>

<p class="note">🔑 Readonly fields submit, disabled fields don't</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .demo-form {
  background: #1e293b;
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark .input-group label {
  color: #cbd5e1;
}

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark input {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:read-only {
  background: #f1f5f9;
  cursor: default;
}

html.dark input:read-only {
  background: #475569;
}

input:disabled {
  background: #f8fafc;
  color: #94a3b8;
  cursor: not-allowed;
  opacity: 0.6;
}

html.dark input:disabled {
  background: #1e293b;
  color: #64748b;
}

input:focus {
  outline: none;
  border-color: #f59e0b;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
}

small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

html.dark small {
  color: #94a3b8;
}

small code {
  background: #fef3c7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #d97706;
}

html.dark small code {
  background: #713f12;
  color: #fef3c7;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(245, 158, 11, 0.3);
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fef3c7;
  color: #78350f;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #713f12;
  color: #fef3c7;
}`}
              colorTheme="amber"
              icon={Shield}
              previewHeight="400px"
            />
          </CardContent>
        </Card>

        {/* Example 5: Placeholder & Autofocus */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="5. Placeholder & Autofocus"
              description="Enhance usability with hints and automatic focus"
              html={`<form class="demo-form">
  <div class="input-group">
    <label for="search-auto">Search (autofocused)</label>
    <input type="search" id="search-auto" name="search" autofocus placeholder="Search articles...">
    <small>🎯 <code>autofocus</code> - Gets focus on page load</small>
  </div>
  
  <div class="input-group">
    <label for="email-placeholder">Email</label>
    <input type="email" id="email-placeholder" name="email" placeholder="you@example.com">
    <small>💬 <code>placeholder</code> - Hint text shown when empty</small>
  </div>
  
  <div class="input-group">
    <label for="bio-placeholder">Bio</label>
    <textarea id="bio-placeholder" name="bio" rows="3" placeholder="Tell us about yourself..."></textarea>
    <small>💬 Works with textarea too!</small>
  </div>
  
  <button type="submit" class="btn-primary">Submit</button>
</form>

<p class="note">👁️ Autofocus improves UX but use sparingly (one per page)</p>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .demo-form {
  background: #1e293b;
}

.input-group {
  margin-bottom: 1.25rem;
}

.input-group label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.5rem;
}

html.dark .input-group label {
  color: #cbd5e1;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
  font-family: inherit;
}

html.dark input,
html.dark textarea {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

textarea {
  resize: vertical;
}

small {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #64748b;
}

html.dark small {
  color: #94a3b8;
}

small code {
  background: #fce7f3;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #9f1239;
}

html.dark small code {
  background: #831843;
  color: #fecdd3;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem;
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(236, 72, 153, 0.3);
}

.note {
  margin-top: 1.5rem;
  padding: 0.75rem;
  background: #fce7f3;
  color: #9f1239;
  border-radius: 6px;
  text-align: center;
}

html.dark .note {
  background: #831843;
  color: #fecdd3;
}`}
              colorTheme="pink"
              icon={Lightbulb}
              previewHeight="550px"
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Form Attributes Playground</CardTitle>
          <CardDescription>Experiment with form and input attributes in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Complete Form Attributes Playground"
            description="Explore action, method, validation, readonly, disabled, and pattern attributes with live examples"
            features={[
              'Form Submission',
              'Validation Rules',
              'Pattern Matching',
              'State Attributes'
            ]}
            buttonText="Open Form Attributes Playground"
            onLaunchPlayground={onOpenWebPlayground!}
            playgroundData={{
              html: playgroundHTML,
              css: playgroundCSS,
              js: ''
            }}
            colorTheme="blue"
          />
        </CardContent>
      </Card>
    </div>
  );
}

