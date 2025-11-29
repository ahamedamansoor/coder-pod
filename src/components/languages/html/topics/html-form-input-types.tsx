'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, FileText, Key, Mail, Phone, Link, Search, Circle, CheckCircle, Calendar, Clock, Hash, Sliders, Send, RotateCcw, Upload, Palette, EyeOff, Settings, Play, File } from 'lucide-react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

interface HtmlFormInputTypesProps { onOpenWebPlayground?: (html: string, css: string, js: string) => void; }

// Playground form sample
const playgroundHTML = `<form action="#" method="get" style="max-width: 600px; margin: auto; font-family: system-ui;">
  <fieldset>
    <legend>Text & Choice Inputs</legend>
    <p><label for="name">Name:</label><br><input type="text" id="name" name="name" required placeholder="John Doe"></p>
    <p><label for="email">Email:</label><br><input type="email" id="email" name="email" required placeholder="you@example.com"></p>
    <p>Developer?<br>
      <input type="radio" id="dev_yes" name="is_developer" value="yes"> <label for="dev_yes">Yes</label>
      <input type="radio" id="dev_no" name="is_developer" value="no" checked> <label for="dev_no">No</label>
    </p>
  </fieldset>
  <fieldset>
    <legend>Numbers & Dates</legend>
    <p><label for="experience">Experience (0-50):</label><br><input type="number" id="experience" name="experience" min="0" max="50" step="1" value="5"></p>
    <p><label for="satisfaction">Satisfaction (1-10):</label><br><input type="range" id="satisfaction" name="satisfaction" min="1" max="10" value="8"></p>
    <p><label for="start_date">Start Date:</label><br><input type="date" id="start_date" name="start_date"></p>
  </fieldset>
  <div style="margin-top:1rem;"><input type="submit" value="Submit Info"> <input type="reset" value="Reset"></div>
</form>`;
const playgroundCSS = `fieldset { margin-bottom:1rem; border:1px solid #ccc; border-radius:6px; padding:1rem; }
legend { font-weight:600; }
input, select { padding:8px; margin-top:4px; width:100%; box-sizing:border-box; }
input[type=radio] { width:auto; }`;

export default function HtmlFormInputTypes({ onOpenWebPlayground }: HtmlFormInputTypesProps) {
  const common = [
    { icon: FileText, type: 'text', desc: 'Single-line text.' },
    { icon: Key, type: 'password', desc: 'Obscured entry.' },
    { icon: Mail, type: 'email', desc: 'Email pattern + mobile keyboard.' },
    { icon: Phone, type: 'tel', desc: 'Telephone numbers.' },
    { icon: Link, type: 'url', desc: 'Valid URL format.' },
    { icon: Search, type: 'search', desc: 'Search field semantics.' },
  ];
  const choice = [
    { icon: Circle, type: 'radio', desc: 'Exclusive selection within same name group.' },
    { icon: CheckCircle, type: 'checkbox', desc: 'Multiple independent selections.' },
  ];
  const datetime = [
    { icon: Calendar, type: 'date', desc: 'Date selector.' },
    { icon: Clock, type: 'time', desc: 'Time input.' },
    { icon: Calendar, type: 'datetime-local', desc: 'Local date & time.' },
    { icon: Calendar, type: 'month', desc: 'Month/year.' },
    { icon: Calendar, type: 'week', desc: 'Week-based.' },
  ];
  const numeric = [
    { icon: Hash, type: 'number', desc: 'Numerical entry.' },
    { icon: Sliders, type: 'range', desc: 'Slider control.' },
  ];
  const action = [
    { icon: Send, type: 'submit', desc: 'Submit form.' },
    { icon: RotateCcw, type: 'reset', desc: 'Reset form values.' },
    { icon: FormInput, type: 'button', desc: 'Custom scripted button.' },
  ];
  const misc = [
    { icon: Upload, type: 'file', desc: 'File picker.' },
    { icon: Palette, type: 'color', desc: 'Color chooser.' },
    { icon: EyeOff, type: 'hidden', desc: 'Hidden value transport.' },
  ];

  return (
    <div className="space-y-10 pb-16">
      <PageHeader icon={File} category="HTML Basics" title="Form Input Types" description="Exploring the versatile input element types" colorTheme="blue" />
      <Card>
        <CardHeader><CardTitle>Text-Based Inputs</CardTitle><CardDescription>Collect free‑form user text with contextual keyboards.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          {common.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}
        </CardContent>
      </Card>
      <div className="grid md:grid-cols-2 gap-8">
        <Card><CardHeader><CardTitle>Choice Inputs</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{choice.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Date & Time</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{datetime.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <Card><CardHeader><CardTitle>Numeric Inputs</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{numeric.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Action Inputs</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{action.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
        <Card><CardHeader><CardTitle>Miscellaneous</CardTitle></CardHeader><CardContent className="space-y-3 text-sm">{misc.map(i => <div key={i.type} className="bg-muted p-3 rounded border"><h3 className="font-semibold flex items-center gap-2 mb-1"><i.icon className="w-4 h-4 text-primary" />{i.type}</h3><p className="text-xs text-muted-foreground">{i.desc}</p></div>)}</CardContent></Card>
      </div>
      <Card className="border-primary bg-primary/5">
        <CardHeader><CardTitle className="text-primary">Attribute Highlights</CardTitle><CardDescription>Essential modifiers for behavior & validation.</CardDescription></CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-4 text-xs">
          <div>
            <h4 className="font-semibold mb-1">Common</h4>
            {['name','value','placeholder','required','disabled','readonly','id'].map(a => <p key={a}><code className="font-mono bg-background px-1 rounded">{a}</code></p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-1">Numeric</h4>
            {['min','max','step'].map(a => <p key={a}><code className="font-mono bg-background px-1 rounded">{a}</code></p>)}
          </div>
          <div>
            <h4 className="font-semibold mb-1">Text Patterns</h4>
            {['minlength','maxlength','pattern'].map(a => <p key={a}><code className="font-mono bg-background px-1 rounded">{a}</code></p>)}
          </div>
        </CardContent>
      </Card>

      {/* Form Input Types in Action */}
      <div className='space-y-6'>
        <div className='flex items-center gap-3 mb-4'>
          <FormInput className='w-6 h-6 text-blue-600' />
          <h2 className='text-2xl font-bold text-slate-800 dark:text-slate-100'>Form Input Types in Action</h2>
        </div>
        <p className='text-slate-600 dark:text-slate-400 mb-6'>
          Explore different HTML5 input types with live, interactive examples
        </p>

        {/* Example 1: Text-Based Inputs */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="1. Text-Based Inputs"
              description="Text, email, password, telephone, URL, and search inputs"
            html={`<form class="showcase-form">
  <div class="input-group">
    <label for="text-input">Text Input</label>
    <input type="text" id="text-input" placeholder="Enter any text" required>
    <small>📝 Standard single-line text input</small>
  </div>
  
  <div class="input-group">
    <label for="email-input">Email Input</label>
    <input type="email" id="email-input" placeholder="you@example.com" required>
    <small>📧 Validates email format + shows @ keyboard on mobile</small>
  </div>
  
  <div class="input-group">
    <label for="password-input">Password Input</label>
    <input type="password" id="password-input" placeholder="••••••••" minlength="8" required>
    <small>🔒 Obscured text for sensitive data</small>
  </div>
  
  <div class="input-group">
    <label for="tel-input">Telephone Input</label>
    <input type="tel" id="tel-input" placeholder="(123) 456-7890">
    <small>📱 Mobile numeric keyboard optimized</small>
  </div>
  
  <div class="input-group">
    <label for="url-input">URL Input</label>
    <input type="url" id="url-input" placeholder="https://example.com">
    <small>🔗 Validates URL format</small>
  </div>
  
  <div class="input-group">
    <label for="search-input">Search Input</label>
    <input type="search" id="search-input" placeholder="Search...">
    <small>🔍 Search field with optional clear button</small>
  </div>
</form>`}
            css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.showcase-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .showcase-form {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.input-group {
  margin-bottom: 1.5rem;
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

small {
  display: block;
  margin-top: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
}

html.dark small {
  color: #94a3b8;
}`}
              colorTheme="blue"
              icon={FileText}
              previewHeight="600px"
            />
          </CardContent>
        </Card>

        {/* Example 2: Numeric Inputs */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="2. Numeric Inputs"
              description="Number input with spinners and range slider"
              html={`<form class="showcase-form">
  <div class="input-group">
    <label for="number-input">Number Input (0-100)</label>
    <input type="number" id="number-input" min="0" max="100" step="5" value="50">
    <small>🔢 Spinner controls for numerical values</small>
  </div>
  
  <div class="input-group">
    <label for="range-input">Range Slider: <output id="range-output">75</output></label>
    <input type="range" id="range-input" min="0" max="100" value="75" 
           oninput="document.getElementById('range-output').textContent = this.value">
    <small>🎚️ Visual slider for range selection</small>
  </div>
</form>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.showcase-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .showcase-form {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.input-group {
  margin-bottom: 1.5rem;
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

input[type="number"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  background: white;
  color: #1e293b;
}

html.dark input[type="number"] {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input[type="range"] {
  width: 100%;
  height: 8px;
  accent-color: #8b5cf6;
}

output {
  color: #8b5cf6;
  font-weight: 600;
  font-size: 1.2rem;
}

html.dark output {
  color: #a78bfa;
}

input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
}

html.dark small {
  color: #94a3b8;
}`}
              colorTheme="purple"
              icon={Hash}
              previewHeight="350px"
            />
          </CardContent>
        </Card>

        {/* Example 3: Date & Time Inputs */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="3. Date & Time Inputs"
              description="Calendar, time, and datetime pickers"
              html={`<form class="showcase-form">
  <div class="input-group">
    <label for="date-input">Date Input</label>
    <input type="date" id="date-input">
    <small>📅 Calendar date picker</small>
  </div>
  
  <div class="input-group">
    <label for="time-input">Time Input</label>
    <input type="time" id="time-input">
    <small>🕐 Time selection</small>
  </div>
  
  <div class="input-group">
    <label for="datetime-input">DateTime-Local</label>
    <input type="datetime-local" id="datetime-input">
    <small>📆 Combined date and time</small>
  </div>
  
  <div class="input-group">
    <label for="month-input">Month Input</label>
    <input type="month" id="month-input">
    <small>📆 Month and year selection</small>
  </div>
</form>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.showcase-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .showcase-form {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.input-group {
  margin-bottom: 1.5rem;
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

small {
  display: block;
  margin-top: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
}

html.dark small {
  color: #94a3b8;
}`}
              colorTheme="emerald"
              icon={Calendar}
              previewHeight="500px"
            />
          </CardContent>
        </Card>

        {/* Example 4: Choice Inputs */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="4. Choice Inputs"
              description="Radio buttons and checkboxes for selections"
              html={`<form class="showcase-form">
  <div class="input-group">
    <label>Radio Buttons (Select One)</label>
    <div class="choice-group">
      <label class="choice-label">
        <input type="radio" name="size" value="small" checked>
        <span>Small</span>
      </label>
      <label class="choice-label">
        <input type="radio" name="size" value="medium">
        <span>Medium</span>
      </label>
      <label class="choice-label">
        <input type="radio" name="size" value="large">
        <span>Large</span>
      </label>
    </div>
    <small>🔘 Exclusive selection within group</small>
  </div>
  
  <div class="input-group">
    <label>Checkboxes (Select Multiple)</label>
    <div class="choice-group">
      <label class="choice-label">
        <input type="checkbox" name="features" value="feature1" checked>
        <span>Feature A</span>
      </label>
      <label class="choice-label">
        <input type="checkbox" name="features" value="feature2">
        <span>Feature B</span>
      </label>
      <label class="choice-label">
        <input type="checkbox" name="features" value="feature3" checked>
        <span>Feature C</span>
      </label>
    </div>
    <small>☑️ Independent multiple selections</small>
  </div>
</form>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.showcase-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .showcase-form {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-group > label {
  display: block;
  font-weight: 600;
  color: #334155;
  margin-bottom: 0.75rem;
}

html.dark .input-group > label {
  color: #cbd5e1;
}

.choice-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.choice-label {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.75rem;
  border-radius: 6px;
  background: #f8fafc;
  transition: background 0.2s;
}

html.dark .choice-label {
  background: #334155;
}

.choice-label:hover {
  background: #e0e7ff;
}

html.dark .choice-label:hover {
  background: #475569;
}

input[type="radio"],
input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #f59e0b;
}

.choice-label span {
  color: #334155;
  font-size: 1rem;
}

html.dark .choice-label span {
  color: #cbd5e1;
}

small {
  display: block;
  margin-top: 0.75rem;
  color: #64748b;
  font-size: 0.875rem;
}

html.dark small {
  color: #94a3b8;
}`}
              colorTheme="amber"
              icon={CheckCircle}
              previewHeight="500px"
            />
          </CardContent>
        </Card>

        {/* Example 5: Miscellaneous Inputs */}
        <Card>
          <CardContent className='pt-6'>
            <FrontendCodePreview
              title="5. Miscellaneous Inputs"
              description="Color picker and file upload inputs"
              html={`<form class="showcase-form">
  <div class="input-group">
    <label for="color-input">Color Picker</label>
    <input type="color" id="color-input" value="#ec4899">
    <small>🎨 Native color chooser</small>
  </div>
  
  <div class="input-group">
    <label for="file-input">File Upload</label>
    <input type="file" id="file-input" multiple>
    <small>📁 File selection dialog (supports multiple files)</small>
  </div>
  
  <div class="input-group">
    <button type="submit" class="btn-submit">Submit Form</button>
    <button type="reset" class="btn-reset">Reset</button>
  </div>
</form>`}
              css={`body {
  font-family: system-ui, sans-serif;
  padding: 2rem;
  background: #f5f7fa;
}

html.dark body {
  background: #0f172a;
}

.showcase-form {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

html.dark .showcase-form {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.input-group {
  margin-bottom: 1.5rem;
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

input[type="color"] {
  width: 120px;
  height: 60px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
}

html.dark input[type="color"] {
  border-color: #475569;
}

input[type="file"] {
  width: 100%;
  padding: 0.75rem;
  border: 2px dashed #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  color: #334155;
}

html.dark input[type="file"] {
  border-color: #475569;
  color: #cbd5e1;
}

.btn-submit,
.btn-reset {
  width: 48%;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-submit {
  background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
  color: white;
  margin-right: 4%;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(236, 72, 153, 0.3);
}

.btn-reset {
  background: #f1f5f9;
  color: #475569;
  border: 2px solid #e2e8f0;
}

html.dark .btn-reset {
  background: #334155;
  color: #cbd5e1;
  border-color: #475569;
}

.btn-reset:hover {
  background: #e2e8f0;
}

html.dark .btn-reset:hover {
  background: #475569;
}

small {
  display: block;
  margin-top: 0.5rem;
  color: #64748b;
  font-size: 0.875rem;
}

html.dark small {
  color: #94a3b8;
}`}
              colorTheme="pink"
              icon={Palette}
              previewHeight="400px"
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Input Types Playground</CardTitle>
          <CardDescription>Experiment with all HTML5 input types in a live code editor.</CardDescription>
        </CardHeader>
        <CardContent>
          <InteractivePlayground
            title="Complete Input Types Playground"
            description="Explore text, numeric, date/time, choice, and miscellaneous input types with validation"
            features={[
              'All Input Types',
              'HTML5 Validation',
              'Mobile Keyboards',
              'Styling Examples'
            ]}
            buttonText="Open Input Types Playground"
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

