'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { MousePointerClick, Lightbulb, CheckCircle2, Code, Zap } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlButtonsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const buttonExample = {
  html: `<h2>Button Types & Attributes</h2>
<form class="form-container">
  <div class="button-group">
    <h3>Button Types</h3>
    <button type="submit" class="btn btn-submit">Submit Form</button>
    <button type="reset" class="btn btn-reset">Reset Form</button>
    <button type="button" class="btn btn-action">Click Me (JavaScript)</button>
  </div>

  <div class="input-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
  </div>

  <div class="input-group">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
  </div>

  <div class="button-group">
    <h3>Button Attributes</h3>
    <button type="submit" disabled class="btn btn-disabled">Disabled Submit</button>
    <button type="button" class="btn btn-action" autofocus>Autofocus Button</button>
    <button type="submit" formaction="/custom-action" class="btn btn-submit">Custom Action</button>
  </div>
</form>`,
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

h3 {
  color: #3b82f6;
  font-size: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.input-group {
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
input[type="password"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  input[type="text"],
  input[type="password"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.button-group h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
}

.btn-submit {
  background: #3b82f6;
  color: white;
}

.btn-submit:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-2px);
}

.btn-reset {
  background: #6b7280;
  color: white;
}

.btn-reset:hover {
  background: #4b5563;
}

.btn-action {
  background: #10b981;
  color: white;
}

.btn-action:hover {
  background: #059669;
}

.btn-disabled {
  background: #d1d5db;
  color: #9ca3af;
  cursor: not-allowed;
  opacity: 0.6;
}

.btn-disabled:hover {
  background: #d1d5db;
}

@media (prefers-color-scheme: dark) {
  .btn-submit {
    background: #1e40af;
  }
  
  .btn-submit:hover:not(:disabled) {
    background: #1e3a8a;
  }
}`,
  js: `document.querySelector('.btn-action').addEventListener('click', function(e) {
  if (this.textContent === 'Click Me (JavaScript)') {
    alert('Button clicked!');
  }
});`,
};

export default function HtmlButtons({ onOpenWebPlayground }: HtmlButtonsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={MousePointerClick}
        category="HTML · Forms"
        title="Buttons"
        description="Learn to create and use form buttons"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <MousePointerClick className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Form Buttons
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Different button types for form interactions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Buttons trigger actions in forms. The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">type</code> attribute
            determines the button's behavior: submit, reset, or custom button.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Button Types</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              <strong>submit:</strong> Submits form. <strong>reset:</strong> Clears form. <strong>button:</strong> Custom action.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Button Examples */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <MousePointerClick className="w-7 h-7" />
            Button Examples
          </CardTitle>
          <CardDescription className="text-base">
            Different button types and attributes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Form Buttons"
            description="Submit, reset, and custom buttons"
            html={buttonExample.html}
            css={buttonExample.css}
            js={buttonExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { attr: 'type="submit"', desc: 'Submits the form data' },
              { attr: 'type="reset"', desc: 'Clears all form fields' },
              { attr: 'type="button"', desc: 'No default action (use JS)' },
              { attr: 'disabled', desc: 'Button is disabled' },
              { attr: 'autofocus', desc: 'Focus on page load' },
              { attr: 'formaction', desc: 'Override form action' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="font-mono font-semibold text-blue-600 dark:text-blue-400 mb-1">{item.attr}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
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
                <li>✓ Use proper button type</li>
                <li>✓ Clear button labels</li>
                <li>✓ Disable while processing</li>
                <li>✓ Provide visual feedback</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Unclear button purpose</li>
                <li>✗ Multiple submit buttons</li>
                <li>✗ No disabled state</li>
                <li>✗ Confusing color schemes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
