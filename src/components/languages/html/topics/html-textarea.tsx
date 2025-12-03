'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import { Type, Lightbulb, CheckCircle2, Zap, ArrowRight, Settings } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlTextareaProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicTextareaExample = {
  html: `<h2>Basic Textarea</h2>
<form class="form-container">
  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" cols="50" placeholder="Enter your message here..."></textarea>
  </div>
  <button type="submit" class="btn">Send</button>
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

textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  color: #1e293b;
  resize: vertical;
  transition: border-color 0.3s;
}

textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (prefers-color-scheme: dark) {
  textarea {
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

const textareaAttributesExample = {
  html: `<h2>Textarea Attributes</h2>
<form class="form-container">
  <!-- rows and cols -->
  <div class="form-group">
    <label for="small">Small Textarea (3 rows):</label>
    <textarea id="small" rows="3" placeholder="3 rows..."></textarea>
  </div>

  <!-- required -->
  <div class="form-group">
    <label for="required">Required Field:</label>
    <textarea id="required" required placeholder="This field is required"></textarea>
  </div>

  <!-- maxlength -->
  <div class="form-group">
    <label for="limited">Limited to 100 characters:</label>
    <textarea id="limited" maxlength="100" placeholder="Only 100 chars allowed..."></textarea>
    <small>Max 100 characters</small>
  </div>

  <!-- minlength -->
  <div class="form-group">
    <label for="minimum">Minimum 20 characters:</label>
    <textarea id="minimum" minlength="20" placeholder="At least 20 chars..."></textarea>
    <small>At least 20 characters required</small>
  </div>

  <!-- readonly and disabled -->
  <div class="form-group">
    <label for="readonly">Read-only:</label>
    <textarea id="readonly" readonly>Cannot edit this text</textarea>
    <small>This is read-only - you cannot modify it</small>
  </div>

  <div class="form-group">
    <label for="disabled">Disabled:</label>
    <textarea id="disabled" disabled>This textarea is disabled</textarea>
    <small>This is disabled and grayed out</small>
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

textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  color: #1e293b;
  resize: vertical;
  transition: all 0.3s;
}

textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

textarea:disabled,
textarea[readonly] {
  background: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.7;
}

@media (prefers-color-scheme: dark) {
  textarea {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
  
  textarea:disabled,
  textarea[readonly] {
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

const advancedTextareaExample = {
  html: `<h2>Advanced Textarea Features</h2>
<form class="form-container">
  <!-- Character counter -->
  <div class="form-group">
    <label for="counter">With Character Counter (max 200):</label>
    <textarea id="counter" maxlength="200" placeholder="Type something..." class="with-counter"></textarea>
    <div class="counter-info">
      <span id="count">0</span> / 200 characters
    </div>
  </div>

  <!-- Auto-expand textarea -->
  <div class="form-group">
    <label for="autoexpand">Auto-expanding Textarea:</label>
    <textarea id="autoexpand" class="auto-expand" placeholder="This expands as you type..."></textarea>
    <small>Expands automatically to fit content</small>
  </div>

  <!-- Wrap attribute -->
  <div class="form-group">
    <label for="wrap">Wrapped Text:</label>
    <textarea id="wrap" wrap="soft" rows="4" placeholder="Text wraps at edge..."></textarea>
    <small>wrap="soft" - text wraps visually but not submitted</small>
  </div>

  <!-- Spellcheck -->
  <div class="form-group">
    <label for="spell">With Spellcheck:</label>
    <textarea id="spell" spellcheck="true" placeholder="Speling errors are underlined..."></textarea>
    <small>Browser checks spelling and grammar</small>
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

textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  color: #1e293b;
  transition: all 0.3s;
}

textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.auto-expand {
  resize: none;
  overflow: hidden;
  min-height: 100px;
}

@media (prefers-color-scheme: dark) {
  textarea {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

.counter-info {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #6b7280;
  display: flex;
  justify-content: space-between;
}

@media (prefers-color-scheme: dark) {
  .counter-info {
    color: #9ca3af;
  }
}

#count {
  font-weight: 600;
  color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  #count {
    color: #60a5fa;
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
  js: `// Character counter
const counterInput = document.getElementById('counter');
const countDisplay = document.getElementById('count');

if (counterInput && countDisplay) {
  counterInput.addEventListener('input', function() {
    countDisplay.textContent = this.value.length;
  });
}

// Auto-expand textarea
const autoExpand = document.getElementById('autoexpand');

if (autoExpand) {
  function expandTextarea() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 300) + 'px';
  }
  
  autoExpand.addEventListener('input', expandTextarea);
  autoExpand.style.height = 'auto';
  autoExpand.style.height = autoExpand.scrollHeight + 'px';
}`,
};

export default function HtmlTextarea({ onOpenWebPlayground }: HtmlTextareaProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={Type}
        category="HTML · Forms"
        title="Textarea"
        description="Learn to create multi-line text input fields"
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
                Textarea Element
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Multi-line text input for longer content
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            The <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;textarea&gt;</code> element
            allows users to enter multiple lines of text. Unlike input fields, textareas can contain line breaks and display wrapped text.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Common Uses
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Comments and feedback</li>
                <li>✓ Messages and emails</li>
                <li>✓ Descriptions</li>
                <li>✓ Code or text input</li>
                <li>✓ Reviews or stories</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Key Attributes
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`rows="5" cols="50"
placeholder="..."
maxlength="100"
required`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Use CSS to control resize behavior. Add <code className="bg-blue-100 dark:bg-blue-900 px-1 rounded text-xs">resize: vertical;</code> to only allow vertical resizing!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Textarea */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Type className="w-7 h-7" />
            Basic Textarea
          </CardTitle>
          <CardDescription className="text-base">
            Simple multi-line text input
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            A textarea with rows and cols attributes defines its initial size. Users can resize it with the handle in the corner.
          </p>

          <FrontendCodePreview
            title="Basic Textarea"
            description="Simple textarea with label and submit button"
            html={basicTextareaExample.html}
            css={basicTextareaExample.css}
            js={basicTextareaExample.js}
            colorTheme="blue"
            previewHeight="350px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Textarea Attributes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Textarea Attributes
          </CardTitle>
          <CardDescription className="text-base">
            Control textarea behavior and constraints
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Textareas support many HTML attributes to control their behavior, size, and validation.
          </p>

          <div className="grid gap-3 mb-6">
            {[
              { attr: 'rows', desc: 'Number of visible lines (default: 2)' },
              { attr: 'cols', desc: 'Average character width (rarely used)' },
              { attr: 'placeholder', desc: 'Hint text shown when empty' },
              { attr: 'required', desc: 'Field must have content' },
              { attr: 'maxlength', desc: 'Maximum characters allowed' },
              { attr: 'minlength', desc: 'Minimum characters required' },
              { attr: 'readonly', desc: 'Cannot edit but value is submitted' },
              { attr: 'disabled', desc: 'Cannot interact, value not submitted' },
              { attr: 'wrap', desc: 'soft, hard, or off (line wrapping)' },
              { attr: 'spellcheck', desc: 'Enable spell-checking' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <h4 className="font-mono font-semibold text-purple-600 dark:text-purple-400 mb-1">
                  {item.attr}
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <FrontendCodePreview
            title="Textarea Attributes Demo"
            description="Various textarea attributes in action"
            html={textareaAttributesExample.html}
            css={textareaAttributesExample.css}
            js={textareaAttributesExample.js}
            colorTheme="blue"
            previewHeight="650px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Advanced Features */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Advanced Textarea Features
          </CardTitle>
          <CardDescription className="text-base">
            JavaScript enhancements and modern features
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Enhance textareas with JavaScript for character counting, auto-expansion, and real-time validation.
          </p>

          <FrontendCodePreview
            title="Advanced Textarea Features"
            description="Character counter, auto-expand, and spellcheck"
            html={advancedTextareaExample.html}
            css={advancedTextareaExample.css}
            js={advancedTextareaExample.js}
            colorTheme="blue"
            previewHeight="600px"
            onOpenPlayground={onOpenWebPlayground}
          />

          <div className="grid gap-3 mt-4">
            {[
              { feature: 'Character Counter', desc: 'Show remaining characters with maxlength' },
              { feature: 'Auto-expand', desc: 'Grow height as user types (JS)' },
              { feature: 'Text Wrapping', desc: 'wrap="soft" or "hard"' },
              { feature: 'Spellcheck', desc: 'Browser spell-checking' },
            ].map((item, idx) => (
              <div key={idx} className="p-3 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-700">
                <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-1">{item.feature}</h4>
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
                <li>✓ Always use a label</li>
                <li>✓ Set appropriate rows</li>
                <li>✓ Add maxlength for limits</li>
                <li>✓ Use placeholder text</li>
                <li>✓ Mark required fields</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ No label or placeholder</li>
                <li>✗ Overly large textareas</li>
                <li>✗ No resize control</li>
                <li>✗ Placeholder as label</li>
                <li>✗ No error messages</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Always explicitly associate labels with textareas using the "for" attribute matching the textarea's "id".
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

