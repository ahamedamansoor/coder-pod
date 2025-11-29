'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, Play, FileText, Send, Key, Vote } from 'lucide-react';
import React from 'react';
import { PageHeader } from '@/components/shared/generic-page-header';
import { FrontendCodePreview, InteractivePlayground } from '@/components/shared';

export default function HtmlForms({ onOpenWebPlayground }: { onOpenWebPlayground: (html: string, css: string, js: string) => void; }) {
    
    const formAnatomy = [
        { tag: '<form>', description: 'The container for the entire form.' },
        { tag: '<label>', description: 'A caption for an item in a user interface.' },
        { tag: '<input>', description: 'The most used form element, an input field where the user can enter data.' },
        { tag: '<textarea>', description: 'A multi-line text input control.' },
        { tag: '<button>', description: 'A clickable button, often used to submit the form.' },
        { tag: '<select>', description: 'A drop-down list.' },
        { tag: '<option>', description: 'An option in a drop-down list.' },
        { tag: '<fieldset>', description: 'Groups related elements in a form.' },
        { tag: '<legend>', description: 'A caption for the <fieldset> element.' },
    ];
    
    const formAttributes = [
        { attr: 'action', description: 'Specifies where to send the form-data when a form is submitted. Usually a URL on a server.' },
        { attr: 'method', description: 'Specifies the HTTP method to use when sending form-data. Can be "GET" or "POST".' },
        { attr: 'name', description: 'The name of the form, used to reference it with JavaScript.' },
        { attr: 'target', description: 'Specifies where to display the response after submitting the form (e.g., "_blank").' },
    ];

    const playgroundCode = {
        html: `<form action="/submit-form" method="post">
  <fieldset>
    <legend>Personal Information</legend>
    
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="user_name" />
    </div>
    
    <div>
      <label for="mail">E-mail:</label>
      <input type="email" id="mail" name="user_email" />
    </div>
  </fieldset>

  <fieldset>
    <legend>Your Message</legend>

    <div>
      <label for="msg">Message:</label>
      <textarea id="msg" name="user_message"></textarea>
    </div>
  </fieldset>
  
  <div class="button">
    <button type="submit">Submit your message</button>
  </div>
</form>`,
        css: `form {
  font-family: sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 500px;
  margin: 2rem auto;
  background-color: #f9f9f9;
}

fieldset {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

legend {
  font-weight: bold;
  color: hsl(var(--primary));
  padding: 0 0.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Important */
}

textarea {
  resize: vertical;
  min-height: 80px;
}

div {
  margin-bottom: 1rem;
}

button {
  background-color: hsl(var(--primary));
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`,
        js: ''
    };

    return (
      <div className="space-y-10 pb-16">
        <PageHeader
          icon={FileText}
          category="HTML Basics"
          title="HTML Forms"
          description="The primary way to collect user input on the web"
          colorTheme="emerald"
        />

        <Card>
            <CardHeader>
                <CardTitle>What is a Form?</CardTitle>
                <CardDescription>An HTML form is a section of a document containing controls such as text fields, password fields, checkboxes, radio buttons, submit buttons, etc. It's like a digital questionnaire used to collect information from the user.</CardDescription>
            </CardHeader>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>The Core &lt;form&gt; Element</CardTitle>
                <CardDescription>Everything starts with the &lt;form&gt; tag, which acts as a container for all the input fields.</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="bg-muted p-4 rounded-lg border mb-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2 mb-2"><Key className="w-5 h-5 text-primary"/>Key Attributes</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {formAttributes.map(attr => (
                            <div key={attr.attr} className="bg-background p-3 rounded">
                                <code className="font-mono font-bold text-primary">{attr.attr}</code>
                                <p className="text-xs text-muted-foreground mt-1">{attr.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4 text-center">
                    <p className="font-mono text-lg">`&lt;form action="/server-url" method="POST"&gt;`</p>
                    <Send className="w-6 h-6 text-primary"/>
                    <p>User Data</p>
                    <Vote className="w-6 h-6 text-primary"/>
                    <p>Server</p>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Common Form Elements</CardTitle>
                <CardDescription>These are the building blocks you'll use inside your &lt;form&gt; tag.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {formAnatomy.map(el => (
                        <div key={el.tag} className="bg-muted p-4 rounded-lg border">
                            <code className="font-mono font-bold text-primary">{el.tag}</code>
                            <p className="text-xs text-muted-foreground mt-1">{el.description}</p>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>

        {/* HTML Forms in Action */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3"><FileText className="w-6 h-6 text-emerald-600" /> HTML Forms in Action</CardTitle>
            <CardDescription className="text-base">See how forms work with various input types, validation, and styling with dark mode support</CardDescription>
          </CardHeader>
          <CardContent>
            <FrontendCodePreview
              title="Complete Form Examples"
              description="Practical demonstration of form structure, input types, validation, and responsive design"
              html={`<div class="forms-container">
  <!-- Basic Contact Form -->
  <div class="form-wrapper">
    <h2>📝 Contact Form</h2>
    <form class="contact-form">
      <fieldset>
        <legend>Personal Information</legend>
        
        <div class="form-group">
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="John Doe">
        </div>
        
        <div class="form-group">
          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="john@example.com">
        </div>
        
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890">
        </div>
      </fieldset>
      
      <fieldset>
        <legend>Message</legend>
        
        <div class="form-group">
          <label for="subject">Subject *</label>
          <input type="text" id="subject" name="subject" required placeholder="What is this about?">
        </div>
        
        <div class="form-group">
          <label for="message">Your Message *</label>
          <textarea id="message" name="message" rows="4" required placeholder="Write your message here..."></textarea>
        </div>
        
        <div class="form-group">
          <label for="priority">Priority Level</label>
          <select id="priority" name="priority">
            <option value="low">Low</option>
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </fieldset>
      
      <div class="form-actions">
        <button type="submit" class="btn-primary">Send Message</button>
        <button type="reset" class="btn-secondary">Reset Form</button>
      </div>
    </form>
  </div>

  <!-- Registration Form -->
  <div class="form-wrapper">
    <h2>🔐 Registration Form</h2>
    <form class="registration-form">
      <fieldset>
        <legend>Account Details</legend>
        
        <div class="form-group">
          <label for="username">Username *</label>
          <input type="text" id="username" name="username" required minlength="3" placeholder="Choose a username">
        </div>
        
        <div class="form-group">
          <label for="password">Password *</label>
          <input type="password" id="password" name="password" required minlength="8" placeholder="At least 8 characters">
        </div>
        
        <div class="form-group">
          <label for="confirm-password">Confirm Password *</label>
          <input type="password" id="confirm-password" name="confirm-password" required placeholder="Re-enter password">
        </div>
      </fieldset>
      
      <fieldset>
        <legend>Preferences</legend>
        
        <div class="form-group">
          <label>Account Type</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" name="account-type" value="personal" checked>
              <span>Personal</span>
            </label>
            <label class="radio-label">
              <input type="radio" name="account-type" value="business">
              <span>Business</span>
            </label>
          </div>
        </div>
        
        <div class="form-group">
          <label>Notifications</label>
          <div class="checkbox-group">
            <label class="checkbox-label">
              <input type="checkbox" name="email-notify" checked>
              <span>Email notifications</span>
            </label>
            <label class="checkbox-label">
              <input type="checkbox" name="sms-notify">
              <span>SMS notifications</span>
            </label>
          </div>
        </div>
        
        <div class="form-group">
          <label class="checkbox-label">
            <input type="checkbox" name="terms" required>
            <span>I agree to the Terms and Conditions *</span>
          </label>
        </div>
      </fieldset>
      
      <div class="form-actions">
        <button type="submit" class="btn-primary">Create Account</button>
      </div>
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

.forms-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
}

.form-wrapper {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

html.dark .form-wrapper {
  background: #1e293b;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.form-wrapper h2 {
  color: #10b981;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: color 0.3s;
}

html.dark .form-wrapper h2 {
  color: #34d399;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

fieldset {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s;
}

html.dark fieldset {
  border-color: #334155;
}

legend {
  font-weight: 600;
  color: #10b981;
  padding: 0 0.75rem;
  font-size: 1.1rem;
  transition: color 0.3s;
}

html.dark legend {
  color: #34d399;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.form-group:last-child {
  margin-bottom: 0;
}

label {
  font-weight: 500;
  color: #334155;
  font-size: 0.95rem;
  transition: color 0.3s;
}

html.dark label {
  color: #cbd5e1;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
textarea,
select {
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
html.dark input[type="tel"],
html.dark input[type="password"],
html.dark textarea,
html.dark select {
  background: #334155;
  border-color: #475569;
  color: #e2e8f0;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

input::placeholder,
textarea::placeholder {
  color: #94a3b8;
}

textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

.radio-group,
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.radio-label,
.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: normal;
}

input[type="radio"],
input[type="checkbox"] {
  width: auto;
  cursor: pointer;
  width: 18px;
  height: 18px;
  accent-color: #10b981;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.btn-primary,
.btn-secondary {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;
}

.btn-primary {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(16, 185, 129, 0.4);
}

.btn-secondary {
  background: #f1f5f9;
  color: #475569;
  border: 2px solid #e2e8f0;
}

html.dark .btn-secondary {
  background: #334155;
  color: #cbd5e1;
  border-color: #475569;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

html.dark .btn-secondary:hover {
  background: #475569;
}

/* Validation States */
input:required:valid {
  border-color: #10b981;
}

input:required:invalid:not(:placeholder-shown) {
  border-color: #ef4444;
}

/* Responsive Design */
@media (max-width: 768px) {
  .forms-container {
    grid-template-columns: 1fr;
  }
  
  body {
    padding: 1rem;
  }
  
  .form-wrapper {
    padding: 1.5rem;
  }
  
  .form-actions {
    flex-direction: column;
  }
}`}
              colorTheme="emerald"
              icon={FileText}
              previewHeight="700px"
            />
          </CardContent>
        </Card>
        
        <Card>
            <CardHeader>
                <CardTitle>Interactive Forms Playground</CardTitle>
                <CardDescription>Experiment with form elements in a live code editor with preview and console.</CardDescription>
            </CardHeader>
            <CardContent>
                <InteractivePlayground
                  title="Complete Forms Playground"
                  description="Explore form structure, fieldsets, labels, inputs, textareas, selects, and buttons with styling"
                  features={[
                    'Form Structure',
                    'Input Types',
                    'Validation',
                    'Responsive Design'
                  ]}
                  buttonText="Open Forms Playground"
                  onLaunchPlayground={onOpenWebPlayground}
                  playgroundData={{
                    html: playgroundCode.html,
                    css: playgroundCode.css,
                    js: playgroundCode.js
                  }}
                  colorTheme="emerald"
                />
            </CardContent>
        </Card>
      </div>
    );
}
