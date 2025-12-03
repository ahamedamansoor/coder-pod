'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { CheckSquare, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlChoiceInputsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const choiceInputExample = {
  html: `<h2>Choice Input Types</h2>
<form class="form-container">
  <!-- Checkboxes: Select multiple -->
  <fieldset class="input-group">
    <legend>Choose Your Interests:</legend>
    <label>
      <input type="checkbox" name="interests" value="sports"> Sports
    </label>
    <label>
      <input type="checkbox" name="interests" value="music"> Music
    </label>
    <label>
      <input type="checkbox" name="interests" value="reading"> Reading
    </label>
    <label>
      <input type="checkbox" name="interests" value="travel"> Travel
    </label>
  </fieldset>

  <!-- Radio Buttons: Select one -->
  <fieldset class="input-group">
    <legend>Preferred Contact Method:</legend>
    <label>
      <input type="radio" name="contact" value="email"> Email
    </label>
    <label>
      <input type="radio" name="contact" value="phone"> Phone
    </label>
    <label>
      <input type="radio" name="contact" value="sms"> SMS
    </label>
  </fieldset>

  <!-- Dropdown/Select: Choose one from list -->
  <div class="form-group">
    <label for="country">Select Country:</label>
    <select id="country" name="country">
      <option value="">-- Choose a country --</option>
      <option value="usa">United States</option>
      <option value="canada">Canada</option>
      <option value="uk">United Kingdom</option>
      <option value="australia">Australia</option>
    </select>
  </div>

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
  margin-bottom: 2rem;
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
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .form-container {
    background: #1e293b;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
}

.input-group {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  border: none;
  padding: 0;
}

@media (prefers-color-scheme: dark) {
  .input-group {
    border-bottom-color: #334155;
  }
}

legend {
  display: block;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1e293b;
  font-size: 1rem;
}

@media (prefers-color-scheme: dark) {
  legend {
    color: #f1f5f9;
  }
}

label {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  cursor: pointer;
  color: #475569;
  font-weight: 500;
}

@media (prefers-color-scheme: dark) {
  label {
    color: #cbd5e1;
  }
}

input[type="checkbox"],
input[type="radio"] {
  margin-right: 0.75rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  margin-right: 0;
}

select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  background: white;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #10b981;
}

@media (prefers-color-scheme: dark) {
  select {
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

const selectExample = {
  html: `<h2>Select & Datalist Examples</h2>
<form class="form-container">
  <!-- Basic Select -->
  <div class="form-group">
    <label for="size">Choose Size:</label>
    <select id="size" name="size">
      <option value="">-- Select Size --</option>
      <option value="xs">Extra Small</option>
      <option value="s">Small</option>
      <option value="m">Medium</option>
      <option value="l">Large</option>
      <option value="xl">Extra Large</option>
    </select>
  </div>

  <!-- Select with Optgroup -->
  <div class="form-group">
    <label for="browser">Choose Browser:</label>
    <select id="browser" name="browser">
      <optgroup label="Desktop Browsers">
        <option>Chrome</option>
        <option>Firefox</option>
        <option>Safari</option>
        <option>Edge</option>
      </optgroup>
      <optgroup label="Mobile Browsers">
        <option>Chrome Mobile</option>
        <option>Safari Mobile</option>
        <option>Firefox Mobile</option>
      </optgroup>
    </select>
  </div>

  <!-- Select with Multiple -->
  <div class="form-group">
    <label for="languages">Choose Languages (Ctrl+Click to select multiple):</label>
    <select id="languages" name="languages" multiple size="4">
      <option>English</option>
      <option>Spanish</option>
      <option>French</option>
      <option>German</option>
      <option>Japanese</option>
    </select>
  </div>

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
  margin-bottom: 2rem;
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
  margin: 0 auto;
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

select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
  background: white;
  cursor: pointer;
}

select:focus {
  outline: none;
  border-color: #10b981;
}

select[multiple] {
  padding: 0.5rem;
}

select[multiple] option {
  padding: 0.5rem;
}

@media (prefers-color-scheme: dark) {
  select {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

.btn {
  width: 100%;
  padding: 0.75rem;
  background: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #059669;
}

@media (prefers-color-scheme: dark) {
  .btn {
    background: #047857;
  }
  
  .btn:hover {
    background: #065f46;
  }
}`,
  js: ``,
};

export default function HtmlChoiceInputs({ onOpenWebPlayground }: HtmlChoiceInputsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={CheckSquare}
        category="HTML · Forms"
        title="Choice Inputs"
        description="Learn checkboxes, radio buttons, and select dropdowns"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <CheckSquare className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                Choice Inputs
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Select from predefined options
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Choice inputs allow users to select from predefined options using checkboxes, radio buttons, or dropdown menus.
          </p>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">When to Use</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              <strong>Checkboxes:</strong> Multiple selections. <strong>Radio buttons:</strong> Single selection. <strong>Select:</strong> Many options in less space.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Choice Inputs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <CheckSquare className="w-7 h-7" />
            Checkboxes, Radios & Select
          </CardTitle>
          <CardDescription className="text-base">
            Different ways to present choices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FrontendCodePreview
            title="Choice Input Types"
            description="Checkboxes, radio buttons, and select dropdowns"
            html={choiceInputExample.html}
            css={choiceInputExample.css}
            js={choiceInputExample.js}
            colorTheme="blue"
            previewHeight="550px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { type: 'Checkbox', desc: 'Select multiple options', usage: 'Multiple choice' },
              { type: 'Radio', desc: 'Select exactly one option', usage: 'Single choice' },
              { type: 'Select', desc: 'Dropdown list of options', usage: 'Space-saving' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-700">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-1">{item.type}</h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">💡 {item.usage}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Select Advanced */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Advanced Select Options
          </CardTitle>
          <CardDescription className="text-base">
            Grouping and multiple selections
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            Use optgroup to organize options, or the multiple attribute for multi-select dropdowns.
          </p>

          <FrontendCodePreview
            title="Advanced Select Features"
            description="Optgroups and multiple selections"
            html={selectExample.html}
            css={selectExample.css}
            js={selectExample.js}
            colorTheme="blue"
            previewHeight="500px"
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
                <li>✓ Group options with optgroup</li>
                <li>✓ Use fieldset/legend for groups</li>
                <li>✓ Associate labels with inputs</li>
                <li>✓ Provide clear option labels</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Mixing checkboxes and radios</li>
                <li>✗ Too many options (&gt;7-10)</li>
                <li>✗ Poor option labels</li>
                <li>✗ Invisible option groups</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

