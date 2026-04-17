'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { CodeSnippetWithOutput } from '@/components/shared/code-snippet-with-output';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import { Lightbulb, CheckCircle2, FileText, Send, AlertCircle, Shield, Zap } from 'lucide-react';

export default function HandlingFormsDetails() {
  const formCode = `function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!name) newErrors.name = 'Name required';
    if (!email) newErrors.email = 'Email required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Submitted:', { name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {errors.name && <span>{errors.name}</span>}

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}`;

  const previewCss = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: linear-gradient(135deg, #f1f5f9 0%, #dbeafe 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.demo-form {
  background: white;
  border-radius: 20px;
  padding: 32px;
  width: min(480px, 90vw);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.15);
}

.demo-form h2 {
  color: #0f172a;
  margin-bottom: 16px;
  text-align: center;
}

.form-field {
  margin-bottom: 16px;
}

.form-field input {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
}

.form-field input:focus {
  outline: none;
  border-color: #0ea5e9;
}

.form-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-footer button {
  padding: 10px 18px;
  background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.error {
  color: #dc2626;
  font-size: 0.85rem;
  margin-top: 4px;
}

.success {
  color: #059669;
  font-size: 0.9rem;
  font-weight: 600;
}`;

  const previewJs = `const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useState } = React;
  const { createRoot } = ReactDOM;

  function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      if (!name.trim()) newErrors.name = 'Name is required';
      if (!email.trim()) newErrors.email = 'Email is required';

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setSubmitted(false);
      } else {
        setErrors({});
        setSubmitted(true);
        setTimeout(() => {
          setName('');
          setEmail('');
          setSubmitted(false);
        }, 1400);
      }
    };

    return h('div', { className: 'demo-form' },
      h('h2', null, 'Controlled Form Preview'),
      h('form', { onSubmit: handleSubmit },
        h('div', { className: 'form-field' },
          h('label', null, 'Name'),
          h('input', {
            value: name,
            onChange: (e) => setName(e.target.value),
            placeholder: 'Name'
          }),
          errors.name && h('div', { className: 'error' }, errors.name)
        ),
        h('div', { className: 'form-field' },
          h('label', null, 'Email'),
          h('input', {
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: 'Email'
          }),
          errors.email && h('div', { className: 'error' }, errors.email)
        ),
        h('div', { className: 'form-footer' },
          h('button', { type: 'submit' }, 'Submit'),
          submitted && h('span', { className: 'success' }, 'Submitted!')
        )
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(ContactForm));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`;

  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={FileText}
        category="React · Form Details"
        title="Handling Forms"
        description="Master form handling in React with controlled components, validation, submission, and best practices for building robust forms."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<FileText className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Forms in React"
              description="The React way of handling user input"
              size="lg"
            />
            <p className="text-base text-gray-700 dark:text-gray-300">
              In React, form elements work differently than standard HTML. React uses <strong>controlled components</strong> where form data is handled by the component state, giving you full control!
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <Badge className="bg-green-500 mb-3">✅ Controlled</Badge>
                <h4 className="font-bold text-green-700 dark:text-green-300 mb-2">React Controls Value</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Input value is controlled by React state. Single source of truth!</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <Badge className="bg-orange-500 mb-3">⚠️ Uncontrolled</Badge>
                <h4 className="font-bold text-orange-700 dark:text-orange-300 mb-2">DOM Controls Value</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">Input manages its own state. Access value with refs.</p>
              </div>
            </div>
            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Controlled is Recommended!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use controlled components for better predictability, validation, and React-style data flow!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TopicTitle
            icon={<Send className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Controlled Form"
            description="Complete form with validation"
            size="lg"
          />
          <CodeSnippetWithOutput
            title="Form with Validation"
            description="Controlled components with error handling"
            language="javascript"
            colorTheme="green"
            code={formCode}
            output={[
              '✅ Form validates on submit',
              '✅ Shows error messages',
              '✅ Prevents invalid submission',
              '',
              'Submit empty form:',
              '> Name required',
              '> Email required',
              '',
              'Submit with data:',
              '> Submitted: { name, email }'
            ]}
          />
          <FrontendCodePreview learningContext="react"
            title="Live Controlled Form"
            description="Interact with the same form in the browser"
            colorTheme="green"
            html={`<div id="root"></div>`}
            css={previewCss}
            js={previewJs}
          />
        </div>

        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<CheckCircle2 className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="Key Takeaways"
              description="Remember these important points"
              size="lg"
            />
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Controlled Components</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">React state controls form values for predictable behavior.</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <AlertCircle className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">Validation</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Validate inputs in real-time or on submit for better UX.</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <Send className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">e.preventDefault()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Always prevent default form submission in React.</p>
              </div>
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-orange-500" />
                  <h4 className="font-bold text-orange-700 dark:text-orange-300">Single Handler</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Use one onChange handler for multiple inputs with name attribute.</p>
              </div>
            </div>
            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">Forms are Essential!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Master controlled components and form validation - they're fundamental to almost every React application!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
