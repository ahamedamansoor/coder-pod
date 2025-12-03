'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Settings, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlFormStructureProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const labelExample = {
  html: `<h2>Labels & Form Structure</h2>
<form class="form-container">
  <!-- Implicit Label Association -->
  <div class="form-group">
    <label>
      <span>Check this option:</span>
      <input type="checkbox">
    </label>
  </div>

  <!-- Explicit Label Association -->
  <div class="form-group">
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required>
    <small>We'll never share your email</small>
  </div>

  <!-- Textarea -->
  <div class="form-group">
    <label for="message">Your Message:</label>
    <textarea id="message" name="message" rows="5" placeholder="Enter your message..." required></textarea>
    <small>Max 500 characters</small>
  </div>

  <!-- Fieldset & Legend -->
  <fieldset class="fieldset-group">
    <legend>Shipping Address</legend>
    <div class="form-group">
      <label for="address">Street Address:</label>
      <input type="text" id="address" name="address" required>
    </div>
    <div class="form-group">
      <label for="city">City:</label>
      <input type="text" id="city" name="city" required>
    </div>
    <div class="form-group">
      <label for="zip">ZIP Code:</label>
      <input type="text" id="zip" name="zip" required>
    </div>
  </fieldset>

  <button type="submit" class="btn">Submit</button>
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
  max-width: 600px;
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
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #f1f5f9;
  }
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  font-family: inherit;
}

input[type="text"]:focus,
input[type="email"]:focus,
textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (prefers-color-scheme: dark) {
  input[type="text"],
  input[type="email"],
  textarea {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

textarea {
  resize: vertical;
  min-height: 120px;
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

.fieldset-group {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .fieldset-group {
    border-color: #334155;
  }
}

legend {
  font-weight: 600;
  font-size: 1.1rem;
  color: #3b82f6;
  padding: 0 0.5rem;
}

@media (prefers-color-scheme: dark) {
  legend {
    color: #60a5fa;
  }
}

.fieldset-group .form-group {
  margin-bottom: 1rem;
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

const formAttributesExample = {
  html: `<h2>Form Attributes</h2>
<form class="form-container" id="myForm" action="/submit" method="POST" accept-charset="UTF-8" novalidate>
  <div class="form-group">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    <small>Form has novalidate attribute (browser validation disabled)</small>
  </div>

  <div class="form-group">
    <label for="website">Website:</label>
    <input type="url" id="website" name="website">
    <small>Try entering invalid URL (validation disabled)</small>
  </div>

  <div class="form-group">
    <label for="comments">Comments:</label>
    <textarea id="comments" name="comments" form="myForm"></textarea>
    <small>This textarea is associated with form via 'form' attribute</small>
  </div>

  <button type="submit" class="btn">Submit</button>
  <button type="reset" class="btn btn-reset">Reset</button>
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
  max-width: 600px;
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
input[type="url"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  font-family: inherit;
}

input[type="text"]:focus,
input[type="url"]:focus,
textarea:focus {
  outline: none;
  border-color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  input[type="text"],
  input[type="url"],
  textarea {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

textarea {
  resize: vertical;
  min-height: 100px;
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
  padding: 0.75rem 1.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-right: 1rem;
}

.btn:hover {
  background: #2563eb;
}

.btn-reset {
  background: #6b7280;
}

.btn-reset:hover {
  background: #4b5563;
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

export default function HtmlFormStructure({ onOpenWebPlayground }: HtmlFormStructureProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Settings}
        category="HTML · Forms"
        title="Form Structure & Attributes"
        description="Learn labels, fieldsets, textareas, and form attributes"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Settings className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Form Structure & Attributes
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Build accessible and well-organized forms
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Proper form structure uses labels, fieldsets, and appropriate HTML attributes for better accessibility and semantics.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Key Elements</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              <strong>&lt;label&gt;:</strong> Associates with inputs. <strong>&lt;fieldset&gt;:</strong> Groups related fields. <strong>&lt;legend&gt;:</strong> Fieldset title.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Labels, Fieldsets, Textarea */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Labels, Fieldsets & Textarea
          </CardTitle>
          <CardDescription className="text-base">
            Organizing forms semantically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Form Structure"
            description="Labels, fieldsets, legend, and textarea"
            html={labelExample.html}
            css={labelExample.css}
            js={labelExample.js}
            colorTheme="blue"
            previewHeight="650px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { element: '&lt;label&gt;', desc: 'Associate with input via "for" and "id"' },
              { element: '&lt;fieldset&gt;', desc: 'Group related form fields' },
              { element: '&lt;legend&gt;', desc: 'Title for fieldset' },
              { element: '&lt;textarea&gt;', desc: 'Multi-line text input' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                <h4 className="font-mono font-semibold text-green-600 dark:text-green-400 mb-1">{item.element}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Form Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Form Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Control form behavior and validation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Form Attributes"
            description="Action, method, validation, and more"
            html={formAttributesExample.html}
            css={formAttributesExample.css}
            js={formAttributesExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { attr: 'action', desc: 'URL to submit form data' },
              { attr: 'method', desc: 'GET or POST' },
              { attr: 'enctype', desc: 'Data encoding (use multipart for files)' },
              { attr: 'novalidate', desc: 'Disable browser validation' },
              { attr: 'accept-charset', desc: 'Accepted character encodings' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-mono font-semibold text-purple-600 dark:text-purple-400 mb-1">{item.attr}</h4>
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
                <li>✓ Always use labels</li>
                <li>✓ Use fieldset for groups</li>
                <li>✓ Associate labels with inputs</li>
                <li>✓ Proper form method</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ No labels</li>
                <li>✗ Unorganized fields</li>
                <li>✗ Placeholder as label</li>
                <li>✗ Wrong form action/method</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

