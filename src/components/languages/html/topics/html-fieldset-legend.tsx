'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Layers, Lightbulb, CheckCircle2, Code, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlFieldsetLegendsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicFieldsetExample = {
  html: `<h2>Fieldset & Legend</h2>
<form class="form-container">
  <!-- Fieldset with Legend -->
  <fieldset class="form-fieldset">
    <legend>Personal Information</legend>
    
    <div class="form-group">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" placeholder="John">
    </div>

    <div class="form-group">
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" placeholder="Doe">
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="john@example.com">
    </div>
  </fieldset>

  <!-- Another Fieldset -->
  <fieldset class="form-fieldset">
    <legend>Contact Preferences</legend>
    
    <div class="form-group">
      <label>
        <input type="checkbox" name="newsletter"> Subscribe to newsletter
      </label>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" name="notifications"> Receive notifications
      </label>
    </div>

    <div class="form-group">
      <label>
        <input type="checkbox" name="promotions"> Get promotional offers
      </label>
    </div>
  </fieldset>

  <button type="submit" class="btn">Submit</button>
</form>`,
  css: `body {
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  margin: 0;
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

.form-fieldset {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .form-fieldset {
    border-color: #334155;
  }
}

legend {
  padding: 0 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  legend {
    color: #60a5fa;
  }
}

.form-group {
  margin-bottom: 1rem;
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
input[type="email"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #3b82f6;
}

input[type="checkbox"] {
  margin-right: 0.5rem;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  input[type="text"],
  input[type="email"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
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

const advancedFieldsetExample = {
  html: `<h2>Advanced Fieldset Patterns</h2>
<form class="form-container">
  <!-- Disabled Fieldset -->
  <fieldset class="form-fieldset" disabled>
    <legend>Disabled Section (Read-only)</legend>
    <div class="form-group">
      <label for="field1">This field is disabled:</label>
      <input type="text" id="field1" placeholder="Cannot interact">
    </div>
    <div class="form-group">
      <label for="field2">This too:</label>
      <input type="text" id="field2" placeholder="Cannot interact">
    </div>
  </fieldset>

  <!-- Nested Fieldsets -->
  <fieldset class="form-fieldset">
    <legend>Address Information</legend>
    
    <div class="form-group">
      <label for="street">Street Address:</label>
      <input type="text" id="street" placeholder="123 Main St">
    </div>

    <fieldset class="form-fieldset nested">
      <legend>City/State/Zip</legend>
      <div class="group-inline">
        <div class="form-group">
          <label for="city">City:</label>
          <input type="text" id="city" placeholder="New York">
        </div>
        <div class="form-group">
          <label for="state">State:</label>
          <input type="text" id="state" placeholder="NY" maxlength="2">
        </div>
        <div class="form-group">
          <label for="zip">ZIP:</label>
          <input type="text" id="zip" placeholder="10001">
        </div>
      </div>
    </fieldset>
  </fieldset>

  <!-- Fieldset with Radio Buttons -->
  <fieldset class="form-fieldset">
    <legend>Shipping Method</legend>
    <div class="form-group">
      <label>
        <input type="radio" name="shipping" value="standard"> Standard (5-7 days)
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="radio" name="shipping" value="express"> Express (2-3 days)
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="radio" name="shipping" value="overnight"> Overnight
      </label>
    </div>
  </fieldset>

  <button type="submit" class="btn">Continue</button>
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

.form-fieldset {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-fieldset.nested {
  margin-top: 1rem;
  border-color: #cbd5e1;
}

@media (prefers-color-scheme: dark) {
  .form-fieldset {
    border-color: #334155;
  }
  
  .form-fieldset.nested {
    border-color: #475569;
  }
}

.form-fieldset:disabled {
  opacity: 0.6;
  background: #f9fafb;
}

@media (prefers-color-scheme: dark) {
  .form-fieldset:disabled {
    background: #0f172a;
  }
}

legend {
  padding: 0 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  legend {
    color: #60a5fa;
  }
}

.form-fieldset.nested legend {
  font-size: 0.95rem;
  color: #6b7280;
}

@media (prefers-color-scheme: dark) {
  .form-fieldset.nested legend {
    color: #9ca3af;
  }
}

.form-group {
  margin-bottom: 1rem;
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

input[type="text"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
}

input[type="text"]:focus {
  outline: none;
  border-color: #3b82f6;
}

input[type="radio"],
input[type="checkbox"] {
  margin-right: 0.5rem;
  cursor: pointer;
}

.group-inline {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
}

@media (prefers-color-scheme: dark) {
  input[type="text"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
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

const semanticGroupingExample = {
  html: `<h2>Semantic Form Grouping</h2>
<form class="form-container">
  <!-- Login Form -->
  <fieldset class="form-fieldset">
    <legend>Login Details</legend>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
  </fieldset>

  <!-- Preferences -->
  <fieldset class="form-fieldset">
    <legend>Account Preferences</legend>
    <div class="form-group">
      <label>
        <input type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" name="two-factor"> Enable 2-factor authentication
      </label>
    </div>
  </fieldset>

  <!-- Notifications -->
  <fieldset class="form-fieldset">
    <legend>Notification Settings</legend>
    <div class="form-group">
      <label>
        <input type="checkbox" name="email-notif" checked> Email notifications
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" name="sms-notif"> SMS notifications
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" name="push-notif"> Push notifications
      </label>
    </div>
  </fieldset>

  <div class="button-group">
    <button type="submit" class="btn btn-primary">Sign In</button>
    <button type="reset" class="btn btn-secondary">Clear Form</button>
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

.form-fieldset {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

@media (prefers-color-scheme: dark) {
  .form-fieldset {
    border-color: #334155;
  }
}

legend {
  padding: 0 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  legend {
    color: #60a5fa;
  }
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: flex;
  align-items: center;
  font-weight: 500;
  color: #1e293b;
  cursor: pointer;
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

input[type="checkbox"] {
  margin-right: 0.75rem;
  cursor: pointer;
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
  gap: 1rem;
}

.btn {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #e5e7eb;
  color: #1f2937;
}

.btn-secondary:hover {
  background: #d1d5db;
}

@media (prefers-color-scheme: dark) {
  .btn-primary {
    background: #1e40af;
  }
  
  .btn-primary:hover {
    background: #1e3a8a;
  }
  
  .btn-secondary {
    background: #374151;
    color: #f1f5f9;
  }
  
  .btn-secondary:hover {
    background: #4b5563;
  }
}`,
  js: ``,
};

export default function HtmlFieldsetLegends({ onOpenWebPlayground }: HtmlFieldsetLegendsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Layers}
        category="HTML · Forms"
        title="Fieldset & Legend"
        description="Group and organize related form fields semantically"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Layers className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Fieldset & Legend
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Semantic grouping of related form fields
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;fieldset&gt;</code> element groups
            logically related form fields together, and <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;legend&gt;</code> provides
            a caption for the group. This improves accessibility and user understanding.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Benefits</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Semantic grouping</li>
                <li>✓ Improved accessibility</li>
                <li>✓ Better visual organization</li>
                <li>✓ Screen reader support</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Common Uses</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Address information</li>
                <li>✓ Contact preferences</li>
                <li>✓ Billing details</li>
                <li>✓ Shipping options</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              You can disable an entire fieldset with the disabled attribute—all form controls within it become disabled!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Fieldset */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Layers className="w-7 h-7" />
            Basic Fieldset & Legend
          </CardTitle>
          <CardDescription className="text-base">
            Grouping related form fields
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            A fieldset wraps related fields together with a legend that describes the group. This creates clear visual and semantic sections in your form.
          </p>

          <FrontendCodePreview
            title="Basic Fieldset & Legend"
            description="Two fieldsets with personal info and preferences"
            html={basicFieldsetExample.html}
            css={basicFieldsetExample.css}
            js={basicFieldsetExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Advanced Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Advanced Fieldset Patterns
          </CardTitle>
          <CardDescription className="text-base">
            Disabled fieldsets, nested groups, and complex layouts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Fieldsets support advanced patterns like disabling entire sections, nesting groups, and creating complex form layouts.
          </p>

          <FrontendCodePreview
            title="Advanced Fieldset Patterns"
            description="Disabled fieldsets, nested groups, and inline layouts"
            html={advancedFieldsetExample.html}
            css={advancedFieldsetExample.css}
            js={advancedFieldsetExample.js}
            colorTheme="blue"
            previewHeight="650px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { pattern: 'Disabled Fieldset', desc: 'All controls in fieldset become disabled' },
              { pattern: 'Nested Fieldsets', desc: 'Create sub-groups within groups' },
              { pattern: 'Inline Layout', desc: 'Use CSS grid for horizontal grouping' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">{item.pattern}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Semantic Grouping */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Code className="w-7 h-7" />
            Semantic Form Organization
          </CardTitle>
          <CardDescription className="text-base">
            Real-world form structure examples
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Organize complex forms using multiple fieldsets to create clear, logical sections that guide users through the form.
          </p>

          <FrontendCodePreview
            title="Semantic Form Organization"
            description="Login form with grouped preferences and settings"
            html={semanticGroupingExample.html}
            css={semanticGroupingExample.css}
            js={semanticGroupingExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Accessibility & Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckCircle2 className="w-7 h-7" />
            Best Practices & Accessibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400 mb-3">✅ Do This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Group related fields</li>
                <li>✓ Always use legend</li>
                <li>✓ Clear legend text</li>
                <li>✓ Keep groups focused</li>
                <li>✓ Use semantic HTML</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Too many fieldsets</li>
                <li>✗ Missing legend element</li>
                <li>✗ Vague legend text</li>
                <li>✗ Unrelated fields grouped</li>
                <li>✗ Hiding fieldset with CSS</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Impact</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Screen readers announce fieldsets and legends, helping users understand form structure. Always include a legend—it's required for proper accessibility!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

