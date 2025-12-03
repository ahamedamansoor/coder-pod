'use client';
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PageHeader } from '@/components/shared/generic-page-header';
import {
  FileText,
  Lightbulb,
  CheckCircle2,
  Zap,
  ArrowRight,
  Settings,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { FrontendCodePreview } from '@/components/shared';

interface HtmlFormBasicsProps {
  onOpenWebPlayground?: (html: string, css: string, js: string) => void;
}

const basicFormExample = {
  html: `<h2>Simple Contact Form</h2>
<form class="contact-form">
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" placeholder="Your full name" required>
  </div>

  <div class="form-group">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="you@example.com" required>
  </div>

  <div class="form-group">
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="5" placeholder="Your message here..."></textarea>
  </div>

  <button type="submit" class="btn-submit">Send Message</button>
  <button type="reset" class="btn-reset">Clear Form</button>
</form>`,
  css: `* {
  box-sizing: border-box;
}

body {
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

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .contact-form {
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
input[type="email"],
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  color: #1e293b;
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
  
  input[type="text"]:focus,
  input[type="email"]:focus,
  textarea:focus {
    border-color: #60a5fa;
  }
}

.btn-submit,
.btn-reset {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 1rem;
}

.btn-submit {
  background: #3b82f6;
  color: white;
}

.btn-submit:hover {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.btn-reset {
  background: #6b7280;
  color: white;
}

.btn-reset:hover {
  background: #4b5563;
}

@media (prefers-color-scheme: dark) {
  .btn-submit {
    background: #1e40af;
  }
  
  .btn-submit:hover {
    background: #1e3a8a;
  }
}`,
  js: ``,
};

const formStructureExample = {
  html: `<h2>Form Structure</h2>
<form class="demo-form">
  <!-- Form Groups contain label + input -->
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" name="username" placeholder="Choose username">
  </div>

  <!-- Form Group with helper text -->
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" id="password" name="password" placeholder="Enter password">
    <small class="helper-text">At least 8 characters required</small>
  </div>

  <!-- Multiple input types -->
  <div class="form-group">
    <label for="age">Age</label>
    <input type="number" id="age" name="age" min="18" max="120">
  </div>

  <!-- Form submission -->
  <button type="submit" class="btn">Create Account</button>
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

.demo-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (prefers-color-scheme: dark) {
  .demo-form {
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

input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  color: #1e293b;
}

input:focus {
  outline: none;
  border-color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
  input {
    background: #0f172a;
    border-color: #334155;
    color: #f1f5f9;
  }
}

.helper-text {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #6b7280;
}

@media (prefers-color-scheme: dark) {
  .helper-text {
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

export default function HtmlFormBasics({ onOpenWebPlayground }: HtmlFormBasicsProps) {
  return (
    <div className="space-y-10 pb-16">
      <PageHeader
        icon={FileText}
        category="HTML · Forms"
        title="Form Basics"
        description="Learn to create and structure HTML forms"
        colorTheme="blue"
      />

      {/* Introduction */}
      <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
              <FileText className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <CardTitle className="text-3xl text-blue-600 dark:text-blue-400">
                What are HTML Forms?
              </CardTitle>
              <CardDescription className="text-base mt-1">
                Collect user input and send it to servers
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            HTML forms are used to collect user input. They allow users to enter data which is typically sent to a server for processing.
            Forms consist of <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;form&gt;</code>,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;input&gt;</code>,
            <code className="bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded text-sm">&lt;label&gt;</code>, and other elements.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Common Uses
              </h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✓ Contact forms</li>
                <li>✓ Login pages</li>
                <li>✓ User registration</li>
                <li>✓ Search bars</li>
                <li>✓ Surveys</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-slate-950/50 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Key Elements
              </h4>
              <pre className="text-xs bg-slate-100 dark:bg-slate-900 p-3 rounded border border-blue-200 dark:border-blue-700 overflow-x-auto">
                <code className="text-slate-800 dark:text-slate-200">{`<form>
  <label>Name</label>
  <input type="text">
  <button>Submit</button>
</form>`}</code>
              </pre>
            </div>
          </div>

          <Alert className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/20">
            <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-700 dark:text-blue-300">Pro Tip</AlertTitle>
            <AlertDescription className="text-blue-600 dark:text-blue-400">
              Always use semantic HTML with proper labels and structure for better accessibility!
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Basic Form Example */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <FileText className="w-7 h-7" />
            Simple Contact Form
          </CardTitle>
          <CardDescription className="text-base">
            A basic form with text, email, and textarea fields
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700 dark:text-slate-300">
            This example shows a simple contact form with essential elements: labels, inputs, textarea, and buttons.
          </p>

          <FrontendCodePreview
            title="Contact Form"
            description="Basic form with multiple input types"
            html={basicFormExample.html}
            css={basicFormExample.css}
            js={basicFormExample.js}
            colorTheme="blue"
            previewHeight="500px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Form Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <ArrowRight className="w-7 h-7" />
            Form Structure
          </CardTitle>
          <CardDescription className="text-base">
            Proper organization and semantic structure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-slate-700 dark:text-slate-300">
            Well-structured forms are easier to use, maintain, and access. Group related inputs together and always associate labels with inputs.
          </p>

          <FrontendCodePreview
            title="Form Structure Example"
            description="Organized form with helper text and proper grouping"
            html={formStructureExample.html}
            css={formStructureExample.css}
            js={formStructureExample.js}
            colorTheme="blue"
            previewHeight="450px"
            onOpenPlayground={onOpenWebPlayground}
          />
        </CardContent>
      </Card>

      {/* Form Elements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-600 dark:text-blue-400">
            <Settings className="w-7 h-7" />
            Core Form Elements
          </CardTitle>
          <CardDescription className="text-base">
            Essential elements for building forms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {[
              {
                element: '&lt;form&gt;',
                desc: 'Container for all form elements',
                color: 'orange',
              },
              {
                element: '&lt;input&gt;',
                desc: 'Accepts user input (text, email, password, etc)',
                color: 'emerald',
              },
              {
                element: '&lt;label&gt;',
                desc: 'Describes what input field is for',
                color: 'purple',
              },
              {
                element: '&lt;textarea&gt;',
                desc: 'Multi-line text input area',
                color: 'amber',
              },
              {
                element: '&lt;button&gt;',
                desc: 'Clickable button for submission or actions',
                color: 'pink',
              },
              {
                element: '&lt;select&gt;',
                desc: 'Dropdown list of options',
                color: 'cyan',
              },
            ].map((item, idx) => {
              const colorMap: any = {
                orange: 'from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20 border-orange-200 dark:border-orange-700',
                emerald:
                  'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-700',
                purple:
                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border-purple-200 dark:border-purple-700',
                amber: 'from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/20 border-amber-200 dark:border-amber-700',
                pink: 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20 border-pink-200 dark:border-pink-700',
                cyan: 'from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/20 border-cyan-200 dark:border-cyan-700',
              };

              return (
                <div
                  key={idx}
                  className={`p-4 bg-gradient-to-br ${colorMap[item.color]} rounded-lg border`}
                >
                  <div className="flex items-start gap-3">
                    <code className="text-sm font-mono font-bold">{item.element}</code>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{item.desc}</p>
                  </div>
                </div>
              );
            })}
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
                <li>✓ Use &lt;label&gt; for all inputs</li>
                <li>✓ Group related inputs</li>
                <li>✓ Use proper input types</li>
                <li>✓ Include required attributes</li>
                <li>✓ Clear, accessible design</li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <h4 className="font-bold text-lg text-rose-600 dark:text-rose-400 mb-3">❌ Avoid This</h4>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li>✗ Inputs without labels</li>
                <li>✗ Poor form organization</li>
                <li>✗ Missing error messages</li>
                <li>✗ No validation feedback</li>
                <li>✗ Unclear button purposes</li>
              </ul>
            </div>
          </div>

          <Alert className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/20">
            <Lightbulb className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Accessibility Tip</AlertTitle>
            <AlertDescription className="text-amber-600 dark:text-amber-400">
              Always associate labels with inputs using the "for" attribute matching the input's "id" for better accessibility.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
}

