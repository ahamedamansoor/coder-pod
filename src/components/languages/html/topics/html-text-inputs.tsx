'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  Type,
  Lightbulb,
  CheckCircle2,
  Code,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlTextInputsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicTextInputExample = {
  html: `<h2>Text Input Types</h2>

<div class="form-container">
  <div class="form-group">
    <label for="text-input">Basic Text</label>
    <input type="text" id="text-input" placeholder="Enter any text">
    <small>Accepts any text characters</small>
  </div>

  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" placeholder="••••••••">
    <small>Characters are masked</small>
  </div>

  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="user@example.com">
    <small>Browser validates email format</small>
  </div>

  <div class="form-group">
    <label for="url">Website URL</label>
    <input type="url" id="url" placeholder="https://example.com">
    <small>Must be a valid URL format</small>
  </div>

  <div class="form-group">
    <label for="tel">Telephone</label>
    <input type="tel" id="tel" placeholder="(555) 123-4567">
    <small>Phone number input (mobile shows dial pad)</small>
  </div>

  <div class="form-group">
    <label for="search">Search</label>
    <input type="search" id="search" placeholder="Search something...">
    <small>Optimized for search input</small>
  </div>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .form-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #f1f5f9;
  }
}

input[type="text"],
input[type="password"],
input[type="email"],
input[type="url"],
input[type="tel"],
input[type="search"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  transition: border-color 0.3s;
}

input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="tel"]:focus,
input[type="search"]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (prefers-color-scheme: dark) {
  input[type="text"],
  input[type="password"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="search"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
}

@media (prefers-color-scheme: dark) {
  small {
    color: #9ca3af;
  }
}`,
  js: ``,
};

const attributesExample = {
  html: `<h2>Text Input Attributes</h2>

<div class="form-container">
  <div class="form-group">
    <label for="required-field">Required Field</label>
    <input type="text" id="required-field" placeholder="This field is required" required>
    <small>Try submitting without entering text</small>
  </div>

  <div class="form-group">
    <label for="placeholder">Placeholder Text</label>
    <input type="text" id="placeholder" placeholder="This text disappears when you type">
    <small>Shows helpful hint inside the field</small>
  </div>

  <div class="form-group">
    <label for="maxlength">Max Length (20 chars)</label>
    <input type="text" id="maxlength" placeholder="Type something..." maxlength="20">
    <small>Cannot exceed 20 characters</small>
  </div>

  <div class="form-group">
    <label for="minlength">Min Length (5 chars)</label>
    <input type="text" id="minlength" placeholder="At least 5 chars..." minlength="5">
    <small>Must be at least 5 characters</small>
  </div>

  <div class="form-group">
    <label for="readonly">Read-only Field</label>
    <input type="text" id="readonly" value="Cannot edit this" readonly>
    <small>User cannot modify this value</small>
  </div>

  <div class="form-group">
    <label for="disabled">Disabled Field</label>
    <input type="text" id="disabled" placeholder="Cannot interact" disabled>
    <small>Field is disabled and grayed out</small>
  </div>

  <button type="submit" class="btn">Submit</button>
</div>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  }
}

h2 {
  color: #1e293b;
  text-align: center;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .form-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #1e293b;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #f1f5f9;
  }
}

input[type="text"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  transition: all 0.3s;
}

input[type="text"]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

input[type="text"]:disabled,
input[type="text"][readonly] {
  background: #f3f4f6;
  cursor: not-allowed;
}

@media (prefers-color-scheme: dark) {
  input[type="text"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
  
  input[type="text"]:disabled,
  input[type="text"][readonly] {
    background: #0c2340;
  }
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #6b7280;
  font-size: 0.85rem;
}

@media (prefers-color-scheme: dark) {
  small {
    color: #9ca3af;
  }
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #2563eb;
}

@media (prefers-color-scheme: dark) {
  .btn {
    background: #1e40af;
  }
  
  .btn:hover {
    background: #1e3a8a;
  }
}`,
  js: ``,
};

export default function HtmlTextInputs({ onOpenWebPlayground }: HtmlTextInputsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Type}
        category="HTML · Forms"
        title="Text Inputs"
        description="Learn different text input types and attributes"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Type className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Text Input Types
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Various text input fields for different purposes
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            HTML provides different text input types optimized for specific data entry. Each type offers unique browser features
            like validation, mobile keyboard, and security.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Browser Benefits</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Using correct input types provides built-in validation, appropriate keyboards on mobile, and better accessibility.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Text Input Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Type className="w-7 h-7" />
            Input Types
          </CardTitle>
          <CardDescription className="text-base">
            Different text input types for specific data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Text Input Types"
            description="Various text input types with different behaviors"
            html={basicTextInputExample.html}
            css={basicTextInputExample.css}
            js={basicTextInputExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Input Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Text Input Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Control text input behavior and validation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-3 mb-6">
            {[
              { attr: 'placeholder', desc: 'Hint text inside the field' },
              { attr: 'required', desc: 'Field must be filled before submit' },
              { attr: 'maxlength', desc: 'Maximum number of characters' },
              { attr: 'minlength', desc: 'Minimum number of characters' },
              { attr: 'readonly', desc: 'User cannot edit but value is submitted' },
              { attr: 'disabled', desc: 'Field is disabled and value not submitted' },
              { attr: 'autocomplete', desc: 'Enable/disable browser autocomplete' },
              { attr: 'pattern', desc: 'Regex pattern for validation' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700"
              >
                <h4 className="font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {item.attr}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            title="Text Input Attributes"
            description="Demonstration of various text input attributes"
            html={attributesExample.html}
            css={attributesExample.css}
            js={attributesExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Use correct input types</li>
                <li>✓ Add helpful placeholders</li>
                <li>✓ Use maxlength for validation</li>
                <li>✓ Add required on necessary fields</li>
                <li>✓ Provide clear labels</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Using type="text" for everything</li>
                <li>✗ Placeholder as label</li>
                <li>✗ No validation feedback</li>
                <li>✗ Unclear input purpose</li>
                <li>✗ Overly restrictive limits</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

