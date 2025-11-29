'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Play, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlFormValidationProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

const playground = {
  html: `<form>
  <div class="form-group">
    <label for="username">Username (required, 4-8 chars):</label>
    <input type="text" id="username" name="username" required minlength="4" maxlength="8">
  </div>
  <div class="form-group">
    <label for="email">Email (required):</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="age">Age (18-99):</label>
    <input type="number" id="age" name="age" min="18" max="99">
  </div>
  <div class="form-group">
    <label for="zip">Zip Code (5 digits):</label>
    <input type="text" id="zip" name="zip" pattern="[0-9]{5}" title="Five digit zip code">
  </div>
  <button type="submit">Submit</button>
</form>`,
  css: `form { font-family: system-ui; max-width: 400px; margin: 2rem auto; }
.form-group { margin-bottom: 1rem; }
label { display:block; margin-bottom:0.25rem; }
input { width:100%; padding:8px; box-sizing:border-box; border:1px solid #ccc; border-radius:4px; }
input:invalid { border-color:red; box-shadow:0 0 3px rgba(255,0,0,0.3); }`,
  js: ''
};

export default function HtmlFormValidation({ onOpenWebPlayground }: HtmlFormValidationProps) {
  const validationAttrs = [
    { attr: 'required', desc: 'Field must be completed before submit.' },
    { attr: 'minlength / maxlength', desc: 'Character length boundaries.' },
    { attr: 'min / max', desc: 'Numeric/date range limits.' },
    { attr: 'type', desc: 'Built‑in semantic + basic pattern (email, url).' },
    { attr: 'pattern', desc: 'Regex for custom matching.' },
  ];

  return (
    <div className="space-y-10 pb-16">
      <PageHeader icon={File} category="HTML Basics" title="HTML Form Validation" description="Ensuring correctness & usability before submission" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Client vs Server Validation</CardTitle><CardDescription>Client improves UX; server is mandatory for security.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="bg-muted p-4 rounded border"><h3 className="font-semibold mb-1">Client-Side</h3><p className="text-xs text-muted-foreground">Immediate feedback via HTML5 constraints; can be bypassed.</p></div>
          <div className="bg-muted p-4 rounded border"><h3 className="font-semibold mb-1">Server-Side</h3><p className="text-xs text-muted-foreground">Authoritative validation after submission (always required).</p></div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Constraint Attributes</CardTitle><CardDescription>Declarative validation hooks.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 text-xs">
          {validationAttrs.map(v => <div key={v.attr} className="bg-muted p-3 rounded border"><code className="font-mono bg-background px-1 rounded font-semibold">{v.attr}</code><p className="mt-1 text-muted-foreground">{v.desc}</p></div>)}
        </CardContent>
      </Card>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Best Practices</CardTitle></CardHeader>
        <CardContent className="text-xs space-y-1">
          <ul className="list-disc list-inside space-y-1">
            <li>Never rely solely on client validation.</li>
            <li>Pair <code>pattern</code> with descriptive <code>title</code>.</li>
            <li>Use semantic <code>type</code> to reduce custom JS.</li>
          </ul>
        </CardContent>
      </Card>

      {/* Form Validation in Action */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3"><ShieldCheck className="w-6 h-6 text-emerald-600" /> Form Validation in Action</CardTitle>
          <CardDescription className="text-base">See HTML5 validation constraints in action with visual feedback and error messages</CardDescription>
        </CardHeader>
        <CardContent>
          <FrontendCodePreview
            title="Complete Form Validation Showcase"
            description="Practical demonstration of HTML5 validation with required, minlength, maxlength, min, max, pattern, and type constraints"
            html={`<div class="validation-showcase">
  <h1>🛡️ HTML5 Form Validation</h1>
  
  <!-- Example 1: Required Fields -->
  <div class="form-section">
    <h2>✅ Required Field Validation</h2>
    <form class="demo-form">
      <div class="input-group">
        <label for="req-name">Full Name *</label>
        <input type="text" id="req-name" name="name" required>
        <small class="hint">Try submitting empty - browser will show error</small>
      </div>
      
      <div class="input-group">
        <label for="req-email">Email Address *</label>
        <input type="email" id="req-email" name="email" required>
        <small class="hint">Validates email format automatically</small>
      </div>
      
      <div class="validation-status">
        <span class="status-icon valid">✓</span> Valid fields turn green
        <span class="status-icon invalid">✗</span> Invalid fields turn red
      </div>
      
      <button type="submit" class="btn-submit">Submit Form</button>
    </form>
  </div>

  <!-- Example 2: Length Constraints -->
  <div class="form-section">
    <h2>📊 Length Validation (minlength/maxlength)</h2>
    <form class="demo-form">
      <div class="input-group">
        <label for="username-len">Username (4-12 characters) *</label>
        <input 
          type="text" 
          id="username-len" 
          name="username" 
          required 
          minlength="4" 
          maxlength="12"
          placeholder="Enter 4-12 chars"
        >
        <small class="hint">Attributes: <code>required minlength="4" maxlength="12"</code></small>
      </div>
      
      <div class="input-group">
        <label for="bio-len">Bio (10-100 characters)</label>
        <textarea 
          id="bio-len" 
          name="bio" 
          minlength="10" 
          maxlength="100"
          rows="3"
          placeholder="Write at least 10 characters"
        ></textarea>
        <small class="hint">Textarea with length constraints</small>
      </div>
      
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>

  <!-- Example 3: Numeric Range -->
  <div class="form-section">
    <h2>🔢 Numeric Range Validation (min/max)</h2>
    <form class="demo-form">
      <div class="input-group">
        <label for="age-num">Age (18-120) *</label>
        <input 
          type="number" 
          id="age-num" 
          name="age" 
          min="18" 
          max="120" 
          required
          placeholder="18-120"
        >
        <small class="hint">Attributes: <code>type="number" min="18" max="120"</code></small>
      </div>
      
      <div class="input-group">
        <label for="quantity-num">Quantity (1-100)</label>
        <input 
          type="number" 
          id="quantity-num" 
          name="quantity" 
          min="1" 
          max="100" 
          value="1"
          step="1"
        >
        <small class="hint">Spinners enforce range automatically</small>
      </div>
      
      <div class="input-group">
        <label for="birth-date">Birth Date (Must be 18+)</label>
        <input 
          type="date" 
          id="birth-date" 
          name="birthdate" 
          max="2006-12-31"
        >
        <small class="hint">Date validation with <code>max="2006-12-31"</code></small>
      </div>
      
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>

  <!-- Example 4: Pattern Validation -->
  <div class="form-section">
    <h2>🔍 Pattern Validation (Regex)</h2>
    <form class="demo-form">
      <div class="input-group">
        <label for="phone-val">Phone Number (Format: 123-456-7890) *</label>
        <input 
          type="tel" 
          id="phone-val" 
          name="phone" 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          required
          placeholder="123-456-7890"
          title="Phone format: 123-456-7890"
        >
        <small class="hint">Pattern: <code>[0-9]{3}-[0-9]{3}-[0-9]{4}</code></small>
      </div>
      
      <div class="input-group">
        <label for="zip-val">ZIP Code (5 digits) *</label>
        <input 
          type="text" 
          id="zip-val" 
          name="zip" 
          pattern="[0-9]{5}"
          required
          placeholder="12345"
          title="5-digit ZIP code"
          maxlength="5"
        >
        <small class="hint">Pattern: <code>[0-9]{5}</code> + maxlength</small>
      </div>
      
      <div class="input-group">
        <label for="code-val">Product Code (ABC-1234) *</label>
        <input 
          type="text" 
          id="code-val" 
          name="code" 
          pattern="[A-Z]{3}-[0-9]{4}"
          required
          placeholder="ABC-1234"
          title="Format: ABC-1234 (3 uppercase letters, dash, 4 numbers)"
        >
        <small class="hint">Pattern: <code>[A-Z]{3}-[0-9]{4}</code></small>
      </div>
      
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>

  <!-- Example 5: Type-Based Validation -->
  <div class="form-section">
    <h2>🎯 Type-Based Validation</h2>
    <form class="demo-form">
      <div class="input-group">
        <label for="type-email">Email (type="email") *</label>
        <input type="email" id="type-email" name="email" required placeholder="user@example.com">
        <small class="hint">Validates email format automatically</small>
      </div>
      
      <div class="input-group">
        <label for="type-url">Website (type="url") *</label>
        <input type="url" id="type-url" name="website" required placeholder="https://example.com">
        <small class="hint">Validates URL format (must include protocol)</small>
      </div>
      
      <div class="input-group">
        <label for="type-tel">Telephone (type="tel")</label>
        <input type="tel" id="type-tel" name="tel" placeholder="+1-234-567-8900">
        <small class="hint">Mobile keyboard on phones, no built-in validation</small>
      </div>
      
      <button type="submit" class="btn-submit">Submit</button>
    </form>
  </div>

  <!-- Example 6: Combined Validation -->
  <div class="form-section">
    <h2>🛡️ Combined Validation Example</h2>
    <form class="demo-form">
      <div class="form-info">
        <p>💡 This form combines multiple validation types</p>
      </div>
      
      <div class="input-group">
        <label for="combo-user">Username *</label>
        <input 
          type="text" 
          id="combo-user" 
          name="username" 
          required 
          minlength="3" 
          maxlength="20"
          pattern="[a-zA-Z0-9_]+"
          title="Letters, numbers, and underscores only"
          placeholder="john_doe123"
        >
        <small class="hint">Required + 3-20 chars + alphanumeric only</small>
      </div>
      
      <div class="input-group">
        <label for="combo-pass">Password *</label>
        <input 
          type="password" 
          id="combo-pass" 
          name="password" 
          required 
          minlength="8"
          pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Min 8 chars, 1 uppercase, 1 lowercase, 1 number"
          placeholder="Strong password"
        >
        <small class="hint">Required + min 8 chars + complexity requirements</small>
      </div>
      
      <div class="input-group">
        <label for="combo-age">Age *</label>
        <input 
          type="number" 
          id="combo-age" 
          name="age" 
          required 
          min="13" 
          max="120"
          placeholder="13-120"
        >
        <small class="hint">Required + numeric range</small>
      </div>
      
      <button type="submit" class="btn-submit">Create Account</button>
    </form>
  </div>
</div>`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  background: #f5f7fa;
  padding: 2rem;
  transition: background-color 0.3s;
}

html.dark body {
  background: #0f172a;
}

.validation-showcase {
  max-width: 900px;
  margin: 0 auto;
}

.validation-showcase h1 {
  color: #1e293b;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  transition: color 0.3s;
}

html.dark .validation-showcase h1 {
  color: #f1f5f9;
}

.form-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

html.dark .form-section {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.form-section h2 {
  color: #10b981;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #e2e8f0;
  transition: all 0.3s;
}

html.dark .form-section h2 {
  color: #34d399;
  border-bottom-color: #334155;
}

.demo-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-info {
  background: #d1fae5;
  border-left: 4px solid #10b981;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  transition: all 0.3s;
}

html.dark .form-info {
  background: #064e3b;
  border-left-color: #34d399;
}

.form-info p {
  margin: 0;
  color: #065f46;
  font-weight: 500;
  transition: color 0.3s;
}

html.dark .form-info p {
  color: #a7f3d0;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  font-weight: 600;
  color: #334155;
  font-size: 0.95rem;
  transition: color 0.3s;
}

html.dark .input-group label {
  color: #cbd5e1;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="url"],
input[type="number"],
input[type="date"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: all 0.3s;
  background: white;
  color: #1e293b;
}

html.dark input[type="text"],
html.dark input[type="email"],
html.dark input[type="password"],
html.dark input[type="tel"],
html.dark input[type="url"],
html.dark input[type="number"],
html.dark input[type="date"],
html.dark textarea {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

/* Validation States */
input:valid,
textarea:valid {
  border-color: #10b981;
}

input:invalid:not(:placeholder-shown),
textarea:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

input:required:valid,
textarea:required:valid {
  border-color: #10b981;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%2310b981" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

input:required:invalid:not(:placeholder-shown),
textarea:required:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="%23ef4444" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  padding-right: 2.5rem;
}

textarea {
  resize: vertical;
  font-family: inherit;
}

.validation-status {
  display: flex;
  gap: 2rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 6px;
  font-size: 0.9rem;
  align-items: center;
  transition: all 0.3s;
}

html.dark .validation-status {
  background: #334155;
}

.status-icon {
  font-weight: bold;
  font-size: 1.2rem;
}

.status-icon.valid {
  color: #10b981;
}

.status-icon.invalid {
  color: #ef4444;
}

.hint {
  display: block;
  font-size: 0.85rem;
  color: #64748b;
  transition: color 0.3s;
}

html.dark .hint {
  color: #94a3b8;
}

.hint code {
  background: #f1f5f9;
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-size: 0.8rem;
  color: #10b981;
  transition: all 0.3s;
}

html.dark .hint code {
  background: #334155;
  color: #34d399;
}

.btn-submit {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.4);
}

/* Responsive Design */
@media (max-width: 768px) {
  body {
    padding: 1rem;
  }
  
  .form-section {
    padding: 1.5rem;
  }
  
  .validation-showcase h1 {
    font-size: 1.5rem;
  }
  
  .validation-status {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}`}
            colorTheme="emerald"
            icon={ShieldCheck}
            previewHeight="700px"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Form Validation Playground</CardTitle>
          <CardDescription>Experiment with HTML5 validation constraints in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Complete Form Validation Playground"
            description="Explore required, minlength, maxlength, min, max, pattern, and type validation with live examples"
            features={[
              'Required Fields',
              'Length Constraints',
              'Pattern Matching',
              'Visual Feedback'
            ]}
            buttonText="Open Form Validation Playground"
            onLaunchPlayground={onOpenWebPlayground!}
            playgroundData={{
              html: playground.html,
              css: playground.css,
              js: playground.js
            }}
            colorTheme="emerald"
          />
        </CardContent>
      </Card>
    </div>
  );
}

