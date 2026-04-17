'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { PageHeader } from '@/components/shared/generic-page-header';
import { TopicTitle } from '@/components/shared/topic-title';
import { FrontendCodePreview } from '@/components/shared/frontend-code-preview';
import {
  Lightbulb,
  CheckCircle2,
  XCircle,
  Hash,
  Server,
  AlertTriangle,
} from 'lucide-react';

export default function UseIdHook() {
  return (
    <div className="w-full min-h-screen space-y-12 pb-16">
      <PageHeader
        icon={Hash}
        category="React · Hooks (Comprehensive)"
        title="useId Hook"
        description="Learn useId to generate unique IDs that are stable across server and client rendering, preventing hydration mismatches."
        colorTheme="cyan"
      />

      <div className="w-full px-4 sm:px-6 lg:px-8 space-y-12">

        {/* What is useId */}
        <Card className="border-2 border-cyan-200 dark:border-cyan-800 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 dark:from-cyan-950/10 dark:to-blue-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Hash className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />}
              title="What is useId?"
              description="Generating unique, stable IDs"
              size="lg"
            />

            <p className="text-base text-gray-700 dark:text-gray-300">
              <code className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 rounded text-sm">useId</code> generates <strong>unique IDs</strong> that are <strong>stable across server and client rendering</strong>. This prevents hydration mismatches when using server-side rendering (SSR)!
            </p>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="font-bold mb-4 text-blue-700 dark:text-blue-300">Syntax</h4>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded font-mono text-sm">
                <div className="text-slate-800 dark:text-slate-200">
                  <div>const id = useId();</div>
                  <div className="mt-2 text-green-600 dark:text-green-400">// Returns: ':r1:'</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Math.random()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Different IDs on server vs client = hydration mismatch!
                </p>
                <div className="bg-red-50 dark:bg-red-950/20 p-2 rounded text-xs font-mono">
                  Server: id="1234"<br/>
                  Client: id="5678" ❌
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">useId()</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Same IDs on server and client = no mismatch!
                </p>
                <div className="bg-green-50 dark:bg-green-950/20 p-2 rounded text-xs font-mono">
                  Server: id=":r1:"<br/>
                  Client: id=":r1:" ✅
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">For Accessibility IDs!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                Use useId for accessibility attributes like htmlFor, aria-describedby, and aria-labelledby. Don't use it for keys in lists!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Common Use Cases */}
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/10 dark:to-pink-950/10">
          <CardContent className="space-y-6 pt-6">
            <TopicTitle
              icon={<Server className="w-7 h-7 text-purple-600 dark:text-purple-400" />}
              title="Common Use Cases"
              description="When to use useId"
              size="lg"
            />

            <div className="space-y-4">
              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Form Labels</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Connecting <code>&lt;label&gt;</code> with <code>&lt;input&gt;</code> via htmlFor
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono">
                  &lt;label htmlFor={'{id}'}&gt;Name&lt;/label&gt;<br/>
                  &lt;input id={'{id}'} /&gt;
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">ARIA Attributes</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Using aria-describedby, aria-labelledby for accessibility
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono">
                  &lt;input aria-describedby={'{id}'} /&gt;<br/>
                  &lt;span id={'{id}'}&gt;Helper text&lt;/span&gt;
                </div>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Multiple Related IDs</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Generate one ID and add suffixes for related elements
                </p>
                <div className="bg-slate-100 dark:bg-slate-900 p-2 rounded text-xs font-mono">
                  const id = useId();<br/>
                  {'{id}'}-label, {'{id}'}-input, {'{id}'}-error
                </div>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-300 dark:border-red-700">
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
              <AlertTitle className="text-red-900 dark:text-red-100">Not for List Keys!</AlertTitle>
              <AlertDescription className="text-red-800 dark:text-red-200">
                Don't use useId for keys in lists! Use your data's unique IDs instead. useId is for accessibility IDs only.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Example */}
        <div className="space-y-6">
          <TopicTitle
            icon={<Hash className="w-8 h-8 text-green-600 dark:text-green-400" />}
            title="Example: Accessible Form"
            description="Using useId for form accessibility"
            size="lg"
          />

          <FrontendCodePreview learningContext="react"
            title="Form with useId"
            description="Label and error message properly connected"
            colorTheme="green"
            react={`function AccessibleForm() {
  const nameId = React.useId();
  const emailId = React.useId();
  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="container">
      <h1>📋 Accessible Form</h1>

      <form onSubmit={handleSubmit} className="form">
        {/* Name Field */}
        <div className="field">
          <label htmlFor={nameId} className="label">
            Your Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            className={\`input \${errors.name ? 'error' : ''}\`}
            aria-describedby={errors.name ? \`\${nameId}-error\` : undefined}
          />
          {errors.name && (
            <span id={\`\${nameId}-error\`} className="error-msg">
              {errors.name}
            </span>
          )}
        </div>

        {/* Email Field */}
        <div className="field">
          <label htmlFor={emailId} className="label">
            Your Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            className={\`input \${errors.email ? 'error' : ''}\`}
            aria-describedby={errors.email ? \`\${emailId}-error\` : undefined}
          />
          {errors.email && (
            <span id={\`\${emailId}-error\`} className="error-msg">
              {errors.email}
            </span>
          )}
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>

      <div className="info">
        💡 useId creates stable IDs for SSR!
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AccessibleForm />);`}
            html={`<div id="root"></div>`}
            js={`const script1 = document.createElement('script');
script1.src = 'https://unpkg.com/react@18/umd/react.development.js';
script1.crossOrigin = 'anonymous';

const script2 = document.createElement('script');
script2.src = 'https://unpkg.com/react-dom@18/umd/react-dom.development.js';
script2.crossOrigin = 'anonymous';

script2.onload = () => {
  const { createElement: h, useId, useState } = React;
  const { createRoot } = ReactDOM;

  function AccessibleForm() {
    const nameId = useId();
    const emailId = useId();
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      
      const newErrors = {};
      if (!name) newErrors.name = 'Name is required';
      if (!email) newErrors.email = 'Email is required';
      
      setErrors(newErrors);
      
      if (Object.keys(newErrors).length === 0) {
        alert('Form submitted successfully!');
      }
    };

    return h('div', { className: 'container' },
      h('h1', null, '📋 Accessible Form'),

      h('form', { onSubmit: handleSubmit, className: 'form' },
        h('div', { className: 'field' },
          h('label', { htmlFor: nameId, className: 'label' }, 'Your Name'),
          h('input', {
            id: nameId,
            name: 'name',
            type: 'text',
            className: 'input' + (errors.name ? ' error' : ''),
            'aria-describedby': errors.name ? nameId + '-error' : undefined
          }),
          errors.name && h('span', { 
            id: nameId + '-error', 
            className: 'error-msg' 
          }, errors.name)
        ),

        h('div', { className: 'field' },
          h('label', { htmlFor: emailId, className: 'label' }, 'Your Email'),
          h('input', {
            id: emailId,
            name: 'email',
            type: 'email',
            className: 'input' + (errors.email ? ' error' : ''),
            'aria-describedby': errors.email ? emailId + '-error' : undefined
          }),
          errors.email && h('span', { 
            id: emailId + '-error', 
            className: 'error-msg' 
          }, errors.email)
        ),

        h('button', { type: 'submit', className: 'btn' }, 'Submit')
      ),

      h('div', { className: 'info' },
        '💡 useId creates stable IDs for SSR!'
      )
    );
  }

  const root = createRoot(document.getElementById('root'));
  root.render(h(AccessibleForm));
};

document.head.appendChild(script1);
document.head.appendChild(script2);`}
            css={`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

#root {
  width: 100%;
  display: flex;
  justify-content: center;
}

.container {
  background: white;
  border-radius: 24px;
  padding: 40px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
}

h1 {
  color: #10b981;
  margin-bottom: 30px;
  font-size: 2rem;
  text-align: center;
}

.form {
  margin-bottom: 20px;
}

.field {
  margin-bottom: 20px;
}

.label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #374151;
  font-size: 14px;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 15px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}

.input.error {
  border-color: #ef4444;
}

.error-msg {
  display: block;
  margin-top: 6px;
  font-size: 13px;
  color: #ef4444;
  font-weight: 500;
}

.btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
}

.info {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #f59e0b;
  text-align: center;
  font-size: 14px;
  color: #92400e;
  font-weight: 600;
}

@media (prefers-color-scheme: dark) {
  body {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
  }

  .container {
    background: #1f2937;
  }

  h1 {
    color: #6ee7b7;
  }

  .label {
    color: #e5e7eb;
  }

  .input {
    background: #111827;
    border-color: #4b5563;
    color: #e5e7eb;
  }

  .input:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 0 3px rgba(110, 231, 183, 0.1);
  }

  .input.error {
    border-color: #f87171;
  }

  .error-msg {
    color: #f87171;
  }

  .info {
    background: linear-gradient(135deg, #92400e 0%, #b45309 100%);
    border-color: #f59e0b;
    color: #fef3c7;
  }
}`}
          />
        </div>

        {/* Key Takeaways */}
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
                  <Hash className="w-6 h-6 text-green-500" />
                  <h4 className="font-bold text-green-700 dark:text-green-300">Unique & Stable</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Generates unique IDs that are identical on server and client.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Server className="w-6 h-6 text-blue-500" />
                  <h4 className="font-bold text-blue-700 dark:text-blue-300">SSR Safe</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Prevents hydration mismatches in server-side rendered apps.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500" />
                  <h4 className="font-bold text-purple-700 dark:text-purple-300">Accessibility</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perfect for htmlFor, aria-describedby, aria-labelledby attributes.
                </p>
              </div>

              <div className="p-5 bg-white dark:bg-gray-900 rounded-xl border-2 border-red-300 dark:border-red-700">
                <div className="flex items-center gap-3 mb-3">
                  <XCircle className="w-6 h-6 text-red-500" />
                  <h4 className="font-bold text-red-700 dark:text-red-300">Not for Keys</h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Don't use for list keys - use your data's unique IDs instead!
                </p>
              </div>
            </div>

            <Alert className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20 border-cyan-300 dark:border-cyan-700">
              <Lightbulb className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <AlertTitle className="text-cyan-900 dark:text-cyan-100">SSR-Friendly Hook!</AlertTitle>
              <AlertDescription className="text-cyan-800 dark:text-cyan-200">
                useId is essential for server-side rendering. It ensures IDs match between server and client, preventing hydration errors!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
