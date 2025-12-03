'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Zap, Lightbulb, CheckCircle2, ArrowRight, Settings } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlButtonsDetailedProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicButtonExample = {
  html: `<h2>Button Types</h2>
<form class="form-container">
  <!-- Submit Button -->
  <div class="button-group">
    <h3>Form Submission</h3>
    <button type="submit" class="btn btn-primary">Submit Form</button>
  </div>

  <!-- Reset Button -->
  <div class="button-group">
    <h3>Form Reset</h3>
    <button type="reset" class="btn btn-secondary">Reset Fields</button>
  </div>

  <!-- Regular Button -->
  <div class="button-group">
    <h3>Custom Action</h3>
    <button type="button" class="btn btn-accent">Click Me</button>
  </div>

  <!-- Test fields -->
  <div class="form-group">
    <label for="test-input">Test Input:</label>
    <input type="text" id="test-input" placeholder="Type something...">
  </div>
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

h3 {
  color: #3b82f6;
  font-size: 0.95rem;
  margin: 1rem 0 0.75rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.button-group {
  margin-bottom: 1.5rem;
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

@media (prefers-color-scheme: dark) {
  input[type="text"] {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  width: 100%;
}

.btn:active {
  transform: scale(0.98);
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-secondary {
  background: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background: #4b5563;
}

.btn-accent {
  background: #ec4899;
  color: white;
}

.btn-accent:hover {
  background: #db2777;
  transform: translateY(-2px);
}

@media (prefers-color-scheme: dark) {
  .btn-primary {
    background: #1e40af;
  }
  
  .btn-primary:hover {
    background: #1e3a8a;
  }
}`,
  js: `document.querySelector('.btn-accent').addEventListener('click', function() {
  alert('Button clicked! This is a custom action.');
});`,
};

const buttonAttributesExample = {
  html: `<h2>Button Attributes & States</h2>
<form class="form-container">
  <!-- Disabled Button -->
  <div class="button-group">
    <h3>Disabled State</h3>
    <button class="btn btn-primary" disabled>Disabled Button</button>
    <small>Cannot be clicked or interacted with</small>
  </div>

  <!-- Autofocus Button -->
  <div class="button-group">
    <h3>Autofocus</h3>
    <button type="button" class="btn btn-accent" autofocus>Focus on Load</button>
    <small>This button is focused when page loads</small>
  </div>

  <!-- Button with Value -->
  <div class="button-group">
    <h3>Button Value Submission</h3>
    <button type="submit" name="action" value="save" class="btn btn-primary">Save</button>
    <button type="submit" name="action" value="delete" class="btn btn-danger">Delete</button>
    <small>Different values sent to server</small>
  </div>

  <!-- Form Attribute -->
  <div class="button-group">
    <h3>Form Association</h3>
    <button form="external-form" type="submit" class="btn btn-primary">
      Submit External Form
    </button>
    <small>This button controls a different form</small>
  </div>

  <!-- Formaction & Formmethod -->
  <div class="button-group">
    <h3>Custom Form Handling</h3>
    <button type="submit" formaction="/custom-action" formmethod="POST" class="btn btn-primary">
      Custom Endpoint
    </button>
    <small>Overrides form's action and method</small>
  </div>
</form>

<!-- External form referenced by form attribute -->
<form id="external-form" style="display: none;">
  <input type="hidden" name="external-data" value="example">
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
  font-size: 0.95rem;
  margin: 1rem 0 0.75rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.button-group {
  margin-bottom: 1.5rem;
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
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.btn:active {
  transform: scale(0.98);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary {
  background: #3b82f6;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-2px);
}

.btn-accent {
  background: #ec4899;
  color: white;
}

.btn-accent:hover:not(:disabled) {
  background: #db2777;
  transform: translateY(-2px);
}

.btn-danger {
  background: #ef4444;
  color: white;
}

.btn-danger:hover {
  background: #dc2626;
  transform: translateY(-2px);
}

@media (prefers-color-scheme: dark) {
  .btn-primary {
    background: #1e40af;
  }
  
  .btn-primary:hover:not(:disabled) {
    background: #1e3a8a;
  }
}`,
  js: ``,
};

const buttonStylesExample = {
  html: `<h2>Button Styles & Variations</h2>
<div class="demo-container">
  <!-- Primary Buttons -->
  <section class="section">
    <h3>Primary Buttons</h3>
    <div class="button-showcase">
      <button class="btn primary">Primary</button>
      <button class="btn primary" disabled>Disabled</button>
      <button class="btn primary loading">Loading...</button>
    </div>
  </section>

  <!-- Secondary Buttons -->
  <section class="section">
    <h3>Secondary Buttons</h3>
    <div class="button-showcase">
      <button class="btn secondary">Secondary</button>
      <button class="btn secondary" disabled>Disabled</button>
    </div>
  </section>

  <!-- Outline Buttons -->
  <section class="section">
    <h3>Outline Buttons</h3>
    <div class="button-showcase">
      <button class="btn outline">Outline</button>
      <button class="btn outline" disabled>Disabled</button>
    </div>
  </section>

  <!-- Size Variations -->
  <section class="section">
    <h3>Button Sizes</h3>
    <div class="button-showcase vertical">
      <button class="btn primary small">Small</button>
      <button class="btn primary">Normal</button>
      <button class="btn primary large">Large</button>
    </div>
  </section>

  <!-- Icon Buttons -->
  <section class="section">
    <h3>Icon-like Buttons</h3>
    <div class="button-showcase">
      <button class="btn icon">❤️</button>
      <button class="btn icon">⭐</button>
      <button class="btn icon">🔔</button>
      <button class="btn icon">📌</button>
    </div>
  </section>
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
  margin-bottom: 2rem;
}

@media (prefers-color-scheme: dark) {
  h2 {
    color: #f1f5f9;
  }
}

.demo-container {
  max-width: 700px;
  margin: 0 auto;
}

.section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .section {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

h3 {
  color: #3b82f6;
  margin: 0 0 1rem;
  font-size: 1rem;
}

@media (prefers-color-scheme: dark) {
  h3 {
    color: #60a5fa;
  }
}

.button-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.button-showcase.vertical {
  flex-direction: column;
}

.btn {
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn:active {
  transform: scale(0.95);
}

/* Primary Style */
.btn.primary {
  background: #3b82f6;
  color: white;
}

.btn.primary:hover:not(:disabled) {
  background: #2563eb;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

/* Secondary Style */
.btn.secondary {
  background: #e5e7eb;
  color: #1f2937;
}

.btn.secondary:hover:not(:disabled) {
  background: #d1d5db;
}

/* Outline Style */
.btn.outline {
  background: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
}

.btn.outline:hover:not(:disabled) {
  background: #eff6ff;
  border-color: #2563eb;
}

/* Size Variations */
.btn.small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn.large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  width: 100%;
}

/* Icon Buttons */
.btn.icon {
  width: 48px;
  height: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  font-size: 1.5rem;
}

.btn.icon:hover:not(:disabled) {
  background: #e5e7eb;
  transform: scale(1.1);
}

/* Disabled State */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Loading State */
.btn.loading {
  position: relative;
  color: transparent;
}

.btn.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: translate(-50%, -50%) rotate(360deg); }
}

@media (prefers-color-scheme: dark) {
  .btn.secondary {
    background: #374151;
    color: #f1f5f9;
  }
  
  .btn.secondary:hover:not(:disabled) {
    background: #4b5563;
  }
  
  .btn.outline {
    border-color: #60a5fa;
    color: #60a5fa;
  }
  
  .btn.outline:hover:not(:disabled) {
    background: rgba(96, 165, 250, 0.1);
  }
  
  .btn.icon {
    background: #374151;
  }
  
  .btn.icon:hover:not(:disabled) {
    background: #4b5563;
  }
}`,
  js: ``,
};

export default function HtmlButtonsDetailed({ onOpenWebPlayground }: HtmlButtonsDetailedProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Zap}
        category="HTML · Forms"
        title="Buttons"
        description="Create interactive form buttons with various types and styles"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <Zap className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Buttons in HTML Forms
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Interactive controls for form submission and actions
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;button&gt;</code> element
            creates clickable controls for forms. The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">type</code> attribute
            determines whether it submits, resets, or performs custom actions.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Three Button Types</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li><code className="bg-blue-100 dark:bg-blue-900 px-1 rounded text-xs">submit</code> - Submits form</li>
                <li><code className="bg-blue-100 dark:bg-blue-900 px-1 rounded text-xs">reset</code> - Clears fields</li>
                <li><code className="bg-blue-100 dark:bg-blue-900 px-1 rounded text-xs">button</code> - Custom action</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3">Key Attributes</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>disabled - Disable button</li>
                <li>autofocus - Focus on load</li>
                <li>form - Associate with form</li>
                <li>name/value - Data submission</li>
              </ul>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use CSS to disable resize and provide visual feedback on hover and active states!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Button Types */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Zap className="w-7 h-7" />
            Button Types
          </CardTitle>
          <CardDescription className="text-base">
            Submit, reset, and custom buttons
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            The three button types serve different purposes in forms. Each has distinct behavior when clicked.
          </p>

          <FrontendCodePreview
            title="Button Types Demo"
            description="Submit, reset, and custom action buttons"
            html={basicButtonExample.html}
            css={basicButtonExample.css}
            js={basicButtonExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Button Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Button Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Control button behavior and state
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Buttons support multiple HTML attributes to control their behavior, validation, and form interaction.
          </p>

          <div className="grid gap-3 mb-6">
            {[
              { attr: 'type', desc: 'submit, reset, or button' },
              { attr: 'name & value', desc: 'Data submitted to server' },
              { attr: 'disabled', desc: 'Disable user interaction' },
              { attr: 'autofocus', desc: 'Focus on page load' },
              { attr: 'form', desc: 'Associate with a form by ID' },
              { attr: 'formaction', desc: 'Override form action URL' },
              { attr: 'formmethod', desc: 'Override form method (GET/POST)' },
              { attr: 'formnovalidate', desc: 'Skip form validation' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-700">
                <h4 className="font-mono font-semibold text-orange-600 dark:text-orange-400 mb-1">
                  {item.attr}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            title="Button Attributes Demo"
            description="Various button attributes and states"
            html={buttonAttributesExample.html}
            css={buttonAttributesExample.css}
            js={buttonAttributesExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Button Styling */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Button Styles & Variations
          </CardTitle>
          <CardDescription className="text-base">
            Professional button styling and visual states
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Create visually distinct buttons with CSS for different actions and states (hover, active, disabled, loading).
          </p>

          <FrontendCodePreview
            title="Button Styles Gallery"
            description="Primary, secondary, outline buttons with sizes and states"
            html={buttonStylesExample.html}
            css={buttonStylesExample.css}
            js={buttonStylesExample.js}
            colorTheme="blue"
            previewHeight="600px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { style: 'Primary', use: 'Main actions - Submit, Save, Confirm' },
              { style: 'Secondary', use: 'Alternative actions - Back, More options' },
              { style: 'Outline', use: 'De-emphasized actions - Cancel, Learn more' },
              { style: 'Icon Buttons', use: 'Compact actions - Like, Share, Pin' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-700">
                <h4 className="font-semibold text-pink-600 dark:text-pink-400 mb-1">{item.style}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.use}</p>
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
                <li>✓ Clear button labels</li>
                <li>✓ Use appropriate type</li>
                <li>✓ Visible focus states</li>
                <li>✓ Disable during processing</li>
                <li>✓ Provide feedback on click</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Vague button text</li>
                <li>✗ Wrong button type</li>
                <li>✗ No hover states</li>
                <li>✗ Too many buttons</li>
                <li>✗ Unclear visual hierarchy</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Important</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Ensure buttons have sufficient color contrast and are keyboard accessible. Use text labels, not just icons when possible.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

